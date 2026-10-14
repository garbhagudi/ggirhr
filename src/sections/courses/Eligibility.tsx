import React from "react";
import Image from "next/image";
import Chip from "components/ui/Chip";
import RibbonWave from "components/ui/RibbonWave";
import { RichText } from "@graphcms/rich-text-react-renderer";
import type { RichTextSection } from "lib/richText";

const IMAGE_ALT = "GGIRHR clinical embryology trainee";

const Eligibility = ({ section }: { section?: RichTextSection }) => {
  const content = section?.content?.raw;
  if (!content?.children?.length) return null;

  return (
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
            {section?.heading || "Eligibility"}
          </h2>
          <div className="mt-2 flex flex-col gap-4 sm:mt-4">
            <RichText
              content={content}
              renderers={{
                p: ({ children }) => (
                  <p className="text-justify text-[13px] font-semibold leading-6 text-[#374151] sm:text-base sm:leading-[26px]">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="flex flex-col gap-4">{children}</ul>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
