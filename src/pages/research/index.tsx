import React from "react";
import Affiliations from "sections/Research/affiliations";
import Hero from "sections/Research/hero";
import Ongoing from "sections/Research/On-going";
import Cta from "sections/Research/cta";

const IndexPage = () => {
  return (
    <div>
      <Hero />
      <Ongoing />
      <Affiliations />
      <Cta />
    </div>
  );
};

export default IndexPage;
