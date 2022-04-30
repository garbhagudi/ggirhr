import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import { RichText } from "@graphcms/rich-text-react-renderer";

import Error from "next/error";
import Head from "next/head";

export const getServerSideProps = async (pageContext) => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });
  const pageSlug = pageContext.query.slug;

  const query = gql`
    query ($pageSlug: String!) {
      blog(where: { slug: $pageSlug }) {
        id
        title
        image {
          url
        }
        teacher {
          id
          image {
            url
          }
          name
          slug
        }
        content {
          raw
          text
        }
        publishedOn
      }
    }
  `;
  const variables = {
    pageSlug,
  };

  const data = await graphQLClient.request(query, variables);
  const blog = data.blog;
  return {
    props: {
      blog,
    },
  };
};

const BlogPage = ({ blog }) => {
  return (
    <div>
      <Head>
        <title>{blog?.title} | GGIRHR</title>
      </Head>
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
                    className="text-gray-100"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          {blog?.title ? (
            <div className="max-w-7xl mx-auto">
              <h1>
                <span className="mt-4 block text-2xl text-center leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                  {blog?.title}
                </span>
                <span className="block text-base text-center text-brandPink font-semibold tracking-wide uppercase mt-4">
                  {blog?.teacher?.name}
                </span>
              </h1>
              <figure>
                <img
                  className="w-full rounded-lg mt-10 mb-5"
                  src={blog?.image?.url}
                  alt={blog?.title}
                />
              </figure>
              <div>
                <RichText content={blog?.content?.raw.children} />
              </div>
              <div></div>
            </div>
          ) : (
            <Error statusCode={404} />
          )}
        </div>
      </div>
    </div>
  );
};
export default BlogPage;
