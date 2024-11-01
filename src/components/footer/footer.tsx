import Image from 'next/image';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

const navigation = {
  about: [
    { name: 'Vision & Mission', href: '/about/mission-and-vision' },
    { name: 'Leadership', href: '/about/leadership' },
    {
      name: 'Awards & Accolades',
      href: '/about/awards-and-accolades',
    },
    { name: 'Dr Asha S Vijay', href: 'https://drashasvijay.com' },
  ],
  support: [
    // { name: "GG CARE", href: "/gg-care" },
    { name: 'Courses', href: '/courses' },
    { name: 'CMEs', href: '/events' },
    { name: 'Contact Us', href: '/gg-care' },
    { name: 'Career', href: 'https://www.garbhagudi.com/careers' },
  ],
  company: [
    { name: 'GGIRHR', href: '/' },
    { name: 'GarbhaGudi IVF', href: 'https://www.garbhagudi.com' },
    { name: 'GarbhaGnan Foundation', href: 'https://garbhagnan.org' },
    { name: 'GarbhaGudi Pharma', href: 'https://www.garbhagudi.com' },
  ],
  legal: [{ name: 'Privacy Policy', href: '/legal/privacy-policy' }],
};

export default function Footer() {
  return (
    <footer
      className='bg-neutral-50 font-content'
      aria-labelledby='footerHeading'
      id='footer'
    >
      <h2 id='footerHeading' className='sr-only'>
        Footer
      </h2>
      <div className='max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:py-8 lg:px-8 border-t'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-full text-center antialiased'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold text-brandliteGray tracking-wider uppercase'>
                  About
                </h3>
                <ul className='mt-4 space-y-2 text-sm'>
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} passHref>
                        <span className=' text-brandDark hover:text-brandPink hover:underline cursor-pointer'>
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold text-brandliteGray tracking-wider uppercase'>
                  Support
                </h3>
                <ul className='mt-4 space-y-2 text-sm'>
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link passHref href={item.href}>
                        <span className=' text-brandDark hover:text-brandPink hover:underline cursor-pointer'>
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold text-brandliteGray tracking-wider uppercase'>
                  Organisation
                </h3>
                <ul className='mt-4 space-y-2 text-sm'>
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} rel='noreferrer' target={'_blank'}>
                        <span className=' text-brandDark hover:text-brandPink hover:underline cursor-pointer'>
                          {item.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold text-brandliteGray tracking-wider uppercase'>
                  Legal
                </h3>
                <ul className='mt-4 space-y-2 text-sm'>
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link passHref href={item.href}>
                        <span className=' text-brandDark hover:text-brandPink hover:underline cursor-pointer'>
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto border-t border-gray-200 '>
        <div className='mt-8 space-x-2 flex items-ceter justify-center'>
          <SocialIcon
            url='https://www.youtube.com/channel/UCPWVap8s4REIDwqYpHq0pew'
            style={{ width: '40px', height: '40px' }}
            target='_blank'
          />
          <SocialIcon
            url='https://www.facebook.com/GGIRHR/'
            style={{ width: '40px', height: '40px' }}
            target='_blank'
          />
          <SocialIcon
            url='https://www.linkedin.com/company/garbhagudi-institute-of-reproductive-health-research/'
            style={{ width: '40px', height: '40px' }}
            target='_blank'
          />
          <SocialIcon
            url='https://api.whatsapp.com/send/?phone=919108910852&text=Hi.'
            style={{ width: '40px', height: '40px' }}
            target='_blank'
          />
          <SocialIcon
            url='https://twitter.com/ggirhr'
            style={{ width: '40px', height: '40px' }}
            target='_blank'
          />
          <SocialIcon
            url='mailto:training@ggirhr.com'
            style={{ width: '40px', height: '40px' }}
            target='_blank'
          />
        </div>
        <p className='font-content text-gray-900 text-center py-8'>
          &copy; {new Date().getFullYear()} GGIRHR, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
