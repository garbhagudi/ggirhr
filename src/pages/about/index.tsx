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
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          GGIRHR | Best IVF &amp; Infertility Training Institute in India
        </title>
        <meta
          name="title"
          content="GGIRHR | India's Best Fertility Training Institute"
        />
        <meta
          name="description"
          content="GarbhaGudi Institute of Reproductive Health & Research is a platform launched by a team of renowned specialists interested in training medical professionals and science students in reproductive medicine and infertility."
        />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content="GGIRHR | Best IVF & Infertility Training Institute in India"
        />
        <meta property="og:site_name" content="GGIRHR" />
        <meta property="og:url" content="https://ggirhr.com" />
        <meta
          property="og:description"
          content="GarbhaGudi Institute of Reproductive Health & Research is a platform launched by a team of renowned specialists interested in training medical professionals and science students in reproductive medicine and infertility."
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
          content="GGIRHR | Best IVF & Infertility Training Institute in India"
        />
        <meta
          name="twitter:description"
          content="GarbhaGudi Institute of Reproductive Health & Research is a platform launched by a team of renowned specialists interested in training medical professionals and science students in reproductive medicine and infertility."
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
