import React from "react";
import Image from "next/image";
import Chip from "components/ui/Chip";
import Glow from "components/ui/Glow";

const BENEFITS_IMAGE = "/images/courses/embryo-banner.png";
const BENEFITS_IMAGE_MOBILE = "/images/courses/embryo-banner-mobile.png";
const IMAGE_ALT = "Illustration of an embryo developing inside a cell";

const BENEFITS = [
  "Develop proficiency in handling gametes and embryos through advanced ART techniques.",
  "Proficiently perform techniques such as andrology, IVF, ICSI, embryo culture, vitrification, and cryopreservation.",
  "Master the use of microscopes, imaging software, and other technologies for embryo evaluation and manipulation.",
  "Apply the principles of cell biology, reproductive genetics, molecular biology, and ART regulations.",
  "Acquire the capability to troubleshoot laboratory challenges and ensuring optimal embryo development.",
  "Effectively communicate with couples, fertility specialists, and laboratory staff to ensure seamless collaboration and patient-counselling skills.",
  "Network with experienced embryologists, fertility specialists, peers, researchers, stay updated on best practices, and industry developments.",
  "Logbook: Participants must complete a logbook documenting procedures performed under faculty supervision. It will be periodically reviewed and assessed during the final evaluation.",
  "We at GGIRHR provide placements for skilled embryologists at GarbhaGudi IVF Centre and offer references for others.",
];

// Figma "Group 34578": 20px #1DA8E1 circle with a thin white tick.
const CheckBadge = () => (
  <svg
    viewBox="0 0 20 20"
    aria-hidden="true"
    className="mt-[2px] h-[18px] w-[18px] shrink-0 lg:h-5 lg:w-5"
  >
    <circle cx="10" cy="10" r="10" fill="#1DA8E1" />
    <path
      d="M6.2 10.3 8.7 12.7 13.9 7.5"
      fill="none"
      stroke="#F1F1F1"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const KeyBenefits = () => (
  <section className="relative overflow-hidden bg-white font-primary">
    {/* Desktop: 1424×848 photo starting at x=123, faded from the left (Figma Rectangle 9). */}
    <Image
      src={BENEFITS_IMAGE}
      alt={IMAGE_ALT}
      width={1317}
      height={848}
      sizes="1424px"
      className="absolute inset-y-0 right-[-107px] hidden h-full w-[1424px] max-w-none object-cover lg:block"
    />
    <div className="absolute inset-y-0 left-0 z-10 hidden w-[77%] bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,#FFFFFF_36.27%)] lg:block" />

    {/* Mobile: full-width banner on top, fading into white. */}
    <div className="relative lg:hidden">
      <Image
        src={BENEFITS_IMAGE_MOBILE}
        alt={IMAGE_ALT}
        width={375}
        height={223}
        sizes="100vw"
        className="h-auto w-full"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-white" />
    </div>

    <Glow className="-z-0 w-[300px] h-[300px] sm:w-[454px] sm:h-[454px] -left-[100px] bottom-[-50px] sm:-bottom-24 bg-[rgba(165,220,243,0.51)] blur-[80px] sm:blur-[102px]" />

    <div className="relative z-20 px-5 pb-14 pt-5 lg:px-12 lg:pb-[90px] lg:pt-[88px] xl:pl-[151px]">
      <div className="flex max-w-[682px] flex-col gap-4 lg:gap-[27px]">
        <Chip variant="pink" className="uppercase">
          Benefits
        </Chip>
        <h2 className="text-left text-[23px] font-normal leading-tight text-black lg:text-[46px] lg:leading-[50px]">
          Key <span className="font-bold text-primaryBlue">Benefits</span>
        </h2>
        <ul className="flex flex-col gap-4">
          {BENEFITS.map((benefit) => (
            <li key={benefit.slice(0, 40)} className="flex items-start gap-2">
              <CheckBadge />
              <p className="text-justify text-[13px] font-semibold leading-[22px] text-[#374151] lg:text-base lg:leading-6">
                {benefit}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default KeyBenefits;
