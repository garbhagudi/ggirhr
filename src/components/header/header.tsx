import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { About, Courses } from "components/header/popover";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="sticky top-0 z-50">
      <nav className="border-b pb-4 bg-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center align-middle cursor-pointer">
              <div className="flex-shrink-0 pt-4">
                <Link href="/" passHref>
                  <a>
                    <img
                      src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1644909568/logos/gg-logo_bg5gzc.png"
                      alt="logo"
                      className="h-full w-48 xl:w-64"
                    />
                  </a>
                </Link>
              </div>
              <div className="hidden xl:block">
                <div className="ml-16 flex items-baseline space-x-4 pt-4">
                  <Link href="/" passHref>
                    <span
                      className={
                        router.pathname == "/"
                          ? "bg-brandBlue text-white px-3 py-2 rounded-2xl text-sm"
                          : "text-gray-700 hover:bg-brandBlue px-3 py-2 rounded-2xl hover:text-white text-sm cursor-pointer"
                      }
                    >
                      Home
                    </span>
                  </Link>
                  <span className="text-gray-900 hover:bg-brandBlue hover:text-white rounded-2xl px-3 py-2 text-sm">
                    <About />
                  </span>
                  <span className="text-gray-900 hover:bg-brandBlue hover:text-white rounded-2xl px-3 py-2 text-sm">
                    <Courses />
                  </span>
                  <Link href="/events" passHref>
                    <span
                      className={
                        router.pathname == "/events"
                          ? "bg-brandBlue text-white px-3 py-2 rounded-2xl text-sm font-content"
                          : "text-gray-700 hover:bg-brandBlue px-3 py-2 rounded-2xl hover:text-white text-sm cursor-pointer"
                      }
                    >
                      Events & Webinars
                    </span>
                  </Link>
                  <Link href="/research" passHref>
                    <span
                      className={
                        router.pathname == "/research"
                          ? "bg-brandBlue text-white px-3 py-2 rounded-2xl text-sm font-content"
                          : "text-gray-700 hover:bg-brandBlue px-3 py-2 rounded-2xl hover:text-white text-sm cursor-pointer"
                      }
                    >
                      Research & Journals
                    </span>
                  </Link>
                  <span className="text-gray-900 hover:bg-brandBlue hover:text-white rounded-2xl px-3 py-2 text-sm">
                    <Link href="/blogs/page/1">Blogs</Link>
                  </span>
                  <Link href="/gg-care" passHref>
                    <span
                      className={
                        router.pathname == "/gg-care"
                          ? "bg-brandBlue text-white px-3 py-2 rounded-2xl text-sm font-content"
                          : "text-gray-700 hover:bg-brandBlue px-3 py-2 rounded-2xl hover:text-white text-sm cursor-pointer"
                      }
                    >
                      Contact Us
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex items-center justify-center xl:hidden">
              <button className="mt-4 mr-4">
                <a
                  href="#"
                  className="bg-brandBlue hover:bg-gray-800 text-white rounded-2xl px-3 py-2 text-xs font-bold"
                >
                  Contact Us
                </a>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gray-900 inline-flex items-center justify-center p-2 mt-4 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="xl:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href={"/"} passHref>
                  <a className="text-gray-800 hover:bg-brandBlue hover:text-white block px-3 py-2 rounded-md text-sm">
                    Home
                  </a>
                </Link>
                <span className="text-gray-800 hover:bg-brandBlue hover:text-white block px-3 py-2 rounded-md text-sm">
                  <About />
                </span>
                <span className="text-gray-800 hover:bg-brandBlue hover:text-white block px-3 py-2 rounded-md text-sm">
                  <Courses />
                </span>
                <span className="text-gray-800 hover:bg-brandBlue hover:text-white block px-3 py-2 rounded-md text-sm">
                  Events and Webinars
                </span>
                <span className="text-gray-800 hover:bg-brandBlue hover:text-white block px-3 py-2 rounded-md text-sm">
                  Research
                </span>
                <span className="text-gray-800 hover:bg-brandBlue hover:text-white block px-3 py-2 rounded-md text-sm">
                  Blogs
                </span>
                <a
                  href="#"
                  className="text-gray-800 hover:bg-brandBlue hover:text-white block px-3 py-2 rounded-md text-sm cursor-pointer"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Header;
