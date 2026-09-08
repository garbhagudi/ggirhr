"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import SectionShell from "components/ui/SectionShell";

// Both rows come from the single Hygraph `AffilationAlumni` model, split by its
// `types` field in getServerSideProps — so they share one shape here.
type LogoItem = { id: string; name: string; image?: { url?: string } };

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block rounded-full bg-brandBlue px-6 py-2.5 text-xs sm:text-sm font-bold tracking-wide text-white shadow-sm">
    {children}
  </span>
);

function useMarquee(direction: "left" | "right", speed = 40) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  // Cached because reading `scrollWidth` forces a layout, and this used to be
  // read inside the rAF callback — twice per frame across the two tracks.
  // The item list is static, so it only changes when the track is resized.
  const halfWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      halfWidthRef.current = track.scrollWidth / 2;
    };
    measure();
    window.addEventListener("resize", measure);

    let lastTime = performance.now();
    let rafId = requestAnimationFrame(step);

    function step(now: number) {
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      if (!pausedRef.current) {
        const halfWidth = halfWidthRef.current;
        offsetRef.current += direction === "left" ? -speed * dt : speed * dt;
        if (halfWidth > 0) {
          if (offsetRef.current <= -halfWidth) offsetRef.current += halfWidth;
          if (offsetRef.current >= 0) offsetRef.current -= halfWidth;
        }
        track.style.transform = `translateX(${offsetRef.current}px)`;
      }
      rafId = requestAnimationFrame(step);
    }

    return () => {
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(rafId);
    };
  }, [direction, speed]);

  const nudge = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const halfWidth = halfWidthRef.current;
    const step = 180;
    offsetRef.current += dir === "left" ? -step : step;
    if (halfWidth > 0) {
      if (offsetRef.current <= -halfWidth) offsetRef.current += halfWidth;
      if (offsetRef.current >= 0) offsetRef.current -= halfWidth;
    }
    track.style.transform = `translateX(${offsetRef.current}px)`;
  };

  const setPaused = (value: boolean) => {
    pausedRef.current = value;
  };

  return { trackRef, nudge, setPaused };
}

const ArrowButton = ({
  direction,
  onClick,
  className = "",
}: {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
}) => (
  <button
    type="button"
    aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
    onClick={onClick}
    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brandBlue bg-white text-brandBlue transition-colors hover:bg-brandBlue hover:text-white ${className}`}
  >
    {direction === "left" ? (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    ) : (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    )}
  </button>
);

const AffiliationsAlumni = ({
  affiliations: affiliationItems = [],
  alumniCountries = [],
}: {
  affiliations?: LogoItem[];
  alumniCountries?: LogoItem[];
}) => {
  const affiliations = useMarquee("left", 35);
  const alumni = useMarquee("right", 35);

  // Nothing published in either group — render no section at all rather than an
  // empty white band, matching the guards in Courses and Blogs.
  if (affiliationItems.length === 0 && alumniCountries.length === 0)
    return null;

  return (
    <section className="bg-white py-14 lg:py-24">
      {/* Our Affiliations and Alliances — pill stays centered, unpadded; the
          logo row itself bleeds full width, unlike the rest of the section. */}
      {affiliationItems.length > 0 && (
        <>
          <div className="flex justify-center mb-8">
            <Pill>Our Affiliations and Alliances</Pill>
          </div>
          <div
            className="w-full overflow-hidden"
            onMouseEnter={() => affiliations.setPaused(true)}
            onMouseLeave={() => affiliations.setPaused(false)}
          >
            <div
              ref={affiliations.trackRef}
              className="flex w-max items-center gap-20 will-change-transform"
            >
              {[...affiliationItems, ...affiliationItems].map((item, i) => (
                /* The box keeps a fixed width/height and the logo fills it with
                   `object-contain`: the CMS logos range from 71x84 to 218x54, and
                   sizing the box from a logo's intrinsic dimensions would change
                   `scrollWidth` once the images decode — which useMarquee caches
                   once and never re-reads. See the note on `measure` below. */
                <div
                  key={`${item.id}-${i}`}
                  className="relative h-[70px] w-44 shrink-0 overflow-hidden"
                >
                  <Image
                    src={item.image.url}
                    alt={item.name}
                    fill
                    sizes="176px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <SectionShell>
        {alumniCountries.length > 0 && (
          <>
            <div className="flex justify-center mt-10 lg:mt-16 mb-8">
              <Pill>Alumni Countries</Pill>
            </div>
            <div className="relative">
              <ArrowButton
                direction="left"
                onClick={() => alumni.nudge("left")}
                className="hidden lg:flex absolute -left-14 top-1/2 -translate-y-1/2"
              />
              <div
                className="overflow-hidden"
                onMouseEnter={() => alumni.setPaused(true)}
                onMouseLeave={() => alumni.setPaused(false)}
              >
                <div
                  ref={alumni.trackRef}
                  className="flex w-max items-center gap-3 lg:gap-6 will-change-transform"
                >
                  {[...alumniCountries, ...alumniCountries].map(
                    (country, i) => (
                      /* `relative` is load-bearing: without it `fill` would resolve to
                   the ArrowButton wrapper above (the nearest positioned ancestor)
                   and stack every flag across the whole row — and because that
                   ancestor exists, Next emits no warning about it. */
                      <div
                        key={`${country.id}-${i}`}
                        className="relative h-16 w-16 sm:h-28 sm:w-28 lg:h-32 lg:w-32 shrink-0 overflow-hidden rounded-full border-2 border-brandBlue bg-gray-100"
                        title={country.name}
                      >
                        <Image
                          src={country.image.url}
                          alt={`${country.name} flag`}
                          fill
                          sizes="(min-width: 1024px) 128px, (min-width: 640px) 112px, 64px"
                          className="object-cover"
                        />
                      </div>
                    ),
                  )}
                </div>
              </div>
              <ArrowButton
                direction="right"
                onClick={() => alumni.nudge("right")}
                className="hidden lg:flex absolute -right-14 top-1/2 -translate-y-1/2"
              />
            </div>
          </>
        )}
      </SectionShell>
    </section>
  );
};

export default AffiliationsAlumni;
