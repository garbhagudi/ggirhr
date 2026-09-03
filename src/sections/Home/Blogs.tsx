import React from "react";
import Image from "next/image";
import Chip from "components/ui/Chip";
import Button from "components/ui/Button";
import { HiOutlineCalendar } from "react-icons/hi";

const PLACEHOLDER_IMAGE =
  "https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegs19a01gx06pr749twdyd";

// Featured card (Frame 2131330195): shadow only, no border.
const FEATURED_CARD_CLASSES =
  "shadow-[0px_4px_54px_0px_#57D1F563] backdrop-blur-[134px]";

// Stacked cards (Frame 2131330229): border + drop-shadow.
const STACKED_CARD_CLASSES =
  "border border-[#C2C2C2] shadow-[0px_4px_54px_0px_#57D1F563] backdrop-blur-[134px]";

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

      <div className="px-40 mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
          <div className="flex flex-col gap-4">
            <Chip variant="pink" size="sm">
              INSIGHTS
            </Chip>
            <h1 className="font-heading text-4xl lg:text-[46px] leading-tight text-brandDark">
              Our <span className="text-brandBlue font-bold">Blogs</span>
            </h1>
          </div>
          <p className="text-black text-lg font-semibold leading-7 max-w-2xl">
            There&apos;s always something new to learn. Explore our latest
            articles for expert insights and advances in reproductive medicine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article
            className={`relative rounded-[20px] bg-white overflow-hidden h-[440px] flex flex-col p-2 ${FEATURED_CARD_CLASSES}`}
          >
            <div className="relative w-full h-[220px] shrink-0">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col gap-3 p-6 flex-1">
              <div className="flex items-center gap-[7px] text-brandBlue text-sm font-semibold">
                <HiOutlineCalendar className="w-4 h-4" />
                <span>{featured.date}</span>
              </div>
              <h2 className="font-bold text-xl text-brandDark leading-snug">
                {featured.title}
              </h2>
              {featured.excerpt && (
                <p className="text-black leading-6 line-clamp-2">
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

          <div className="flex flex-col gap-6 h-[440px]">
            {rest.map((post) => (
              <article
                key={post.id}
                className={`relative flex-1 rounded-[20px] bg-white overflow-hidden flex items-center gap-6 pl-1 pr-6 py-2 border border-[#C2C2C2] ${STACKED_CARD_CLASSES}`}
              >
                <div className="relative w-[140px] sm:w-[160px] h-full shrink-0 rounded-2xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4 min-w-0">
                  <div className="flex items-center gap-2 text-brandBlue text-sm font-semibold">
                    <HiOutlineCalendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <h2 className="font-semibold text-lg text-black leading-[29px]">
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
      </div>
    </section>
  );
};

export default Blogs;
