import React from "react";
import Image from "next/image";
import Chip from "components/ui/Chip";
import Glow from "components/ui/Glow";
import RibbonWave from "components/ui/RibbonWave";
import SectionShell from "components/ui/SectionShell";

// Figma exports a portrait/framed pair for desktop and landscape crops for mobile.
const MISSION_LAB = "/images/contact/mission-lab.png";
const MISSION_SIGNAGE = "/images/contact/mission-signage.png";
const MISSION_LAB_MOBILE = "/images/contact/mission-lab-mobile.png";
const MISSION_SIGNAGE_MOBILE = "/images/contact/mission-signage-mobile.png";

const LAB_ALT = "Embryologists at work in the GGIRHR laboratory";
const CENTRE_ALT =
  "Signage at the GarbhaGudi Institute of Reproductive Health and Research";

const MISSION_TEXT =
  "“To provide learners with a specialized reproductive health and infertility education of exceptional quality and prepare every individual to serve the underserved. Special attention is directed to teaching and research activities, including CME programs and initiatives. We also strive to empower doctors and other medical professionals to deliver the highest quality patient care and prepare the next generation of skilled clinical and scientific leaders.”";

const DesktopImages = () => (
  <div className="relative hidden aspect-[509/456] w-[45%] max-w-[509px] shrink-0 sm:block">
    <div className="absolute left-0 top-0 h-full w-[79.8%] overflow-hidden rounded-[20px]">
      <Image
        src={MISSION_LAB}
        alt={LAB_ALT}
        fill
        sizes="(min-width: 640px) 36vw, 0px"
        className="object-cover"
      />
    </div>
    <div className="absolute left-[45.8%] top-[16.7%] aspect-[276/304] w-[54.2%] rounded-[20px] bg-white p-[7px]">
      <div className="relative h-full overflow-hidden rounded-[15px]">
        <Image
          src={MISSION_SIGNAGE}
          alt={CENTRE_ALT}
          fill
          sizes="(min-width: 640px) 25vw, 0px"
          className="object-cover"
        />
      </div>
    </div>
  </div>
);

const MobileImages = () => (
  <div className="grid grid-cols-1 gap-2.5 sm:hidden">
    <div className="relative aspect-[335/248] overflow-hidden rounded-xl">
      <Image
        src={MISSION_LAB_MOBILE}
        alt={LAB_ALT}
        fill
        sizes="(min-width: 640px) 0px, 100vw"
        className="object-cover"
      />
    </div>
    <div className="relative aspect-[335/182] overflow-hidden rounded-xl">
      <Image
        src={MISSION_SIGNAGE_MOBILE}
        alt={CENTRE_ALT}
        fill
        sizes="(min-width: 640px) 0px, 100vw"
        className="object-cover"
      />
    </div>
  </div>
);

const Mission = () => (
  <SectionShell
    as="section"
    id="mission"
    className="relative overflow-hidden bg-[#D2EEF9] py-12 scroll-mt-24 sm:py-[100px]"
  >
    <Glow className="-left-[101px] -top-[121px] h-[454px] w-[454px] bg-[rgba(142,230,255,0.29)] blur-[102px]" />
    <RibbonWave
      color="#FFFFFF"
      width={214}
      height={84}
      className="absolute right-[18px] top-[7px] w-[77px] rotate-12 -scale-x-100 sm:right-[95px] sm:top-12 sm:w-[214px] sm:rotate-[8.58deg] sm:scale-x-100"
    />

    <div className="relative z-10">
      <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:gap-[120px]">
        <DesktopImages />
        <MobileImages />

        <div className="flex flex-col gap-[26px] sm:max-w-[501px] sm:gap-6">
          <div className="flex flex-col gap-3 sm:gap-[22px]">
            <Chip variant="pink" className="uppercase">
              Mission
            </Chip>
            <h2 className="text-[23px] font-normal leading-tight text-black sm:text-[46px] sm:leading-[50px]">
              GGIRHR&apos;s{" "}
              <span className="font-bold text-primaryBlue">Mission</span>
            </h2>
          </div>
          <p className="text-justify text-[13px] font-semibold leading-5 text-[#374151] sm:text-base sm:leading-6">
            {MISSION_TEXT}
          </p>
        </div>
      </div>
    </div>
  </SectionShell>
);

export default Mission;
