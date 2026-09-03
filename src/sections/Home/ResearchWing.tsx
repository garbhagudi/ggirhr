import React from "react";
import Image from "next/image";
import Chip from "components/ui/Chip";
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
    <Chip variant="pink" size="sm" className="tracking-widest">
      RESEARCH
    </Chip>
    <h1 className="font-heading text-[46px] xl:leading-[50px] leading-tight text-black mt-6">
      Research <span className="text-[#1DA8E1] font-bold">Wing</span>
    </h1>
    <p className="text-black font-semibold leading-[27px] text-justify mt-2.5 text-lg">
      The research wing of GGIRHR was set up to conduct various studies that can
      help in diagnosis, treatment, and improved success rates in ART
      procedures. In this context, GGIRHR has set up the following to assist its
      endeavours:
    </p>

    <div className="flex flex-col gap-6 xl:gap-[34px] mt-6">
      {COMMITTEES.map((item) => (
        <div className="flex items-center gap-5" key={item.id}>
          <div className="flex-shrink-0 w-[60px] h-[60px] rounded-full bg-[#1DA8E1] inline-flex items-center justify-center text-white">
            <item.icon className="w-8 h-8" />
          </div>
          <span className="font-semibold text-black text-xl">{item.label}</span>
        </div>
      ))}
    </div>
  </>
);

const ResearchWing = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute left-0 top-0 w-[80%] h-full z-10">
        <Image
          src="/research-fade-overlay.svg"
          alt=""
          fill
          sizes="80vw"
          className="object-fill"
        />
      </div>
      <div className="w-full h-[735px] overflow-hidden py-20 px-40 flex">
        <div className="relative z-20 flex-1">
          <ResearchContent />
        </div>
        <div className="relative flex-1"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full z-1">
          <Image
            src={RESEARCH_IMAGE}
            alt="Researcher examining a sample under a microscope"
            fill
            sizes="50vw"
            className="object-cover absolute top-0 left-0"
          />
        </div>
        
        <Image
          src="/ribbon-wave-icon.svg"
          alt=""
          width={214}
          height={84}
          className="absolute top-8 left-[40%]  opacity-80 z-20 rotate-[-9.93deg]"
        />

        <div className="absolute left-0 bottom-0 z-30 w-[680px] h-[680px]">
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
