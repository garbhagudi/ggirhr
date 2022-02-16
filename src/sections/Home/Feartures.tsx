import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";

const Data = [
  {
    id: 1,
    feature: "lorem ipsum",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    icon: <AcademicCapIcon />,
  },
  {
    id: 2,
    feature: "lorem ipsum",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    icon: <AcademicCapIcon />,
  },
  {
    id: 3,
    feature: "lorem ipsum",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    icon: <AcademicCapIcon />,
  },
  {
    id: 4,
    feature: "lorem ipsum",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    icon: <AcademicCapIcon />,
  },
  {
    id: 5,
    feature: "lorem ipsum",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    icon: <AcademicCapIcon />,
  },
  {
    id: 6,
    feature: "lorem ipsum",
    describe: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    icon: <AcademicCapIcon />,
  },
];

const Feartures = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <section className="mx-auto container py-12 ">
          <div className="flex justify-center items-center flex-col">
            <div className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center text-gray-800">
              <h1>Features</h1>
            </div>
            <div className="pt-24 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-5 gap-x-4 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
              {Data.map((item) => (
                <div
                  className="cursor-pointer hover:shadow py-3 xl:px-4 rounded xl:w-96 md:w-60 w-56 flex justify-center items-center flex-col"
                  key={item.id}
                >
                  <div className="mb-6 md:h-16 md:w-16 w-12 h-12 text-brandBlue">
                    {item.icon}
                  </div>
                  <div className="text-gray-800 text-lg md:text-2xl font-semibold text-center">
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
