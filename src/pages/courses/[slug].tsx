import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import { RichText } from "@graphcms/rich-text-react-renderer";
import {
  ClockIcon,
  AcademicCapIcon,
  CurrencyRupeeIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import Head from "next/head";
import Link from "next/link";
import { throttledFetch } from "lib/throttle";
import Image from "next/image";
import { courses } from "components/header/popover";
import { usePathname } from "next/navigation";
import Form from "components/Form";
import Cta from "sections/gg-care/cta";
import { BsYoutube } from "react-icons/bs";

const CoursePage = ({ course }) => {
  const courseSlug = usePathname();

  function addCourseJsonLd() {
    if (!course?.courseJson) return { __html: "" };
    const jsonLD =
      typeof course.courseJson === "string"
        ? JSON.parse(course.courseJson)
        : course.courseJson;
    return {
      __html: JSON.stringify(jsonLD, null, 2),
    };
  }

  function addFAQJsonLd() {
    if (!course?.faqJson) return { __html: "" };
    const jsonLD =
      typeof course.faqJson === "string"
        ? JSON.parse(course.faqJson)
        : course.faqJson;
    return {
      __html: JSON.stringify(jsonLD, null, 2),
    };
  }

  function addBreadcrumbsJsonLd() {
    return {
      __html: `{
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": "1",
              "name": "Home",
              "item": "https://www.ggirhr.com/"
            },
            {
              "@type": "ListItem",
              "position": "3",
              "name": "${course?.title}",
              "item": "https://www.ggirhr.com/courses/${course?.slug}"
            }
          ]
        }`,
    };
  }

  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{`${course?.metaTitle || course?.title} | GGIRHR`}</title>
        <meta
          name="title"
          content={`${course?.metaTitle || course?.title} | GGIRHR`}
        />
        <meta
          name="description"
          content={
            course?.metaDescription?.slice(0, 180) ||
            course?.description?.text.slice(0, 180)
          }
        />
        <meta
          name="keywords"
          content={
            course?.metaKeywords || "GGIRHR, courses, healthcare, education"
          }
        />
        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content={`${course?.title} | GGIRHR | India 🇮🇳`}
        />
        <meta property="og:site_name" content="GGIRHR" />
        <meta property="og:url" content="https://ggirhr.com" />
        <meta property="og:description" content={" "} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={course?.courseImage?.url} />
        {/* Twitter*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ggirhr" />
        <meta
          name="twitter:title"
          content={`${course?.metaTitle || course?.title} | GGIRHR`}
        />
        <meta name="twitter:image" content={course?.courseImage?.url} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addCourseJsonLd()}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addBreadcrumbsJsonLd()}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addFAQJsonLd()}
        />
      </Head>
      <div className="py-16 overflow-hidden mx-auto">
        <div className="max-w-7xl mx-auto px-3 space-y-8 sm:px-6 lg:px-11">
          <div className="mx-auto">
            <h2 className="text-base text-brandBlue font-semibold tracking-wide uppercase">
              Courses
            </h2>
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brandDark sm:text-4xl font-heading">
              {course?.title}
            </h1>
          </div>
          <div className="flex justify-center">
            <Image
              src={course?.courseImage?.url}
              alt={course?.title}
              className="w-screen"
              width={800}
              height={500}
              sizes="(max-width: 640px) 90vw, 100vw"
              priority={true}
            />
          </div>

          <div className="relative z-10 text-base mx-auto lg:max-w-6xl lg:mx-0">
            {course?.objective?.raw?.children && (
              <RichText
                content={course?.objective?.raw}
                renderers={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-extrabold text-brandDark my-4">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-brandDark my-3">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-bold text-brandDark my-2">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-base text-gray-700 my-2 leading-relaxed">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc pl-6 my-3">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal pl-6 my-3">{children}</ol>
                  ),
                  li: ({ children }) => <li className="mb-1">{children}</li>,
                }}
              />
            )}
          </div>
          <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none space-x-3">
            <div className="rounded-md shadow">
              <Link
                href={`/contact?pageVisit=${courseSlug}`}
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brandBlue hover:bg-brandBlueDark3"
              >
                Contact Us
              </Link>
            </div>
            <div className="rounded-md shadow flex justify-center">
              <a
                href="tel:+919108910852"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brandBlue hover:bg-brandBlueDark3"
              >
                <PhoneIcon className="w-5 h-5 mr-2" /> Call Us
              </a>
            </div>
            <div className="rounded-md shadow flex justify-center">
              <a
                href="https://www.youtube.com/channel/UCPWVap8s4REIDwqYpHq0pew"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brandBlue hover:bg-brandBlueDark3"
                target="_blank"
              >
                <BsYoutube className="w-6 h-6 mr-2 " /> GGIRHR
              </a>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-10 lg:items-start">
            <div className="relative z-10">
              <div className="text-brandDark mx-auto lg:max-w-none">
                {course?.description?.raw?.children ? (
                  <RichText
                    content={course?.description?.raw}
                    renderers={{
                      h1: ({ children }) => (
                        <h1 className="text-3xl font-extrabold text-brandDark my-4">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-2xl font-bold text-brandDark my-3">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-xl font-bold text-brandDark my-2">
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p className="text-base text-gray-700 my-2 leading-relaxed">
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc pl-6 my-3">{children}</ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal pl-6 my-3">{children}</ol>
                      ),
                      li: ({ children }) => (
                        <li className="mb-1">{children}</li>
                      ),
                    }}
                  />
                ) : (
                  <p>Description not available</p>
                )}
              </div>
            </div>
            <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
                />
              </svg>

              <blockquote className="relative bg-white rounded-lg shadow-lg mb-10">
                <div className="rounded-t-lg py-2 sm:px-4 sm:pt-4 sm:pb-8">
                  <div className="overflow-x-auto ">
                    <table className="w-full table-auto">
                      <tbody className="divide-y divide-pink-100 text-lg font-medium dark:divide-gray-500">
                        {course?.numberOfBatchesPerYear && (
                          <tr className="flex">
                            <td className="whitespace-nowrap p-2">
                              <div className="flex items-center justify-center font-medium text-gray-800">
                                <div className=" w-[300px] md:w-fit overflow-hidden text-wrap  text-gray-700 flex gap-x-3 items-start">
                                  <Image
                                    src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1736420820/Students_z7bqek.svg"
                                    alt="Number_of_Student_Intake_Per_Batch_icon"
                                    width={100}
                                    height={100}
                                    className="h-8 w-8 object-cover"
                                    loading="lazy"
                                  />
                                  Number of Student Intake Per Batch:
                                </div>
                              </div>
                            </td>

                            <td className=" p-2 px-0">
                              <div className="text-left font-medium text-gg-500 dark:text-gg-400">
                                {course?.numberOfStudentIntakePerBatch}
                              </div>
                            </td>
                          </tr>
                        )}
                        {course?.numberOfStudentIntakePerBatch && (
                          <tr className="flex">
                            <td className="whitespace-nowrap p-2">
                              <div className="font-medium text-gray-800">
                                <div className="flex items-center justify-center font-medium text-gray-800">
                                  <div className="h-10  text-gray-700 flex gap-x-3 items-start">
                                    <Image
                                      src={
                                        "https://res.cloudinary.com/garbhagudiivf/image/upload/v1736420828/Batches_mm1yad.svg"
                                      }
                                      alt={"Number_of_Batches_Per_Year_icon"}
                                      width={100}
                                      height={100}
                                      className="h-8 w-8 object-cover"
                                      loading="lazy"
                                    />
                                    Number of Batches Per Year:
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td className=" p-2 px-0">
                              <div className="text-left font-medium text-gg-500 dark:text-gg-400">
                                {course?.numberOfBatchesPerYear}
                              </div>
                            </td>
                          </tr>
                        )}
                        {course?.qualification && (
                          <tr className="flex">
                            <td className="whitespace-nowrap p-2">
                              <div className="font-medium text-gray-800">
                                <div className="flex items-center justify-center font-medium text-gray-800">
                                  <div className="h-10  text-gray-700  flex gap-x-3 items-start">
                                    <AcademicCapIcon className="w-8 h-8 inline-block text-brandBlue" />
                                    Qualification:
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td className=" p-2 px-0">
                              <div className="text-left font-medium text-gg-500 dark:text-gg-400">
                                {course?.qualification}
                              </div>
                            </td>
                          </tr>
                        )}
                        {course?.duration && (
                          <tr className="flex">
                            <td className="whitespace-nowrap p-2">
                              <div className="font-medium">
                                <div className="flex items-center justify-center font-medium">
                                  <div className="h-10   text-gray-700 flex gap-x-3 items-start">
                                    <ClockIcon className="w-8 h-8 inline-block text-brandBlue" />
                                    Duration:
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td className="p-2 px-0">
                              <div className="text-left font-medium text-gg-500 dark:text-gg-400">
                                {course?.duration}
                              </div>
                            </td>
                          </tr>
                        )}
                        {course?.fees && (
                          <tr className="flex">
                            <td className="whitespace-nowrap p-2">
                              <div className="flex items-center justify-center font-medium">
                                <div className="h-10  text-gray-700 flex gap-x-3 items-start">
                                  <CurrencyRupeeIcon className="w-8 h-8 inline-block text-brandBlue" />{" "}
                                  Fee:
                                </div>
                              </div>
                            </td>

                            <td className="p-2 px-0">
                              <div className="text-left font-medium text-gg-500 dark:text-gg-400">
                                {course?.fees}
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </blockquote>

              <blockquote className="relative bg-gray-200 rounded-lg shadow-lg mb-10">
                <div className="rounded-t-lg overflow-hidden w-full rounded-lg shadow-lg">
                  <Form refPath={courseSlug} />
                </div>
              </blockquote>

              <blockquote className="relative bg-white rounded-lg shadow-lg mb-10">
                <div className="rounded-t-lg py-2 sm:px-4 sm:pt-4 bg-brandBlue">
                  <div className=" text-base text-white font-bold tracking-wide text-center">
                    Training Courses and Programs
                  </div>
                </div>
                <div className="py-2">
                  {courses &&
                    Array.from(
                      new Map(
                        Object.values(courses)
                          .flat()
                          .map((course) => [course.href, course])
                      ).values()
                    ).map((course, index) => (
                      <div
                        className={`group hover:bg-gray-200 hover:text-brandBlue rounded-md px-4 py-1 ${
                          courseSlug === course.href &&
                          "bg-brandBlue font-semibold text-white"
                        }`}
                        key={course.href}
                      >
                        <Link href={course.href} key={course.name}>
                          {index + 1}. {course.name}
                        </Link>
                      </div>
                    ))}
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <Cta />
    </div>
  );
};

export default CoursePage;
export const getStaticProps = async ({ params }: { params: any }) => {
  const url = process.env.ENDPOINT;

  // Create a GraphQL client
  const createGraphQLClient = () =>
    new GraphQLClient(url, {
      headers: {
        Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
      },
    });

  const query = gql`
    query ($pageSlug: String!) {
      course(where: { slug: $pageSlug }) {
        id
        title
        objective {
          raw
          text
        }
        numberOfBatchesPerYear
        numberOfStudentIntakePerBatch
        duration
        qualification
        fees
        courseImage {
          url
        }
        description {
          raw
          text
        }
        metaDescription
        metaKeywords
        metaTitle
        faqJson
        courseJson
      }
    }
  `;

  const variables = {
    pageSlug: params.slug,
  };

  // Fetch the data with throttling
  const graphQLClient = createGraphQLClient();
  const fetchCourse = async () => graphQLClient.request(query, variables);

  const data = await throttledFetch(fetchCourse);
  const course = data?.course;

  return {
    props: {
      course,
    },
    revalidate: 180, // ISR: Regenerate the page every 3 minutes
  };
};

export const getStaticPaths = async () => {
  const url = process.env.ENDPOINT;

  // Create a GraphQL client
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });

  const query = gql`
    query {
      courses {
        slug
      }
    }
  `;

  // Fetch all slugs with throttling
  const fetchCourses = async () => graphQLClient.request(query);
  const { courses } = await throttledFetch(fetchCourses);

  const paths = courses.map((course: { slug: string }) => ({
    params: { slug: course.slug },
  }));

  return {
    paths,
    fallback: true, // Pages not generated at build time will be server-rendered
  };
};
