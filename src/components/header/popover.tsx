import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

const AboutSection = [
  {
    name: "About Us",
    href: "/about",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089740/GGIRHR/Icons/header%20icons%20svg/About_Us_copqsk.svg",
  },
  {
    name: "Our Values",
    href: "/about/values",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089738/GGIRHR/Icons/header%20icons%20svg/Our_Values_kqjt58.svg",
  },
  {
    name: "Vision and Mission",
    href: "/about/mission-and-vision",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089740/GGIRHR/Icons/header%20icons%20svg/Vision_Mission_ez6ate.svg",
  },
  {
    name: "Leadership",
    href: "/about/leadership",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089736/GGIRHR/Icons/header%20icons%20svg/Leadership_psjunm.svg",
  },
  {
    name: "Our Faculty",
    href: "/about/faculty",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089738/GGIRHR/Icons/header%20icons%20svg/Our_Faculty_pvz6gk.svg",
  },
  {
    name: "Awards and Accolades",
    href: "/about/awards-and-accolades",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089740/GGIRHR/Icons/header%20icons%20svg/Awards_Accrolades_gz6spo.svg",
  },
];

const courses = {
  fellowships: [
    {
      name: "IMA-AMS Fellowship in Infertility",
      href: "/courses/ima-ams-fellowship-in-infertility",
      icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089736/GGIRHR/Icons/header%20icons%20svg/IMA_-_AMS_xoysuq.svg",
    },
    {
      name: "RGUHS Fellowship in Reproductive Medicine",
      href: "/courses/rguhs-fellowship-in-reproductive-medicine",
      icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089738/GGIRHR/Icons/header%20icons%20svg/RGUHS_f22qpk.svg",
    },
    {
      name: "Institutional Fellowship in Reproductive Medicine",
      href: "/courses/institutional-fellowship-in-reproductive-medicine",
      icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089736/GGIRHR/Icons/header%20icons%20svg/Ins_Fellowship_dhuxji.svg",
    },
    {
      name: "Non-Resident Fellowship in Infertility",
      href: "/courses/non-resident-fellowship-in-infertility",
      icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089738/GGIRHR/Icons/header%20icons%20svg/Non_-_Resi_Fellowship_tbyizb.svg",
    },
  ],
  ultrasound: [
    {
      name: "Comprehensive TVS Ultrasound Scan Training",
      href: "/courses/comprehensive-tvs-ultrasound-scan-course",
      icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089740/GGIRHR/Icons/header%20icons%20svg/Andrology_Workshop_nmz0mu.svg",
    },
    {
      name: "Online Basic TVS Ultrasound Scan Training",
      href: "/courses/online-basic-tvs-ultrasound-scan-course",
      icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089740/GGIRHR/Icons/header%20icons%20svg/Andrology_Workshop_nmz0mu.svg",
    },
  ],
  andrology: [
    {
      name: "Basic and Advanced Andrology Training Program",
      href: "/courses/basic-and-advanced-andrology-training-program",
      icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089740/GGIRHR/Icons/header%20icons%20svg/Andrology_Workshop_nmz0mu.svg",
    },
    // {
    //   name: "Comprehensive Embryology Course",
    //   href: "/courses/comprehensive-embryology-course",
    //   icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089738/GGIRHR/Icons/header%20icons%20svg/Regular_Embryology_sp4qqq.svg",
    // },
    {
      name: "Post Graduate Diploma in Clinical Embryology (PGDCE) Program",
      href: "/courses/post-graduate-diploma-in-clinical-embryology-pgdce-program",
      icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089738/GGIRHR/Icons/header%20icons%20svg/Regular_Embryology_sp4qqq.svg",
    },
    // {
    //   name: "Institutional Fellowship in Clinical Embryology",
    //   href: "/courses/institutional-fellowship-in-clinical-embryology",
    //   icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089738/GGIRHR/Icons/header%20icons%20svg/Regular_Embryology_sp4qqq.svg",
    // },
  ],
  shortTermCourses: [
    {
      name: "IUI Workshop",
      href: "/courses/iui-workshop",
      icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089736/GGIRHR/Icons/header%20icons%20svg/IUI_-_Workshop_yvaxxh.svg",
    },
    {
      name: " IVF Preceptor - 3 Month",
      href: "/courses/ivf-preceptor-course",
      icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089739/GGIRHR/Icons/header%20icons%20svg/3_Months_-_Preceptor_wm2tmx.svg",
    },
    {
      name: "IVF Preceptor - 6 Month",
      href: "/courses/ivf-preceptor-course",
      icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089740/GGIRHR/Icons/header%20icons%20svg/6_Months_-_Preceptor_drqlm8.svg",
    },
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
            <Popover.Panel className="absolute z-10 max-w-xl px-4 transform -translate-x-1/2 w-96 mt-7 left-1/2 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 p-3 bg-white lg:grid-cols-1">
                  {AboutSection.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        <img src={item.icon} alt={item.name} />
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
            <Popover.Panel className="absolute z-10 w-screen max-w-lg px-4 transform -translate-x-1/2 mt-7 left-1/2 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <p className="px-4 pt-4 pb-2 text-xs font-bold underline bg-white text-brandDark sm:text-sm">
                  Fellowship Courses
                </p>
                <div className="relative grid grid-cols-2 gap-8 p-3 bg-white">
                  {courses.fellowships.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        <img src={item.icon} alt={item.name} />
                      </div>
                      <div className="ml-4">
                        <p className="text-xs font-medium text-gray-900 sm:text-sm">
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <hr />
                <p className="px-4 py-2 text-xs font-bold underline bg-white text-brandDark text-md sm:text-sm">
                  Ultrasound Scan Courses
                </p>
                <div className="relative grid grid-cols-2 gap-8 p-3 bg-white">
                  {courses.ultrasound.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        <img src={item.icon} alt={item.name} />
                      </div>
                      <div className="ml-4">
                        <p className="text-xs font-medium text-gray-900 sm:text-sm">
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <hr />
                <p className="px-4 py-2 text-xs font-bold underline bg-white text-brandDark sm:text-sm">
                  Andrology and Embryology Courses
                </p>
                <div className="relative grid grid-cols-2 gap-8 p-3 bg-white">
                  {courses.andrology.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        <img src={item.icon} alt={item.name} />
                      </div>
                      <div className="ml-4">
                        <p className="text-xs font-medium text-gray-900 sm:text-sm">
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <hr />
                <p className="px-4 py-2 text-xs font-bold underline bg-white text-brandDark sm:text-sm">
                  Short Term Courses
                </p>
                <div className="relative grid grid-cols-2 gap-8 p-3 bg-white">
                  {courses.shortTermCourses.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        <img src={item.icon} alt={item.name} />
                      </div>
                      <div className="ml-4">
                        <p className="text-xs font-medium text-gray-900 sm:text-sm">
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
