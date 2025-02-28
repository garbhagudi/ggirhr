import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const CTA = (props: Props) => {
  return (
    <div className=" mx-auto max-w-7xl py-12 px-2 sm:px-0">
      <div className="w-full flex justify-center">
        <div className="w-full md:w-11/12 xl:max-w-7xl bg-gradient-to-r from-brandBlueLite3 to-brandBlueDark2 p-10 rounded-3xl">
          <div>
            <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
              <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                <div>
                  <h1
                    role="heading"
                    className="text-xl font-heading md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center"
                  >
                    Get Mentored by India&apos;s Leading Fertility Specialists
                  </h1>
                </div>
                <button
                  role="button"
                  aria-label="Join the community"
                  className="mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-brandBlueDark3 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
                >
                  <Link href="/gg-care"> Join Us </Link>
                </button>
              </div>
              <div className="md:w-4/12 w-2/3">
                <Image
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/q_65/v1649334670/GGIRHR/Images/sir_56_rk3ka9.webp"
                  alt="cartoon avatars"
                  width={400}
                  height={300}
                  quality={65}
                  sizes="(max-width: 768px) 66vw, 33vw"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
