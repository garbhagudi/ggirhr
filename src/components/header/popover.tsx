import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';
import Link from 'next/link';
import { Tab } from '@headlessui/react';
import { MdContactPhone, MdContactSupport } from 'react-icons/md';
import { CgOrganisation } from 'react-icons/cg';

const AboutSection = [
  {
    name: 'About Us',
    href: '/about',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089740/GGIRHR/Icons/header%20icons%20svg/About_Us_copqsk.svg',
  },
  {
    name: 'Our Values',
    href: '/about/values',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089738/GGIRHR/Icons/header%20icons%20svg/Our_Values_kqjt58.svg',
  },
  {
    name: 'Vision and Mission',
    href: '/about/mission-and-vision',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089740/GGIRHR/Icons/header%20icons%20svg/Vision_Mission_ez6ate.svg',
  },
  {
    name: 'Leadership',
    href: '/about/leadership',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089736/GGIRHR/Icons/header%20icons%20svg/Leadership_psjunm.svg',
  },
  {
    name: 'Our Faculty',
    href: '/about/faculty',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089738/GGIRHR/Icons/header%20icons%20svg/Our_Faculty_pvz6gk.svg',
  },
  {
    name: 'Awards and Accolades',
    href: '/about/awards-and-accolades',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089740/GGIRHR/Icons/header%20icons%20svg/Awards_Accrolades_gz6spo.svg',
  },
];

const courses = {
  fellowships: [
    {
      name: 'IMA-AMS Fellowship in Infertility',
      href: '/courses/ima-ams-fellowship-in-infertility',
      icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089736/GGIRHR/Icons/header%20icons%20svg/IMA_-_AMS_xoysuq.svg',
    },
    {
      name: 'RGUHS Fellowship in Reproductive Medicine',
      href: '/courses/rguhs-fellowship-in-reproductive-medicine',
      icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089738/GGIRHR/Icons/header%20icons%20svg/RGUHS_f22qpk.svg',
    },
    {
      name: 'Institutional Fellowship in Reproductive Medicine',
      href: '/courses/institutional-fellowship-in-reproductive-medicine',
      icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089736/GGIRHR/Icons/header%20icons%20svg/Ins_Fellowship_dhuxji.svg',
    },
    {
      name: 'Non-Resident Fellowship in Infertility',
      href: '/courses/non-resident-fellowship-in-infertility',
      icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089738/GGIRHR/Icons/header%20icons%20svg/Non_-_Resi_Fellowship_tbyizb.svg',
    },
  ],
  ultrasound: [
    {
      name: 'Comprehensive TVS Ultrasound Scan Training',
      href: '/courses/comprehensive-tvs-ultrasound-scan-course',
      icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089740/GGIRHR/Icons/header%20icons%20svg/Andrology_Workshop_nmz0mu.svg',
    },
    {
      name: 'Online Basic TVS Ultrasound Scan Training',
      href: '/courses/online-basic-tvs-ultrasound-scan-course',
      icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089740/GGIRHR/Icons/header%20icons%20svg/Andrology_Workshop_nmz0mu.svg',
    },
  ],
  andrology: [
    {
      name: 'Comprehensive Andrology Training Program',
      href: '/courses/comprehensive-andrology-training-program',
      icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089740/GGIRHR/Icons/header%20icons%20svg/Andrology_Workshop_nmz0mu.svg',
    },
    {
      name: 'Post Graduate Diploma in Clinical Embryology (PGDCE)',
      href: '/courses/post-graduate-diploma-in-clinical-embryology-pgdce-program',
      icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089738/GGIRHR/Icons/header%20icons%20svg/Regular_Embryology_sp4qqq.svg',
    },
    {
      name: 'Institutional Fellowship in Clinical Embryology',
      href: '/courses/institutional-fellowship-in-clinical-embryology',
      icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089738/GGIRHR/Icons/header%20icons%20svg/Regular_Embryology_sp4qqq.svg',
    },
  ],
  shortTermCourses: [
    {
      name: 'IUI Workshop',
      href: '/courses/iui-workshop',
      icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089736/GGIRHR/Icons/header%20icons%20svg/IUI_-_Workshop_yvaxxh.svg',
    },
    // {
    //   name: ' ICSI + Vitrification Workshop',
    //   href: '/courses/ivf-preceptor-course',
    //   icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089739/GGIRHR/Icons/header%20icons%20svg/3_Months_-_Preceptor_wm2tmx.svg',
    // },
    {
      name: 'IVF Preceptor - 6 Month',
      href: '/courses/ivf-preceptor-course',
      icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089740/GGIRHR/Icons/header%20icons%20svg/6_Months_-_Preceptor_drqlm8.svg',
    },
  ],
  others: [
    {
      name: 'Internship Programs',
      href: '/courses/internship-programs',
      icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089740/GGIRHR/Icons/header%20icons%20svg/6_Months_-_Preceptor_drqlm8.svg',
    },
    {
      name: 'GGIRHR Clinical Research Program',
      href: '/courses/internship-programs',
      icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1650089740/GGIRHR/Icons/header%20icons%20svg/6_Months_-_Preceptor_drqlm8.svg',
    },
  ],
};

const contactInfo = [
  {
    name: 'Contact Us',
    href: '/gg-care',
    icon: <MdContactPhone className='w-6 h-6' />,
  },
  {
    name: 'Course Enquiry',
    href: '/contact',
    icon: <MdContactSupport className='w-6 h-6' />,
  },
  {
    name: 'Career',
    href: 'https://www.garbhagudi.com/careers/',
    icon: <CgOrganisation className='w-6 h-6' />,
  },
];

export function About() {
  return (
    <Popover className='relative'>
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? '' : 'text-opacity-90'}
                `}
          >
            <span className='hover:text-white'>
              About
              <ChevronDownIcon
                className={`${open ? '' : 'text-opacity-70'}
                  ml-1 h-5 w-5 inline-block`}
                aria-hidden='true'
              />
            </span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 max-w-xl px-4 transform -translate-x-1/2 w-96 mt-7 left-1/2 sm:px-0'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='relative grid gap-8 p-3 bg-white lg:grid-cols-1'>
                  {AboutSection.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                    >
                      <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12'>
                        <img src={item.icon} alt={item.name} />
                      </div>
                      <div className='ml-4'>
                        <p className='text-sm font-medium text-gray-900'>
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

export function Contact() {
  return (
    <Popover className='relative'>
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? '' : 'text-opacity-90'}
                `}
          >
            <span className='hover:text-white'>
              Contact
              <ChevronDownIcon
                className={`${open ? '' : 'text-opacity-70'}
                  ml-1 h-5 w-5 inline-block`}
                aria-hidden='true'
              />
            </span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 max-w-xl px-4 transform -translate-x-1/2 w-96 mt-7 left-1/2 sm:px-0'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='relative grid gap-8 p-3 bg-white lg:grid-cols-1'>
                  {contactInfo.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                    >
                      <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-brandBlue rounded-md sm:h-12 sm:w-12'>
                        {item.icon}
                      </div>
                      <div className='ml-4'>
                        <p className='text-sm font-medium text-gray-900'>
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Courses() {
  return (
    <Popover className='relative'>
      {({ close }) => (
        <>
          <Popover.Button
            className={`
                ${
                  close
                    ? 'w-screen text-left sm:w-full outline-none'
                    : 'text-opacity-90 outline-none'
                }
                 `}
          >
            <div className=''>
              Courses <ChevronDownIcon className='inline-block w-5 h-5' />
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 px-4 mt-3 lg:mt-7 transform -translate-x-1/2 w-screen max-w-xl left-1/2 sm:px-0 lg:max-w-xl'>
              <div className='overflow-hidden shadow-lg rounded-lg ring-1 ring-opacity-5 dark:ring-opacity-100 bg-white bg-opacity-95 dark:bg-opacity-95 backdrop-blur-2xl'>
                <Tab.Group>
                  <Tab.List className='grid grid-cols-3 md:flex items-center justify-evenly bg-brandBlue text-white font-content font-bold px-3 lg:px-3 py-1.5 lg:py-2 rounded-t-lg'>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          'w-full py-1 text-sm rounded-lg',
                          'focus:outline-none',
                          selected
                            ? 'ring-2 ring-brandBlueLite1 text-gray-800 bg-white shadow'
                            : 'text-gray-200 hover:bg-brandBlueDark3 ',
                        )
                      }
                    >
                      Fellowships
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          'w-full py-1 text-sm rounded-lg',
                          'focus:outline-none',
                          selected
                            ? 'ring-2 ring-brandBlueLite1 text-gray-800 bg-white shadow'
                            : 'text-gray-200 hover:bg-brandBlueDark3 ',
                        )
                      }
                    >
                      Ultrasound
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          'w-full py-1 text-sm rounded-lg',
                          'focus:outline-none',
                          selected
                            ? 'ring-2 ring-brandBlueLite1 text-gray-800 bg-white shadow'
                            : 'text-gray-200 hover:bg-brandBlueDark3 ',
                        )
                      }
                    >
                      Embryology
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          'w-full py-1 text-sm rounded-lg',
                          'focus:outline-none',
                          selected
                            ? 'ring-2 ring-brandBlueLite1 text-gray-800 bg-white shadow'
                            : 'text-gray-200 hover:bg-brandBlueDark3 ',
                        )
                      }
                    >
                      Short Term
                    </Tab>
                    {/* <Tab
                      className={({ selected }) =>
                        classNames(
                          'w-full py-1 text-sm rounded-lg',
                          'focus:outline-none',
                          selected
                            ? 'ring-2 ring-brandBlueLite1 text-gray-800 bg-white shadow'
                            : 'text-gray-200 hover:bg-brandBlueDark3 '
                        )
                      }
                    >
                      Others
                    </Tab> */}
                  </Tab.List>
                  <Tab.Panels className='px-2 my-2 text-black transition-all ease-out duration-500'>
                    <Tab.Panel>
                      <div className='grid grid-cols-3 gap-2 text-center'>
                        {courses.fellowships.map((items) => (
                          <Link
                            href={items.href}
                            key={items.name}
                            className='group hover:bg-gray-200 rounded-md'
                          >
                            <div className='flex flex-col items-start justify-center p-2'>
                              <img
                                src={items.icon}
                                alt={items.name}
                                className='w-12 h-12 mx-auto transition-all duration-300 ease-linear'
                              />
                              <div className='font-content text-xs pt-2'>
                                {items.name}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className='grid grid-cols-3 text-center'>
                        {courses.ultrasound.map((items) => (
                          <Link
                            href={items.href}
                            key={items.name}
                            className='group hover:bg-gray-200 rounded-md'
                          >
                            <div className='flex flex-col items-center justify-center p-2'>
                              <img
                                src={items.icon}
                                alt={items.name}
                                className='w-12 h-12 mx-auto transition-all duration-300 ease-linear'
                              />
                              <div className='font-content text-xs font-medium pt-2'>
                                {items.name}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className='grid grid-cols-3 gap-2 text-center'>
                        {courses.andrology.map((items) => (
                          <Link
                            href={items.href}
                            key={items.name}
                            className='group hover:bg-gray-200 rounded-md'
                          >
                            <div className='flex flex-col items-center justify-center p-2'>
                              <img
                                src={items.icon}
                                alt={items.name}
                                className='w-12 h-12 mx-auto transition-all duration-300 ease-linear'
                              />
                              <div className='font-content text-xs font-medium pt-2'>
                                {items.name}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className='grid grid-cols-3 gap-2 text-center'>
                        {courses.shortTermCourses.map((items) => (
                          <Link
                            href={items.href}
                            key={items.name}
                            className='group hover:bg-gray-200 rounded-md'
                          >
                            <div className='flex flex-col items-center justify-center p-2'>
                              <img
                                src={items.icon}
                                alt={items.name}
                                className='w-12 h-12 mx-auto transition-all duration-300 ease-linear'
                              />
                              <div className='font-content text-xs font-medium pt-2'>
                                {items.name}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </Tab.Panel>
                    {/* <Tab.Panel>
                      <div className='grid grid-cols-3 gap-2 text-center'>
                        {courses.others.map((items) => (
                          <Link
                            href={items.href}
                            key={items.name}
                            className='group hover:bg-gray-200  rounded-md'
                          >
                            <div className='flex flex-col items-center justify-center p-2'>
                              <img
                                src={items.icon}
                                alt={items.name}
                                className='w-12 h-12 mx-auto transition-all duration-300 ease-linear'
                              />
                              <div className='font-content text-xs font-medium pt-2'>
                                {items.name}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </Tab.Panel> */}
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
