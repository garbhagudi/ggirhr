import React from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import { RichText } from '@graphcms/rich-text-react-renderer';
import {
  ClockIcon,
  AcademicCapIcon,
  CurrencyRupeeIcon,
  PhoneIcon,
} from '@heroicons/react/solid';
import Head from 'next/head';
import Link from 'next/link';
import { throttledFetch } from 'lib/throttle';
import Image from 'next/image';
import { courses } from 'components/header/popover';
import { usePathname } from 'next/navigation';

const CoursePage = ({ course }) => {
  const courseSlug = usePathname();
  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{`${course?.title} | GGIRHR`}</title>
        <meta name='title' content={`${course?.title} | GGIRHR`} />
        <meta
          name='description'
          content={course?.description?.text.slice(0, 180)}
        />
        {/* Open Graph / Facebook */}
        <meta property='og:title' content={`${course?.title} | GGIRHR`} />
        <meta property='og:site_name' content='GGIRHR' />
        <meta property='og:url' content='https://ggirhr.com' />
        <meta
          property='og:description'
          content={course?.description?.text.slice(0, 180)}
        />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={course?.courseImage?.url} />
        {/* Twitter*/}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@ggirhr' />
        <meta name='twitter:title' content={`${course?.title} | GGIRHR`} />
        <meta
          name='twitter:description'
          content={course?.description?.text.slice(0, 180)}
        />
        <meta name='twitter:image' content={course?.courseImage?.url} />
      </Head>
      <div className='py-16 overflow-hidden mx-auto'>
        <div className='max-w-7xl mx-auto px-3 space-y-8 sm:px-6 lg:px-11'>
          <div className='mx-auto'>
            <h2 className='text-base text-brandBlue font-semibold tracking-wide uppercase'>
              Courses
            </h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brandDark sm:text-4xl font-heading'>
              {course?.title}
            </p>
          </div>
          <div className='flex justify-center'>
            <img
              src={course?.courseImage?.url}
              alt={course?.title}
              className=''
            />
          </div>
          <div className='relative z-10 text-base mx-auto lg:max-w-6xl lg:mx-0'>
            <p className='text-lg text-brandDark'>{course?.objective}</p>
          </div>
          <div className='mt-10 flex text-base max-w-prose mx-auto lg:max-w-none space-x-3'>
            <div className='rounded-md shadow'>
              <Link
                href='/contact'
                className='w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brandBlue hover:bg-brandBlueDark3'
              >
                Contact Us
              </Link>
            </div>
            <div className='rounded-md shadow flex justify-center'>
              <a
                href='tel:+919108910852'
                className='w-full flex items-center justify-center px-5 py-3 bg-white border border-transparent text-base font-medium rounded-md text-brandBlue'
              >
                <PhoneIcon className='w-5 h-5 mr-2' /> Call Us
              </a>
            </div>
          </div>
          <div className='lg:grid lg:grid-cols-2 lg:gap-2 lg:items-start'>
            <div className='relative z-10'>
              <div className='text-brandDark mx-auto lg:max-w-none'>
                {course?.description?.raw?.children ? (
                  <RichText content={course?.description?.raw?.children} />
                ) : (
                  <p>Description not available</p>
                )}
              </div>
            </div>
            <div className='mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none'>
              <svg
                className='absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20'
                width={404}
                height={384}
                fill='none'
                viewBox='0 0 404 384'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='bedc54bc-7371-44a2-a2bc-dc68d819ae60'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill='url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)'
                />
              </svg>

              <blockquote className='relative bg-white rounded-lg shadow-lg mb-10'>
                <div className='rounded-t-lg py-2 sm:px-4 sm:pt-4 sm:pb-8'>
                  <div className='relative text-lg text-gray-700 font-medium'>
                    <table className='table bg-white rounded-lg mx-auto'>
                      <tbody>
                        {course?.numberOfBatchesPerYear && (
                          <tr className='text-gray-700'>
                            <td className='p-4 flex gap-x-3 items-start'>
                              <Image
                                src={
                                  'https://res.cloudinary.com/garbhagudiivf/image/upload/v1736420828/Batches_mm1yad.svg'
                                }
                                alt={'Number_of_Batches_Per_Year_icon'}
                                width={100}
                                height={100}
                                className='h-8 w-8 object-cover'
                                priority
                              />
                              Number of Batches Per Year:
                            </td>
                            <td className='p-4 align-top'>
                              {course?.numberOfBatchesPerYear}
                            </td>
                          </tr>
                        )}
                        {course?.numberOfStudentIntakePerBatch && (
                          <tr className='text-gray-700'>
                            <td className='p-4 flex gap-x-3 items-start'>
                              <Image
                                src={
                                  'https://res.cloudinary.com/garbhagudiivf/image/upload/v1736420820/Students_z7bqek.svg'
                                }
                                alt={'Number_of_Student_Intake_Per_Batch_icon'}
                                width={100}
                                height={100}
                                className='h-8 w-8 object-cover'
                                priority
                              />
                              Number of Student Intake Per Batch:
                            </td>
                            <td className='p-4 align-top'>
                              {course?.numberOfStudentIntakePerBatch}
                            </td>
                          </tr>
                        )}
                        {course?.qualification && (
                          <tr className='text-gray-700'>
                            <td className='p-4 flex items-center'>
                              <AcademicCapIcon className='w-8 h-8 inline-block mr-3 text-brandBlue' />{' '}
                              Qualification:
                            </td>
                            <td className='p-4'>{course?.qualification}</td>
                          </tr>
                        )}
                        {course?.duration && (
                          <tr className='text-gray-700'>
                            <td className='p-4 flex items-center'>
                              <ClockIcon className='w-8 h-8 inline-block mr-3 text-brandBlue' />
                              Duration:
                            </td>
                            <td className='p-4'>{course?.duration}</td>
                          </tr>
                        )}

                        {course?.fees && (
                          <tr className='text-gray-700'>
                            <td className='p-4 flex items-center'>
                              <CurrencyRupeeIcon className='w-8 h-8 inline-block mr-3 text-brandBlue' />{' '}
                              Fee:
                            </td>
                            <td className='p-4'>{course?.fees}</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </blockquote>

              <blockquote className='relative bg-white rounded-lg shadow-lg mb-10'>
                <div className='rounded-t-lg py-2 sm:px-4 sm:pt-4 bg-brandBlue'>
                  <div className=' text-base text-white font-bold tracking-wide text-center'>
                    Training Courses and Programs
                  </div>
                </div>
                <div className='py-2'>
                  {courses && Object.values(courses)
                    .flat()
                    .map((course, index) => {
                      return (
                        <div
                          className={`group hover:bg-gray-200 hover:text-brandBlue rounded-md px-4 py-1 ${
                            courseSlug === course.href &&
                            'bg-brandBlue font-semibold text-white'
                          }`}
                          key={index}
                        >
                          <Link href={course.href} key={course.name}>
                            {index + 1}. {course.name}
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </blockquote>

              <blockquote className='relative bg-gray-200 rounded-lg shadow-lg mb-10'>
                <div className='rounded-t-lg py-2 sm:px-4 sm:pt-4 sm:pb-8'>
                  <iframe
                    src='/contact2.html'
                    className='max-w-5xl mt-5 lg:mt-0 mx-auto h-96 lg:h-[60vh]'
                  >
                    Loading...
                  </iframe>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
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
        objective
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
