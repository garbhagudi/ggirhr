import React from "react";
import { gql } from "graphql-request";
import Head from "next/head";
import { useRouter } from "next/router";
import graphcms from "lib/graphcms";
import Loading from "components/loading";
import { throttledFetch } from "lib/throttle";
import BlogsHeader from "sections/blogs/BlogsHeader";
import BlogGrid from "sections/blogs/BlogGrid";
import Pagination from "sections/blogs/Pagination";

// 1 featured card + a 2-column grid of 6, per the redesign.
const limit = 7;

const BlogList = ({ currentPageNumber, totalPages, blogs }) => {
  const blogTitle = `Blogs | Page - ${currentPageNumber} | GGIRHR`;
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }
  return (
    <div className="bg-white font-primary">
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
          content="https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegs1ar01h506pr5ijix6of"
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
          content="https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegs1ar01h506pr5ijix6of"
        />
      </Head>
      <BlogsHeader />
      <BlogGrid posts={(blogs ?? []).map((edge) => edge.node)} />
      <Pagination current={currentPageNumber} total={totalPages} />
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
          }
        }
      }
      total: blogsConnection {
        aggregate {
          count
        }
      }
    }
  `;

  // Define the fetch function
  const fetchBlogs = async (limit, offset) => {
    return graphcms.request(query, { limit, offset });
  };

  // Use throttledFetch for the API call
  const {
    blogsConnection: { blogs },
    total,
  } = await throttledFetch(
    fetchBlogs,
    limit,
    Number((params.page - 1) * limit)
  );

  return {
    props: {
      currentPageNumber: Number(params.page),
      totalPages: Math.max(1, Math.ceil(total.aggregate.count / limit)),
      blogs,
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

  // Define the fetch function
  const fetchBlogCount = async () => {
    return graphcms.request(query);
  };

  // Use throttledFetch for the API call
  const { blogsConnection } = await throttledFetch(fetchBlogCount);

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
