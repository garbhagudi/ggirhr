import { useEffect, useRef, useState } from "react";

/**
 * useAutoCarousel
 *
 * The paging logic shared by the Experts and Faculty carousels. Both derive
 * their visible count from `window.innerWidth` breakpoints, leave the card
 * width uncapped, and advance on a timer that pauses on hover.
 *
 * Sibling to `useFitCarousel`, NOT a replacement for it: that hook derives
 * `itemsPerView` from the container rather than the viewport, caps cards at a
 * design width, pages on arrow clicks, and exposes no `setCurrentIndex` — which
 * the dots here need. Its docblock spells out the same split from the other side.
 *
 * Only the paging is shared. The two cards differ in inset, panel treatment,
 * glow and social icon, and folding those together would take a theme flag per
 * difference — so each section keeps its own JSX.
 *
 * Two behaviours are preserved deliberately, matching `useFitCarousel`:
 *
 * 1. `cardWidth` starts at `0`, so cards have no width until the first
 *    measurement lands `debounceMs` after mount (the priming call goes through
 *    the same debounce). Measuring synchronously would remove a brief layout
 *    jump — a visible change.
 * 2. `currentIndex` is NOT re-clamped when `itemsPerView` grows. Resizing
 *    narrow -> wide can leave the index past the new `maxIndex`, scrolling the
 *    track into empty space. Clamping would be an improvement, and a visible
 *    change, so it stays out.
 *
 * The effects below list `gap`/`debounceMs`/`autoAdvanceMs` as dependencies,
 * which assumes callers pass stable values — both of today's pass module-level
 * consts. A caller passing a freshly computed value each render would
 * re-register the resize listener and restart the timer every time.
 */

export type AutoCarouselParams = {
  itemCount: number;
  /** Must match the track's rendered gap; the caller translates by `cardWidth + gap`. */
  gap: number;
  autoAdvanceMs?: number;
  debounceMs?: number;
};

export type AutoCarousel = {
  /** Attach to the flex track; its parent is what gets measured. */
  trackRef: React.RefObject<HTMLDivElement>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  itemsPerView: number;
  cardWidth: number;
  pageCount: number;
  setPaused: React.Dispatch<React.SetStateAction<boolean>>;
};

export function useAutoCarousel({
  itemCount,
  gap,
  autoAdvanceMs = 3500,
  debounceMs = 150,
}: AutoCarouselParams): AutoCarousel {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [cardWidth, setCardWidth] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let debounceTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const viewportWidth = window.innerWidth;
        const visible = viewportWidth < 640 ? 1 : viewportWidth < 1024 ? 2 : 3;
        const containerWidth =
          trackRef.current?.parentElement?.clientWidth ?? 0;
        setItemsPerView((prev) => (prev === visible ? prev : visible));
        setCardWidth((containerWidth - gap * (visible - 1)) / visible);
      }, debounceMs);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(debounceTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, [gap, debounceMs]);

  const maxIndex = itemCount ? Math.max(0, itemCount - itemsPerView) : 0;
  const pageCount = maxIndex + 1;

  useEffect(() => {
    if (paused || pageCount <= 1) return;
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % pageCount);
    }, autoAdvanceMs);
    return () => clearInterval(id);
  }, [paused, pageCount, autoAdvanceMs]);

  return {
    trackRef,
    currentIndex,
    setCurrentIndex,
    itemsPerView,
    cardWidth,
    pageCount,
    setPaused,
  };
}

export default useAutoCarousel;
