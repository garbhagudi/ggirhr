import React from "react";
import Chip from "components/ui/Chip";

const PARAGRAPHS = [
  "GGIRHR intends to create a renaissance in training doctors and embryologists in the field of fertility. Since it is a part of the GarbhaGudi group, it has many advantages that are not available to other training organizations. GarbhaGudi IVF Centre, the mother company of GGIRHR, is known for its great success rates, ethical treatment, affordable costs, world-class infrastructure, and humane touch. With the backing of such a capable and robust organization, GGIRHR is well prepared to provide the best-in-class training to clinicians, embryologists andrology technicians, and paramedical staff to prepare them for the challenges of infertility treatment.",
  "Students at GGIRHR can get to learn the tips, tricks, processes, protocols, and treatment approaches followed at GarbhaGudi IVF, which has given such unbelievable success rates. Training will be provided by senior faculties who are well versed in their field of specialization. Teaching staff at GGIRHR possess profound knowledge and are not just academicians. So the knowledge they share will be efficient, practical, and something that can be implemented immediately.",
];

const AboutUs = () => (
  <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-[60px]">
    <div className="relative z-10 mx-auto max-w-[940px] px-5 text-center sm:px-6 lg:px-0">
      <Chip
        size="sm"
        className="px-4 uppercase tracking-widest !bg-[#1DA8E1] text-white"
      >
        About Us
      </Chip>

      <p className="mt-5 text-lg sm:mt-6 sm:text-2xl lg:text-[32px] lg:leading-[42px]">
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

      <div className="mt-6 flex flex-col gap-5">
        {PARAGRAPHS.map((paragraph) => (
          <p
            key={paragraph.slice(0, 32)}
            className="text-base font-semibold leading-6 text-[#374151]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  </section>
);

export default AboutUs;
