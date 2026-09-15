import React from "react";
import Image from "next/image";
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";
import Button from "components/ui/Button";
import Chip from "components/ui/Chip";
import Glow from "components/ui/Glow";
import SectionShell from "components/ui/SectionShell";
import useFitCarousel from "components/ui/useFitCarousel";

type Alliance = { id: number; name: string; logo: string };
const ALLIANCES: Alliance[] = [
  {
    id: 1,
    name: "IMA - Academy of Medical Specialities",
    logo: "https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegta2901m806pr0hy0gdjz",
  },
  {
    id: 2,
    name: "Rajiv Gandhi University of Health Sciences",
    logo: "https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegtkhp01kl06pngex8ubkk",
  },
  {
    id: 3,
    name: "NITTE (Deemed to be University)",
    logo: "https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegta2s01mc06prx0b64ijo",
  },
  {
    id: 4,
    name: "Bangalore Bio Innovation Centre",
    logo: "https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegta1q01m406prg8y1xt5o",
  },
];

const MAX_CARD_WIDTH = 359;
const CARD_GAP = 30;

const AllianceCard = ({
  alliance,
  isActive,
}: {
  alliance: Alliance;
  isActive: boolean;
}) => (
  <div
    className={`flex flex-col items-center justify-center gap-6 rounded-[20px] px-6 py-10 ${
      isActive
        ? "min-h-[397px] bg-white"
        : "min-h-[313px] bg-[#FFFFFF1A] backdrop-blur-[24px]"
    }`}
  >
    <div
      className={`relative shrink-0 overflow-hidden rounded-full ${
        isActive
          ? "h-[183px] w-[183px] bg-white"
          : "h-[131px] w-[131px] bg-white/20 backdrop-blur-[52px]"
      }`}
    >
      <Image
        src={alliance.logo}
        alt={alliance.name}
        fill
        sizes={isActive ? "183px" : "131px"}
        className="object-contain p-2"
      />
    </div>
    <h3
      className={`text-center text-base font-semibold leading-5 sm:text-xl sm:leading-6 ${
        isActive ? "text-[#374151]" : "text-white"
      }`}
    >
      {alliance.name}
    </h3>
  </div>
);

const Alliances = () => {
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
    itemCount: ALLIANCES.length,
    maxCardWidth: MAX_CARD_WIDTH,
    gap: CARD_GAP,
  });

  const navButtons = (
    <>
      <Button
        onClick={goToPrev}
        disabled={!canGoPrev}
        aria-label="Previous alliances"
        variant="ghost"
        size="icon-sm"
        className="!bg-white/10 !text-white hover:!bg-white/20 disabled:!opacity-40"
      >
        <ArrowNarrowLeftIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
      </Button>
      <Button
        onClick={goToNext}
        disabled={!canGoNext}
        aria-label="Next alliances"
        variant="light"
        size="icon-sm"
        className="disabled:!opacity-40"
      >
        <ArrowNarrowRightIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
      </Button>
    </>
  );

  return (
    <section className="relative overflow-hidden bg-[#1A97CA] py-14 lg:py-20">
      <Glow className="-z-0 w-[320px] h-[320px] sm:w-[700px] sm:h-[700px] bg-[rgba(47,126,188,0.65)] blur-[150px] left-1/2 -translate-x-1/2 top-1/4" />

      <div className="relative lg:flex lg:items-center lg:gap-10">
        {/* Copy column. `lg:pr-0` drops SectionShell's right gutter so the card
            track can start closer and still bleed off the right edge. */}
        <SectionShell className="lg:w-[570px] lg:shrink-0 lg:pr-0">
          <Chip
            variant="blue"
            size="sm"
            className="uppercase tracking-widest !bg-[#FFFFFF1A] text-white font-bold"
          >
            Alliance Partner
          </Chip>
          <h2 className="text-white text-[23px] sm:text-[36px] lg:text-[46px] leading-tight lg:leading-[50px] mt-4 sm:mt-6">
            Our <span className="font-bold">Alliances</span>
          </h2>
          <p className="text-[#DEDEDE] text-[13px] leading-5 text-justify font-semibold mt-3 sm:mt-4 sm:text-base sm:leading-6 lg:text-lg lg:leading-7">
            Our affiliations with leading medical institutions and universities
            strengthen our programs, support innovation, and ensure high
            standards in healthcare education and research.
          </p>
          <div className="hidden lg:flex items-center gap-3 mt-10">
            {navButtons}
          </div>
        </SectionShell>
        <div className="flex-1 overflow-hidden mt-8 pl-5 sm:pl-6 lg:mt-0 lg:pl-0">
          <div>
            <div
              ref={trackRef}
              className="flex items-center gap-[30px] transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (cardWidth + CARD_GAP)}px)`,
              }}
            >
              {ALLIANCES.map((alliance, index) => (
                <div
                  key={alliance.id}
                  className="flex-shrink-0"
                  style={{ width: `${cardWidth}px` }}
                >
                  <AllianceCard
                    alliance={alliance}
                    isActive={index === currentIndex}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SectionShell className="relative flex lg:hidden items-center gap-5 mt-4">
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
      </SectionShell>
    </section>
  );
};

export default Alliances;
