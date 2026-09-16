import React from "react";
import Image from "next/image";
import Glow from "components/ui/Glow";

const BANNER_IMAGE = "/research-microscope.png";
export default function Banner() {
  return (
    <div className="px-5 xl:px-[30px] my-4 md:my-8">
      <div className="relative overflow-hidden rounded-xl xl:rounded-[30px] bg-white flex flex-col lg:flex-row lg:items-center lg:h-[550px]">
        <Glow className="hidden lg:block z-0 w-[454px] h-[454px] -left-[75px] -top-[163px] bg-[rgba(142,230,255,0.99)] blur-[102px]" />
        <Glow className="hidden lg:block z-0 w-[400px] h-[298px] -left-[76px] top-[404px] bg-[rgba(122,220,249,0.58)] blur-[202px]" />
        <div className="relative z-20 px-5 py-8 sm:px-8 sm:py-10 lg:w-1/2 lg:px-[89px] lg:py-0">
          <h1 className="text-center lg:text-left font-heading font-normal text-[32px] sm:text-[44px] lg:text-5xl xl:text-[61px] xl:leading-[58px] text-[#374151] lg:absolute top-12 left-1/4 backdrop-filter-[184px]">
            About <span className="font-bold text-primaryBlue">GGIRHR</span>
          </h1>
        </div>
        <div className="relative z-0 w-full h-[220px] sm:h-[300px] lg:absolute lg:inset-y-0 lg:right-0 lg:w-[70%] lg:h-full">
          <Image
            src={BANNER_IMAGE}
            alt="Microscope and lab equipment at the GarbhaGudi research facility"
            fill
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-cover lg:object-[30%_50%]"
            priority
          />
        </div>
        <div className="hidden lg:block absolute inset-y-0 left-0 z-10 w-[68.9%] bg-[linear-gradient(270deg,rgba(255,255,255,0)_33.96%,#FFFFFF_53.42%)]" />
        <div className="hidden lg:block absolute inset-y-0 left-0 z-10 w-[54.8%] bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,#FFFFFF_100%)]" />
        <div className="hidden lg:block absolute inset-y-0 left-0 z-10 w-[50%] bg-[linear-gradient(270deg,rgba(210,238,249,0)_0%,#D2EEF9_60.68%,#D2EEF9_100%)]" />
        <Glow className="hidden lg:block z-10 w-[557px] h-[228px] left-[53px] top-[272px] bg-[rgba(255,255,255,0.42)] blur-[92px]" />
      </div>
    </div>
  );
}
