import React from 'react';
import { BadgeCheckIcon } from '@heroicons/react/solid';

const Affiliations = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto mt-8 mb-20'>
        <h1 className='text-3xl text-center font-semibold font-heading'>
          Ongoing Studies
        </h1>
        <div className='max-w-2xl mx-auto'>
          <div className='flex flex-wrap justify-between mt-10 px-3 sm:px-0'>
            <div className='space-y-4 font-semibold'>
              <div className='flex items-center'>
                <BadgeCheckIcon className='text-brandBlue w-5 h-5 mr-2' /> PCOS
              </div>
              <div className='flex items-center'>
                <BadgeCheckIcon className='text-brandBlue w-5 h-5 mr-2' />
                Lifestyle Changes and Diet on Infertility
              </div>
              <div className='flex items-center'>
                <BadgeCheckIcon className='text-brandBlue w-5 h-5 mr-2' /> Male
                Infertility
              </div>
              <div className='flex items-center'>
                <BadgeCheckIcon className='text-brandBlue w-5 h-5 mr-2' /> IUI
              </div>
              <div className='flex items-center'>
                <BadgeCheckIcon className='text-brandBlue w-5 h-5 mr-2' /> IVF
                Stimulation Protocol
              </div>
            </div>
            <div className='space-y-4 font-semibold mt-4 sm:mt-0'>
              <div className='flex items-center'>
                <BadgeCheckIcon className='text-brandBlue w-5 h-5 mr-2' />{' '}
                Embryo Transfer
              </div>
              <div className='flex items-center'>
                <BadgeCheckIcon className='text-brandBlue w-5 h-5 mr-2' />
                Oocyte Retrieval
              </div>
              <div className='flex items-center'>
                <BadgeCheckIcon className='text-brandBlue w-5 h-5 mr-2' />
                Embryo Culture
              </div>
              <div className='flex items-center'>
                <BadgeCheckIcon className='text-brandBlue w-5 h-5 mr-2' />{' '}
                Embryo Freezing and Thawing
              </div>
              <div className='flex items-center'>
                <BadgeCheckIcon className='text-brandBlue w-5 h-5 mr-2' />
                Semen Analysis and DFI
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliations;
