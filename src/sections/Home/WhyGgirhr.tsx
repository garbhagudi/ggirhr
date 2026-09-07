import React from "react";
import Image from "next/image";
import SectionShell from "components/ui/SectionShell";
import { HOME_FEATURE_IMAGE } from "sections/Home/assets";

// Rounded translucent square peeking out from behind an image group;
// `position` supplies the corner-offset utility classes (e.g. "-top-4 -left-6").
//
// Note the `-z-1`: the config's inlined `zIndex` scale has no `1` key, so
// this class generates no CSS and the blobs sit at the default stacking
// level, painting over the images. Left exactly as-is — "correcting" it to
// `-z-10` would change how every instance renders.
const DecorativeBlob = ({ position }: { position: string }) => (
  <div
    className={`absolute ${position} w-24 h-24 rounded-3xl bg-[rgba(255,255,255,0.16)] -z-1`}
  />
);

// Image collage beside the "Why GGIRHR" copy; stacks below lg.
const WhyGgirhrRow = () => (
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
    <div className="relative w-full lg:w-1/2 flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <div className="relative top-[-2px] left-[-3px] flex-1 h-[200px] lg:h-[251px]">
          <DecorativeBlob position="-top-4 -left-6" />
          <Image
            src={HOME_FEATURE_IMAGE}
            alt="Home"
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover rounded-2xl overflow-hidden"
          />
        </div>
        <div className="relative top-[-2px] left-[-3px] flex-1 h-[200px] lg:h-[251px]">
          <Image
            src={HOME_FEATURE_IMAGE}
            alt="Home"
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover rounded-2xl overflow-hidden"
          />
        </div>
      </div>

      <div className="relative w-full h-[200px] lg:h-[251px]">
        <DecorativeBlob position="-bottom-4 -right-6" />
        <Image
          src={HOME_FEATURE_IMAGE}
          alt="Home"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover rounded-2xl overflow-hidden"
        />
      </div>
    </div>
    <div className="relative w-full lg:w-1/2 flex flex-col justify-center gap-4">
      <Image
        src="/ribbon-wave-icon.svg"
        alt=""
        width={160}
        height={96}
        className="absolute -top-6 right-0 hidden sm:block"
      />

      <h1 className="text-[28px] sm:text-[36px] lg:text-[46px] leading-tight text-white">
        Why <span className="font-bold">GGIRHR</span>
      </h1>
      <p className="text-white font-semibold leading-7 text-left sm:text-justify text-base lg:text-[18px]">
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
      <h1 className="text-[28px] sm:text-[36px] lg:text-[46px] leading-tight text-white">
        Our <span className="font-bold">Story</span>
      </h1>
      <p className="text-white font-semibold leading-7 text-left sm:text-justify text-base lg:text-[18px]">
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
      <div className="relative w-full max-w-[484px] aspect-[484/364] rounded-[20px]">
        <DecorativeBlob position="-top-6 -right-6" />
        <DecorativeBlob position="-bottom-6 -left-6" />
        <Image
          src={HOME_FEATURE_IMAGE}
          alt="Our Story"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover rounded-[20px] overflow-hidden"
        />
      </div>
    </div>
  </div>
);

// The blue "Why GGIRHR" + "Our Story" band.
const WhyGgirhr = () => (
  <SectionShell className="py-12 bg-[#1A97CA] flex gap-12 lg:gap-24 flex-col">
    <WhyGgirhrRow />
    <OurStoryRow />
  </SectionShell>
);

export default WhyGgirhr;
