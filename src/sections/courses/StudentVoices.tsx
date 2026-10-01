import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Button from "components/ui/Button";
import Chip from "components/ui/Chip";
import QuoteIcon from "components/ui/QuoteIcon";
import RibbonWave from "components/ui/RibbonWave";
import SectionShell from "components/ui/SectionShell";
import useFitCarousel from "components/ui/useFitCarousel";

// Figma Frame 2131330128: 360×280 card on desktop; shrinks to fit on mobile.
const MAX_CARD_WIDTH = 360;
const CARD_GAP = 16;

const AVATAR_COLORS = ["#1DA8E1", "#4A90E2", "#F5A623", "#50B1CD"];

type Voice = { name: string; quote: string };

// Google reviews from GGIRHR students (same quotes as the home page).
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

const StudentVoices = () => {
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

  // `mobile` swaps the prev arrow to the mock's grey disc below the track.
  const navButtons = (mobile: boolean) => (
    <>
      <Button
        onClick={goToPrev}
        disabled={!canGoPrev}
        aria-label="Previous testimonials"
        variant="ghost"
        size="icon-sm"
        className={
          mobile
            ? "!bg-[#E5E5E5] !text-black disabled:!opacity-40"
            : "border border-[#1DA8E1] !text-[#1DA8E1] disabled:!opacity-40"
        }
      >
        <ChevronLeftIcon className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
      </Button>
      <Button
        onClick={goToNext}
        disabled={!canGoNext}
        aria-label="Next testimonials"
        variant="primary"
        size="icon-sm"
        className="!shadow-none disabled:!opacity-40"
      >
        <ChevronRightIcon className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
      </Button>
    </>
  );

  return (
    <SectionShell
      as="section"
      className="relative overflow-hidden bg-white py-14 font-primary lg:py-20"
    >
      <RibbonWave
        color="#A5DCF3"
        width={170}
        height={68}
        className="absolute left-1/2 top-6 w-[90px] -translate-x-1/2 lg:top-10 lg:w-[170px]"
      />

      <div className="relative z-10 flex flex-col">
        <Chip variant="pink" className="uppercase">
          Testimonial
        </Chip>
        <div className="mb-5 mt-3 flex items-center justify-between gap-4 lg:mb-8 lg:mt-4">
          <h2 className="text-left text-[23px] font-normal leading-tight text-black lg:text-[46px] lg:leading-[50px]">
            Student <span className="font-bold text-primaryBlue">Voices</span>
          </h2>
          <div className="hidden items-center gap-3 sm:flex">{navButtons(false)}</div>
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
                    className={`flex min-h-[323px] flex-col justify-between rounded-xl px-5 pb-5 pt-8 lg:min-h-[280px] lg:rounded-[20px] lg:px-[22px] ${
                      isActive
                        ? "bg-[#1DA8E1] shadow-[0_4px_44px_rgba(0,0,0,0.05)]"
                        : "border border-[#C2C2C2] bg-white"
                    }`}
                  >
                    <div>
                      <QuoteIcon
                        size={43}
                        color={isActive ? "#9EDFF3" : "#4AC9FD"}
                        aria-hidden="true"
                      />
                      <p
                        className={`mt-4 text-justify text-base font-semibold leading-6 lg:text-left lg:font-normal ${
                          isActive ? "text-[#DEDEDE]" : "text-[#374151]"
                        }`}
                      >
                        {voice.quote}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-[7px] lg:gap-[11px]">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white text-lg font-semibold text-white lg:h-[47px] lg:w-[47px]"
                        style={{
                          backgroundColor:
                            AVATAR_COLORS[index % AVATAR_COLORS.length],
                        }}
                      >
                        {voice.name.charAt(0)}
                      </div>
                      <span
                        className={`text-[15px] font-semibold leading-5 lg:text-[20px] lg:leading-7 ${
                          isActive ? "text-white" : "text-[#1DA8E1]"
                        }`}
                      >
                        {voice.name}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex items-center gap-5 sm:hidden">
          <div className="relative h-[3px] flex-1 rounded-full bg-[#D9D9D9]">
            <div
              className="absolute top-0 h-[3px] rounded-full bg-[#1DA8E1] transition-all duration-300"
              style={{
                width: `${progressWidthPct}%`,
                left: `${progressLeftPct}%`,
              }}
            />
          </div>
          <div className="flex items-center gap-3">{navButtons(true)}</div>
        </div>
      </div>
    </SectionShell>
  );
};

export default StudentVoices;
