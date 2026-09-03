import React, {
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Button from './Button';

export type CarouselItem = {
  id: string | number;
  content: React.ReactNode;
};

export type InfiniteCarouselVariant = 'auto' | 'auto-controls';

export type InfiniteCarouselProps = {
  items: CarouselItem[];
  variant?: InfiniteCarouselVariant;
  /** Direction the strip scrolls toward. 'left' = right-to-left motion. */
  direction?: 'left' | 'right';
  /** Scroll speed in pixels/second. */
  speed?: number;
  /** Pause the auto-scroll while the pointer is over the strip. */
  pauseOnHover?: boolean;
  /** Gap between items, in pixels. */
  gap?: number;
  className?: string;
  itemClassName?: string;
};

const cx = (...classes: Array<string | false | undefined>) =>
  classes.filter(Boolean).join(' ');

// After a manual "next" click, briefly hold off auto-advance so the nudge
// doesn't feel immediately fought by the loop.
const RESUME_DELAY_MS = 1200;

export const InfiniteCarousel = forwardRef<HTMLDivElement, InfiniteCarouselProps>(
  (
    {
      items,
      variant = 'auto',
      direction = 'left',
      speed = 40,
      pauseOnHover = true,
      gap = 32,
      className,
      itemClassName,
    },
    ref
  ) => {
    const viewportRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const setWidthRef = useRef(0); // px width of ONE full item-set
    const offsetRef = useRef(0);
    const pausedRef = useRef(false);
    const resumeAtRef = useRef(0);
    const rafRef = useRef<number>();
    const lastTsRef = useRef<number>();

    const [reducedMotion, setReducedMotion] = useState(false);
    const [ready, setReady] = useState(false); // avoids a pre-measure flash/jump

    // Duplicate once — track renders [...items, ...items] so the loop can
    // subtract exactly one set's width and land on a pixel-identical frame.
    const loopItems = useMemo(() => [...items, ...items], [items]);

    const dirSign = direction === 'left' ? 1 : -1;

    useEffect(() => {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mq.matches);
      const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    }, []);

    // Measure one item-set's width whenever items/gap change or the
    // viewport resizes (variable-width logos make this unavoidable).
    useEffect(() => {
      const track = trackRef.current;
      if (!track) return;

      const measure = () => {
        const full = track.scrollWidth;
        setWidthRef.current = full / 2; // track holds two sets
        setReady(true);
      };

      measure();
      const ro = new ResizeObserver(measure);
      ro.observe(track);
      return () => ro.disconnect();
    }, [items, gap]);

    // Main animation loop.
    useEffect(() => {
      if (reducedMotion || !ready) return;

      const step = (ts: number) => {
        if (lastTsRef.current == null) lastTsRef.current = ts;
        const dt = (ts - lastTsRef.current) / 1000;
        lastTsRef.current = ts;

        const isHoldingForResume = ts < resumeAtRef.current;
        if (!pausedRef.current && !isHoldingForResume && setWidthRef.current > 0) {
          offsetRef.current += speed * dt * dirSign;

          // Wrap in either direction — imperceptible since the duplicate
          // set is pixel-identical to the first.
          const setWidth = setWidthRef.current;
          if (offsetRef.current >= setWidth) offsetRef.current -= setWidth;
          if (offsetRef.current < 0) offsetRef.current += setWidth;

          if (trackRef.current) {
            trackRef.current.style.transform = `translateX(${-offsetRef.current}px)`;
          }
        }

        rafRef.current = requestAnimationFrame(step);
      };

      rafRef.current = requestAnimationFrame(step);
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        lastTsRef.current = undefined;
      };
    }, [reducedMotion, ready, speed, dirSign]);

    const handleNext = () => {
      const track = trackRef.current;
      const setWidth = setWidthRef.current;
      if (!track || setWidth <= 0) return;

      // Advance by the next single item's width (falls back to an even
      // slice of the set width if measurement of an individual item fails).
      const firstItemEl = track.firstElementChild as HTMLElement | null;
      const step = firstItemEl?.getBoundingClientRect().width
        ? firstItemEl.getBoundingClientRect().width + gap
        : setWidth / items.length;

      offsetRef.current += step * dirSign;
      if (offsetRef.current >= setWidth) offsetRef.current -= setWidth;
      if (offsetRef.current < 0) offsetRef.current += setWidth;

      resumeAtRef.current = performance.now() + RESUME_DELAY_MS;
    };

    const handlePointerEnter = () => {
      if (pauseOnHover) pausedRef.current = true;
    };
    const handlePointerLeave = () => {
      if (pauseOnHover) pausedRef.current = false;
    };

    return (
      <div
        ref={ref}
        className={cx('flex items-center gap-4', className)}
      >
        <div
          ref={viewportRef}
          className='relative flex-1 overflow-hidden'
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
          <div
            ref={trackRef}
            className={cx(
              'flex items-center will-change-transform',
              reducedMotion && 'flex-wrap justify-center'
            )}
            style={{ gap: `${gap}px` }}
          >
            {(reducedMotion ? items : loopItems).map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className={cx('flex shrink-0 items-center justify-center', itemClassName)}
                aria-hidden={!reducedMotion && index >= items.length}
              >
                {item.content}
              </div>
            ))}
          </div>
        </div>

        {variant === 'auto-controls' && (
          <Button
            variant='ghost'
            size='sm'
            aria-label='Scroll to next item'
            onClick={handleNext}
            className='shrink-0 !px-3'
          >
            <svg
              className='h-4 w-4'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 5l7 7-7 7'
              />
            </svg>
          </Button>
        )}
      </div>
    );
  }
);

InfiniteCarousel.displayName = 'InfiniteCarousel';

export default InfiniteCarousel;
