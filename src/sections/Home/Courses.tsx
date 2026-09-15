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
const MAX_CARD_WIDTH = 560;
const CARD_GAP = 16;
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
    canGoNext,
    canGoPrev,
    goToNext,
    goToPrev,
    progressWidthPct,
    progressLeftPct,
  } = useFitCarousel({
    itemCount: courses?.length ?? 0,
    maxCardWidth: MAX_CARD_WIDTH,
    gap: CARD_GAP,
  });

  if (!courses || courses.length === 0) return null;


  return (
    <SectionShell as="section" className="bg-[#D2EEF9] py-14 lg:py-20">
      <div className="flex flex-col gap-5 sm:gap-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div className="text-black">
            <h1 className="text-[23px] leading-tight sm:text-4xl lg:text-[46px] lg:leading-[65px] font-bold">
              Courses and{" "}
              <span className="text-[#1DA8E1] font-bold">
                Programs
              </span>
            </h1>
            <p className="text-[13px] sm:text-sm lg:text-[18px] leading-6 font-semibold">
              Check out our most popular courses below
            </p>
          </div>
          <Button
            href="/courses"
            variant="link"
            size="inline"
            className="hidden sm:inline-flex !text-base lg:!text-[18px] !font-semibold whitespace-nowrap self-start sm:self-auto"
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
                  className="bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden flex flex-col p-2 sm:p-1 h-auto sm:min-h-[440px] lg:h-[440px]"
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
                      className="object-cover rounded-[10px] sm:rounded-t-2xl sm:rounded-b-none"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between overflow-hidden leading-7">
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-[9px] sm:gap-2.5 text-xs sm:text-sm text-[#1DA8E1]">
                        <span className="flex items-center gap-1.5">
                          <ClockIcon
                            className="w-4 h-4"
                          />
                          5 days
                        </span>
                        <span className="flex items-center gap-1.5 border-l sm:border-l-0 border-[#1DA8E1]/40 pl-[9px] sm:pl-0">
                          <UsersIcon
                            className="w-4 h-4"
                          />
                          2 to 3 enrollments
                        </span>
                      </div>
                      <h2 className="text-[15px] leading-[18px] font-normal text-black sm:text-xl sm:font-bold sm:text-gray-900">
                        {item?.title}
                      </h2>
                    </div>
                    <Button
                      href={`/courses/${item.slug}`}
                      variant="link"
                      size="inline"
                      className="!text-[13px] !leading-5 sm:!text-lg !font-semibold sm:!font-medium self-start"
                    >
                      View Course
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-5 sm:gap-6">
          <div className="relative flex-1 h-[3px] sm:h-1 rounded-full bg-gray-200">
            <div
              className="absolute top-0 h-[3px] sm:h-1 rounded-full transition-all duration-300"
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

        <div className="flex justify-center sm:hidden">
          <Button
            href="/courses"
            variant="link"
            size="inline"
            className="!text-[13px] !leading-5 !font-semibold"
          >
            See All Courses
          </Button>
        </div>
      </div>
    </SectionShell>
  );
};

export default Courses;
