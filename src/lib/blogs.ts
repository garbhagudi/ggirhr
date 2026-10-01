// Shared rules for the blog listing (/blogs/page/[page]) and its search
// (/api/blogs/search), so page size, card fields and URLs can't drift.

/** 1 featured card + a 2-column grid of 6, per the redesign. */
export const BLOG_PAGE_SIZE = 7;

/** GraphQL selection for a `BlogCard` (`sections/blogs/BlogCard`). */
export const BLOG_CARD_FIELDS = `
  id
  title
  publishedOn
  slug
  image {
    url
  }
`;

/** First value of a query param, trimmed; `""` when absent. */
export const firstParam = (value: string | string[] | undefined) =>
  (Array.isArray(value) ? value[0] : value)?.trim() ?? "";

/** A positive page number from a query param; 1 when absent or invalid. */
export const pageParam = (value: string | string[] | undefined) =>
  Math.max(1, Math.floor(Number(firstParam(value))) || 1);

export const totalPagesFor = (count: number) =>
  Math.max(1, Math.ceil(count / BLOG_PAGE_SIZE));

/**
 * Listing page `n`, or — with a query — search results page `n`. Search stays
 * on the page-1 path (results page in `p`) so every search step is a shallow,
 * in-place update of the listing page.
 */
export const blogsHref = (n: number, q?: string) =>
  q
    ? `/blogs/page/1?q=${encodeURIComponent(q)}${n > 1 ? `&p=${n}` : ""}`
    : `/blogs/page/${n}`;
