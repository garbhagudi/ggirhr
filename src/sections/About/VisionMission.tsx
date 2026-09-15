import React from "react";
import Image from "next/image";
import Chip from "components/ui/Chip";
import Glow from "components/ui/Glow";
import RibbonWave from "components/ui/RibbonWave";
import SectionShell from "components/ui/SectionShell";
const BLOCKS = [
  {
    key: "vision",
    badge: "Our Vision",
    word: "Vision",
    image:
      "https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegu8mz01qb06prid0hhksc",
    alt: "GGIRHR campus - reproductive health and infertility training institute in India",
    mobileAspect: "aspect-[1280/534]",
    align: "left",
    margin: "mt-8 lg:mt-10",
    body: "GGIRHR\u2019s mission is to provide learners with a specialized reproductive health and infertility education of exceptional quality and prepare every individual to serve the underserved. Special attention is directed to teaching and research activities, including CME programs and initiatives. We also strive to empower doctors and other medical professionals to deliver the highest quality patient care and prepare the next generation of skilled clinical and scientific leaders.",
  },
  {
    key: "mission",
    badge: "Our Mission",
    word: "Mission",
    image:
      "https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegu8no01qf06prwlncdely",
    alt: "Illustration of an expectant mother - GGIRHR reproductive health research",
    mobileAspect: "aspect-[4/3]",
    align: "right",
    margin: "mt-10 lg:mt-[60px]",
    body: "The goal of GGIRHR is to enhance our global credit as a reproductive health university, recognized for the excellence of our teaching, research, and service. We will endeavour to be a world leader in the training of competent, compassionate doctors and other health professionals for serving humanity. In addition, we envision that we will be a unique, preeminent research-intensive medical university, transforming health through discovery and lifelong learning.",
  },
] as const;

const WORD_CLASSES =
  "select-none whitespace-nowrap font-heading text-[80px] font-bold uppercase leading-none tracking-[0.1em] opacity-[0.29] bg-gradient-to-t from-white/0 to-white bg-clip-text text-transparent";

const BODY_CLASSES =
  "mt-3 text-left text-[13px] font-semibold leading-5 text-[#DEDEDE] sm:mt-4 sm:text-base sm:leading-6 sm:text-justify lg:text-lg lg:leading-[27px]";

export default function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-[#1D99CC] py-14 lg:py-24">
      <Glow className="z-0 left-1/2 top-[20%] h-[420px] w-[420px] -translate-x-1/2 bg-[rgba(47,126,188,0.65)] blur-[150px] sm:h-[900px] sm:w-[900px] lg:h-[1083px] lg:w-[1083px]" />
      <RibbonWave
        width={300}
        height={140}
        className="absolute right-4 top-6 z-0 w-[110px] rotate-[8.65deg] lg:right-16 lg:top-9 lg:w-[300px]"
      />

      <SectionShell className="relative z-10">
        <h2 className="text-center font-heading text-[23px] leading-tight text-white sm:text-[36px] lg:text-[46px] lg:leading-[50px]">
          Our <span className="font-bold">Vision &amp; Mission</span>
        </h2>

        {BLOCKS.map((block) => {
          const alignRight = block.align === "right";
          const frameOffset = alignRight ? "lg:ml-auto" : "";

          return (
            <div key={block.key} className={block.margin}>
              <div className="relative">
                <div
                  className={`relative w-full overflow-hidden rounded-[20px] bg-white sm:aspect-[1280/534] lg:w-[78%] ${block.mobileAspect} ${frameOffset}`}
                >
                  <Image
                    src={block.image}
                    alt={block.alt}
                    fill
                    sizes="(min-width: 1024px) 78vw, 100vw"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>

                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-y-0 hidden w-[22%] lg:grid lg:place-items-center ${
                    alignRight ? "left-0" : "right-0"
                  }`}
                >
                  <span
                    className={`${WORD_CLASSES} ${
                      alignRight ? "rotate-90" : "-rotate-90"
                    }`}
                  >
                    {block.word}
                  </span>
                </div>
              </div>

              {/* Copy column tracks the image edge. */}
              <div className={`mt-5 lg:mt-6 lg:w-[78%] ${frameOffset}`}>
                <Chip
                  variant="glass"
                  size="sm"
                  className="px-4 uppercase tracking-widest"
                >
                  {block.badge}
                </Chip>
                <p className={BODY_CLASSES}>{block.body}</p>
              </div>
            </div>
          );
        })}
      </SectionShell>
    </section>
  );
}
