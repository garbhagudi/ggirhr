import React from "react";
import Image from "next/image";
import Button from "components/ui/Button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import SectionShell from "components/ui/SectionShell";
import useFitCarousel from "components/ui/useFitCarousel";

const ACCENT = "#1DA8E1";
// Desktop card width. Cards never exceed this, but they shrink to fit a
// narrower container — a fixed 560px card left mobile showing a ~7% sliver
// of card one, and an inline width can't be overridden by a breakpoint.
const MAX_CARD_WIDTH = 560;
const CARD_GAP = 16;
const CARD_HEIGHT = 440;
const IMAGE_HEIGHT = 260;

type Course = {
  id: string;
  title?: string;
  slug?: string;
  courseImage?: { url?: string };
};

const Courses = ({ courses }: { courses?: Course[] }) => {
  const {
    trackRef,
    currentIndex,
    cardWidth,
    maxIndex,
    canGoNext,
    canGoPrev,
    goToNext,
    goToPrev,
  } = useFitCarousel({
    itemCount: courses?.length ?? 0,
    maxCardWidth: MAX_CARD_WIDTH,
    gap: CARD_GAP,
  });

  if (!courses || courses.length === 0) return null;

  // Progress-bar thumb: width is one "page" worth of the track, sliding
  // from the left edge to the right edge as currentIndex advances.
  const progressWidthPct = 100 / (maxIndex + 1);
  const progressLeftPct =
    (currentIndex / (maxIndex || 1)) * (100 - progressWidthPct);

  return (
    <SectionShell as="section" className="bg-[#D2EEF9] py-14 lg:py-20">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div className="text-black">
            {/* The `sm:` here used to be inverted — mobile got 46px and
                desktop shrank to text-4xl. */}
            <h1 className="text-[26px] leading-tight sm:text-4xl lg:text-[46px] lg:leading-[65px] font-bold">
              Courses and{" "}
              <span className="text-[#1DA8E1] font-bold">
                Programs
              </span>
            </h1>
            <p className="text-sm lg:text-[18px] leading-6 font-semibold">
              Check out our most popular courses below
            </p>
          </div>
          <Button
            href="/courses"
            variant="link"
            size="inline"
            className="!text-base lg:!text-[18px] !font-semibold whitespace-nowrap self-start sm:self-auto"
          >
            See All Courses
          </Button>
        </div>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + CARD_GAP)}px)`,
            }}
          >
            {courses.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0"
                style={{ width: `${cardWidth}px` }}
              >
                <div
                  className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col p-1 h-auto lg:h-[440px]"
                  style={{ minHeight: `${CARD_HEIGHT}px` }}
                >
                  <div
                    className="relative mx-auto flex-shrink-0"
                    style={{ width: `100%`, height: `${IMAGE_HEIGHT}px` }}
                  >
                    <Image
                      src={item?.courseImage?.url}
                      alt={item?.title}
                      fill
                      sizes={`(min-width: 1024px) ${MAX_CARD_WIDTH}px, 100vw`}
                      className="object-cover rounded-t-2xl"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between overflow-hidden leading-7">
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-2.5 text-sm text-[#1DA8E1]">
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
              <ChevronLeftIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </Button>
            <Button
              onClick={goToNext}
              disabled={!canGoNext}
              aria-label="Next courses"
              variant="primary"
              size="icon-sm"
              className="disabled:!opacity-40"
            >
              <ChevronRightIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

export default Courses;
