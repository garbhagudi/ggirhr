import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { About, Courses, Contact } from 'components/header/popover';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MenuIcon from 'components/ui/icons/MenuIcon';
import Button from 'components/ui/Button';

const NAV_LINKS = [
  { href: '/', label: 'Home', mobileLabel: 'Home' },
  { href: '/events', label: 'Events & Webinars', mobileLabel: 'Events', activeFontContent: true },
  {
    href: '/research',
    label: 'Research & Journals',
    mobileLabel: 'Research and Journals',
    activeFontContent: true,
  },
  { href: '/blogs/page/1', label: 'Blogs', mobileLabel: 'Blogs' },
];

const renderNavLink = (
  { href, label, activeFontContent }: (typeof NAV_LINKS)[number],
  pathname: string
) => (
  <Link key={href} href={href} passHref>
    <span
      className={
        pathname == href
          ? `bg-primaryBlue text-white px-3 py-2 rounded-2xl text-sm ${
              activeFontContent ? ' font-content' : ''
            }`
          : 'text-[#374151] hover:bg-primaryBlue px-3 py-2 rounded-2xl hover:text-white text-sm lg:text-base cursor-pointer'
      }
    >
      {label}
    </span>
  </Link>
);

const renderMobileNavLink = ({ href, mobileLabel }: (typeof NAV_LINKS)[number]) => (
  <Link
    key={href}
    href={href}
    className='text-[#374151] hover:bg-primaryBlue hover:text-white block px-3 py-2 rounded-md text-sm'
  >
    {mobileLabel}
  </Link>
);

const [HOME_LINK, ...OTHER_NAV_LINKS] = NAV_LINKS;

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
  const router = useRouter();
  const path = usePathname();
  return (
    <div className='sticky top-0 z-50'>
      <nav className='font-primary border-b pb-4 bg-white shadow-2xl'>
        <div className='px-5 xl:px-[30px]'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center align-middle cursor-pointer gap-8 justify-between w-full'>
              <div className='flex-shrink-0 pt-4'>
                <Link href='/'>
                  <Image
                    src='https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegtq5201oe06pryy2gzwdk'
                    alt='GarbhaGudi IVF logo'
                    width={256}
                    height={64}
                    priority={true}
                    sizes='(max-width: 768px) 192px, 256px'
                    className='h-full w-48 xl:w-64'
                  />
                </Link>
              </div>
              <div className='hidden xl:flex items-center gap-[25px]'>
                <div className='flex items-baseline space-x-4 pt-4 flex-1 gap:8 2xl:gap-11'>
                  {renderNavLink(HOME_LINK, router.pathname)}
                  <span className='text-gray-900 hover:bg-primaryBlue hover:text-white rounded-2xl px-3 py-2 text-sm'>
                    <About setIsPopoverOpen={setIsPopoverOpen} />
                  </span>
                  <span className='text-gray-900 hover:bg-primaryBlue hover:text-white rounded-2xl px-3 py-2 text-sm'>
                    <Courses
                      isPopoverOpen={isPopoverOpen}
                      setIsPopoverOpen={setIsPopoverOpen}
                      setIsOpen={setIsOpen}
                    />
                  </span>
                  {OTHER_NAV_LINKS.map((link) => renderNavLink(link, router.pathname))}
                  <span className='text-gray-900 hover:bg-primaryBlue hover:text-white rounded-2xl px-3 py-2 text-sm'>
                    <Contact setIsPopoverOpen={setIsPopoverOpen} />
                  </span>
                </div>
                <Button
                  href={`/contact?pageVisit=${path}`}
                  target='_blank'
                  variant='primary'
                  rounded='sm'
                  size='sm'
                  className='self-end font-lexend'
                >
                  Apply Now
                </Button>
              </div>
            </div>
            <div className='-mr-2 flex items-center justify-center xl:hidden'>
              <div className='hidden sm:block mt-4 mr-4 whitespace-nowrap'>
                <Button
                  href={`/contact?pageVisit=${path}`}
                  variant='primary'
                  rounded='full'
                  size='sm'
                  className='font-bold'
                >
                  Contact Us
                </Button>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='inline-flex items-center justify-center p-2 mt-4 rounded-full text-[#374151] focus:outline-none focus:ring-2 focus:ring-primaryBlue'
              >
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <MenuIcon className='block' aria-hidden='true' />
                ) : (
                  <svg
                    className='block h-5 w-5'
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
              {renderMobileNavLink(HOME_LINK)}
              <span className='text-gray-800 hover:bg-primaryBlue hover:text-white block px-3 py-2 rounded-md text-sm'>
                <About setIsPopoverOpen={setIsPopoverOpen} />
              </span>
              <span className='text-gray-800 hover:bg-primaryBlue hover:text-white block px-3 py-2 rounded-md text-sm'>
                <Courses
                  isPopoverOpen={isPopoverOpen}
                  setIsPopoverOpen={setIsPopoverOpen}
                  setIsOpen={setIsOpen}
                />
              </span>
              {OTHER_NAV_LINKS.map(renderMobileNavLink)}
              <span className='text-gray-800 hover:bg-primaryBlue hover:text-white block px-3 py-2 rounded-md text-sm cursor-pointer'>
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
