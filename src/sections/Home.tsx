import React from 'react';
import Hero from 'sections/Home/Hero';
import Overview from 'sections/Home/Overview';
import Testimonial from 'sections/Home/Testimonials';
import Feartures from 'sections/Home/Feartures';
import Video from 'sections/Home/Video';

export const Home = () => {
  return (
    <div>
      <Hero />
      <Overview />
    </div>
  );
};

export const Home_2 = ({ testimonialPassthrough }) => {
  return (
    <div>
      {/* <Stats /> */}
      {testimonialPassthrough?.error ? (
        ''
      ) : (
        <Video testimonials={testimonialPassthrough} />
      )}
      <Feartures />
      <Testimonial />
    </div>
  );
};
