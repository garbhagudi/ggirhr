import Head from 'next/head';
import React from 'react';
import graphcms from 'lib/graphcms';
import { format } from 'date-fns';
import Link from 'next/link';

const IndexPage = ({ events }) => {
  const [expandedCards, setExpandedCards] = React.useState<
    Record<string, boolean>
  >({});

  const handleSeeMore = (id: string) => {
    setExpandedCards((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the state for the specific card
    }));
  };
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Events and Webinars | GGIRHR</title>
        <meta name='title' content='Events and Webinars | GGIRHR' />
        <meta
          name='description'
          content='Check Our Upcoming and Events, CMEs and Webinars'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Events and Webinars | GGIRHR' />
        <meta property='og:site_name' content='GGIRHR' />
        <meta property='og:url' content='https://ggirhr.com' />
        <meta
          property='og:description'
          content='Check Our Upcoming and Events, CMEs and Webinars'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1651043879/GGIRHR/Images/Webinar_wjquhx.jpg'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@ggirhr' />
        <meta name='twitter:title' content='Events and Webinars | GGIRHR' />
        <meta
          name='twitter:description'
          content='Check Our Upcoming and Events, CMEs and Webinars'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1651043879/GGIRHR/Images/Webinar_wjquhx.jpg'
        />
      </Head>
      <div className='w-full mt-10 mb-6 lg:mb-0'>
        <h1 className='sm:text-4xl text-4xl font-bold mb-2 text-gray-900 text-center font-heading'>
          Events and Webinars
        </h1>
        <h3 className='text-center max-w-3xl mx-auto font-semibold mt-4 text-gray-900'>
          Check Our Upcoming and Events, CMEs and Webinars
        </h3>
      </div>
      <div className='max-w-7xl mx-auto flex flex-wrap'>
        {events?.length === 0 && (
          <div className='text-center py-24'>
            No Events Scheduled! Please, check back later{' '}
          </div>
        )}
        {events?.map((item) => (
          <div
            className='max-w-md rounded-2xl overflow-hidden shadow-lg mx-auto my-16'
            key={item?.id}
          >
            <img
              className='w-full'
              src={item?.bannerImage?.url}
              alt='Sunset in the mountains'
            />
            <div className='px-6 pt-4'>
              <h1 className='font-bold text-xl mb-2'>{item?.title}</h1>
              <p className='text-gray-800 mb-2'>
                {expandedCards[item?.id]
                  ? item?.description
                  : `${item?.description.slice(0, 180)}...`}{' '}
                <span
                  className='text-brandBlue text-sm cursor-pointer'
                  onClick={() => handleSeeMore(item?.id)} // Pass the card's ID
                >
                  {expandedCards[item?.id] ? 'see less' : 'see more'}
                </span>
              </p>
            </div>
            {item?.eventDateTime && (
              <div className='px-6 pb-2 text-brandBlue font-bold flex space-x-2'>
                <div>
                  Date:
                  {format(
                    new Date(item?.eventDateTime),
                    ' dd MMMM yyyy',
                  )} at {format(new Date(item?.eventDateTime), 'HH:mm')}
                </div>
              </div>
            )}

            <Link
              className='px-6 pb-2 bg-brandBlue hover:bg-brandBlueLite1 transition-all duration-300 py-2 w-full mx-auto text-center text-white font-bold flex items-center justify-center uppercase'
              href={`/events/${item.slug}`}
            >
              Learn more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;

export const getServerSideProps = async () => {
  const { events } = await graphcms.request(`
    query {
      events (orderBy: eventDateTime_DESC) {
        title
        id
        bannerImage {
          url
        }
        description
        slug
        link
        eventDateTime
      }
    }
  `);
  return {
    props: {
      events,
    },
  };
};
