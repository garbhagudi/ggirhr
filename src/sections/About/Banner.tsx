export default function Banner() {
  return (
    <div className="mx-auto">
      <img
        className="mb-10 object-cover object-center"
        alt="hero"
        src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1650006731/GGIRHR/Images/About_us-min_fofilh.jpg"
      />
      <section className="text-gray-600 body-font">
        <div className="flex pb-16 items-center justify-center flex-col">
          <div className="max-w-7xl lg:w-2/3 w-full px-3 sm:px-0">
            <h1 className="text-center title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-heading">
              About Us
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
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 font-heading">
              Affiliations
            </h1>
            <p className="text-lg mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              ad illum aut consequatur delectus velit officiis cum eveniet sequi
              excepturi?
            </p>
          </div>
          <div className="flex flex-wrap m-4 -mt-16">
            {Data.map((items) => (
              <div className="p-4 md:w-1/4" key={items.id}>
                <div className="flex rounded-lg bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full bg-brandBlue text-white flex-shrink-0 overflow-hidden">
                      <img src={items.icon} alt={items.organisation} />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      {items.organisation}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      {items.description}
                    </p>
                    <a
                      href={items.link}
                      className="mt-3 text-brandBlue hover:text-brandBlueDark3 inline-flex items-center"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
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
    icon: "http://placehold.jp/64x64.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/about/affiliations/ima-ams",
  },
  {
    id: 2,
    organisation: "Rajiv Gandhi University of Health Sciences",
    icon: "http://placehold.jp/64x64.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/about/affiliations/rguhs",
  },
  {
    id: 3,
    organisation: "NITTE",
    icon: "http://placehold.jp/64x64.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/about/affiliations/nitte",
  },
  {
    id: 4,
    organisation: "Bangalore Bio Innovation Centre",
    icon: "http://placehold.jp/64x64.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/about/affiliations/bbc",
  },
];
