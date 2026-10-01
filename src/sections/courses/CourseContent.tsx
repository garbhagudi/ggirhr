import React from "react";
import Image from "next/image";
import Chip from "components/ui/Chip";
import Glow from "components/ui/Glow";
import RibbonWave from "components/ui/RibbonWave";

type Topic = {
  heading: string;
  points: string[];
  image: { src: string; width: number; height: number };
};

// Design order: rows alternate text-left / image-left on desktop.
const TOPICS: Topic[] = [
  {
    heading: "Clinical Embryology",
    points: [
      "Introduction to Assisted Reproductive Technology (ART)",
      "Gametogenesis: Folliculogenesis, Oogenesis, Spermatogenesis",
      "Fertilization: Oocyte retrieval, sperm-oocyte interaction, artificial oocyte activation",
      "Embryo Quality Assessment and Grading",
      "Embryo Culture and Time-Lapse Imaging Techniques",
    ],
    image: { src: "/images/courses/content-embryology.png", width: 337, height: 305 },
  },
  {
    heading: "Semenology and Cryopreservation",
    points: [
      "Spermatogenesis and Related Disorders",
      "Semen Analysis and Computer-Aided Sperm Assessment (CASA)",
      "Azoospermia: Causes, Diagnosis, and Sperm Retrieval Techniques",
      "Semen Preparation, Sperm Function Tests, and DNA Fragmentation Assessment",
      "Cryopreservation of Gametes, Embryos, and Ovarian/Testicular Tissue",
    ],
    image: { src: "/images/courses/content-semenology.png", width: 470, height: 369 },
  },
  {
    heading: "Genetics in Infertility",
    points: [
      "Molecular Biology and Genetic Medicine",
      "Preimplantation Genetic Testing (PGT-A, PGT-M, PGT-SR)",
      "Genetic Karyotyping, PCR, FISH, NGS, CGH",
      "Advanced ART Techniques: Stem Cells, Cloning, Gene Editing, Automated IVF",
      "Genetic Counseling and Management of Genetic Disorders",
      "Third-Party Reproduction: Donor Screening, Surrogacy",
    ],
    image: { src: "/images/courses/content-genetics.png", width: 502, height: 325 },
  },
  {
    heading: "Assisted Reproductive Technology (ART)",
    points: [
      "ART Laboratory Setup, Equipment Handling, and Quality Control",
      "IVF and Embryo Transfer Techniques",
      "Micromanipulation: ICSI, IMSI, PICSI",
      "Ethical Considerations and ART Regulations (ICMR, HFEA, ASRM Guidelines)",
      "ART Counselling and Follow-Up Protocols",
    ],
    image: { src: "/images/courses/content-art-lab.png", width: 426, height: 391 },
  },
];

// Short "Label:" prefixes (Gametogenesis:, Fertilization:, …) are bold white in
// the design; longer colons inside a sentence are left as plain text.
const Point = ({ text }: { text: string }) => {
  const match = text.match(/^([^:]{1,20}):\s(.+)$/);
  if (!match) return <>{text}</>;
  return (
    <>
      <span className="font-bold text-white">{match[1]}:</span> {match[2]}
    </>
  );
};

const TopicBlock = ({ topic }: { topic: Topic }) => (
  <div>
    <h3 className="mb-3 text-left text-[20px] font-bold leading-tight text-white lg:mb-4 lg:text-[32px]">
      {topic.heading}
    </h3>
    <ul className="flex flex-col gap-1.5 lg:gap-2">
      {topic.points.map((point) => (
        <li
          key={point}
          className="text-left text-[13px] font-semibold leading-5 text-[#DEDEDE] lg:text-base lg:leading-[30px]"
        >
          <Point text={point} />
        </li>
      ))}
    </ul>
  </div>
);

const TopicRow = ({ topic, imageLeft }: { topic: Topic; imageLeft: boolean }) => (
  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-[74px]">
    <div
      className={`order-first flex justify-center ${
        imageLeft
          ? "lg:w-[470px] lg:shrink-0"
          : "lg:order-last lg:flex-1"
      }`}
    >
      <Image
        src={topic.image.src}
        alt=""
        aria-hidden="true"
        width={topic.image.width}
        height={topic.image.height}
        sizes={`(min-width: 1024px) ${topic.image.width}px, 65vw`}
        className="h-auto w-[65%] max-w-[260px] lg:w-auto lg:max-w-full"
      />
    </div>
    <div className={imageLeft ? "lg:flex-1" : "lg:ml-[53px] lg:w-[592px] lg:shrink-0"}>
      <TopicBlock topic={topic} />
    </div>
  </div>
);

const CourseContent = () => (
  <section className="relative overflow-hidden bg-[#1A97CA] pb-20 pt-[60px] font-primary lg:py-[100px]">
    <Glow className="hidden lg:block -z-0 left-1/2 top-[568px] h-[1083px] w-[1083px] -translate-x-1/2 bg-[rgba(118,180,228,0.51)] blur-[300px]" />

    <RibbonWave
      width={240}
      height={94}
      className="absolute left-5 top-6 z-10 w-[80px] -rotate-[18.14deg] lg:left-[138px] lg:top-[46px] lg:w-[240px]"
    />

    <div className="relative z-10 flex flex-col items-start px-5 lg:items-center lg:px-0">
      <Chip
        variant="glass"
        className="!px-4 !py-2 !text-[12px] font-bold uppercase !tracking-[0.1em] shadow-[0_4px_14px_rgba(0,0,0,0.1)] lg:!py-3 lg:!text-[15px]"
      >
        Content
      </Chip>
      <h2 className="mt-3 text-[23px] font-normal leading-tight text-white lg:mt-6 lg:text-[46px] lg:leading-[50px]">
        Course <span className="font-bold">Content</span>
      </h2>
    </div>

    <div className="relative z-10 mt-10 flex flex-col gap-14 px-5 lg:mx-auto lg:mt-[70px] lg:max-w-[1250px] lg:gap-20 lg:px-0">
      {TOPICS.map((topic, i) => (
        <TopicRow key={topic.heading} topic={topic} imageLeft={i % 2 === 1} />
      ))}
    </div>
  </section>
);

export default CourseContent;
