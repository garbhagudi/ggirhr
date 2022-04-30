import React from "react";
import Banner from "sections/About/Banner";
import Content from "sections/About/content";
import Stats from "sections/About/Stats";
import Alumni from "sections/About/Alumni";
import Cta from "sections/About/Cta";
import Head from "next/head";

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>About Us | GGIRHR</title>
      </Head>
      <Banner />
      <Content />
      {/* <Stats /> */}
      {/* <Alumni /> */}
      <Cta />
    </div>
  );
};

export default IndexPage;
