"use client";
import React, { useEffect, useRef } from "react";
import SectionShell from "components/ui/SectionShell";

type LogoItem = { id: string; name: string };
type CountryItem = { id: string; name: string; flag: string };

// TODO: replace with real logo assets (upload to Hygraph or public/icons and
// swap the placeholder box below for an <Image src={item.logo} .../>).
const AFFILIATIONS: LogoItem[] = [
  { id: "bbc", name: "Bangalore Bioinnovation Centre" },
  { id: "gcu", name: "Garden City University" },
  { id: "jain", name: "JAIN (Deemed-to-be University)" },
  { id: "jnc", name: "Jyoti Nivas College Autonomous" },
  { id: "mlac", name: "mLAC" },
  { id: "nu", name: "Nitte University" },
];

const ALUMNI_COUNTRIES: CountryItem[] = [
  { id: "bd", name: "Bangladesh", flag: "/icons/flags/bangladesh.png" },
  { id: "in", name: "India", flag: "/icons/flags/india.png" },
  { id: "ke", name: "Kenya", flag: "/icons/flags/kenya.png" },
  { id: "mv", name: "Maldives", flag: "/icons/flags/maldives.png" },
  { id: "np", name: "Nepal", flag: "/icons/flags/nepal.png" },
  { id: "rw", name: "Rwanda", flag: "/icons/flags/rwanda.png" },
  { id: "sa", name: "Saudi Arabia", flag: "/icons/flags/saudi-arabia.png" },
  { id: "so", name: "Somalia", flag: "/icons/flags/somalia.png" },
];

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

const AffiliationsAlumni = () => {
  const affiliations = useMarquee("left", 35);
  const alumni = useMarquee("right", 35);

  return (
    <section className="bg-white py-14 lg:py-24">
      {/* Our Affiliations and Alliances — pill stays centered, unpadded; the
          logo row itself bleeds full width, unlike the rest of the section. */}
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
          {[...AFFILIATIONS, ...AFFILIATIONS].map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="flex h-[70px] w-44 shrink-0 items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 px-3 grayscale opacity-70 transition-opacity hover:opacity-100"
            >
              <span className="text-center text-[11px] font-semibold leading-tight text-gray-500">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <SectionShell>
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
              {[...ALUMNI_COUNTRIES, ...ALUMNI_COUNTRIES].map((country, i) => (
                <div
                  key={`${country.id}-${i}`}
                  className="flex h-16 w-16 sm:h-28 sm:w-28 lg:h-32 lg:w-32 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-brandBlue bg-gray-100"
                  title={country.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <ArrowButton
            direction="right"
            onClick={() => alumni.nudge("right")}
            className="hidden lg:flex absolute -right-14 top-1/2 -translate-y-1/2"
          />
        </div>
      </SectionShell>
    </section>
  );
};

export default AffiliationsAlumni;
