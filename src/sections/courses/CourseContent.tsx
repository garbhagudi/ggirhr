import React from "react";
import Chip from "components/ui/Chip";
import Glow from "components/ui/Glow";

type Topic = {
  heading: string;
  points: string[];
};

const LEFT_COLUMN: Topic[] = [
  {
    heading: "Clinical Embryology",
    points: [
      "Introduction to Assisted Reproductive Technology (ART)",
      "Gametogenesis: Folliculogenesis, Oogenesis, Spermatogenesis",
      "Fertilization: Oocyte retrieval, sperm-oocyte interaction, artificial oocyte activation",
      "Embryo Quality Assessment and Grading",
      "Embryo Culture and Time-Lapse Imaging Techniques",
    ],
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
  },
];

const RIGHT_COLUMN: Topic[] = [
  {
    heading: "Semenology and Cryopreservation",
    points: [
      "Spermatogenesis and Related Disorders",
      "Semen Analysis and Computer-Aided Sperm Assessment (CASA)",
      "Azoospermia: Causes, Diagnosis, and Sperm Retrieval Techniques",
      "Semen Preparation, Sperm Function Tests, and DNA Fragmentation Assessment",
      "Cryopreservation of Gametes, Embryos, and Ovarian/Testicular Tissue",
    ],
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
  },
];

const TopicBlock = ({ topic }: { topic: Topic }) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-white">
      {topic.heading}
    </h3>
    <ul className="flex flex-col gap-3">
      {topic.points.map((point) => (
        <li
          key={point}
          className="text-[15px] sm:text-base leading-[1.6] text-[#DEDEDE] text-justify"
        >
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const CourseContent = () => (
  <section className="relative overflow-hidden bg-[#1A97CA] py-16 sm:py-20 lg:py-24">
    {/* Simplified ambient accents in place of the Figma's full freepik lab-scene
        illustration (DNA strands, microscopes, petri dishes, etc.), which isn't
        practical to hand-reproduce as maintainable code. */}
    <Glow className="hidden lg:block -z-0 w-[600px] h-[600px] -left-40 -top-40 bg-[rgba(118,180,228,0.35)] blur-[200px]" />
    <Glow className="hidden lg:block -z-0 w-[500px] h-[500px] -right-40 bottom-0 bg-[rgba(186,104,200,0.15)] blur-[180px]" />

    <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col items-center gap-4">
      <Chip variant="glass" size="sm">
        Content
      </Chip>
      <h2 className="font-heading text-[32px] sm:text-[38px] lg:text-[46px] leading-tight text-white text-center">
        Course Content
      </h2>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
      <div className="flex flex-col gap-12">
        {LEFT_COLUMN.map((topic) => (
          <TopicBlock key={topic.heading} topic={topic} />
        ))}
      </div>
      <div className="flex flex-col gap-12">
        {RIGHT_COLUMN.map((topic) => (
          <TopicBlock key={topic.heading} topic={topic} />
        ))}
      </div>
    </div>
  </section>
);

export default CourseContent;
