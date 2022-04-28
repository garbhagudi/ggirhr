import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";

const Data = [
  {
    id: 1,
    feature: "Internal Ethics Comittee",
    describe: "Made of eminent and well-qualified members",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1651126722/GGIRHR/Icons/header%20icons%20svg/Internal_Ethics_Comittee_noe6ku.svg",
  },
  {
    id: 2,
    feature: "Full-fledged Research Lab",
    describe: "To work on innovative and path-breaking technologies",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1651126722/GGIRHR/Icons/header%20icons%20svg/Full-fledged_Research_Lab_fzjbvw.svg",
  },
  {
    id: 3,
    feature: "Expert Team",
    describe:
      "To help guide and ensure the research is headed in the right direction",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1651126722/GGIRHR/Icons/header%20icons%20svg/Expert_Team_uv6xei.svg",
  },
  {
    id: 4,
    feature: "Support Staff",
    describe:
      "To ensure the documentation, approvals, checks, audits and verifications",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1651126722/GGIRHR/Icons/header%20icons%20svg/Support_Staff_ic3gaa.svg",
  },
];

const Feartures = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <section className="mx-auto container py-12 ">
          <div className="flex justify-center items-center flex-col">
            <div className="lg:text-4xl md:text-5xl text-3xl text-brandDark leading-10 text-center font-bold font-heading">
              <h1>Research Wing</h1>
            </div>
            <h3 className="text-center max-w-3xl mx-auto font-semibold mt-4">
              The research wing of GGIRHR was set up to conduct various studies
              that can help in diagnosis, treatment, and improved success rates
              in ART procedures. In this context, GGIRHR has set up the
              following to assist its endeavours:
            </h3>
            <div className="pt-16 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 justify-center items-center xl:gap-y-8 gap-y-3 gap-x-4 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
              {Data.map((item) => (
                <div
                  className="cursor-pointer hover:shadow-2xl py-3 xl:px-2 rounded-3xl xl:w-96 md:max-w-xl w-56 flex justify-center items-center flex-col"
                  key={item.id}
                >
                  <div className="mb-6 md:h-16 md:w-16 w-12 h-12 text-brandBlue">
                    <img src={item.icon} alt={item.feature} />
                  </div>
                  <div className="text-gray-800 text-md md:text-xl font-semibold text-center">
                    <h2>{item.feature}</h2>
                  </div>
                  <div className="text-gray-600 mt-2 text-sm md:text-lg text-center ">
                    <p>{item.describe}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Feartures;
