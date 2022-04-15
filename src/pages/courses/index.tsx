import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

export const getServerSideProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });

  const query = gql`
    query {
      courses {
        id
        title
        slug
        courseImage {
          url
        }
        objective
      }
    }
  `;
  const data = await graphQLClient.request(query);
  const courses = data.courses;
  return {
    props: {
      courses,
    },
  };
};

const Course = ({ courses }) => {
  return (
    <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 mx-auto max-w-7xl">
      <div className="container">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 font-heading ">
                Courses Offered
              </h2>
              <p className="text-base text-body-color">
                Check out the courses offered in various fields at GGIRHR
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 px-5 sm:px-2">
          {courses?.map((items: any) => (
            <div className="w-full md:w-1/2 lg:w-1/3 px-2" key={items?.id}>
              <div className="max-w-lg mx-auto mb-16 ">
                <div className="overflow-clip mb-3">
                  <Link href={`/courses/${items?.slug}`} passHref>
                    <img
                      src={items?.courseImage?.url}
                      alt={items?.title}
                      className="cursor-pointer"
                    />
                  </Link>
                </div>
                <div>
                  <span className=" bg-brandBlue hover:bg-brandBlueDark3 rounded-md inline-block text-center py-1 px-4 text-base leading-loose font-semibold text-white mb-2 ">
                    <Link href={`/courses/${items?.slug}`} passHref>
                      <span className="flex items-center justify-center ">
                        Learn More <ChevronRightIcon className="h-6 w-6" />
                      </span>
                    </Link>
                  </span>
                  <h3>
                    <a className=" font-semibold text-xl sm:text-2xl lg:text-xl xl:text-xl mb-2 inline-block text-dark hover:text-primary h-12 font-heading">
                      <Link href={`/courses/${items?.slug}`}>
                        {items?.title}
                      </Link>
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    <Link href={`/courses/${items?.slug}`}>
                      {`${items?.objective.slice(0, 150)}...`}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Course;
