import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { About, Courses, Contact } from 'components/header/popover';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
  const router = useRouter();
  const path = usePathname();
  return (
    <div className='sticky top-0 z-50'>
      <nav className='border-b pb-4 bg-white shadow-2xl'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center align-middle cursor-pointer'>
              <div className='flex-shrink-0 pt-4'>
                <Link href='/'>
                  <Image
                    src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1644909568/logos/gg-logo_bg5gzc.png'
                    alt='GarbhaGudi IVF logo'
                    width={256}
                    height={64}
                    priority={true}
                    sizes='(max-width: 768px) 192px, 256px'
                    className='h-full w-48 xl:w-64'
                  />
                </Link>
              </div>
              <div className='hidden xl:flex items-center gap-1'>
                <div className='ml-16 flex items-baseline space-x-4 pt-4'>
                  <Link href='/' passHref>
                    <span
                      className={
                        router.pathname == '/'
                          ? 'bg-brandBlue text-white px-3 py-2 rounded-2xl text-sm'
                          : 'text-gray-700 hover:bg-brandBlue px-3 py-2 rounded-2xl hover:text-white text-sm cursor-pointer'
                      }
                    >
                      Home
                    </span>
                  </Link>
                  <span className='text-gray-900 hover:bg-brandBlue hover:text-white rounded-2xl px-3 py-2 text-sm'>
                    <About setIsPopoverOpen={setIsPopoverOpen} />
                  </span>
                  <span className='text-gray-900 hover:bg-brandBlue hover:text-white rounded-2xl px-3 py-2 text-sm'>
                    <Courses
                      isPopoverOpen={isPopoverOpen}
                      setIsPopoverOpen={setIsPopoverOpen}
                      setIsOpen={setIsOpen}
                    />
                  </span>
                  <Link href='/events' passHref>
                    <span
                      className={
                        router.pathname == '/events'
                          ? 'bg-brandBlue text-white px-3 py-2 rounded-2xl text-sm font-content'
                          : 'text-gray-700 hover:bg-brandBlue px-3 py-2 rounded-2xl hover:text-white text-sm cursor-pointer'
                      }
                    >
                      Events & Webinars
                    </span>
                  </Link>
                  <Link href='/research' passHref>
                    <span
                      className={
                        router.pathname == '/research'
                          ? 'bg-brandBlue text-white px-3 py-2 rounded-2xl text-sm font-content'
                          : 'text-gray-700 hover:bg-brandBlue px-3 py-2 rounded-2xl hover:text-white text-sm cursor-pointer'
                      }
                    >
                      Research & Journals
                    </span>
                  </Link>
                  <span className='text-gray-900 hover:bg-brandBlue hover:text-white rounded-2xl px-3 py-2 text-sm'>
                    <Link href='/blogs/page/1'>Blogs</Link>
                  </span>
                  <span className='text-gray-900 hover:bg-brandBlue hover:text-white rounded-2xl px-3 py-2 text-sm'>
                    <Contact setIsPopoverOpen={setIsPopoverOpen} />
                  </span>
                </div>
                <Link
                  target='_blank'
                  className='duration-2 cursor-pointer rounded-lg px-3 py-2 font-lexend text-xs text-white bg-brandBlue hover:bg-brandBlueDark1 sm:text-sm self-end'
                  href={`/contact?pageVisit=${path}`}
                >
                  Apply Now
                </Link>
              </div>
            </div>
            <div className='-mr-2 flex items-center justify-center xl:hidden'>
              <button className='mt-4 mr-4'>
                <Link
                  href={`/contact?pageVisit=${path}`}
                  className='bg-brandBlue hover:bg-gray-800 text-white rounded-2xl px-3 py-2 text-xs font-bold'
                >
                  Contact Us
                </Link>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='bg-gray-900 inline-flex items-center justify-center p-2 mt-4 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
              >
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <div className='xl:hidden' id='mobile-menu'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <Link
                href={'/'}
                className='text-gray-800 hover:bg-brandBlue hover:text-white block px-3 py-2 rounded-md text-sm'
              >
                Home
              </Link>
              <span className='text-gray-800 hover:bg-brandBlue hover:text-white block px-3 py-2 rounded-md text-sm'>
                <About setIsPopoverOpen={setIsPopoverOpen} />
              </span>
              <span className='text-gray-800 hover:bg-brandBlue hover:text-white block px-3 py-2 rounded-md text-sm'>
                <Courses
                  isPopoverOpen={isPopoverOpen}
                  setIsPopoverOpen={setIsPopoverOpen}
                  setIsOpen={setIsOpen}
                />
              </span>
              <span className='text-gray-800 hover:bg-brandBlue hover:text-white block px-3 py-2 rounded-md text-sm'>
                <Link href='/events'>Events</Link>
              </span>
              <span className='text-gray-800 hover:bg-brandBlue hover:text-white block px-3 py-2 rounded-md text-sm'>
                <Link href='/research'>Research and Journals</Link>
              </span>
              <span className='text-gray-800 hover:bg-brandBlue hover:text-white block px-3 py-2 rounded-md text-sm'>
                <Link href='/blogs/page/1'>Blogs</Link>
              </span>
              <span className='text-gray-800 hover:bg-brandBlue hover:text-white block px-3 py-2 rounded-md text-sm cursor-pointer'>
                <Contact setIsPopoverOpen={setIsPopoverOpen} />
              </span>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
};

export default Header;
