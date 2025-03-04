import Image from "next/image";
import React from "react";

const Overview = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 xl:px-0 lg:px-12 md:py-12 py-9">
        <div className="lg:w-10/12 w-full">
          <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-4xl lg:leading-10 leading-9 mt-2 font-heading">
            Why GGIRHR
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            At GGIRHR, we have realized a severe shortage of trained clinicians,
            embryologists, and support staff in infertility, leading to
            compromised treatment for many infertile couples worldwide.
            GarbhaGudi Institute of Reproductive Health & Research (GGIRHR) is
            our venture to address this lacuna by offering advanced fellowship
            courses and short-term training courses, recognized by Rajiv Gandhi
            Institute of Health Sciences and Indian Medical Association, in
            Clinical ART, Embryology, and Obstetric Ultrasound that cater to the
            needs of a busy practitioner.
          </p>
        </div>

        <div className="lg:mt-14 sm:mt-10 mt-12">
          <Image
            className="rounded-xl w-screen"
            src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1650006732/GGIRHR/Images/Why_GGIRHR-min_o7ir0f.webp"
            alt="Infertility Training Institute in India"
            width={1200}
            height={700}
            priority={true}
          />
        </div>

        <div className="lg:mt-16 sm:mt-12 mt-10 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
          <div className="w-full xl:w-5/12 lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-heading">
              Our Story
            </h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-4">
              GarbhaGudi Institute of Reproductive Health & Research (GGIRHR)
              was established to provide premier quality reproductive medicine
              and infertility training to clinicians, embryologists,
              sonologists, and students with a science background, to name a
              few. We believe in training enthusiastic minds to excel in their
              desired field. Our infertility courses aim to impart systematic
              elucidation of all facets of the ART treatments, such as IVF,
              featuring hands-on IVF training and fellowship programs in
              Reproductive Medicine for postgraduate doctors. Moreover, GGIRHR’s
              courses are beneficial in providing insights into the ethical and
              economic implications of the treatment to equip every individual
              with full-fledged knowledge.
            </p>
          </div>
          <div className="lg:flex items-center w-full lg:w-1/2 ">
            <img
              className="w-full rounded-xl"
              src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1650006731/GGIRHR/Images/Our_Story-min_va1fno.webp"
              alt="people discussing on board"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
