import { ChatAltIcon, PhoneIcon, CalendarIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const supportLinks = [
  {
    name: 'Chat Support',
    href: '#',
    description:
      'Chat online with our team now from anywhere. We provide you with a seamless and hassle-free online chat experience from the comfort of your home. Get the proper assistance now!',
    icon: ChatAltIcon,
    ctaAction: 'Chat Now',
    ctaLink:
      'https://salesiq.zoho.com/signaturesupport.ls?widgetcode=201f3df74e42a63d69ee275e156a88ac916e6c465ec468ed92339a1ae4444508',
  },
  {
    name: 'Call Support',
    href: '#',
    description:
      'Reach out to us with your questions, concerns, or challenges. We’ll be happy to help you at any time, and we’re always trying to make things easier for you!',
    icon: PhoneIcon,
    ctaAction: 'Call Now',
    ctaLink: 'tel:+919108910852',
  },
  {
    name: 'Book a Counselling Session',
    href: '#',
    description:
      'Know more about all the courses we offer and which one is best best fit for your career.',
    icon: CalendarIcon,
    ctaAction: 'Book an Appointment',
    ctaLink: '/contact',
  },
];

const Hero = () => {
  return (
    <div className='bg-white'>
      {/* Header */}
      <div className='relative pb-32 bg-gray-800'>
        <div className='absolute inset-0'>
          <img
            className='w-full h-full object-cover'
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1740119459/GGIRHR/Images/GG_Care_Web_Banner-min_xh7g5u.webp'
            alt=''
          />
          <div
            className='absolute inset-0 bg-blue-300 mix-blend-multiply'
            aria-hidden='true'
          />
        </div>
        <div className='relative max-w-7xl mx-auto py-24 px-4 xl:py-56 sm:px-6 lg:px-8'></div>
      </div>

      {/* Overlapping cards */}
      <section
        className='md:-mt-12 -mt-8 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8'
        aria-labelledby='contact-heading'
      >
        <h2 className='sr-only' id='contact-heading'>
          Contact us
        </h2>
        <div className='grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8'>
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className='flex flex-col bg-white rounded-2xl shadow-xl'
            >
              <div className='flex-1 relative pt-16 px-6 pb-8 md:px-8'>
                <div className='absolute top-0 p-5 inline-block bg-brandBlueDark1 rounded-xl shadow-lg transform -translate-y-1/2'>
                  <link.icon
                    className='h-6 w-6 text-white'
                    aria-hidden='true'
                  />
                </div>
                <h3 className='text-xl font-medium text-gray-900 font-heading'>
                  {link.name}
                </h3>
                <p className='mt-4 text-base text-gray-500 font-content'>
                  {link.description}
                </p>
              </div>
              <button className='px-4  py-2 bg-brandBlueDark1 rounded-b-2xl font-content text-white font-semibold'>
                <Link href={link.ctaLink} target='_blank' rel='noreferrer'>
                  {link.ctaAction}
                </Link>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
