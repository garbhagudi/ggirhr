import React from "react";
import Image from "next/image";
import Chip from "components/ui/Chip";
import HexagonPhoto from "components/ui/HexagonPhoto";

// Same badges as the About page (sections/About/AboutUs.tsx): the left photo is
// clipped by HexagonPhoto, the right export already includes its outline.
const HEX_LEFT_IMAGE = "/images/about/about-hex-left.png";
const HEX_RIGHT_IMAGE = "/images/about/about-hex-right.png";

const BODY =
  "We achieve this through a combination of theory, laboratory work, hands-on experience, interactive discussions, case-based learning, and advanced technology-driven tools to foster critical thinking and problem-solving at GarbhaGudi IVF Centre. Effective learning is facilitated when like-minded professionals are actively engaged in a collaborative ecosystem. This holistic approach ensures our participants are prepared to alleviate infertility challenges, providing them with an excellent understanding and practical exposure in the rapidly evolving clinical embryology, and reproductive biology space.";

// Figma Frame 2131330139: 1440×581 centred copy with badges in the side margins.
const Pedagogy = () => (
  <section className="relative overflow-hidden bg-white px-5 pb-16 pt-10 font-primary lg:px-0 lg:pb-[85px] lg:pt-[100px]">
    <HexagonPhoto
      src={HEX_LEFT_IMAGE}
      alt="Sperm cells approaching an egg"
      className="absolute left-5 top-3 xl:left-[211px] xl:top-[61px]"
    />
    <div className="absolute bottom-3 right-5 aspect-[136/130] w-[71px] xl:bottom-auto xl:right-[135px] xl:top-[86px] xl:w-[136px]">
      <Image
        src={HEX_RIGHT_IMAGE}
        alt="A researcher at a microscope in the GGIRHR laboratory"
        fill
        sizes="(min-width: 1280px) 136px, 71px"
        className="object-contain"
      />
    </div>

    <div className="relative z-10 mx-auto flex max-w-[1135px] flex-col items-center text-center">
      <Chip variant="pink" className="uppercase">
        Training Method
      </Chip>
      <h2 className="mt-3 text-[23px] font-bold leading-tight text-black lg:mt-[34px] lg:text-[46px]">
        Pedagogy
      </h2>
      <p className="mt-2 max-w-[1113px] text-center text-lg leading-7 text-[#374151] lg:mt-5 lg:text-[32px] lg:leading-[48px]">
        <span className="font-semibold">
          Our goal is to empower bioscience, biotechnology, embryology, life
          science, medical, and veterinary professionals with the knowledge and
          skills necessary to address
        </span>{" "}
        and overcome complications faced by infertile couples.
      </p>
      <p className="mt-5 text-center text-[13px] font-normal leading-[22px] text-[#374151] lg:mt-6 lg:text-base lg:leading-6">
        {BODY}
      </p>
    </div>
  </section>
);

export default Pedagogy;
