import React from "react";
import { GraphQLClient, gql } from "graphql-request";

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
      <div className="max-w-7xl mx-auto mb-24">
        <h1 className="text-center md:text-5xl font-semibold text-3xl pt-24 pb-10 font-heading">
          Courses Offered
        </h1>
        <p className="text-center font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
          reiciendis officiis ullam voluptatibus iste. Harum nam qui numquam
          culpa dolor?
        </p>
        <div className="mt-12 max-w-xl mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
          {courses?.map((items) => (
            <div
              className="max-w-sm bg-white rounded-2xl border-2 border-gray-100 shadow-md mx-auto hover:shadow-2xl overflow-hidden"
              key={items.id}
            >
              <a href={`/courses/${items.slug}`}>
                <img
                  className="rounded-t-lg"
                  src={items?.courseImage?.url}
                  alt={items?.title}
                />
              </a>
              <div className="p-5">
                <a href={`/courses/${items.slug}`}>
                  <h5 className="mb-2 text-2xl tracking-tight text-gray-900 font-heading">
                    {items?.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 ">
                  {items.objective.slice(0, 160)}...
                </p>
                <a
                  href={`/courses/${items.slug}`}
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-brandBlue rounded-xl hover:bg-brandBlueDark3 focus:ring-4 focus:ring-blue-300 "
                >
                  Read more
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
