import React, { useEffect, useRef, useState } from "react";
import { gql } from "graphql-request";
import Head from "next/head";
import { useRouter } from "next/router";
import graphcms from "lib/graphcms";
import Loading from "components/loading";
import { throttledFetch } from "lib/throttle";
import {
  BLOG_CARD_FIELDS,
  BLOG_PAGE_SIZE,
  blogsHref,
  firstParam,
  pageParam,
  totalPagesFor,
} from "lib/blogs";
import BlogsHeader from "sections/blogs/BlogsHeader";
import BlogGrid from "sections/blogs/BlogGrid";
import Pagination from "sections/blogs/Pagination";
import type { BlogPost } from "sections/blogs/BlogCard";
import type { BlogSearchResult } from "pages/api/blogs/search";

// `?q=` turns this page into search results: the static page renders as
// usual, then results for the query + `p` (results page) are fetched from
// /api/blogs/search (the Hygraph token is server-only) and replace the grid.
// Search URLs stay on /blogs/page/1 (see `blogsHref`) so every search step is
// a shallow, in-place update; the previous result stays shown while loading.
const EMPTY_RESULT: BlogSearchResult = { blogs: [], total: 0, totalPages: 1 };

const useBlogSearch = (q: string, page: number) => {
  const key = `${q}|${page}`;
  const [result, setResult] = useState<{
    key: string;
    data: BlogSearchResult;
  } | null>(null);

  useEffect(() => {
    if (!q) {
      setResult(null);
      return;
    }
    const controller = new AbortController();
    fetch(`/api/blogs/search?q=${encodeURIComponent(q)}&page=${page}`, {
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: BlogSearchResult) => setResult({ key, data }))
      .catch((error) => {
        if (error?.name !== "AbortError")
          setResult({ key, data: EMPTY_RESULT });
      });
    return () => controller.abort();
  }, [q, page, key]);

  return {
    result: result?.data ?? null,
    loading: Boolean(q) && result?.key !== key,
  };
};

const BlogList = ({ currentPageNumber, totalPages, blogs }) => {
  const router = useRouter();
  const q = firstParam(router.query.q);
  const searchPage = pageParam(router.query.p);
  const { result, loading } = useBlogSearch(q, searchPage);

  // Shallow from page 1 (props already match); from page N it's a normal push.
  const search = (term: string) =>
    router.push(blogsHref(1, term), undefined, {
      scroll: false,
      shallow: currentPageNumber === 1,
    });

  // Paging through results: glide to the grid instead of jumping to the top.
  const resultsRef = useRef<HTMLDivElement>(null);
  const prevSearchPage = useRef(searchPage);
  useEffect(() => {
    if (prevSearchPage.current !== searchPage) {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    prevSearchPage.current = searchPage;
  }, [searchPage]);

  const blogTitle = q
    ? `Search: ${q} | Blogs | GGIRHR`
    : `Blogs | Page - ${currentPageNumber} | GGIRHR`;

  if (router.isFallback) {
    return <Loading />;
  }

  const listPosts: BlogPost[] = (blogs ?? []).map((edge) => edge.node);
  // While the first search request is in flight, keep showing the list.
  const posts = q && result ? result.blogs : listPosts;
  const pages = q && result ? result.totalPages : totalPages;
  return (
    <div className="bg-white font-primary">
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{blogTitle}</title>
        <meta name="title" content={blogTitle} />
        {q && <meta name="robots" content="noindex" />}
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
      <BlogsHeader defaultQuery={q} onSearch={search}>
        {q && (
          <p className="text-[13px] text-[#374151] sm:text-base">
            {!result
              ? "Searching…"
              : `${result.total} ${result.total === 1 ? "result" : "results"} for “${q}”`}
          </p>
        )}
      </BlogsHeader>
      {/* Previous results stay visible and fade while the next set loads. */}
      <div
        ref={resultsRef}
        className={`scroll-mt-24 transition-opacity duration-200 ${
          loading ? "opacity-50" : "opacity-100"
        }`}
      >
        <BlogGrid posts={posts} />
        <Pagination
          current={q ? searchPage : currentPageNumber}
          total={pages}
          query={q}
        />
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
            ${BLOG_CARD_FIELDS}
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
    BLOG_PAGE_SIZE,
    Number((params.page - 1) * BLOG_PAGE_SIZE),
  );

  return {
    props: {
      currentPageNumber: Number(params.page),
      totalPages: totalPagesFor(total.aggregate.count),
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
      limit: BLOG_PAGE_SIZE,
    }),
  ].map((page) => ({
    params: { page: String(page) },
  }));

  return {
    paths,
    fallback: true,
  };
};
