import Form from 'components/Form';
import React from 'react';

const IndexPage = () => {
  return (
    <div className='flex justify-center items-center w-full py-10 px-4 h-fit'>
      <div className='rounded-t-lg overflow-hidden flex w-full md:w-1/2 flex-col items-start justify-start rounded-lg  pb-8 shadow-lg bg-gray-200 '>
        <Form />
      </div>
    </div>
  );
};

export default IndexPage;
