import React from "react";
import Affiliations from "sections/Research/affiliations";
import Hero from "sections/Research/hero";
import Ongoing from "sections/Research/On-going";
import Cta from "sections/Research/cta";
import Head from "next/head"

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Research | GGIRHR</title>
      </Head>
      <Hero />
      <Ongoing />
      <Affiliations />
      <Cta />
    </div>
  );
};

export default IndexPage;
