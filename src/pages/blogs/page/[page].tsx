import React from "react";
import { gql } from "graphql-request";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import graphcms from "lib/graphcms";
import Loading from "components/loading";

const limit = 6;

const BlogList = ({
  currentPageNumber,
  hasNextPage,
  hasPreviousPage,
  blogs,
}) => {
  const blogTitle = `Blogs | Page - ${currentPageNumber} | GGIRHR`;
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{blogTitle}</title>
        <meta name="title" content={blogTitle} />
        <meta
          name="description"
          content="Our Blogs and Articles regarding Infertility, Treatment, Academics and Parenthood"
        />

        {/* Open Graph / Facebook */}

        <meta property="og:title" content={blogTitle} />
        <meta property="og:site_name" content="GGIRHR" />
        <meta property="og:url" content="https://ggirhr.com" />
        <meta
          property="og:description"
          content="Our Blogs and Articles regarding Infertility, Treatment, Academics and Parenthood"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1651644125/GGIRHR/SEO/SEO_Blogs-min_y4yyv9.jpg"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ggirhr" />
        <meta name="twitter:title" content={blogTitle} />
        <meta
          name="twitter:description"
          content="Our Blogs and Articles regarding Infertility, Treatment, Academics and Parenthood"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1651644125/GGIRHR/SEO/SEO_Blogs-min_y4yyv9.jpg"
        />
      </Head>
      <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl font-heading underline">
              BLOGS
            </h2>
          </div>
          <div className="mt-12 max-w-xl mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
            {blogs?.map((item) => (
              <div
                key={item?.node?.id}
                className="flex flex-col rounded-2xl shadow-lg overflow-hidden"
              >
                <Link href={`/blogs/${item.node.slug}`} passHref>
                  <div className="flex-shrink-0">
                    <img
                      className="h-38 w-full object-contain rounded-2xl cursor-pointer"
                      src={item?.node?.image?.url}
                      alt={item?.node?.title}
                    />
                  </div>
                </Link>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <Link href={`/blogs/${item?.node?.slug}`} passHref>
                      <p className="text-lg font-semibold text-gray-900 cursor-pointer font-heading">
                        {item?.node?.title}
                      </p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <Link
                        href={`/doctors/${item?.node?.teacher?.slug}`}
                        passHref
                        legacyBehavior
                      >
                        <a>
                          <span className="sr-only">
                            {item?.node?.teaacher?.name}
                          </span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={item?.node?.teacher?.image?.url}
                            alt={item?.node?.teacher?.name}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <Link
                          legacyBehavior
                          href={`/doctors/${item?.node?.teacher?.slug}`}
                        >
                          <a className="font-qs font-semibold">
                            {item?.node?.teacher?.name}
                          </a>
                        </Link>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500 font-qs">
                        <time>{item?.node?.publishedOn}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-4 text-center mt-10">
            {hasPreviousPage ? (
              <Link
                legacyBehavior
                href={`/blogs/page/${currentPageNumber - 1}`}
              >
                <a className="my-8 rounded-xl w-44 py-4 px-6 bg-brandBlue font-qs font-semibold text-white">
                  {"< "}Previous page
                </a>
              </Link>
            ) : null}
            {hasNextPage ? (
              <Link
                legacyBehavior
                href={`/blogs/page/${currentPageNumber + 1}`}
              >
                <a className="my-8 rounded-xl py-4 w-44 px-6 bg-brandBlue font-qs font-semibold text-white">
                  Next page {">"}
                </a>
              </Link>
            ) : null}
          </div>
          <div className="text-center font-qs text-xl font-semibold">
            Page: {currentPageNumber}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;

export async function getStaticProps({ params }) {
  const query = gql`
    query blogPageQuery($limit: Int!, $offset: Int!) {
      blogsConnection(orderBy: publishedOn_DESC, first: $limit, skip: $offset) {
        blogs: edges {
          node {
            id
            title
            publishedOn
            slug
            image {
              url
            }
            teacher {
              slug
              name
              id
              image {
                url
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  `;

  const {
    blogsConnection: { blogs, pageInfo },
  } = await graphcms.request(query, {
    limit,
    offset: Number((params.page - 1) * limit),
  });

  return {
    props: {
      currentPageNumber: Number(params.page),
      blogs,
      ...pageInfo,
    },
    revalidate: 180,
  };
}

export const getStaticPaths = async () => {
  const query = gql`
    query {
      blogsConnection {
        aggregate {
          count
        }
      }
    }
  `;

  const { blogsConnection } = await graphcms.request(query);
  function* numberOfPages({ total, limit }) {
    let page = 1;
    let offset = 0;
    while (offset < total) {
      yield page;
      page++;
      offset += limit;
    }
  }

  const paths = [
    ...numberOfPages({
      total: blogsConnection.aggregate.count,
      limit,
    }),
  ].map((page) => ({
    params: { page: String(page) },
  }));

  return {
    paths,
    fallback: true,
  };
};
