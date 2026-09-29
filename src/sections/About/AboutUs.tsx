import React from "react";
import Image from "next/image";
import Chip from "components/ui/Chip";
import HexagonPhoto from "components/ui/HexagonPhoto";

// Left is a raw photo clipped by HexagonPhoto; the right export already
// includes its hexagon outline, so it renders as a plain image.
const HEX_LEFT_IMAGE = "/images/about/about-hex-left.png";
const HEX_RIGHT_IMAGE = "/images/about/about-hex-right.png";

const PARAGRAPHS = [
  "GGIRHR intends to create a renaissance in training doctors and embryologists in the field of fertility. Since it is a part of the GarbhaGudi group, it has many advantages that are not available to other training organizations. GarbhaGudi IVF Centre, the mother company of GGIRHR, is known for its great success rates, ethical treatment, affordable costs, world-class infrastructure, and humane touch. With the backing of such a capable and robust organization, GGIRHR is well prepared to provide the best-in-class training to clinicians, embryologists andrology technicians, and paramedical staff to prepare them for the challenges of infertility treatment.",
  "Students at GGIRHR can get to learn the tips, tricks, processes, protocols, and treatment approaches followed at GarbhaGudi IVF, which has given such unbelievable success rates. Training will be provided by senior faculties who are well versed in their field of specialization. Teaching staff at GGIRHR possess profound knowledge and are not just academicians. So the knowledge they share will be efficient, practical, and something that can be implemented immediately.",
];

const AboutUs = () => (
  <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-[60px]">
    {/* Decorative badges. Below xl they sit in the free space beside the
        chip and after the short last line; from xl the 940px column leaves
        room for them in the side margins. */}
    <HexagonPhoto
      src={HEX_LEFT_IMAGE}
      alt="Sperm cells approaching an egg"
      className="absolute left-[33px] top-[22px] xl:left-[27px] xl:top-[136px]"
    />
    <div className="absolute bottom-3 right-[45px] aspect-[136/130] w-[71px] xl:bottom-auto xl:right-[42px] xl:top-[254px] xl:w-[136px]">
      <Image
        src={HEX_RIGHT_IMAGE}
        alt="A researcher at a microscope in the GGIRHR laboratory"
        fill
        sizes="(min-width: 1280px) 136px, 71px"
        className="object-contain"
      />
    </div>

    <div className="relative z-10 mx-auto max-w-[940px] px-5 text-center sm:px-6 lg:px-0">
      <Chip
        className="px-4 uppercase tracking-widest !bg-white text-[#EF3E66]"
      >
        About Us
      </Chip>

      <p className="mt-5 text-lg sm:mt-6 sm:text-2xl lg:text-[32px] lg:leading-[42px] text-[#374151] sm:text-black text-left">
        <span className="font-bold">
          GarbhaGudi Institute of Reproductive Health and Research (GGIRHR) is
          one of India’s premier infertility training organizations. It started
          in 2018 and is headed by{" "}
        </span>
        <span className="font-normal">
          Dr. Asha S Vijay, the honorable dean and scientific director of
          GGIRHR.
        </span>
      </p>

      <div className="mt-6 flex flex-col gap-4 sm:gap-5">
        {PARAGRAPHS.map((paragraph) => (
          <p
            key={paragraph.slice(0, 32)}
            className="text-[13px] sm:text-base font-semibold leading-6 text-[#374151]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  </section>
);

export default AboutUs;
