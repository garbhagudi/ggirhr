import React from "react";
import Image from "next/image";
import Button from "components/ui/Button";
import Chip from "components/ui/Chip";
import Glow from "components/ui/Glow";
import RibbonWave from "components/ui/RibbonWave";
import SectionShell from "components/ui/SectionShell";
import { CALL_US_HREF } from "lib/contact";

const CAREERS_HREF = "https://www.garbhagudi.com/careers";

// One cut-out of both clinicians (Figma group), exported per breakpoint.
const CAREER_IMAGE = "/images/contact/career-team.png";
const CAREER_IMAGE_MOBILE = "/images/contact/career-team-mobile.png";
const CAREER_ALT = "Two smiling GGIRHR clinicians in blue scrubs";

// Same composition in both Figma frames, just scaled: ring diameter = group
// width, photo group = 95.3% × width inset 3.9%. Percentages keep it in
// proportion.
const CareerArt = () => (
  <div className="relative mx-auto aspect-[583/513] w-full max-w-[335px] shrink-0 sm:mx-0 sm:w-1/2 sm:max-w-[583px]">
    <div
      aria-hidden="true"
      className="absolute left-0 top-[20%] aspect-square w-full rounded-full border border-white/20"
    >
      <div className="absolute inset-[4%] rounded-full bg-gradient-to-b from-white/15 to-white/0" />
    </div>
    <div className="absolute bottom-0 left-[3.9%] h-full w-[95.3%]">
      <Image
        src={CAREER_IMAGE_MOBILE}
        alt={CAREER_ALT}
        fill
        sizes="(min-width: 640px) 0px, 100vw"
        className="object-contain object-bottom sm:hidden"
      />
      <Image
        src={CAREER_IMAGE}
        alt={CAREER_ALT}
        fill
        sizes="(min-width: 640px) 50vw, 0px"
        className="hidden object-contain object-bottom sm:block"
      />
    </div>
  </div>
);

const Career = () => (
  <SectionShell
    as="section"
    id="career"
    className="relative overflow-hidden bg-[#1E96C9] scroll-mt-24 sm:bg-[#1D98CB]"
  >
    <Glow className="hidden sm:block left-1/2 top-[213px] -translate-x-1/2 h-[1083px] w-[1083px] bg-[rgba(47,126,188,0.61)] blur-[547px]" />
    <RibbonWave
      width={240}
      height={94}
      className="absolute right-[46px] top-[43px] w-[77px] rotate-12 -scale-x-100 sm:left-[390px] sm:right-auto sm:top-[54px] sm:w-[240px] sm:-rotate-[2.93deg] sm:scale-x-100"
    />

    <div className="relative z-10 flex flex-col gap-10 pt-[60px] sm:flex-row sm:items-end sm:justify-between sm:pt-0">
      <div className="flex flex-col gap-4 sm:gap-5 sm:self-center sm:py-16">
        <Chip
          variant="glass"
          className="uppercase shadow-[0px_4px_14px_rgba(0,0,0,0.1)]"
        >
          Career
        </Chip>
        <h2 className="text-[23px] leading-tight text-white sm:text-[46px] sm:leading-[50px]">
          Be Part Of <span className="font-bold">Our Mission</span>
        </h2>
        <div className="mt-2 flex gap-3 sm:mt-[18px]">
          <Button
            href={CAREERS_HREF}
            target="_blank"
            rel="noreferrer"
            variant="light"
            rounded="md"
            className="h-[46px] flex-1 px-6 sm:flex-none"
          >
            Join With Us
          </Button>
          <Button
            href={CALL_US_HREF}
            variant="ghost"
            rounded="md"
            className="h-[46px] flex-1 border border-white px-6 !text-white backdrop-blur-[24px] hover:bg-white/10 sm:flex-none"
          >
            Contact Us
          </Button>
        </div>
      </div>

      <CareerArt />
    </div>
  </SectionShell>
);

export default Career;
