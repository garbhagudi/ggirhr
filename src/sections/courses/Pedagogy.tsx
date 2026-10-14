import React from "react";
import Image from "next/image";
import Chip from "components/ui/Chip";
import HexagonPhoto from "components/ui/HexagonPhoto";
import { RichText } from "@graphcms/rich-text-react-renderer";
import type { RichTextSection } from "lib/richText";

// Same badges as the About page (sections/About/AboutUs.tsx): the left photo is
// clipped by HexagonPhoto, the right export already includes its outline.
const HEX_LEFT_IMAGE = "/images/about/about-hex-left.png";
const HEX_RIGHT_IMAGE = "/images/about/about-hex-right.png";

// Figma Frame 2131330139: 1440×581 centred copy with badges in the side margins.
// Copy comes from the course's `pedagogy` section in Hygraph. A Heading 4 is
// the large lead line (its bold words semibold); paragraphs are body copy.
const Pedagogy = ({ section }: { section?: RichTextSection }) => {
  const content = section?.content?.raw;
  if (!content?.children?.length) return null;

  return (
    <section className="relative overflow-hidden bg-white px-5 pb-16 pt-10 font-primary sm:px-0 sm:pb-[85px] sm:pt-[100px]">
      <HexagonPhoto
        src={HEX_LEFT_IMAGE}
        alt="Sperm cells approaching an egg"
        className="absolute left-5 top-3 sm:left-[211px] sm:top-[61px]"
      />
      <div className="absolute bottom-3 right-5 aspect-[136/130] w-[71px] sm:bottom-auto sm:right-[135px] sm:top-[86px] sm:w-[136px]">
        <Image
          src={HEX_RIGHT_IMAGE}
          alt="A researcher at a microscope in the GGIRHR laboratory"
          fill
          sizes="(min-width: 640px) 136px, 71px"
          className="object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1135px] flex-col items-center text-center">
        <Chip variant="pink" className="uppercase">
          Training Method
        </Chip>
        <h2 className="mt-3 text-[23px] font-bold leading-tight text-black sm:mt-[34px] sm:text-[46px]">
          {section?.heading || "Pedagogy"}
        </h2>
        <div className="mt-2 flex flex-col items-center gap-5 sm:mt-5 sm:gap-6">
          <RichText
            content={content}
            renderers={{
              h4: ({ children }) => (
                <p className="max-w-[1113px] text-center text-lg leading-7 text-[#374151] sm:text-[32px] sm:leading-[48px]">
                  {children}
                </p>
              ),
              bold: ({ children }) => (
                <span className="font-semibold">{children}</span>
              ),
              p: ({ children }) => (
                <p className="text-center text-[13px] font-normal leading-[22px] text-[#374151] sm:text-base sm:leading-6">
                  {children}
                </p>
              ),
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Pedagogy;
