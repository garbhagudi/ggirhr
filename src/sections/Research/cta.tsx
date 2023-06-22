import React from 'react';
import {
  AtSymbolIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from '@heroicons/react/solid';
import Link from 'next/link';

const Cta = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto bg-white text-brandDark' id='cta'>
        <div className='container mx-auto flex flex-col md:flex-row'>
          <div className='flex flex-col w-full lg:w-2/5 p-8'>
            <p className='text-3xl md:text-4xl text-brandBlueDark2 my-4 font-heading'>
              Be a part of the most advanced studies and research program in
              infertility
            </p>

            <div className='bg-white rounded-lg p-4 shadow-md'>
              <div className='flex items-center mb-4'>
                <h3 className='text-lg font-semibold text-gray-800 underline font-heading'>
                  Contact Information
                </h3>
              </div>
              <div className='flex items-center mb-2'>
                <PhoneIcon className='w-5 mr-3' />
                <p className='text-gray-600'>
                  Phone:{' '}
                  <span className='text-gray-800 font-semibold hover:underline hover:text-brandBlue'>
                    <a href='tel:+919108910852'>+919108910852</a>
                  </span>
                </p>
              </div>
              <div className='flex items-center mb-2'>
                <AtSymbolIcon className='w-5 mr-3' />
                <p className='text-gray-600'>
                  Email:{' '}
                  <span className='text-gray-800 font-semibold hover:underline hover:text-brandBlue'>
                    <a href='mailto:training@ggirhr.com'>training@ggirhr.com</a>
                  </span>
                </p>
              </div>
              <div className='flex items-center'>
                <LocationMarkerIcon className='w-10 mr-3' />
                <p className='text-gray-600'>
                  Address:{' '}
                  <span className='text-gray-800 font-semibold hover:underline hover:text-brandBlue'>
                    <a href='https://goo.gl/maps/tsbje5ZQhEQyk89k8'>
                      26, Pattalamma Temple Rd, South End Circle, Basavanagudi,
                      Bengaluru, Karnataka 560004
                    </a>
                  </span>
                </p>
              </div>
            </div>

            <div>
              <button className='px-4 py-2 bg-brandBlue text-white font-semibold rounded-lg mt-4 hover:bg-brandBlueDark3'>
                <Link href='/contact.html'>Contact us</Link>
              </button>
            </div>
            <p className='font-sans text-sm md:text-lg my-2 md:my-4'>
              Press the chat icon at the bottom right corner to have a live chat
              with our team.
            </p>
          </div>
          <div className=' flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12'>
            <div className='container'>
              <div className='relative flex flex-col min-w-0 break-words w-full'>
                <div className='flex-auto p-5 lg:p-10'>
                  <img
                    src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1651130045/GGIRHR/Images/152731049-cc744a56-1d6f-4945-9566-0fa3b7ad1d24_ltrmhf.png'
                    alt='contact image'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
