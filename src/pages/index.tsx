import { gql, GraphQLClient } from "graphql-request";
import Link from "next/link";
import Head from "next/head";
import Hero from "sections/Home/Hero";
import AffiliationsAlumni from "sections/Home/AffiliationsAlumni";
import AboutUs from "sections/Home/AboutUs";
import WhyGgirhr from "sections/Home/WhyGgirhr";
import Courses from "sections/Home/Courses";
import Workshops from "sections/Home/Workshops";
import Voices from "sections/Home/Voices";
import Experts from "sections/Home/Experts";
import ResearchWing from "sections/Home/ResearchWing";
import Blogs from "sections/Home/Blogs";
import Journey from "sections/Home/Journey";
import Image from "next/image";
import { ContentContainer } from "components/ui/SectionShell";
import { HOME_FEATURE_IMAGE } from "sections/Home/assets";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { format } from "date-fns";

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

// NOTE: `testimonials` (from the YouTube playlist API below) and
// `HomeData.banners` are both fetched but not rendered — kept deliberately so
// they're ready to wire up.
const IndexPage = ({ HomeData, testimonials }) => {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
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
          content={HOME_FEATURE_IMAGE}
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
          content={HOME_FEATURE_IMAGE}
        />
      </Head>
      <Hero />
      <AffiliationsAlumni />
      <AboutUs />
      <WhyGgirhr />
      <Courses courses={HomeData?.courses} />
      <Workshops />
      <Experts teachers={HomeData?.teachers} />
      <Voices />
      <ResearchWing />
      <Blogs />
      <ContentContainer as="section">
        <div>
          {HomeData?.events && HomeData.events.length > 0 && (
            <>
              <div className="inset-0 flex items-center justify-center">
                <button type="button" onClick={openModal} className="">
                  Open dialog
                </button>
              </div>

              <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative" onClose={closeModal}>
                  <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    {/* This element is to trick the browser into centering the modal contents. */}

                    <div className="fixed inset-0 bg-black/25" />
                  </TransitionChild>

                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <div>
                          {HomeData &&
                            HomeData?.events.map((items) => (
                              <DialogPanel
                                className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-2 text-left align-middle shadow-xl transition-all"
                                key={items.id}
                              >
                                <DialogTitle
                                  as="h3"
                                  className="text-lg font-bold py-1.5 leading-6 text-gray-900 text-center font-heading"
                                >
                                  <h1 key={items?.id}>{items?.title}</h1>
                                </DialogTitle>
                                <div className="mt-2">
                                  <Link href={`/events`}>
                                    <Image
                                      src={items?.squareImage.url}
                                      alt={items?.title}
                                      width={500}
                                      height={500}
                                      className="rounded-md"
                                      loading="lazy"
                                    />
                                  </Link>
                                </div>

                                <div className="mt-4 flex items-center justify-center flex-col">
                                  <div>
                                    {items?.eventDateTime && (
                                      <div className="px-7 pb-2 text-brandBlue font-bold flex space-x-2">
                                        <div>
                                          Date:
                                          {format(
                                            new Date(items?.eventDateTime),
                                            " dd MMMM yyyy",
                                          )}{" "}
                                          at{" "}
                                          {format(
                                            new Date(items?.eventDateTime),
                                            "HH:mm",
                                          )}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  <div className="space-x-3">
                                    <Link href={`/events`}>
                                      <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                      >
                                        Visit Page
                                      </button>
                                    </Link>
                                    <button
                                      type="button"
                                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                      onClick={closeModal}
                                    >
                                      Close
                                    </button>
                                  </div>
                                </div>
                              </DialogPanel>
                            ))}
                        </div>
                      </TransitionChild>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </>
          )}
        </div>
      </ContentContainer>
      <Journey />
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
      teachers(orderBy: order_ASC) {
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
      }
      events(orderBy: eventDateTime_DESC, first: 1) {
        id
        title
        slug
        eventDateTime
        link
        squareImage {
          url
        }
      }
    }
  `;

  const testimonialsData = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLgpadr6SQ-GvgWStgrQnk5ZMXlcjoA-yC&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
  );

  const testimonials = await testimonialsData.json();

  const data = await graphQLClient.request(query);
  const HomeData = data;

  return {
    props: {
      HomeData,
      testimonials,
    },
  };
};
