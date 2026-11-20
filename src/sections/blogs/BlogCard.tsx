import React from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import Chip from "components/ui/Chip";

export type BlogPost = {
  id: string;
  title?: string;
  slug?: string;
  publishedOn?: string | null;
  image?: { url?: string } | null;
};

const formatDate = (publishedOn?: string | null) =>
  publishedOn ? format(new Date(publishedOn), "MMMM d, yyyy") : null;

const BlogMeta = ({ publishedOn }: { publishedOn?: string | null }) => {
  const date = formatDate(publishedOn);
  return (
    <div className="flex items-center gap-[10px]">
      <Chip
        variant="muted"
        size="sm"
        className="!px-[10px] !py-1.5 !text-[11px] !tracking-[0.1em] uppercase sm:!px-4 sm:!py-1.5 sm:!text-sm"
      >
        Blogs
      </Chip>
      {date && (
        <time
          dateTime={publishedOn ?? undefined}
          className="text-[11px] text-[#374151] sm:text-base"
        >
          {date}
        </time>
      )}
    </div>
  );
};

const BlogCard = ({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) => {
  const href = `/blogs/${post.slug}`;

  if (featured) {
    return (
      <Link
        href={href}
        className="group flex flex-col gap-7 rounded-xl bg-white p-2.5 shadow-[0_4px_54px_rgba(0,0,0,0.08)] sm:flex-row sm:items-center sm:gap-11 sm:rounded-[20px] sm:p-[14px]"
      >
        <div className="relative h-[218px] w-full shrink-0 overflow-hidden rounded-md bg-[#C1E9FE] sm:h-[400px] sm:w-[52%] sm:max-w-[580px] sm:rounded-[10px]">
          {post.image?.url && (
            <Image
              src={post.image.url}
              alt={post.title ?? ""}
              fill
              priority
              sizes="(min-width: 640px) 580px, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          )}
        </div>
        <div className="flex flex-col gap-2.5 px-3.5 pb-4 sm:gap-[21px] sm:px-0 sm:pb-0 sm:pr-6">
          <BlogMeta publishedOn={post.publishedOn} />
          <h2 className="text-lg font-semibold leading-snug text-black transition-colors group-hover:text-primaryBlue sm:text-[32px] sm:leading-[33px]">
            {post.title}
          </h2>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border-[0.6px] sm:border border-[#C2C2C2] bg-white p-[10px] drop-shadow-[0_4px_54px_rgba(0,0,0,0.08)] sm:rounded-[20px] sm:p-[13px]"
    >
      <div className="relative h-[200px] w-full overflow-hidden rounded-md bg-[#D2D2D2] sm:h-[312px] sm:rounded-[10px]">
        {post.image?.url && (
          <Image
            src={post.image.url}
            alt={post.title ?? ""}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        )}
      </div>
      <div className="mt-5 flex flex-col gap-3 px-0.5 pb-2 sm:mt-[30px] sm:gap-[18px] sm:px-[7px] sm:pb-3">
        <BlogMeta publishedOn={post.publishedOn} />
        <h3 className="line-clamp-2 text-[15px] font-semibold leading-[19px] text-black transition-colors group-hover:text-primaryBlue sm:text-xl sm:leading-[29px]">
          {post.title}
        </h3>
      </div>
    </Link>
  );
};

export default BlogCard;
