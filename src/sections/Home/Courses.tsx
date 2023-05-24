import React from "react";
import Link from "next/link";

const Courses = ({ Data }) => {
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
            <Link
              href={`/courses/${item.slug}`}
              passHref
              key={item.id}
              className="transition-all duration-150 hover:-translate-x-2 hover:-translate-y-2"
            >
              <div className="hover:shadow-2xl rounded-3xl cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    className="rounded-t-3xl"
                    src={item?.courseImage?.url}
                    alt={item?.title}
                  />
                  <div className="border-r-2 border-l-2 border-b-2 rounded-b-3xl bg-gray-50 h-20 flex items-center justify-center md:justify-start">
                    <h2 className="text-gray-900 font-heading font-bold py-4 md:ml-2 md:text-left">
                      {item?.title}
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="text-center mt-10">
        <Link href="/courses">
          <div className="px-4 py-3 w-44 mx-auto bg-brandBlue hover:bg-brandBlueDark3 text-white font-semibold rounded-xl">
            See All Courses
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Courses;
