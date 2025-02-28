import React from "react";
import Head from "next/head";
import Image from "next/image";

const VisionMission = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Vision and Mission | GGIRHR</title>
        <meta name="title" content="Vision and Mission | GGIRHR" />
        <meta
          name="description"
          content="Provide learners with a specialized reproductive health and infertility education of exceptional quality and prepare every individual to serve the underserved."
        />

        {/* Open Graph / Facebook */}

        <meta property="og:title" content="Vision and Mission | GGIRHR" />
        <meta property="og:site_name" content="GGIRHR" />
        <meta property="og:url" content="https://ggirhr.com" />
        <meta
          property="og:description"
          content="Provide learners with a specialized reproductive health and infertility education of exceptional quality and prepare every individual to serve the underserved."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1651644127/GGIRHR/SEO/SEO_Vision_Mission-min_kdnnsz.jpg"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ggirhr" />
        <meta name="twitter:title" content="Vision and Mission | GGIRHR" />
        <meta
          name="twitter:description"
          content="Provide learners with a specialized reproductive health and infertility education of exceptional quality and prepare every individual to serve the underserved."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1651644127/GGIRHR/SEO/SEO_Vision_Mission-min_kdnnsz.jpg"
        />
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <h2 className="title-font text-3xl font-heading font-semibold text-brandliteGray mt-6 mb-3">
                Vision
              </h2>
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="GGIRHR Vision"
                  className="object-cover object-center mb-2"
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1740119787/About/1201x501_Vision_c6ds1h.webp"
                  width={1201}
                  height={501}
                  sizes="(max-width: 640px) 90vw, 100vw"
                  priority={false}
                />
              </div>

              <p className="leading-relaxed text-lg font-content text-left text-brandDark mt-2">
                GGIRHR’s mission is to provide learners with a specialized
                reproductive health and infertility education of exceptional
                quality and prepare every individual to serve the underserved.
                Special attention is directed to teaching and research
                activities, including CME programs and initiatives. We also
                strive to empower doctors and other medical professionals to
                deliver the highest quality patient care and prepare the next
                generation of skilled clinical and scientific leaders.
              </p>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <h2 className="title-font text-3xl text-brandliteGray mt-6 mb-3 font-heading font-semibold">
                Mission
              </h2>
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="GGIRHR Mission"
                  className="object-cover object-center mb-2"
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1740119971/About/1201x501_Mission_wcctgt.webp"
                  width={1201}
                  height={501}
                  sizes="(max-width: 640px) 90vw, 100vw"
                  priority={false}
                />
              </div>

              <p className="leading-relaxed font-content text-lg text-left text-brandDark mt-2">
                The goal of GGIRHR is to enhance our global credit as a
                reproductive health university, recognized for the excellence of
                our teaching, research, and service. We will endeavour to be a
                world leader in the training of competent, compassionate doctors
                and other health professionals for serving humanity. In
                addition, we envision that we will be a unique, preeminent
                research-intensive medical university, transforming health
                through discovery and lifelong learning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;
