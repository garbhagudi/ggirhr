import React from "react";
import Image from "next/image";
import Button from "components/ui/Button";
import Chip from "components/ui/Chip";
import QuoteIcon from "components/ui/QuoteIcon";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { FaStar } from "react-icons/fa";
import SectionShell from "components/ui/SectionShell";
import useFitCarousel from "components/ui/useFitCarousel";

// Design card width; cards shrink below it to fit a narrow container.
const MAX_CARD_WIDTH = 360;
const CARD_GAP = 16;

const AVATAR_COLORS = ["#1DA8E1", "#4A90E2", "#F5A623", "#50B1CD"];

type Voice = {
  name: string;
  quote: string;
};

const VOICES: Voice[] = [
  {
    name: "Adriane Ddamulira",
    quote:
      "It’s been a great experience learning at Garbhagudi IVF Centre KalyaNagar branch with great mentorship of Dr Aparna N and team. Thank you for advancing ...",
  },
  {
    name: "Gasthony Alobo",
    quote:
      "NRF program at GGIRHR is well structured to help practicing gynecologists get deep understanding of infertility management without leaving their work place ...",
  },
  {
    name: "kunal kuhikar",
    quote:
      "My name is Kunal Kuhikar, and I am pursuing my Master’s in Molecular and Human Genetics with specialization in Clinical Embryology ...",
  },
  {
    name: "Shivani Rao",
    quote:
      "Finished 3 months CFS course at GGIRHR. I found the program very focussed on building core understanding and concepts around assisted reprexposure to",
  },
  {
    name: "Priya Sharma",
    quote:
      "The hands-on training and mentorship at GGIRHR gave me the confidence to handle complex fertility cases independently within a few months …",
  },
];

const Voices = () => {
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
    itemCount: VOICES.length,
    maxCardWidth: MAX_CARD_WIDTH,
    gap: CARD_GAP,
  });


  // Rendered twice: in the heading row on desktop, and in the progress row on
  // mobile, where the design moves the arrows below the card.
  const navButtons = (
    <>
      <Button
        onClick={goToPrev}
        disabled={!canGoPrev}
        aria-label="Previous testimonials"
        variant="ghost"
        size="icon-sm"
        className="!bg-white/10 !text-white hover:!bg-white/20 disabled:!opacity-40"
      >
        <ChevronLeftIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
      </Button>
      <Button
        onClick={goToNext}
        disabled={!canGoNext}
        aria-label="Next testimonials"
        variant="light"
        size="icon-sm"
        className="disabled:!opacity-40"
      >
        <ChevronRightIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
      </Button>
    </>
  );

  return (
    <SectionShell
      as="section"
      className="relative overflow-hidden bg-[#1A97CA] py-14 lg:py-20"
    >
      <div className="mx-auto flex flex-col">
        <Chip
          variant="blue"
          size="sm"
          className="uppercase tracking-widest !bg-[#FFFFFF1A] text-white font-bold"
        >
          Testimonial
        </Chip>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mt-4 mb-5 sm:mt-6 sm:mb-8 lg:mb-10">
          <h1 className="text-white text-[23px] sm:text-[36px] lg:text-[46px] leading-tight lg:leading-[65px] lg:mx-6">
            Fellows and <span className="font-bold">Student Voices</span>
          </h1>
          <div className="hidden sm:flex items-center gap-3">{navButtons}</div>
        </div>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + CARD_GAP)}px)`,
            }}
          >
            {VOICES.map((voice, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={voice.name}
                  className="flex-shrink-0"
                  style={{ width: `${cardWidth}px` }}
                >
                  <div
                    className={`relative rounded-xl sm:rounded-2xl px-5 py-5 sm:py-6 flex flex-col justify-between overflow-hidden min-h-[254px] sm:min-h-[290px] ${
                      isActive
                        ? "bg-white shadow-[0px_3.72px_41px_rgba(0,0,0,0.09)] sm:shadow-md sm:shadow-[#00000017]"
                        : "bg-[#FFFFFF1A]"
                    }`}
                  >
                    <QuoteIcon
                      size={31}
                      color={isActive ? "#4AC9FD" : "#FFFFFF6B"}
                      className={`absolute top-5 right-5`}
                      aria-hidden="true"
                    />

                    <div className="flex flex-col gap-4 pt-6">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <FaStar
                            key={starIndex}
                            className="w-3.5 h-3.5 text-[#FDD663]"
                          />
                        ))}
                      </div>
                      <p
                        className={`text-[13px] leading-5 text-justify sm:text-base sm:leading-6 sm:text-left ${
                          isActive ? "text-gray-900" : "text-[#DEDEDE]"
                        }`}
                      >
                        {voice.quote}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 mt-4">
                      <div
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-semibold text-xl shrink-0"
                        style={{
                          backgroundColor:
                            AVATAR_COLORS[index % AVATAR_COLORS.length],
                        }}
                      >
                        {voice.name.charAt(0)}
                      </div>
                      <div className="flex flex-col gap-1">
                        <span
                          className={`font-semibold text-[15px] leading-5 sm:text-xl sm:leading-7 ${
                            isActive ? "text-black" : "text-white"
                          }`}
                        >
                          {voice.name}
                        </span>
                        <Image
                          src="/icons/google-logo.svg"
                          alt="Google"
                          width={61}
                          height={21}
                          className={`w-[49px] h-auto sm:w-[61px] ${
                            isActive ? "" : "brightness-0 invert"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex sm:hidden items-center gap-5 mt-4">
          <div className="relative flex-1 h-[3px] rounded-full bg-[#89C7E0]">
            <div
              className="absolute top-0 h-[3px] rounded-full bg-white transition-all duration-300"
              style={{
                width: `${progressWidthPct}%`,
                left: `${progressLeftPct}%`,
              }}
            />
          </div>
          <div className="flex items-center gap-3">{navButtons}</div>
        </div>
      </div>
    </SectionShell>
  );
};

export default Voices;
