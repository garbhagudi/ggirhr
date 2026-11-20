import { useEffect, useRef, useState } from "react";

/**
 * useFitCarousel
 *
 * The paging logic shared by the Courses and Voices carousels. Both size
 * cards to a design width on desktop and shrink them to fit once the
 * container is narrower than one card, so mobile shows exactly one whole
 * card instead of a slice.
 *
 * NOT used by Experts, whose carousel differs in kind: it derives its
 * visible count from `window.innerWidth` breakpoints rather than the
 * container, leaves the card width uncapped, starts at 0, wraps with
 * `% pageCount`, and auto-advances on a timer. Covering all three would
 * take a mode flag per difference and buy nothing.
 *
 * Two behaviours here are load-bearing and deliberately preserved:
 *
 * 1. `currentIndex` is NOT re-clamped when `itemsPerView` grows. Resizing
 *    narrow → wide can leave the index past the new `maxIndex`, which
 *    scrolls the track into empty space. Clamping it would be an
 *    improvement — and a visible change — so it stays out.
 * 2. The first measurement lands `debounceMs` after mount, because the
 *    priming call goes through the same debounce. Until then cards render
 *    at `maxCardWidth`. Measuring synchronously would remove a brief layout
 *    jump, which is again a visible change.
 */

export type FitCarouselParams = {
  itemCount: number;
  /** Design card width. Cards never exceed it, but shrink to fit below it. */
  maxCardWidth: number;
  gap?: number;
  debounceMs?: number;
};

export type FitCarousel = {
  /** Attach to the flex track; its parent is what gets measured. */
  trackRef: React.RefObject<HTMLDivElement>;
  currentIndex: number;
  itemsPerView: number;
  cardWidth: number;
  maxIndex: number;
  canGoNext: boolean;
  canGoPrev: boolean;
  goToNext: () => void;
  goToPrev: () => void;
  /** Width of the progress-bar thumb, as a percentage of the track. */
  progressWidthPct: number;
  /** Left offset of the thumb, as a percentage of the track. */
  progressLeftPct: number;
};

export function useFitCarousel({
  itemCount,
  maxCardWidth,
  gap = 16,
  debounceMs = 150,
}: FitCarouselParams): FitCarousel {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [cardWidth, setCardWidth] = useState(maxCardWidth);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardStep = maxCardWidth + gap;
    let debounceTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const containerWidth =
          trackRef.current?.parentElement?.clientWidth ?? 0;
        const visible = Math.max(
          1,
          Math.floor((containerWidth + gap) / cardStep),
        );
        const fluidWidth = (containerWidth - gap * (visible - 1)) / visible;
        setItemsPerView((prev) => (prev === visible ? prev : visible));
        setCardWidth(
          containerWidth > 0
            ? Math.min(maxCardWidth, fluidWidth)
            : maxCardWidth,
        );
      }, debounceMs);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(debounceTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, [maxCardWidth, gap, debounceMs]);

  const maxIndex = Math.max(0, itemCount - itemsPerView);
  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  const goToNext = () =>
    canGoNext && setCurrentIndex((i) => Math.min(i + 1, maxIndex));
  const goToPrev = () =>
    canGoPrev && setCurrentIndex((i) => Math.max(i - 1, 0));

  // Every consumer renders the same progress bar, so the geometry lives here
  // rather than being re-derived at each call site. `maxIndex || 1` guards the
  // single-page case, where the thumb fills the track and never moves.
  const progressWidthPct = 100 / (maxIndex + 1);
  const progressLeftPct =
    (currentIndex / (maxIndex || 1)) * (100 - progressWidthPct);

  return {
    trackRef,
    currentIndex,
    itemsPerView,
    cardWidth,
    maxIndex,
    canGoNext,
    canGoPrev,
    goToNext,
    goToPrev,
    progressWidthPct,
    progressLeftPct,
  };
}

export default useFitCarousel;
