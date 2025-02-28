import Image from "next/image";

export default function Banner() {
  return (
    <div className="mx-auto">
      <Image
        className="mb-4 object-cover object-center w-screen"
        alt="Top infertility training organizations in india"
        src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1740119156/GGIRHR/Images/About_us-min_fofilh.webp"
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
      <section className="text-brandDark">
        <div className="container px-5 mx-auto">
          <div className="w-full mb-8">
            <h1 className="text-center text-4xl font-heading font-bold text-brandDark">
              Affiliations
            </h1>
          </div>
          <div className="flex flex-wrap m-4 max-w-4xl mx-auto">
            {Data.map((items) => (
              <div className="p-4 md:w-2/4 lg:w-2/4 mx-auto" key={items.id}>
                <div className="flex rounded-2xl w-96 sm:w-auto bg-gray-100 p-8 flex-col h-44">
                  <div className="flex items-center mb-3">
                    <div className="w-28 h-28 mr-3 inline-flex items-center justify-center rounded-full bg-brandBlue text-white flex-shrink-0 overflow-hidden">
                      <Image
                        src={items.icon}
                        alt={items.organisation}
                        width={112}
                        height={112}
                        sizes="(max-width: 640px) 90vw, 100vw"
                        loading="lazy"
                      />
                    </div>

                    <h2 className="text-gray-900 text-xl font-semibold">
                      {items.organisation}
                    </h2>
                  </div>
                  {/* <div className="flex-grow">
                    <p className="text-center font-semibold text-sm">
                      {items.description}
                    </p>
                  </div> */}
                </div>
              </div>
            ))}
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
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650091609/GGIRHR/Icons/header%20icons%20svg/IMA_Logo_dhyw55.svg",
    description: "IMA-AMS Fellowship in Infertility",
    // link: "/about/affiliations/ima-ams",
  },
  {
    id: 2,
    organisation: "Rajiv Gandhi University of Health Sciences",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650091609/GGIRHR/Icons/header%20icons%20svg/RGUHS_Logo_xix5k6.svg",
    description: "RGUHS Fellowship in Reproductive Medicine",
    // link: "/about/affiliations/rguhs",
  },
  {
    id: 3,
    organisation: "NITTE (Deemed to be University)",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650091609/GGIRHR/Icons/header%20icons%20svg/NITTE_Logo_iy1djy.svg",
    description: "PG Diploma in clinical Embryology ",
    // link: "/about/affiliations/nitte",
  },
  {
    id: 4,
    organisation: "Bangalore Bio Innovation Centre",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650091609/GGIRHR/Icons/header%20icons%20svg/Bnglr_Bio_Inn_Logo_luugz3.svg",
    description: "PG Diploma in clinical Embryology",
    // link: "/about/affiliations/bbc",
  },
];
