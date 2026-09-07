import React from "react";
import Image from "next/image";
import Chip from "components/ui/Chip";
import Button from "components/ui/Button";
import { HiOutlineCalendar } from "react-icons/hi";
import SectionShell from "components/ui/SectionShell";

const PLACEHOLDER_IMAGE =
  "https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegs19a01gx06pr749twdyd";

const FEATURED_CARD_CLASSES = "shadow-[0px_4px_54px_0px_#57D1F563]";

const STACKED_CARD_CLASSES =
  "border border-[#C2C2C2] shadow-[0px_4px_54px_0px_#57D1F563]";

type BlogPost = {
  id: number;
  title: string;
  excerpt?: string;
  date: string;
  image: string;
  href: string;
};

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Latest Protocol for IVF stimulation",
    excerpt:
      "We need a large number of good-quality eggs from the female in order to maximize success rates with in vitro fertilization...",
    date: "26th November 2025",
    image: PLACEHOLDER_IMAGE,
    href: "/blogs",
  },
  {
    id: 2,
    title: "Is online learning effective for doctors?",
    date: "26th November 2025",
    image: PLACEHOLDER_IMAGE,
    href: "/blogs",
  },
  {
    id: 3,
    title:
      "Why is GGIRHR considered a premier fertility training institute of India?",
    date: "26th November 2025",
    image: PLACEHOLDER_IMAGE,
    href: "/blogs",
  },
];

const Blogs = () => {
  const [featured, ...rest] = BLOG_POSTS;

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
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
          <div className="flex flex-col gap-4">
            <Chip variant="pink" size="sm">
              INSIGHTS
            </Chip>
            <h1 className="font-heading text-[23px] lg:text-[46px] text-brandDark">
              Our <span className="text-brandBlue font-bold">Blogs</span>
            </h1>
          </div>
          <p className="text-black text-[13px] lg:text-lg font-semibold lg:leading-7 max-w-2xl">
            There&apos;s always something new to learn. Explore our latest
            articles for expert insights and advances in reproductive medicine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <article
            className={`relative rounded-xl lg:rounded-[20px] bg-white overflow-hidden h-auto lg:h-[440px] flex flex-col p-2 ${FEATURED_CARD_CLASSES}`}
          >
            <div className="relative w-full h-[220px] shrink-0">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover rounded-[6px] lg:rounded-[10px]"
              />
            </div>
            <div className="flex flex-col gap-2 lg:gap-3 p-3 lg:p-6 flex-1">
              <div className="flex items-center gap-1 lg:gap-[7px] text-brandBlue text-xs lg:text-sm font-semibold">
                <HiOutlineCalendar className="w-4 h-4" />
                <span>{featured.date}</span>
              </div>
              <h2 className="font-bold text-[15px] lg:text-xl text-brandDark">
                {featured.title}
              </h2>
              {featured.excerpt && (
                <p className="text-[13px] lg:text-[15px] text-black leading-6 line-clamp-2">
                  {featured.excerpt}
                </p>
              )}
              <Button
                href={featured.href}
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
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 lg:gap-4 min-w-0 px-3 pb-3 lg:p-0">
                  <div className="flex items-center gap-2 text-brandBlue text-sm font-semibold">
                    <HiOutlineCalendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <h2 className="font-semibold text-lg text-black">
                    {post.title}
                  </h2>
                  <Button
                    href={post.href}
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
          <Button href="/blogs" variant="primary" size="md" rounded="md">
            View All Blogs
          </Button>
        </div>
      </SectionShell>
    </section>
  );
};

export default Blogs;
