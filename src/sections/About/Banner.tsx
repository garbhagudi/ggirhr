import React from "react";
import Image from "next/image";
import Glow from "components/ui/Glow";
import RibbonWave from "components/ui/RibbonWave";

const BANNER_IMAGE = "/research-microscope.png";
export default function Banner() {
  return (
    <div className="px-5 xl:px-[30px] my-4 md:my-8">
      <div className="relative overflow-hidden rounded-xl xl:rounded-[30px] bg-white flex flex-col lg:flex-row lg:items-center lg:h-[550px]">
        <div className="absolute inset-0 z-0 w-full h-full"> 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="335"
            height="182"
            viewBox="0 0 335 182"
            fill="none"
          >
            <g filter="url(#filter0_f_1132_31)">
              <circle cx="308" cy="119" r="40" fill="#D1EDF9" />
            </g>
            <g filter="url(#filter1_f_1132_31)">
              <circle cx="308.5" cy="43" r="40" fill="#D1EDF9" />
            </g>
            <g filter="url(#filter2_f_1132_31)">
              <circle cx="246.5" cy="48" r="40" fill="#D1EDF9" />
            </g>
            <g filter="url(#filter3_f_1132_31)">
              <circle cx="254" cy="119" r="40" fill="#D1EDF9" />
            </g>
            <g filter="url(#filter4_f_1132_31)">
              <circle cx="201" cy="119" r="40" fill="#D2EEF9" />
            </g>
            <g filter="url(#filter5_f_1132_31)">
              <circle cx="151" cy="119" r="40" fill="#D2EEF9" />
            </g>
            <g filter="url(#filter6_f_1132_31)">
              <circle cx="94" cy="119" r="40" fill="#D2EEF9" />
            </g>
            <g filter="url(#filter7_f_1132_31)">
              <circle cx="28" cy="119" r="40" fill="#D2EEF9" />
            </g>
            <defs>
              <filter
                id="filter0_f_1132_31"
                x="245"
                y="56"
                width="126"
                height="126"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="11.5"
                  result="effect1_foregroundBlur_1132_31"
                />
              </filter>
              <filter
                id="filter1_f_1132_31"
                x="245.5"
                y="-20"
                width="126"
                height="126"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="11.5"
                  result="effect1_foregroundBlur_1132_31"
                />
              </filter>
              <filter
                id="filter2_f_1132_31"
                x="183.5"
                y="-15"
                width="126"
                height="126"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="11.5"
                  result="effect1_foregroundBlur_1132_31"
                />
              </filter>
              <filter
                id="filter3_f_1132_31"
                x="191"
                y="56"
                width="126"
                height="126"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="11.5"
                  result="effect1_foregroundBlur_1132_31"
                />
              </filter>
              <filter
                id="filter4_f_1132_31"
                x="138"
                y="56"
                width="126"
                height="126"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="11.5"
                  result="effect1_foregroundBlur_1132_31"
                />
              </filter>
              <filter
                id="filter5_f_1132_31"
                x="88"
                y="56"
                width="126"
                height="126"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="11.5"
                  result="effect1_foregroundBlur_1132_31"
                />
              </filter>
              <filter
                id="filter6_f_1132_31"
                x="31"
                y="56"
                width="126"
                height="126"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="11.5"
                  result="effect1_foregroundBlur_1132_31"
                />
              </filter>
              <filter
                id="filter7_f_1132_31"
                x="-35"
                y="56"
                width="126"
                height="126"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="11.5"
                  result="effect1_foregroundBlur_1132_31"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="relative z-20 px-5 py-8 sm:px-8 sm:py-10 lg:w-1/2 lg:px-[89px] lg:py-0">
          <RibbonWave
            width={100}
            height={45}
            color="#FFFFFF"
            className="block lg:hidden absolute -top-1 left-5 w-[100px] h-[45px] rotate-[-12.21deg] "
          />
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
