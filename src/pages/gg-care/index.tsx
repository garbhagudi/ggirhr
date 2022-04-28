import React from "react";
import Hero from "sections/gg-care/hero";
import Cta from "sections/gg-care/cta";
import Video from "sections/gg-care/workflow";
import Contact from "sections/gg-care/content";
import Stats from "sections/gg-care/stats";

const IndexPage = () => {
  return (
    <div>
      <Hero />
      <Video />
      <Stats />
      <Contact />
      <Cta />
    </div>
  );
};

export default IndexPage;
