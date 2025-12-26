import React from "react";
import Banner from "sections/About/Banner";
import Content from "sections/About/content";
import Cta from "sections/About/Cta";
import Head from "next/head";

const IndexPage = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Reproductive Health & Research Institute | Top Infertility Training
          Centre in India
        </title>
        <meta
          name="title"
          content="Reproductive Health & Research Institute | Top Infertility Training Centre in India"
        />
        <meta
          name="description"
          content="Leading Reproductive Health Research Institute, among Top Infertility Training Organizations in India, offering best-in-class training at our Infertility Training Centre."
        />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content="Reproductive Health & Research Institute | Top Infertility Training Centre in India"
        />
        <meta property="og:site_name" content="GGIRHR" />
        <meta property="og:url" content="https://ggirhr.com" />
        <meta
          property="og:description"
          content="Leading Reproductive Health Research Institute, among Top Infertility Training Organizations in India, offering best-in-class training at our Infertility Training Centre."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1651644126/GGIRHR/SEO/SEO_About-min_jifn0w.jpg"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ggirhr" />
        <meta
          name="twitter:title"
          content="Reproductive Health & Research Institute | Top Infertility Training Centre in India"
        />
        <meta
          name="twitter:description"
          content="Leading Reproductive Health Research Institute, among Top Infertility Training Organizations in India, offering best-in-class training at our Infertility Training Centre."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1651644126/GGIRHR/SEO/SEO_About-min_jifn0w.jpg"
        />
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
