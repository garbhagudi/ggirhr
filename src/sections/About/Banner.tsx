import Image from "next/image";

export default function Banner() {
  return (
    <div className="mx-auto">
      <Image
        className="mb-4 object-cover object-center w-screen"
        alt="Top infertility training organizations in india"
        src="https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegu2g801pf06prsgnwsafv"
        width={800}
        height={500}
        sizes="(max-width: 640px) 90vw, 100vw"
        priority={true}
      />

      <section className="text-gray-600 body-font">
        <div className="flex pb-4 items-center justify-center flex-col">
          <div className="max-w-7xl lg:w-2/3 w-full px-3 sm:px-0">
            <h1 className="py-8 text-center text-4xl font-heading font-bold text-brandDark">
              About GGIRHR
            </h1>
            <p className="mb-8 leading-relaxed text-lg ">
              GarbhaGudi Institute of Reproductive Health and Research (GGIRHR)
              is one of India’s premier infertility training organizations. It
              started in 2018 and is headed by Dr. Asha S Vijay, the honorable
              dean and scientific director of GGIRHR.
            </p>
            <p className="mb-8 leading-relaxed text-lg">
              GGIRHR intends to create a renaissance in training doctors and
              embryologists in the field of fertility. Since it is a part of the
              GarbhaGudi group, it has many advantages that are not available to
              other training organizations. GarbhaGudi IVF Centre, the mother
              company of GGIRHR, is known for its great success rates, ethical
              treatment, affordable costs, world-class infrastructure, and
              humane touch. With the backing of such a capable and robust
              organization, GGIRHR is well prepared to provide the best-in-class
              training to clinicians, embryologists andrology technicians, and
              paramedical staff to prepare them for the challenges of
              infertility treatment.
            </p>
            <p className="mb-8 leading-relaxed text-lg">
              Students at GGIRHR can get to learn the tips, tricks, processes,
              protocols, and treatment approaches followed at GarbhaGudi IVF,
              which has given such unbelievable success rates. Training will be
              provided by senior faculties who are well versed in their field of
              specialization. Teaching staff at GGIRHR possess profound
              knowledge and are not just academicians. So the knowledge they
              share will be efficient, practical, and something that can be
              implemented immediately.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const Data = [
  {
    id: 1,
    organisation: "IMA - Academy of Medical Specialities",
    icon: "https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegta2901m806pr0hy0gdjz",
    description: "IMA-AMS Fellowship in Infertility",
    // link: "/about/affiliations/ima-ams",
  },
  {
    id: 2,
    organisation: "Rajiv Gandhi University of Health Sciences",
    icon: "https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegtkhp01kl06pngex8ubkk",
    description: "RGUHS Fellowship in Reproductive Medicine",
    // link: "/about/affiliations/rguhs",
  },
  {
    id: 3,
    organisation: "NITTE (Deemed to be University)",
    icon: "https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegta2s01mc06prx0b64ijo",
    description: "PG Diploma in clinical Embryology ",
    // link: "/about/affiliations/nitte",
  },
  {
    id: 4,
    organisation: "Bangalore Bio Innovation Centre",
    icon: "https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegta1q01m406prg8y1xt5o",
    description: "PG Diploma in clinical Embryology",
    // link: "/about/affiliations/bbc",
  },
];
