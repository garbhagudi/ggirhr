import React from "react";
import Image from "next/image";
import Chip from "components/ui/Chip";
import Glow from "components/ui/Glow";
import RibbonWave from "components/ui/RibbonWave";
import { BODY_PARAGRAPH_CLASSES } from "sections/About/typography";

const RESEARCH_IMAGE = "/research-microscope.png";

const RESEARCH_TEAM_POINTS = [
  "Expert team of clinicians trained in reproductive medicine from reputed institutions. They follow standard treatment protocols in ART coupled with innovative process improvements to improve success rates in all aspects of ART. They are committed to conducting prospective and retrospective studies to help improve treatment and ART outcomes.",
  "A capable, knowledgeable, and experienced group of skilled embryologists who follow advanced techniques to improve embryology outcomes. They regularly conduct workshops, participate in conferences, andrology & embryology training programs. They are keen on research activities and conducting studies to analyse, predict and improve IVF outcomes.",
  "A team of epidemiologists, statisticians, and research co-coordinators to help formulate, collect data, and analyse the research studies.",
  "An internal ethical committee of eminent people in their specified areas as per the DCGI guidelines. Regular meetings of the ethical committee are conducted every 6-8 weeks to discuss and approve new projects, review existing projects (if needed), and suggest any necessary corrections.",
  "State of the ART software to collect the patient data and analyse the results to develop actionable insights.",
  "We have got full-time staff to digitize the patient's clinical data to help in collecting data for the research work.",
];

const ResearchTeam = () => {
  return (
    <section className="relative bg-[#FAFEFF] lg:bg-white overflow-hidden">
      <div className="hidden lg:block absolute left-0 top-0 w-[80%] h-full z-10 bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,#FFFFFF_36.27%)]" />
      <div className="w-full lg:min-h-[735px] lg:py-20 lg:px-40 flex flex-col lg:flex-row">
        <div className="order-first lg:order-none relative w-full h-[244px] -mt-[21px] sm:h-[280px] lg:mt-0 lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full lg:z-0">
          <Image
            src={RESEARCH_IMAGE}
            alt="Researchers working in the GarbhaGudi laboratory"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative z-20 flex-1 px-4 sm:px-6 lg:px-0 pt-2.5 pb-12 lg:py-0">
          <Chip variant="pink" size="sm" className="px-4 tracking-widest">
            RESEARCH
          </Chip>
          <div className="flex items-start justify-between gap-4">
            <h2 className="font-heading text-[28px] sm:text-[36px] lg:text-[46px] xl:leading-[50px] leading-tight text-black mt-2 sm:mt-4">
              Our <span className="text-[#1DA8E1] font-bold">Research Team</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 mt-6">
            {RESEARCH_TEAM_POINTS.map((point) => (
              <p key={point.slice(0, 32)} className={BODY_PARAGRAPH_CLASSES}>
                {point}
              </p>
            ))}
          </div>
        </div>
        <div className="hidden lg:block relative flex-1"></div>
        <div className="lg:hidden absolute inset-x-0 top-[183px] sm:top-[219px] bottom-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0)_6px,#FFFFFF_48px)]" />
        <Glow className="lg:hidden z-10 w-[680px] h-[680px] -left-[273px] top-[439px] bg-[rgba(142,230,255,0.22)] blur-[102px]" />

        <div className="hidden lg:block absolute left-0 bottom-0 lg:z-30 w-[680px] h-[680px]">
          <Image
            src="/blogs-glow-ellipse.svg"
            alt=""
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ResearchTeam;
