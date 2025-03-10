import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='max-w-7xl mx-auto my-10'>
      <div className='relative w-full h-full pb-4'>
        <div className='relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8'>
          <div className='text-color w-full md:w-1/3 lg:w-1/2 pt-16 lg:pt-8 xl:pt-16'>
            <h1 className='text-4xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-5xl text-gray-900 font-bold font-heading xl:-mt-16'>
              Welcome to GGIRHR
            </h1>
            <div className='text-base lg:text-base pb-10 sm:pb-0 pt-10 xl:pt-6'>
              <h2>
                GarbhaGudi Institute of Reproductive Health & Research is a
                platform launched by a team of renowned specialists interested
                in training medical professionals and science students in
                reproductive medicine and infertility. Our goal is to bring a
                revolutionary change in infertility education by presenting a
                range of courses designed to help people specialize in their
                skills. Being pioneers in new generation infertility treatment,
                we have taken the onus of continuous medical education as part
                of our mission and expansion!
              </h2>
            </div>

            <div className='lg:flex'>
              <button className='hover:opacity-90 text-base w-full xl:text-base xl:w-48 mt-4 xl:mt-8 py-4 bg-brandBlue text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg'>
                <Link href='/about'>Learn More</Link>
              </button>
            </div>
          </div>
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1740117190/GGIRHR/Images/c_10_11zon_w9303y.webp'
            width={600}
            height={400}
            className='w-full mt-6 md:mt-0 object-cover md:w-2/3 lg:w-1/2 md:-ml-4 lg:-ml-4 xl:ml-0 rounded-xl'
            alt='GGIRHR'
            sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw'
            loading='eager'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
