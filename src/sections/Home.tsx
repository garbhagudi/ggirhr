import React from "react";
import Hero from "sections/Home/Hero";
import Overview from "sections/Home/Overview";
import Courses from "sections/Home/Courses";
import Stats from "sections/Home/Stats";
import Testimonial from "sections/Home/Testimonials";
import Feartures from "sections/Home/Feartures";
import Video from "sections/Home/Video";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <Courses />
    </div>
  );
};

export const Home_2 = () => {
  return (
    <div>
      <Stats />
      <Video />
      <Feartures />
      <Testimonial />
    </div>
  );
};
