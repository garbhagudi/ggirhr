import React from "react";
import SectionShell from "components/ui/SectionShell";
import BlogCard, { BlogPost } from "sections/blogs/BlogCard";

// First post as the wide featured card, the rest in a 2-column grid.
const BlogGrid = ({ posts }: { posts: BlogPost[] }) => {
  if (posts.length === 0) {
    return (
      <SectionShell className="relative z-10 py-16 text-center text-base text-[#374151]">
        No blogs found.
      </SectionShell>
    );
  }

  const [featured, ...rest] = posts;

  return (
    <SectionShell className="relative z-10 -mt-[119px] flex flex-col gap-4 sm:mt-0 sm:gap-[30px]">
      <BlogCard post={featured} featured />
      {rest.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-[30px]">
          {rest.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </SectionShell>
  );
};

export default BlogGrid;
