import React from "react";
import {
  MapIcon,
  AcademicCapIcon,
  LibraryIcon,
  GlobeIcon,
} from "@heroicons/react/solid";

const Data = [
  {
    id: 1,
    icon: <MapIcon />,
    stat: "450",
    describe: "Happy Couples",
  },
  {
    id: 2,
    icon: <AcademicCapIcon />,
    stat: "10+",
    describe: "Insurance Solutions",
  },
  {
    id: 3,
    icon: <LibraryIcon />,
    stat: "35+",
    describe: "experience",
  },
  {
    id: 4,
    icon: <GlobeIcon />,
    stat: "530",
    describe: "projects completed",
  },
];

const Stats = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl my-20 lg:mt-24 lg:mb-24">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Data.map((item) => (
            <div className="flex justify-center w-full py-6" key={item.id}>
              <span className="w-16 h-16 md:w-20 md:h-20 text-brandBlue">
                {item.icon}
              </span>
              <div className="text-gray-800 pl-6 w-1/2">
                <h1 className="font-bold text-xl md:text-2xl lg:text-5xl tracking-1px">
                  {item.stat}
                </h1>
                <h2 className="text-base lg:text-lg mt-2 leading-5 tracking-wide">
                  {item.describe}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
