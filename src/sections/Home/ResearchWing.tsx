import React from "react";
import Image from "next/image";
import Chip from "components/ui/Chip";
import Glow from "components/ui/Glow";
import RibbonWave from "components/ui/RibbonWave";
import { HiUserGroup } from "react-icons/hi";
import { GiFizzingFlask } from "react-icons/gi";

const RESEARCH_IMAGE = "/research-microscope.png";

const COMMITTEES = [
  {
    id: 1,
    label: "Garbhagudi Scientific and Research Committee",
    icon: HiUserGroup,
  },
  { id: 2, label: "Internal Ethics Committee", icon: GiFizzingFlask },
  { id: 3, label: "Internal Ethics Committee", icon: HiUserGroup },
];

const ResearchContent = () => (
  <>
    <Chip variant="pink" size="sm" className="px-4 tracking-widest">
      RESEARCH
    </Chip>
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-heading text-[28px] sm:text-[36px] lg:text-[46px] xl:leading-[50px] leading-tight text-black mt-6">
        Research <span className="text-[#1DA8E1] font-bold">Wing</span>
      </h1>
      <RibbonWave
        width={214}
        height={84}
        className="lg:hidden w-[90px] shrink-0 mt-6 opacity-80"
      />
    </div>
    <p className="text-black font-semibold leading-[27px] text-left sm:text-justify mt-2.5 text-base lg:text-lg">
      The research wing of GGIRHR was set up to conduct various studies that can
      help in diagnosis, treatment, and improved success rates in ART
      procedures. In this context, GGIRHR has set up the following to assist its
      endeavours:
    </p>

    <div className="flex flex-col gap-5 lg:gap-6 xl:gap-[34px] mt-6">
      {COMMITTEES.map((item) => (
        <div className="flex items-center gap-4 lg:gap-5" key={item.id}>
          <div className="flex-shrink-0 w-11 h-11 lg:w-[60px] lg:h-[60px] rounded-full bg-[#1DA8E1] inline-flex items-center justify-center text-white">
            <item.icon className="w-6 h-6 lg:w-8 lg:h-8" />
          </div>
          <span className="font-semibold text-black text-base lg:text-xl">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  </>
);

const ResearchWing = () => {
  return (
    <section className="relative bg-[#FAFEFF] lg:bg-white overflow-hidden">
      <div className="hidden lg:block absolute left-0 top-0 w-[80%] h-full z-10">
        <Image
          src="/research-fade-overlay.svg"
          alt=""
          fill
          sizes="80vw"
          className="object-fill"
        />
      </div>
      <div className="w-full lg:h-[735px] lg:overflow-hidden lg:py-20 lg:px-40 flex flex-col lg:flex-row">
        <div className="order-first lg:order-none relative w-full h-[244px] -mt-[21px] sm:h-[280px] lg:mt-0 lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full lg:z-0">
          <Image
            src={RESEARCH_IMAGE}
            alt="Researcher examining a sample under a microscope"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative z-20 flex-1 px-4 sm:px-6 lg:px-0 pt-2.5 pb-12 lg:py-0">
          <ResearchContent />
        </div>
        <div className="hidden lg:block relative flex-1"></div>

        <RibbonWave
          width={214}
          height={84}
          className="hidden lg:block absolute top-8 left-[40%] w-[214px] opacity-80 z-20 rotate-[-9.93deg]"
        />
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

export default ResearchWing;
