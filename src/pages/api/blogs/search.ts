import type { NextApiRequest, NextApiResponse } from "next";
import { gql } from "graphql-request";
import graphcms from "lib/graphcms";
import {
  BLOG_CARD_FIELDS,
  BLOG_PAGE_SIZE,
  firstParam,
  pageParam,
  totalPagesFor,
} from "lib/blogs";
import type { BlogPost } from "sections/blogs/BlogCard";

const searchQuery = gql`
  query blogSearch($q: String!, $limit: Int!, $offset: Int!) {
    blogsConnection(
      where: { title_contains: $q }
      orderBy: publishedOn_DESC
      first: $limit
      skip: $offset
    ) {
      edges {
        node {
          ${BLOG_CARD_FIELDS}
        }
      }
    }
    total: blogsConnection(where: { title_contains: $q }) {
      aggregate {
        count
      }
    }
  }
`;

type SearchResponse = {
  blogsConnection: { edges: { node: BlogPost }[] };
  total: { aggregate: { count: number } };
};

export type BlogSearchResult = {
  blogs: BlogPost[];
  total: number;
  totalPages: number;
};

// Client-side search for the listing page: the Hygraph token is server-only.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogSearchResult | { error: string }>,
) {
  const q = firstParam(req.query.q);
  if (!q) return res.status(400).json({ error: "Missing q" });
  const page = pageParam(req.query.page);

  try {
    const { blogsConnection, total } = await graphcms.request<SearchResponse>(
      searchQuery,
      {
        q,
        limit: BLOG_PAGE_SIZE,
        offset: (page - 1) * BLOG_PAGE_SIZE,
      },
    );

    // max-age lets the browser reuse a results page on back/forward.
    res.setHeader(
      "Cache-Control",
      "public, max-age=60, s-maxage=60, stale-while-revalidate=120",
    );
    return res.status(200).json({
      blogs: blogsConnection.edges.map((edge) => edge.node),
      total: total.aggregate.count,
      totalPages: totalPagesFor(total.aggregate.count),
    });
  } catch (error) {
    console.error("Blog search failed:", error);
    return res.status(500).json({ error: "Search failed" });
  }
}
