import React, { useState, useRef } from "react";
import Image from "next/image";
import Button from "components/ui/Button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  UsersIcon,
} from "@heroicons/react/solid";

const ACCENT = "#1DA8E1";
const CARD_WIDTH = 560;
const CARD_GAP = 16;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
const CARD_HEIGHT = 440;
const IMAGE_WIDTH = 540;
const IMAGE_HEIGHT = 260;
const RESIZE_DEBOUNCE_MS = 150;

const Courses = ({ Data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let debounceTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const containerWidth =
          trackRef.current?.parentElement?.clientWidth ?? 0;
        const visible = Math.max(
          1,
          Math.floor((containerWidth + CARD_GAP) / CARD_STEP),
        );
        setItemsPerView((prev) =>
          Math.floor(prev) === visible ? prev : visible,
        );
      }, RESIZE_DEBOUNCE_MS);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(debounceTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!Data || Data.length === 0) return null;

  const maxIndex = Math.max(0, Data.length - Math.floor(itemsPerView));
  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  const goToNext = () =>
    canGoNext && setCurrentIndex((i) => Math.min(i + 1, maxIndex));
  const goToPrev = () =>
    canGoPrev && setCurrentIndex((i) => Math.max(i - 1, 0));

  // Progress-bar thumb: width is one "page" worth of the track, sliding
  // from the left edge to the right edge as currentIndex advances.
  const progressWidthPct = 100 / (maxIndex + 1);
  const progressLeftPct =
    (currentIndex / (maxIndex || 1)) * (100 - progressWidthPct);

  return (
    <section className="bg-[rgba(210,238,249,1)] py-20 px-40">
      <div className="px-4 xl:px-0 mx-auto flex flex-col gap-7">
        <div className="flex items-center justify-between">
          <div className="text-black">
            <h1 className="text-[46px] leading-[65px] sm:text-4xl font-bold">
              Courses and{" "}
              <span className="text-[rgba(29,_168,_225,_1)] font-bold">
                Programs
              </span>
            </h1>
            <p className="text-[18px] leading-6 font-semibold">
              Check out our most popular courses below
            </p>
          </div>
          <Button
            href="/courses"
            variant="link"
            size="inline"
            className="!text-[18px] !font-semibold whitespace-nowrap"
          >
            See All Courses
          </Button>
        </div>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * CARD_STEP}px)` }}
          >
            {Data.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0"
                style={{ width: `${CARD_WIDTH}px` }}
              >
                <div
                  className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col p-1"
                  style={{ height: `${CARD_HEIGHT}px` }}
                >
                  <div
                    className="relative mx-auto flex-shrink-0"
                    style={{ width: `100%`, height: `${IMAGE_HEIGHT}px` }}
                  >
                    <Image
                      src={item?.courseImage?.url}
                      alt={item?.title}
                      fill
                      sizes={`${IMAGE_WIDTH}px`}
                      className="object-cover rounded-t-2xl"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between overflow-hidden leading-7">
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-2.5 text-sm text-[rgba(29,168,225,1)]">
                        <span className="flex items-center gap-1.5">
                          <ClockIcon
                            className="w-4 h-4"
                          />
                          5 days
                        </span>
                        <span className="flex items-center gap-1.5">
                          <UsersIcon
                            className="w-4 h-4"
                          />
                          2 to 3 enrollments
                        </span>
                      </div>
                      <h2 className="font-bold text-gray-900 text-xl">
                        {item?.title}
                      </h2>
                    </div>
                    <Button
                      href={`/courses/${item.slug}`}
                      variant="link"
                      size="inline"
                      className="!text-lg !font-medium self-start"
                    >
                      View Course
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative flex-1 h-1 rounded-full bg-gray-200">
            <div
              className="absolute top-0 h-1 rounded-full transition-all duration-300"
              style={{
                width: `${progressWidthPct}%`,
                left: `${progressLeftPct}%`,
                backgroundColor: ACCENT,
              }}
            />
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={goToPrev}
              disabled={!canGoPrev}
              aria-label="Previous courses"
              variant="outline"
              size="icon-sm"
              className="disabled:!opacity-40"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </Button>
            <Button
              onClick={goToNext}
              disabled={!canGoNext}
              aria-label="Next courses"
              variant="primary"
              size="icon-sm"
              className="disabled:!opacity-40"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
