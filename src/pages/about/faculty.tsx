import React from "react";
import graphcms from "lib/graphcms";
import Link from "next/link";
import Head from "next/head";

const Faculty = ({ teachers }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Our Faculty | GGIRHR</title>
        <meta name="title" content="Our Faculty | GGIRHR" />
        <meta
          name="description"
          content="Our team of fertility specialists have been known for their extensive clinical experience and research contributions and their success in treating the most challenging fertility cases."
        />

        {/* Open Graph / Facebook */}

        <meta property="og:title" content="Our Faculty | GGIRHR" />
        <meta property="og:site_name" content="GGIRHR" />
        <meta property="og:url" content="https://ggirhr.com" />
        <meta
          property="og:description"
          content="Our team of fertility specialists have been known for their extensive clinical experience and research contributions and their success in treating the most challenging fertility cases."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1651644126/GGIRHR/SEO/SEO_Faculty-min_tnzgt4.jpg"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ggirhr" />
        <meta name="twitter:title" content="Our Faculty | GGIRHR" />
        <meta
          name="twitter:description"
          content="Our team of fertility specialists have been known for their extensive clinical experience and research contributions and their success in treating the most challenging fertility cases."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1651644126/GGIRHR/SEO/SEO_Faculty-min_tnzgt4.jpg"
        />
      </Head>
      <div className="w-full max-w-7xl mx-auto">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="text-center pb-12">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-brandDark">
              Our Faculty
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teachers?.map((item) => (
              <Link key={item?.id} href={`/faculty/${item?.slug}`} passHref>
                <div className="w-full overflow-hidden flex flex-col justify-center items-center px-8 sm:px-0 cursor-pointer">
                  <div className="w-full">
                    <img
                      className="object-cover h-[360px] w-full rounded-t-3xl"
                      src={item?.image?.url}
                      alt={item?.name}
                    />
                  </div>
                  <div className="text-center py-8 sm:py-6 w-full border-x-2 border-b-2 rounded-b-3xl">
                    <p className="text-xl text-brandDark font-bold mb-2">
                      {item?.name}
                    </p>
                    <p className="text-base text-brandBlue font-normal">
                      {item?.qualification}
                    </p>
                    <p className="text-base text-brandPink font-normal">
                      {item?.designation}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faculty;

export const getStaticProps = async () => {
  const { teachers } = await graphcms.request(
    `
      query{
        teachers {
          id
          name
          designation 
          slug
          image {
            url
          }
          qualification
        }
      }
    `
  );

  return {
    props: {
      teachers,
    },
    revalidate: 180,
  };
};
