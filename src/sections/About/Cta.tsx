import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <div>
      <div className="bg-brandBluelite4">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">Ready to begin?</span>
            <span className="block text-brandBlue">
              Contact us for a free session.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/gg-care">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brandBlue hover:bg-brandBlueDark3">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
