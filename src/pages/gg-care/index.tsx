"use client";
import Hero from "sections/gg-care/hero";
import Cta from "sections/gg-care/cta";
import Video from "sections/gg-care/workflow";
import Contact from "sections/gg-care/content";
import Head from "next/head";

const IndexPage = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Contact Us | GGIRHR</title>
        <meta name="title" content="Contact Us | GGIRHR" />
        <meta
          name="description"
          content="Ready to get started? We're here to provide information, advice, support."
        />

        {/* Open Graph / Facebook */}

        <meta property="og:title" content="Contact Us | GGIRHR" />
        <meta property="og:site_name" content="GGIRHR" />
        <meta property="og:url" content="https://ggirhr.com" />
        <meta
          property="og:description"
          content="Ready to get started? We're here to provide information, advice, support."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1651644125/GGIRHR/SEO/SEO_Contact-min_xxdeld.jpg"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ggirhr" />
        <meta name="twitter:title" content="Contact Us | GGIRHR" />
        <meta
          name="twitter:description"
          content="Ready to get started? We're here to provide information, advice, support."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1651644125/GGIRHR/SEO/SEO_Contact-min_xxdeld.jpg"
        />
      </Head>
      <Hero />
      <Video />
      <Contact />
      <Cta />
    </div>
  );
};

export default IndexPage;
