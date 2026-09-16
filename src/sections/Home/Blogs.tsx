import React from "react";
import Image from "next/image";
import Chip from "components/ui/Chip";
import Button from "components/ui/Button";
import { HiOutlineCalendar } from "react-icons/hi";
import SectionShell from "components/ui/SectionShell";
import { format } from "date-fns";

const FEATURED_CARD_CLASSES = "shadow-[0px_4px_54px_0px_#57D1F563]";

const STACKED_CARD_CLASSES =
  "border border-[#C2C2C2] shadow-[0px_4px_54px_0px_#57D1F563]";

type BlogPost = {
  id: string;
  title?: string;
  slug?: string;
  publishedOn?: string;
  image?: { url?: string };
  // Derived in the home page's getServerSideProps from `content.text`; the
  // Hygraph model has no excerpt field of its own.
  excerpt?: string | null;
};

// "26th November 2025" — `do` supplies the ordinal in the mock.
const formatDate = (publishedOn?: string) =>
  publishedOn ? format(new Date(publishedOn), "do MMMM yyyy") : null;

const Blogs = ({ blogs }: { blogs?: BlogPost[] }) => {
  if (!blogs || blogs.length === 0) return null;

  const [featured, ...rest] = blogs;
  const featuredDate = formatDate(featured.publishedOn);

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <Image
        src="/blogs-glow-ellipse.svg"
        alt=""
        width={612}
        height={565}
        className="pointer-events-none absolute -bottom-40 -left-52 -z-10"
      />

      <SectionShell className="mx-auto leading-[20px] lg:leading-[24px]">
        <div className="flex flex-col gap-4">
          <Chip variant="pink">INSIGHTS</Chip>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
            <h1 className="font-heading text-[23px] lg:text-[46px] text-brandDark">
              Our <span className="text-brandBlue font-bold">Blogs</span>
            </h1>
            <p className="text-[#374151] text-[13px] lg:text-lg font-semibold lg:leading-7 max-w-2xl">
              There&apos;s always something new to learn. Explore our latest
              articles for expert insights and advances in reproductive
              medicine.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <article
            className={`relative rounded-xl lg:rounded-[20px] bg-white overflow-hidden h-auto lg:h-[440px] flex flex-col p-2 ${FEATURED_CARD_CLASSES}`}
          >
            <div className="relative w-full h-[220px] shrink-0">
              <Image
                src={featured.image?.url}
                alt={featured.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover rounded-[6px] lg:rounded-[10px]"
              />
            </div>
            <div className="flex flex-col gap-2 lg:gap-3 p-3 lg:p-6 flex-1">
              {featuredDate && (
                <div className="flex items-center gap-1 lg:gap-[7px] text-brandBlue text-xs lg:text-sm font-semibold">
                  <HiOutlineCalendar className="w-4 h-4" />
                  <span>{featuredDate}</span>
                </div>
              )}
              <h2 className="font-bold text-[15px] lg:text-xl text-brandDark">
                {featured.title}
              </h2>
              {featured.excerpt && (
                <p className="text-[13px] lg:text-[15px] text-[#374151] leading-6 line-clamp-2">
                  {featured.excerpt}
                </p>
              )}
              <Button
                href={`/blogs/${featured.slug}`}
                variant="link"
                size="inline"
                rounded="md"
                className="mt-auto font-bold self-start"
              >
                Read More
              </Button>
            </div>
          </article>

          <div className="flex flex-col gap-6 h-auto lg:h-[440px]">
            {rest.map((post) => (
              <article
                key={post.id}
                className={`relative flex-1 rounded-[20px] bg-white overflow-hidden flex flex-col lg:flex-row items-stretch lg:items-center gap-4 lg:gap-6 p-2 lg:pl-1 lg:pr-6 lg:py-2 border border-[#C2C2C2] ${STACKED_CARD_CLASSES}`}
              >
                <div className="relative w-full h-[180px] lg:w-[160px] lg:h-full shrink-0 rounded-2xl overflow-hidden">
                  <Image
                    src={post.image?.url}
                    alt={post.title}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 lg:gap-4 min-w-0 px-3 pb-3 lg:p-0">
                  {formatDate(post.publishedOn) && (
                    <div className="flex items-center gap-2 text-brandBlue text-sm font-semibold">
                      <HiOutlineCalendar className="w-4 h-4" />
                      <span>{formatDate(post.publishedOn)}</span>
                    </div>
                  )}
                  <h2 className="font-semibold text-lg text-black">
                    {post.title}
                  </h2>
                  <Button
                    href={`/blogs/${post.slug}`}
                    variant="link"
                    size="inline"
                    rounded="md"
                    className="font-bold self-start"
                  >
                    Read More
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button href="/blogs/page/1" variant="primary" size="md" rounded="md">
            View All Blogs
          </Button>
        </div>
      </SectionShell>
    </section>
  );
};

export default Blogs;
