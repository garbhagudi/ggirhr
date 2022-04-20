import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import { RichText } from "@graphcms/rich-text-react-renderer";
import {
  ClockIcon,
  AcademicCapIcon,
  CurrencyRupeeIcon,
  PhoneIcon,
} from "@heroicons/react/solid";

const CoursePage = ({ course }) => {
  return (
    <div>
      <div className="py-16 overflow-hidden mx-auto">
        <div className="max-w-7xl mx-auto px-3 space-y-8 sm:px-6 lg:px-11">
          <div className="mx-auto">
            <h2 className="text-base text-brandBlue font-semibold tracking-wide uppercase">
              Courses
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-brandDark sm:text-4xl font-heading">
              {course?.title}
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={course?.courseImage?.url}
              alt={course?.title}
              className=""
            />
          </div>
          <div className="relative z-10 text-base mx-auto lg:max-w-6xl lg:mx-0">
            <p className="text-lg text-brandDark">{course?.objective}</p>
          </div>
          <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none space-x-3">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brandBlue hover:bg-brandBlueDark3"
              >
                Contact Us
              </a>
            </div>
            <div className="rounded-md shadow flex justify-center">
              <a
                href="tel:+918880000909"
                className="w-full flex items-center justify-center px-5 py-3 bg-white border border-transparent text-base font-medium rounded-md text-brandBlue"
              >
                <PhoneIcon className="w-5 h-5 mr-2" /> Call Us
              </a>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-2 lg:items-start">
            <div className="relative z-10">
              <div className="text-brandDark mx-auto lg:max-w-none">
                <RichText content={course?.description?.raw.children} />
              </div>
              <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none space-x-3">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brandBlue hover:bg-brandBlueDark3"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="rounded-md shadow flex justify-center">
                  <a
                    href="tel:+918880000909"
                    className="w-full flex items-center justify-center px-5 py-3 bg-white border border-transparent text-base font-medium rounded-md text-brandBlue"
                  >
                    <PhoneIcon className="w-5 h-5 mr-2" /> Call Us
                  </a>
                </div>
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
              <blockquote className="relative bg-white rounded-lg shadow-lg">
                <div className="rounded-t-lg py-2 sm:px-4 sm:pt-4 sm:pb-8">
                  <div className="relative text-lg text-gray-700 font-medium">
                    <table className="table bg-white rounded-lg mx-auto">
                      <tbody>
                        <tr className="text-gray-700">
                          <td className="p-4 flex items-center">
                            <ClockIcon className="w-8 h-8 inline-block mr-3 text-brandBlue" />
                            Duration:
                          </td>
                          <td className="p-4">{course?.duration}</td>
                        </tr>
                        <tr className="text-gray-700">
                          <td className="p-4 flex items-center">
                            <AcademicCapIcon className="w-8 h-8 inline-block mr-3 text-brandBlue" />{" "}
                            Qualification:
                          </td>
                          <td className="p-4">{course?.qualification}</td>
                        </tr>
                        <tr className="text-gray-700">
                          <td className="p-4 flex items-center">
                            <CurrencyRupeeIcon className="w-8 h-8 inline-block mr-3 text-brandBlue" />{" "}
                            Fee:
                          </td>
                          <td className="p-4">{course?.fees}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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

export const getServerSideProps = async (pageContext: any) => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });

  const pageSlug = pageContext.query.slug;

  const query = gql`
    query ($pageSlug: String!) {
      course(where: { slug: $pageSlug }) {
        id
        title
        objective
        duration
        qualification
        fees
        courseImage {
          url
        }
        description {
          raw
        }
      }
    }
  `;

  const variables = {
    pageSlug,
  };

  const data = await graphQLClient.request(query, variables);
  const course = data.course;

  return {
    props: {
      course,
    },
  };
};
