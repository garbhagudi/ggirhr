import React from "react";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-wrap mt-16">
        <div className="w-full lg:w-5/12 px-4">
          <div className="hero-content md:mt-20">
            <h1 className=" text-dark font-bold text-4xl sm:text-[42px] lg:text-[40px] xl:text-[42px] leading-snug mb-3 font-heading">
              Introduction
            </h1>
            <p className="text-base mb-8 text-body-color max-w-2xl">
              GGIRHR - the academic and training unit of GarbhaGudi is headed by
              a renowned infertility expert – Dr Asha S Vijay, with a vision to
              establish a robust research platform that conducts various studies
              that can help in diagnosis, treatment, and improved success rates
              in ART procedures. Dr Muhammed Asif and Dr Damodara Gowda play
              their roles as Chief Research Officer and Associate Research
              Director in GGIRHR’s research wing. <br />
              <br />
              The research wing of GGIRHR was set up to conduct various studies
              that can help in diagnosis, treatment, and improved success rates
              in ART procedures. The reach of GarbhaGudi IVF Centre, due to its
              multiple branches and high caseload, helps the team analyse a
              significant amount of data and arrive at actionable insights to
              help address the growing infertility issue in India.
            </p>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/12 px-4"></div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="lg:text-right lg:ml-auto">
            <div className="relative inline-block z-10 pt-11 lg:pt-0">
              <img
                src="http://placehold.jp/550x550.png"
                alt="hero"
                className="max-w-full lg:ml-auto rounded-lg rounded-tl-[48px]"
              />
              <span className="absolute -left-8 -bottom-8 z-[-1]">
                <svg
                  width="93"
                  height="93"
                  viewBox="0 0 93 93"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#249dc1" />
                  <circle cx="2.5" cy="24.5" r="2.5" fill="#249dc1" />
                  <circle cx="2.5" cy="46.5" r="2.5" fill="#249dc1" />
                  <circle cx="2.5" cy="68.5" r="2.5" fill="#249dc1" />
                  <circle cx="2.5" cy="90.5" r="2.5" fill="#249dc1" />
                  <circle cx="24.5" cy="2.5" r="2.5" fill="#249dc1" />
                  <circle cx="24.5" cy="24.5" r="2.5" fill="#249dc1" />
                  <circle cx="24.5" cy="46.5" r="2.5" fill="#249dc1" />
                  <circle cx="24.5" cy="68.5" r="2.5" fill="#249dc1" />
                  <circle cx="24.5" cy="90.5" r="2.5" fill="#249dc1" />
                  <circle cx="46.5" cy="2.5" r="2.5" fill="#249dc1" />
                  <circle cx="46.5" cy="24.5" r="2.5" fill="#249dc1" />
                  <circle cx="46.5" cy="46.5" r="2.5" fill="#249dc1" />
                  <circle cx="46.5" cy="68.5" r="2.5" fill="#249dc1" />
                  <circle cx="46.5" cy="90.5" r="2.5" fill="#249dc1" />
                  <circle cx="68.5" cy="2.5" r="2.5" fill="#249dc1" />
                  <circle cx="68.5" cy="24.5" r="2.5" fill="#249dc1" />
                  <circle cx="68.5" cy="46.5" r="2.5" fill="#249dc1" />
                  <circle cx="68.5" cy="68.5" r="2.5" fill="#249dc1" />
                  <circle cx="68.5" cy="90.5" r="2.5" fill="#249dc1" />
                  <circle cx="90.5" cy="2.5" r="2.5" fill="#249dc1" />
                  <circle cx="90.5" cy="24.5" r="2.5" fill="#249dc1" />
                  <circle cx="90.5" cy="46.5" r="2.5" fill="#249dc1" />
                  <circle cx="90.5" cy="68.5" r="2.5" fill="#249dc1" />
                  <circle cx="90.5" cy="90.5" r="2.5" fill="#249dc1" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
