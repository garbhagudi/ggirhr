import React from "react";
import Link from "next/link";

const Data = [
  {
    id: 1,
    Name: "IMA-AMS Fellowship in Infertility",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ratione cupiditate rem id tempore aut veritatis corporis reiciendis eius assumenda laudantium, aliquid praesentium, recusandae deleniti.",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650006731/GGIRHR/Images/IMA-AMS_Fellowship_in_Infertility_Web-min_qsenpy.jpg",
  },
  {
    id: 2,
    Name: "RGUHS Fellowship in Reproductive Medicine",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ratione cupiditate rem id tempore aut veritatis corporis reiciendis eius assumenda laudantium, aliquid praesentium, recusandae deleniti.",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650006732/GGIRHR/Images/RGUHS_Fellowship_in_Reproductive_Medicine_Web-min_divc6o.jpg",
  },
  {
    id: 3,
    Name: "Institutional Fellowship in Reproductive Medicine",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ratione cupiditate rem id tempore aut veritatis corporis reiciendis eius assumenda laudantium, aliquid praesentium, recusandae deleniti.",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650006731/GGIRHR/Images/Institutional_Fellowship_in_Reproductive_Medicine_Web-min_jigtbe.jpg",
  },
  {
    id: 4,
    Name: "Non-Resident Fellowship in Infertility",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ratione cupiditate rem id tempore aut veritatis corporis reiciendis eius assumenda laudantium, aliquid praesentium, recusandae deleniti.",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650006732/GGIRHR/Images/Non-Resident_Fellowship_in_Infertility_Web-min_xiatrk.jpg",
  },
  {
    id: 5,
    Name: "Comprehensive Ultrasound Scan Training",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ratione cupiditate rem id tempore aut veritatis corporis reiciendis eius assumenda laudantium, aliquid praesentium, recusandae deleniti.",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650006731/GGIRHR/Images/Comprehensive_Ultrasound_Scan_Training_Web-min_glpnij.jpg",
  },
  {
    id: 6,
    Name: "Institutional Diploma in Embryology",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ratione cupiditate rem id tempore aut veritatis corporis reiciendis eius assumenda laudantium, aliquid praesentium, recusandae deleniti.",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650006732/GGIRHR/Images/Regular_Embryology_Web-min_dnpmda.jpg",
  },
];

const Features = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-7xl px-4 xl:px-0 py-4 mx-auto">
        <div className="flex flex-wrap w-full mb-4 p-4">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-4xl font-bold mb-2 text-gray-900 text-center font-heading">
              Courses
            </h1>
            <h3 className="text-center max-w-3xl mx-auto font-semibold mt-4 text-gray-900">
              Check out our most popular courses below
            </h3>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
          {Data.map((item) => (
            <div className="hover:shadow-2xl rounded-3xl" key={item.id}>
              <div className="overflow-hidden">
                <img
                  className="rounded-t-3xl"
                  src={item.image}
                  alt={item.Name}
                />
                <div className="border-r-2 border-l-2 border-b-2 rounded-b-3xl bg-gray-50">
                  <h2 className="text-lg text-gray-900 font-medium title-font py-4 md:ml-2 text-center md:text-left">
                    {item.Name}
                  </h2>
                  <p className="leading-relaxed text-base md:ml-2 text-center md:text-left mb-6 ">
                    {item.details.slice(0, 80)}...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-10">
        <Link href="/courses">
          <a className="px-4 py-3 bg-brandBlue hover:bg-brandBlueDark3 text-white font-semibold rounded-xl">
            See All Courses
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Features;