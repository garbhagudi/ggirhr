import React from "react";
import { gql } from "graphql-request";
import Head from "next/head";
import type { GetServerSideProps } from "next";
import graphcms from "lib/graphcms";
import { throttledFetch } from "lib/throttle";
import BlogsHeader from "sections/blogs/BlogsHeader";
import BlogGrid from "sections/blogs/BlogGrid";
import type { BlogPost } from "sections/blogs/BlogCard";

const MAX_RESULTS = 50;

type Props = { q: string; blogs: BlogPost[] };

const BlogSearch = ({ q, blogs }: Props) => (
  <div className="bg-white font-primary">
    <Head>
      <title>{`Search: ${q} | Blogs | GGIRHR`}</title>
      <meta name="robots" content="noindex" />
    </Head>
    {/* Count sits inside the header box: on mobile the grid overlaps its bottom. */}
    <BlogsHeader defaultQuery={q}>
      <p className="text-[13px] text-[#374151] sm:text-base">
        {blogs.length} {blogs.length === 1 ? "result" : "results"} for “{q}”
      </p>
    </BlogsHeader>
    <div className="pb-16">
      <BlogGrid posts={blogs} />
    </div>
  </div>
);

export default BlogSearch;

// Server-side because the Hygraph token is server-only.
export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const q = (Array.isArray(query.q) ? query.q[0] : query.q)?.trim() ?? "";
  if (!q) {
    return { redirect: { destination: "/blogs/page/1", permanent: false } };
  }

  const searchQuery = gql`
    query blogSearch($q: String!, $first: Int!) {
      blogs(
        where: { title_contains: $q }
        orderBy: publishedOn_DESC
        first: $first
      ) {
        id
        title
        slug
        publishedOn
        image {
          url
        }
      }
    }
  `;

  const fetchResults = async (q: string, first: number) =>
    graphcms.request<{ blogs: BlogPost[] }>(searchQuery, { q, first });

  const { blogs } = await throttledFetch(fetchResults, q, MAX_RESULTS);

  return { props: { q, blogs } };
};
