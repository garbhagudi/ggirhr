import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  AcademicCapIcon,
  AdjustmentsIcon,
  ArchiveIcon,
} from "@heroicons/react/solid";
import { Fragment } from "react";

const solutions = [
  {
    name: "Insights",
    href: "##",
    icon: AcademicCapIcon,
  },
  {
    name: "Automations",
    href: "##",
    icon: AdjustmentsIcon,
  },
  {
    name: "Reports",
    href: "##",
    icon: ArchiveIcon,
  },
];

const AboutSection = [
  {
    name: "About Us",
    href: "/about",
    icon: AcademicCapIcon,
  },
  {
    name: "Our Values",
    href: "##",
    icon: AdjustmentsIcon,
  },
  {
    name: "Vision and Mission",
    href: "##",
    icon: ArchiveIcon,
  },
  {
    name: "Leadership",
    href: "##",
    icon: ArchiveIcon,
  },
  {
    name: "Our Faculty",
    href: "##",
    icon: AdjustmentsIcon,
  },
  {
    name: "Awards and Accolades",
    href: "##",
    icon: ArchiveIcon,
  },
];

const courses = {
  fellowships: [
    { name: "IMA-AMS Fellowship in Infertility", href: "#", icon: ArchiveIcon },
    {
      name: "RGUHS Fellowship in Reproductive Medicine",
      href: "#",
      icon: ArchiveIcon,
    },
    {
      name: "Institutional Fellowship in Reproductive Medicine",
      href: "#",
      icon: ArchiveIcon,
    },
    {
      name: "Non-Resident Fellowship in Infertility",
      href: "#",
      icon: ArchiveIcon,
    },
  ],
  ultrasound: [
    {
      name: "Comprehensive Ultrasound Scan Training",
      href: "#",
      icon: ArchiveIcon,
    },
  ],
  andrology: [
    { name: "Andrology Workshop", href: "#", icon: ArchiveIcon },
    { name: "Regular Embryology", href: "#", icon: ArchiveIcon },
  ],
  shortTermCourses: [
    { name: "IUI Workshop", href: "#", icon: ArchiveIcon },
    { name: "3 Month Preceptor", href: "#", icon: ArchiveIcon },
    { name: "6 Month Preceptor", href: "#", icon: ArchiveIcon },
  ],
};

export function About() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "" : "text-opacity-90"}
                `}
          >
            <span className="hover:text-white">
              About
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
                  ml-1 h-5 w-5 inline-block`}
                aria-hidden="true"
              />
            </span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-96 max-w-xl px-4 mt-7 transform -translate-x-1/2 left-1/2 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-3 lg:grid-cols-1">
                  {AboutSection.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        <item.icon
                          aria-hidden="true"
                          className="text-brandBlue"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function Courses() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "" : "text-opacity-90"}
                `}
          >
            <span className="hover:text-white">
              Courses
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
                  ml-1 h-5 w-5 inline-block`}
                aria-hidden="true"
              />
            </span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute mt-7 z-10 w-screen max-w-lg px-4 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <p className="bg-white text-brandDark px-4 pt-4 pb-2 font-bold underline text-xs sm:text-sm">
                  Fellowship Courses
                </p>
                <div className="relative grid gap-8 bg-white p-3 grid-cols-2">
                  {courses.fellowships.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        <item.icon
                          aria-hidden="true"
                          className="text-brandBlue"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="sm:text-sm text-xs font-medium text-gray-900">
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <hr />
                <p className="bg-white text-brandDark px-4 py-2 text-md font-bold underline text-xs sm:text-sm">
                  Ultrasound Scan Courses
                </p>
                <div className="relative grid gap-8 bg-white p-3 grid-cols-2">
                  {courses.ultrasound.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        <item.icon
                          aria-hidden="true"
                          className="text-brandBlue"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="sm:text-sm text-xs font-medium text-gray-900">
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <hr />
                <p className="bg-white text-brandDark px-4 py-2 text-xs sm:text-sm font-bold underline">
                  Andrology and Embryology Courses
                </p>
                <div className="relative grid gap-8 bg-white p-3 grid-cols-2">
                  {courses.andrology.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        <item.icon
                          aria-hidden="true"
                          className="text-brandBlue"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="sm:text-sm text-xs font-medium text-gray-900">
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <p className="bg-white text-brandDark px-4 py-2 text-xs sm:text-sm font-bold underline">
                  Short Term Courses
                </p>
                <div className="relative grid gap-8 bg-white p-3 grid-cols-2">
                  {courses.shortTermCourses.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        <item.icon
                          aria-hidden="true"
                          className="text-brandBlue"
                        />
                      </div>
                      <div className="ml-4">
                        <p className="sm:text-sm text-xs font-medium text-gray-900">
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
