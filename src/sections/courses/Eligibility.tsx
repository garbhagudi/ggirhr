import React from "react";
import Image from "next/image";
import Chip from "components/ui/Chip";
import RibbonWave from "components/ui/RibbonWave";

const IMAGE_ALT = "GGIRHR clinical embryology trainee";

// Fellowship-only copy — not a Hygraph field (qualification is shown in CourseDetails).
const CRITERIA = [
  "Successful completion of the online examination and personal interview.",
  "The training program will be subject to the availability of seats in one of the two batches, i.e., March/April or September/October (Classes and wet laboratory sessions are planned on working days) each year.",
];

// Figma: desktop image 450 + 100 gap + 490 text, centred; mobile image then text.
const Eligibility = () => (
  <section className="relative overflow-hidden bg-white px-5 pb-14 pt-10 font-primary sm:px-0 sm:py-[110px]">
    <RibbonWave
      color="#A5DCF3"
      width={300}
      height={150}
      className="absolute right-[30px] top-[30px] z-20 w-[110px] rotate-[10deg] sm:right-[190px] sm:top-[150px] sm:w-[245px]"
    />

    <div className="relative z-10 flex flex-col items-center gap-6 sm:mx-auto sm:max-w-[1040px] sm:flex-row sm:gap-[100px]">
      <Image
        src="/images/courses/doctor-mobile.png"
        alt={IMAGE_ALT}
        width={312}
        height={379}
        className="h-auto w-[312px] max-w-full sm:hidden"
      />
      <Image
        src="/images/courses/doctor.png"
        alt={IMAGE_ALT}
        width={486}
        height={589}
        className="hidden h-auto w-[450px] shrink-0 sm:block"
      />

      <div className="flex w-full flex-col items-start sm:max-w-[490px]">
        <Chip variant="pink" className="uppercase">
          Criteria
        </Chip>
        <h2 className="mt-3 text-left text-[23px] font-bold leading-tight text-black sm:mt-5 sm:text-[46px] sm:leading-[50px]">
          Eligibility
        </h2>
        {CRITERIA.map((text, i) => (
          <p
            key={i}
            className={`${
              i === 0 ? "mt-2 sm:mt-4" : "mt-4"
            } text-justify text-[13px] font-semibold leading-6 text-[#374151] sm:text-base sm:leading-[26px]`}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  </section>
);

export default Eligibility;
