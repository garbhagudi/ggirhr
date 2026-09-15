import React from "react";
import Image from "next/image";
import Chip from "components/ui/Chip";
import SectionShell from "components/ui/SectionShell";
import { BODY_PARAGRAPH_CLASSES } from "sections/About/typography";

const AWARD_IMAGE =
  "https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegu8o901qj06prxjqp7ktw";

const LEAD_PARAGRAPH =
  "Dr Asha S Vijay’s GarbhaGudi IVF Centre bagged the prestigious title - “Best IVF and Infertility Training Centre in India” by the National Quality Achievement Awards in 2021. This is truly an ensemble award and a great honour for Dr Asha and her team, whose mutual goal is to serve their best to fulfill the couples’ wish of building a family. In the journey of treating infertility, Dr. Asha S Vijay realized the inadequacy of trained clinicians, embryologists, and support staff to treat infertility. This led to the GarbhaGudi Institute of Reproductive Health nd Research (GGIRHR) – a learning and training initiative by GarbhaGudi IVF Centre.";

const PARAGRAPHS = [
  "To bring a revolutionary change in infertility education, courses offered at GGIRHR provide broad exposure to complex cases to gain experience in treating various aspects of infertility. GGIRHR provides its students an opportunity to work with senior doctors and embryologists to learn about different approaches used by the experts in treating infertility. The training faculty at GGIRHR includes renowned infertility specialists, and the classes are interactive with feedback from the training faculty. In addition, a cloud-based library provides access to a wide range of cases to enhance the knowledge and skills to treat infertility.",
  "Furthermore, during the pandemic outbreak, we adapted to the new norm of providing exceptional online training for a wide range of courses related to infertility and IVF. The courses include eligible training candidates in Embryology, Andrology, IUI, Ultrasound scanning, and much more. The ultrasound scan training at GGIRHR is unique among the few worthy ones available in India. This is because of our association with one of India’s best ultrasonologist – Dr. Supriya Seshadri. The comprehensive hands-on is provided on one of the world’s best simulators. Learning happens through on-patient experience with hundreds of cases that may be difficult to encounter in daily practice.",
  "GGIRHR believes in quality education with limited intake in each batch, making it easier for our faculty to provide utmost attention to every person. The comprehensive training provided at GGIRHR ensures students are competent and confident at the end of the course to consult and perform procedures related to infertility. We are also affiliated with IMA and RGUHS to provide practical infertility training courses and continuously strive toward sharing knowledge and training more and more individuals on some of the hard-to-learn skills. The glory of all our outstanding efforts is our recognition as India's Best IVF and Infertility Training Centre in India.",
  "We are humbled and extremely thankful to every individual who’s been a part of this journey and share the credibility of this success with the entire team of GGIRHR, whose relentless services made this dream come alive!",
];

const Award = () => (
  <SectionShell as="section" className="bg-white py-[60px] sm:py-12 lg:py-24">
    <div className="bg-[#D2EEF9] rounded-[20px] px-5 py-8 sm:px-8 sm:py-10 lg:px-[45px] lg:py-10">
      <Chip variant="pink" size="sm" className="px-4 tracking-widest">
        AWARD
      </Chip>

      <h2 className="font-heading text-[28px] sm:text-[36px] lg:text-[46px] leading-tight lg:leading-[49px] text-black mt-5 lg:mt-6">
        Awarded as Best IVF and{" "}
        <span className="text-[#1DA8E1] font-bold">
          Infertility Training Centre in India
        </span>
      </h2>

      <div className="mt-6 flex flex-col lg:flex-row lg:items-start gap-5 lg:gap-[35px]">
        <Image
          src={AWARD_IMAGE}
          alt="GGIRHR awarded Best IVF and Infertility Training Centre in India"
          width={355}
          height={179}
          sizes="(min-width: 1024px) 355px, 100vw"
          className="w-full h-auto aspect-[335/161] object-cover rounded-[20px] sm:aspect-[355/179] lg:w-[355px] lg:shrink-0 lg:rounded-[19px]"
        />
        <p className={BODY_PARAGRAPH_CLASSES}>{LEAD_PARAGRAPH}</p>
      </div>

      <div className="flex flex-col gap-5 mt-5">
        {PARAGRAPHS.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className={BODY_PARAGRAPH_CLASSES}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  </SectionShell>
);

export default Award;
