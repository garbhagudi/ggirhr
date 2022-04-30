import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Head from "next/head";

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
    <div>
      <Head>
        <title>Courses Offered | GGIRHR</title>
      </Head>
      <section className="text-gray-600 body-font mb-10">
        <div className="max-w-7xl px-4 xl:px-0 py-4 mx-auto">
          <div className="flex flex-wrap w-full mb-4 p-4">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-4xl font-bold mb-2 text-gray-900 text-center font-heading">
                Courses
              </h1>
              <h3 className="text-center max-w-3xl mx-auto font-semibold mt-4 text-gray-900">
                Check out our most popular courses below
              </h3>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
            {courses.map((item) => (
              <Link href={`/courses/${item?.slug}`} passHref key={item.id}>
                <div className="hover:shadow-2xl rounded-3xl cursor-pointer">
                  <div className="overflow-hidden">
                    <img
                      className="rounded-t-3xl"
                      src={item.courseImage.url}
                      alt={item.title}
                    />
                    <div className="border-r-2 border-l-2 border-b-2 rounded-b-3xl bg-gray-50">
                      <h2 className="text-lg text-gray-900 font-medium title-font py-4 md:ml-2 text-center md:text-left">
                        {item.title}
                      </h2>
                      <p className="leading-relaxed text-base md:ml-2 text-center md:text-left mb-6 ">
                        {item.objective.slice(0, 140)}...
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;
