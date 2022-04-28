import { PhoneIcon } from "@heroicons/react/solid";
import Link from "next/link";
const Cta = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl font-heading">
          <span className="block text-brandBlue">Ready to get started?</span>
          <span className="block text-brandDark text-xl md:text-2xl">
            We&apos;re here to provide information, advice, support.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="/gg-care">
              <a
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent font-content text-base font-medium rounded-md text-white bg-brandBlue hover:bg-brandBlueLite3"
              >
                Contact Us
              </a>
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="https://wa.me/918884183338?text=Hi."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent font-content text-base font-medium rounded-md text-brandBlue bg-white hover:bg-pink-50"
            >
              <PhoneIcon className="w-5 h-5" />{" "}
              <span className="ml-2">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
