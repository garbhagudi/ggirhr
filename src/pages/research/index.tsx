import React from 'react';
import Affiliations from 'sections/Research/affiliations';
import Hero from 'sections/Research/hero';
import Ongoing from 'sections/Research/On-going';
import Cta from 'sections/Research/cta';
import Head from 'next/head';
import Team from 'sections/Research/team';
import Steps from 'sections/Research/steps';

const IndexPage = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Research and Journals | GGIRHR</title>
        <meta name='title' content='Research and Journals | GGIRHR' />
        <meta
          name='description'
          content='The research wing of GGIRHR was set up to conduct various studies that can help in diagnosis, treatment, and improved success rates in ART procedures.'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Research and Journals | GGIRHR' />
        <meta property='og:site_name' content='GGIRHR' />
        <meta property='og:url' content='https://ggirhr.com' />
        <meta
          property='og:description'
          content='The research wing of GGIRHR was set up to conduct various studies that can help in diagnosis, treatment, and improved success rates in ART procedures.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='' />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@ggirhr' />
        <meta name='twitter:title' content='Research and Journals | GGIRHR' />
        <meta
          name='twitter:description'
          content='The research division of GGIRHR was set up to conduct various studies that can help in diagnosis, treatment, and improved success rates in ART procedures.'
        />
        <meta name='twitter:image' content='' />
      </Head>
      <Hero />
      <Team />
      <Steps />
      <Ongoing />
      {/* <Affiliations /> */}
      <Cta />
    </div>
  );
};

export default IndexPage;
