import React from 'react';
import { PhoneIcon } from '@heroicons/react/solid';

const FloatPhone = () => {
  return (
    <div className='fixed bottom-2 left-2 lg:bottom-2 lg:left-2 w-[3.8em] h-[3.8em] lg:w-14 lg:h-14 bg-brandBlueDark2 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200 ease-linear z-[+9999]'>
      <a href='tel:+919108910852'>
        <PhoneIcon className='w-8 h-8 lg:w-8 lg:h-8 text-white' />
      </a>
    </div>
  );
};

export default FloatPhone;
