import React from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/solid";
import Chip from "components/ui/Chip";
import SectionShell from "components/ui/SectionShell";
const MEDAL_IMAGE =
  "https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegu2i801pr06przac1ssza";
const CENTRE_IMAGE =
  "https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegu2g801pf06prsgnwsafv";
const VALUES = [
  "Fidelity to our mission and a strong and confident belief in our work.",
  "Excellence in the progression of education, research, and patient care.",
  "Integrity to hold the highest standards of exemplary ethics and morality.",
  "Diversity in actions that appreciate all individuals.",
  "Cooperation manifested by institutional communication and collaboration.",
  "Respect for people associated with, or come in contact with, GarbhaGudi Institute of Reproductive Health & Research (GGIRHR): staff, students, residents, fellows, faculties, communities, patients, and families.",
];

const FrameAccent = ({ position }: { position: string }) => (
  <div
    aria-hidden="true"
    className={`absolute ${position} h-24 w-24 rounded-3xl border border-[#E5E7EB]`}
  />
);

type ValuePhotoProps = {
  src: string;
  alt: string;
  accent: string;
  className?: string;
};

const ValuePhoto = ({ src, alt, accent, className = "" }: ValuePhotoProps) => (
  <div className={`relative aspect-[407/476] w-full ${className}`}>
    <FrameAccent position={accent} />
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 1024px) 33vw, 50vw"
      className="rounded-xl object-cover lg:rounded-[20px]"
    />
  </div>
);

const Values = () => (
  <section className="bg-white py-14 lg:py-20">
    <SectionShell>
      <div className="text-center">
        <Chip variant="pink" className="px-4 tracking-widest">
          VALUES
        </Chip>
        <h2 className="font-heading text-[28px] sm:text-[36px] lg:text-[46px] leading-tight text-black mt-1 sm:mt-2 mb-8 lg:mb-10">
          Our <span className="text-primaryBlue font-bold">Values</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-10 lg:items-start">
        <ValuePhoto
          src={MEDAL_IMAGE}
          alt="A first-place medal awarded to GGIRHR"
          accent="-top-6 -left-6"
          className="order-1"
        />
        <ValuePhoto
          src={CENTRE_IMAGE}
          alt="Signage at the GarbhaGudi Institute of Reproductive Health and Research"
          accent="-bottom-6 -right-6"
          className="order-2 lg:order-3"
        />

        <ul className="order-3 col-span-2 flex flex-col gap-3 lg:gap-[22px] lg:order-2 lg:col-span-1">
          {VALUES.map((value) => (
            <li key={value} className="flex items-start gap-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 shrink-0 text-primaryBlue" />
              <p className="text-justify text-base font-semibold leading-6 text-[#374151] lg:text-[18px]">
                {value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  </section>
);

export default Values;
