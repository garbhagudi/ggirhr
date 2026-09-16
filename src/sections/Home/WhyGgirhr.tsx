import React from "react";
import Image from "next/image";
import SectionShell from "components/ui/SectionShell";
import RibbonWave from "components/ui/RibbonWave";
import { HOME_FEATURE_IMAGE } from "sections/Home/assets";

const DecorativeBlob = ({ position }: { position: string }) => (
  <div
    className={`absolute ${position} w-24 h-24 rounded-3xl bg-[rgba(255,255,255,0.16)] -z-1`}
  />
);

const WhyGgirhrRow = () => (
  <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16">
    <div className="relative w-full lg:w-1/2 flex flex-col gap-2.5 sm:gap-4">
      <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 w-full">
        <div className="relative top-[-2px] left-[-3px] flex-none sm:flex-1 aspect-[333/248] sm:aspect-auto sm:h-[200px] lg:h-[251px]">
          <DecorativeBlob position="-top-4 -left-6" />
          <Image
            src="/images/why-ggirhr-1.webp"
            alt="A GGIRHR trainer leading a classroom session for fellowship candidates"
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover rounded-xl lg:rounded-2xl overflow-hidden"
          />
        </div>
        <div className="relative top-[-2px] left-[-3px] flex-none sm:flex-1 aspect-[333/248] sm:aspect-auto sm:h-[200px] lg:h-[251px]">
          <Image
            src="/images/why-ggirhr-2.webp"
            alt="Embryologists at work in the GGIRHR IUI laminar flow lab"
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover rounded-xl lg:rounded-2xl overflow-hidden"
          />
        </div>
      </div>

      <div className="relative w-full aspect-[333/248] sm:aspect-auto sm:h-[200px] lg:h-[251px]">
        <DecorativeBlob position="-bottom-4 -right-6" />
        <Image
          src="/images/why-ggirhr-3.webp"
          alt="Graduating GGIRHR fellows and faculty at a valediction ceremony"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover rounded-xl lg:rounded-2xl overflow-hidden"
        />
      </div>
    </div>
    <div className="relative w-full lg:w-1/2 flex flex-col justify-center gap-4">
      <RibbonWave
        width={160}
        height={96}
        className="absolute -top-6 right-0 w-[77px] sm:w-[160px] sm:h-[96px]"
      />

      <h1 className="text-[23px] leading-[50px] sm:text-[36px] sm:leading-tight lg:text-[46px] text-white">
        Why <span className="font-bold">GGIRHR</span>
      </h1>
      <p className="text-[#DEDEDE] lg:text-white font-semibold leading-5 sm:leading-7 text-justify text-[13px] sm:text-base lg:text-[18px]">
        At GGIRHR, we have realized a severe shortage of trained clinicians,
        embryologists, and support staff in infertility, leading to compromised
        treatment for many infertile couples worldwide. GarbhaGudi Institute of
        Reproductive Health &amp; Research (GGIRHR) is our venture to address
        this lacuna by offering advanced fellowship courses and short-term
        training courses, recognized by Rajiv Gandhi Institute of Health
        Sciences and Indian Medical Association, in Clinical ART, Embryology,
        and Obstetric Ultrasound that cater to the needs of a busy
        practitioner.
      </p>
    </div>
  </div>
);

// "Our Story" copy with the image to its right; stacks below lg.
const OurStoryRow = () => (
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
    <div className="w-full lg:w-1/2 flex flex-col gap-4">
      <h1 className="text-[23px] leading-[50px] sm:text-[36px] sm:leading-tight lg:text-[46px] text-white">
        Our <span className="font-bold">Story</span>
      </h1>
      <p className="text-[#DEDEDE] lg:text-white font-semibold leading-5 sm:leading-7 text-justify text-[13px] sm:text-base lg:text-[18px]">
        GarbhaGudi Institute of Reproductive Health &amp; Research (GGIRHR) was
        established to provide premier quality reproductive medicine and
        infertility training to clinicians, embryologists, sonologists, and
        students with a science background, to name a few. We believe in
        training enthusiastic minds to excel in their desired field. Our
        infertility courses aim to impart systematic elucidation of all facets
        of the ART treatments, such as IVF, featuring hands-on IVF training and
        fellowship programs in Reproductive Medicine for postgraduate doctors.
        Moreover, GGIRHR’s courses are beneficial in providing insights into the
        ethical and economic implications of the treatment to equip every
        individual with full-fledged knowledge.
      </p>
    </div>
    <div className="relative w-full lg:w-1/2">
      {/* Portrait on small screens, landscape from sm: up. */}
      <div className="relative w-full max-w-[484px] aspect-[334/358] sm:aspect-[484/364] rounded-xl lg:rounded-[20px]">
        <DecorativeBlob position="-top-6 -right-6" />
        <DecorativeBlob position="-bottom-6 -left-6" />
        <Image
          src={HOME_FEATURE_IMAGE}
          alt="Our Story"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover rounded-xl lg:rounded-[20px] overflow-hidden"
        />
      </div>
    </div>
  </div>
);
const WhyGgirhr = () => (
  <SectionShell className="py-12 px-5 bg-primaryBlue-600 overflow-hidden flex gap-12 lg:gap-24 flex-col">
    <WhyGgirhrRow />
    <OurStoryRow />
  </SectionShell>
);

export default WhyGgirhr;
