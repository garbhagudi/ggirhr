import React from 'react';
import { gql, GraphQLClient } from 'graphql-request';
import Carousel from 'react-multi-carousel';
import { Home, Home_2 } from 'sections/Home';
import Link from 'next/link';
import Head from 'next/head';
import Courses from 'sections/Home/Courses';
import Image from 'next/image';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const responsive_team = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const IndexPage = ({ HomeData }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>
          GGIRHR | Best IVF &amp; Infertility Training Institute in India
        </title>
        <meta
          name='title'
          content="GGIRHR | India's Best Fertility Training Institute"
        />
        <meta
          name='description'
          content='GarbhaGudi Institute of Reproductive Health & Research is a platform launched by a team of renowned specialists interested in training medical professionals and science students in reproductive medicine and infertility.'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='GGIRHR | Best IVF & Infertility Training Institute in India'
        />
        <meta property='og:site_name' content='GGIRHR' />
        <meta property='og:url' content='https://ggirhr.com' />
        <meta
          property='og:description'
          content='GarbhaGudi Institute of Reproductive Health & Research is a platform launched by a team of renowned specialists interested in training medical professionals and science students in reproductive medicine and infertility.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1651644126/GGIRHR/SEO/SEO_About-min_jifn0w.jpg'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@ggirhr' />
        <meta
          name='twitter:title'
          content='GGIRHR | Best IVF & Infertility Training Institute in India'
        />
        <meta
          name='twitter:description'
          content='GarbhaGudi Institute of Reproductive Health & Research is a platform launched by a team of renowned specialists interested in training medical professionals and science students in reproductive medicine and infertility.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1651644126/GGIRHR/SEO/SEO_About-min_jifn0w.jpg'
        />
      </Head>
      <div className='shadow-2xl drop-shadow-2xl'>
        <Carousel
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
        >
          {HomeData.banners.map((items: any) => (
            <div className='' key={items?.id}>
              <Link href={items?.url} passHref>
                <img src={items?.image?.url} alt={items?.title} />
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
      <Home />
      <Courses Data={HomeData?.courses} />
      <section className='max-w-6xl mx-auto px-4 xl:px-0 sm:px-6 py-12'>
        <div className='text-center pb-12'>
          <h1 className='font-bold text-3xl md:text-4xl lg:text-4xl font-heading text-gray-900'>
            Meet our Experts
          </h1>
          <h3 className='text-center max-w-3xl mx-auto font-semibold mt-4'>
            Our team of fertility specialists have been known for their
            extensive clinical experience and research contributions and their
            success in treating the most challenging fertility cases.
          </h3>
        </div>
        <div className='gap-2'>
          <Carousel
            responsive={responsive_team}
            ssr={true}
            autoPlaySpeed={5000}
            infinite={true}
          >
            {HomeData?.teachers?.map((item: any) => (
              <div
                className='mb-2 transition-all duration-500 rounded-xl'
                key={item.id}
              >
                <Link href={`/fertility-experts/${item?.slug}`} passHref>
                  <div className='space-y-4'>
                    <div className='relative h-44 w-44 mx-auto'>
                      <div className='h-full w-full absolute rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40 animate-rotate bg-[length: 400%]'></div>
                      <Image
                        className='rounded-full shadow-2xl drop-shadow-2xl bg-transparent'
                        src={item?.image?.url}
                        alt={item?.imageAlt || item?.name}
                        width={500}
                        height={500}
                        loading='lazy'
                      />
                    </div>
                    <div className='space-y-4 text-center'>
                      <div className='space-y-1 text-lg font-medium leading-6'>
                        <h3 className='text-brandDark font-content'>
                          {item?.name}
                        </h3>
                        {/* <p className='text-sm text-brandPurpleDark font-content'>
                          {item?.qualification}
                        </p> */}
                        <p className='pb-2 text-sm text-brandPink font-content'>
                          {item?.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <Home_2 />
    </div>
  );
};

export default IndexPage;

export const getServerSideProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });
  const query = gql`
    query {
      banners(orderBy: order_ASC) {
        id
        title
        url
        order
        image {
          url
        }
      }
      teachers {
        name
        id
        qualification
        designation
        slug
        image {
          url
        }
      }
      courses(orderBy: createdAt_DESC, first: 6) {
        title
        slug
        id
        courseImage {
          url
        }
        objective
      }
    }
  `;
  const data = await graphQLClient.request(query);
  const HomeData = data;

  return {
    props: {
      HomeData,
    },
  };
};
