import Hero from 'sections/contact/Hero';
import SupportCards from 'sections/contact/SupportCards';
import Mission from 'sections/contact/Mission';
import GetInTouch from 'sections/contact/GetInTouch';
import Career from 'sections/contact/Career';
import React from 'react';

const IndexPage = () => {
  return (
    <div className='bg-white'>
      <Hero />
      <SupportCards />
      <Mission />
      <GetInTouch />
      <Career />
    </div>
  );
};

export default IndexPage;
