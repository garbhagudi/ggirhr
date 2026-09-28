import React from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/solid";
import Chip from "components/ui/Chip";
import Glow from "components/ui/Glow";

// Placeholder — the Figma spec references a lab/embryologist photo
// (`image 785` / `63985.jpg`) that doesn't exist in this repo. Swap for the
// real asset once supplied.
const BENEFITS_IMAGE = "/research-microscope.png";

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

const KeyBenefits = () => (
  <section className="relative overflow-hidden bg-white">
    <div className="hidden lg:block absolute inset-y-0 right-0 w-[75%]">
      <Image
        src={BENEFITS_IMAGE}
        alt="Embryologist working in the GGIRHR training laboratory"
        fill
        sizes="75vw"
        className="object-cover"
        priority={false}
      />
    </div>
    {/* Fade the photo into the white panel on the left, same technique as About/Banner.tsx */}
    <div className="hidden lg:block absolute inset-y-0 left-0 z-10 w-[68.9%] bg-[linear-gradient(270deg,rgba(255,255,255,0)_33.96%,#FFFFFF_53.42%)]" />
    <div className="hidden lg:block absolute inset-y-0 left-0 z-10 w-[54.8%] bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,#FFFFFF_100%)]" />
    <Glow className="-z-0 w-[300px] h-[300px] sm:w-[454px] sm:h-[454px] -left-[100px] bottom-[-50px] sm:-bottom-24 bg-[rgba(165,220,243,0.51)] blur-[80px] sm:blur-[102px]" />

    <div className="relative z-20 py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-2xl flex flex-col gap-6 lg:gap-7">
        <Chip variant="pink" className="px-4 tracking-widest">
          Benefits
        </Chip>
        <h2 className="font-heading text-[28px] sm:text-[36px] lg:text-[46px] leading-tight text-black">
          Key Benefits
        </h2>
        <ul className="flex flex-col gap-5 lg:gap-6">
          {BENEFITS.map((benefit) => (
            <li key={benefit.slice(0, 40)} className="flex items-start gap-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 shrink-0 text-primaryBlue" />
              <p className="text-justify text-base font-semibold leading-6 text-[#374151]">
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
