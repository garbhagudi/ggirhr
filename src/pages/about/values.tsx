import CTA from "components/cta";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const values = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Our Values | GGIRHR</title>
        <meta name="title" content="Our Values | GGIRHR" />
        <meta
          name="description"
          content="Provide learners with a specialized reproductive health and infertility education of exceptional quality and prepare every individual to serve the underserved."
        />

        {/* Open Graph / Facebook */}

        <meta property="og:title" content="Our Values | GGIRHR" />
        <meta property="og:site_name" content="GGIRHR" />
        <meta property="og:url" content="https://ggirhr.com" />
        <meta
          property="og:description"
          content="Provide learners with a specialized reproductive health and infertility education of exceptional quality and prepare every individual to serve the underserved."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1651644127/GGIRHR/SEO/SEO_Value-min_bhe13y.jpg"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ggirhr" />
        <meta name="twitter:title" content="Our Values | GGIRHR" />
        <meta
          name="twitter:description"
          content="Provide learners with a specialized reproductive health and infertility education of exceptional quality and prepare every individual to serve the underserved."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1651644127/GGIRHR/SEO/SEO_Value-min_bhe13y.jpg"
        />
      </Head>
      <div className="w-full">
        <section className="relative pt-12 max-w-7xl mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-6/12 lg:w-5/12 ml-auto mr-auto px-2 md:px-7 mt-4 sm:mt-16">
              <Image
                alt="..."
                className="max-w-full rounded-3xl shadow-lg mb-10"
                src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1650006732/GGIRHR/Images/Our_Values-min_gccmfd.jpg"
                width={1200}
                height={800}
                sizes="(max-width: 640px) 90vw, 50vw"
                loading="lazy"
              />
            </div>

            <div className="w-full md:w-6/12 lg:w-6/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <h3 className="text-4xl font-semibold font-heading mt-4 underline">
                  Our Values
                </h3>
                <ul className="list-disc mt-6 pl-4 md:pl-0 text-xl md:text-sm lg:text-xl">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <h4 className="text-blueGray-500">
                          Fidelity to our mission and a strong and confident
                          belief in our work.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <h4 className="text-blueGray-500">
                          Excellence in the progression of education, research,
                          and patient care.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <h4 className="text-blueGray-500">
                          Integrity to hold the highest standards of exemplary
                          ethics and morality.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <h4 className="text-blueGray-500">
                          Diversity in actions that appreciate all individuals.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <h4 className="text-blueGray-500">
                          Cooperation manifested by institutional communication
                          and collaboration.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <h4 className="text-blueGray-500">
                          Respect for people associated with, or come in contact
                          with, GarbhaGudi Institute of Reproductive Health &
                          Research (GGIRHR): staff, students, residents,
                          fellows, faculties, communities, patients, and
                          families.
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <CTA />
      </div>
    </div>
  );
};

export default values;
