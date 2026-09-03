import React from "react";
import { gql, GraphQLClient } from "graphql-request";
import Carousel from "react-multi-carousel";
import { Home_2 } from "sections/Home";
import Link from "next/link";
import Head from "next/head";
import Courses from "sections/Home/Courses";
import Workshops from "sections/Home/Workshops";
import Voices from "sections/Home/Voices";
import Experts from "sections/Home/Experts";
import ResearchWing from "sections/Home/ResearchWing";
import Blogs from "sections/Home/Blogs";
import Journey from "sections/Home/Journey";
import Image from "next/image";
import Chip from "components/ui/Chip";
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

// Rounded blur blob peeking out from behind an image group; `position`
// supplies the corner-offset utility classes (e.g. "-top-4 -left-6").
const DecorativeBlob = ({ position }: { position: string }) => (
  <div
    className={`absolute ${position} w-24 h-24 rounded-3xl bg-[rgba(255,255,255,0.16)] -z-1`}
  />
);

const IndexPage = ({ HomeData, testimonials }) => {
  let [isOpen, setIsOpen] = useState(true);

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
          content="https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegs19a01gx06pr749twdyd"
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
          content="https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegs19a01gx06pr749twdyd"
        />
      </Head>
      <div className="shadow-2xl drop-shadow-2xl">
        <Carousel
          responsive={responsive}
          ssr={true}
          infinite={true}
          // autoPlay={true}
          // autoPlaySpeed={5000}
        >
          {HomeData.banners.map((items: any, index: number) => (
            <div className="" key={items?.id}>
              <Link href={items?.url} passHref rel="preload">
                <img
                  src={items?.image?.url}
                  alt={items?.title}
                  className="w-screen h-full"
                  loading="eager"
                />
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="py-24 px-40 flex gap-12">
        <Image
          src="https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegs19a01gx06pr749twdyd"
          width={306}
          height={226}
          alt="Home"
        />
        <div className="space-y-5 flex flex-col">
          <div>
            <Chip variant="pink">ABOUT US</Chip>
          </div>
          <p className="text-[32px] leading-11">
            <span className="font-bold">
              GarbhaGudi Institute of Reproductive Health and Research (GGIRHR)
              is one of India’s premier infertility training organizations.{" "}
            </span>
            <span className="font-normal">
              It started in 2018 and is headed by Dr. Asha S Vijay, the
              honorable dean and scientific director of GGIRHR.
            </span>
          </p>
        </div>
      </div>
      <div className="px-40 py-12 bg-[rgba(26,151,202,1)] flex gap-24 flex-col">
        <div className="flex gap-16">
          <div className="relative w-1/2 flex flex-col gap-4">
            <div className="flex gap-4 w-full">
              <div className="relative top-[-2px] left-[-3px] flex-1 h-[251px]">
                <DecorativeBlob position="-top-4 -left-6" />
                <Image
                  src="https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegs19a01gx06pr749twdyd"
                  alt="Home"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover rounded-2xl overflow-hidden"
                />
              </div>
              <div className="relative top-[-2px] left-[-3px] flex-1 h-[251px]">
                <Image
                  src="https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegs19a01gx06pr749twdyd"
                  alt="Home"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover rounded-2xl overflow-hidden"
                />
              </div>
            </div>

            <div className="relative w-full h-[251px]">
              <DecorativeBlob position="-bottom-4 -right-6" />
              <Image
                src="https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegs19a01gx06pr749twdyd"
                alt="Home"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover rounded-2xl overflow-hidden"
              />
            </div>
          </div>
          <div className="relative w-1/2 flex flex-col justify-center gap-4">
            <Image
              src="/ribbon-wave-icon.svg"
              alt=""
              width={160}
              height={96}
              className="absolute -top-6 right-0"
            />

            <h1 className="text-[46px] leading-tight text-white">
              Why <span className="font-bold">GGIRHR</span>
            </h1>
            <p className="text-white font-semibold leading-7 text-justify text-[18px]">
              At GGIRHR, we have realized a severe shortage of trained
              clinicians, embryologists, and support staff in infertility,
              leading to compromised treatment for many infertile couples
              worldwide. GarbhaGudi Institute of Reproductive Health & Research
              (GGIRHR) is our venture to address this lacuna by offering
              advanced fellowship courses and short-term training courses,
              recognized by Rajiv Gandhi Institute of Health Sciences and Indian
              Medical Association, in Clinical ART, Embryology, and Obstetric
              Ultrasound that cater to the needs of a busy practitioner.
            </p>
          </div>
        </div>
        <div className="flex gap-16 items-center">
          <div className="w-1/2 flex flex-col gap-4">
            <h1 className="text-[46px] leading-tight text-white">
              Our <span className="font-bold">Story</span>
            </h1>
            <p className="text-white font-semibold leading-7 text-justify text-[18px]">
              GarbhaGudi Institute of Reproductive Health & Research (GGIRHR)
              was established to provide premier quality reproductive medicine
              and infertility training to clinicians, embryologists,
              sonologists, and students with a science background, to name a
              few. We believe in training enthusiastic minds to excel in their
              desired field. Our infertility courses aim to impart systematic
              elucidation of all facets of the ART treatments, such as IVF,
              featuring hands-on IVF training and fellowship programs in
              Reproductive Medicine for postgraduate doctors. Moreover, GGIRHR’s
              courses are beneficial in providing insights into the ethical and
              economic implications of the treatment to equip every individual
              with full-fledged knowledge.
            </p>
          </div>
          <div className="relative w-1/2">
            <div className="relative w-full max-w-[484px] aspect-[484/364] rounded-[20px]">
              <DecorativeBlob position="-top-6 -right-6" />
              <DecorativeBlob position="-bottom-6 -left-6" />
              <Image
                src="https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegs19a01gx06pr749twdyd"
                alt="Our Story"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover rounded-[20px] overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
      <Courses Data={HomeData?.courses} />
      <Workshops />
      <Experts teachers={HomeData?.teachers} />
      <Voices />
      <ResearchWing />
      <Blogs />
      <section className="max-w-6xl mx-auto px-4 xl:px-0 sm:px-6">
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
      </section>
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
