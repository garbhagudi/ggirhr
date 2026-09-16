import React from "react";
import Image from "next/image";
import Link from "next/link";
import Chip from "components/ui/Chip";
import Glow from "components/ui/Glow";
import RibbonWave from "components/ui/RibbonWave";
import SectionShell from "components/ui/SectionShell";
import useAutoCarousel from "components/ui/useAutoCarousel";
import LinkedInIcon from "components/ui/icons/LinkedInIcon";

export type Teacher = {
  id: string;
  name: string;
  slug: string;
  designation?: string | null;
  image: { url: string };
};

const CARD_GAP = 30;

const FacultyCard = ({ teacher }: { teacher: Teacher }) => (
  <Link href={`/faculty/${teacher.slug}`} passHref>
    <div className="relative aspect-[360/445] min-h-[380px] w-full cursor-pointer overflow-hidden rounded-[20px] bg-white">
      <Glow className="left-1/2 top-[15%] z-0 aspect-square w-[80%] -translate-x-1/2 bg-[rgba(142,230,255,0.99)] blur-[102px]" />
      <Image
        src={teacher.image.url}
        alt={teacher.name}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="z-10 object-cover object-top"
      />
      <div className="absolute inset-x-[13px] bottom-[13px] z-20 flex min-h-[120px] flex-col items-center justify-center gap-3 rounded-[10px] bg-[rgba(255,255,255,0.87)] p-4 text-center shadow-[0px_4px_54px_rgba(0,0,0,0.28)] backdrop-blur-[42px]">
        <h3 className="text-xl font-semibold leading-tight text-[#374151]">
          {teacher.name}
        </h3>
        {teacher.designation && (
          <p className="text-sm font-normal leading-snug text-[#374151]">
            {teacher.designation}
          </p>
        )}
        <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-primaryBlue shadow-[inset_0px_1px_11px_#1587A9]">
          <LinkedInIcon size={16} color="#fff" />
        </span>
      </div>
    </div>
  </Link>
);

const Faculty = ({ teachers = [] }: { teachers?: Teacher[] }) => {
  const {
    trackRef,
    currentIndex,
    setCurrentIndex,
    cardWidth,
    pageCount,
    setPaused,
  } = useAutoCarousel({ itemCount: teachers.length, gap: CARD_GAP });

  if (teachers.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-[#1F95CA] py-14 lg:py-20">
      <Glow className="-z-0 left-1/2 top-1/4 h-[420px] w-[420px] -translate-x-1/2 bg-[rgba(47,126,188,0.65)] blur-[150px] sm:h-[900px] sm:w-[900px] lg:h-[1083px] lg:w-[1083px]" />
      <RibbonWave
        color="#FFFFFF"
        width={300}
        height={140}
        className="absolute left-4 top-6 z-0 w-[90px] opacity-30 lg:left-24 lg:top-10 lg:w-[300px] -rotate-[10.93deg]"
      />
      <SectionShell className="relative z-10 text-center">
        <Chip
          variant="glass"
          className="px-4 uppercase"
        >
          Faculty
        </Chip>
        <h2 className="mt-1 mb-8 font-heading text-[23px] leading-tight text-white sm:mt-2 sm:text-[36px] lg:mb-10 lg:text-[46px] lg:leading-[50px]">
          Our <span className="font-bold">Faculty</span>
        </h2>

        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex"
            style={{
              gap: `${CARD_GAP}px`,
              transform: `translateX(-${
                currentIndex * (cardWidth + CARD_GAP)
              }px)`,
              transition: "transform 500ms ease-in-out",
            }}
          >
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="flex-shrink-0"
                style={{ width: `${cardWidth}px` }}
              >
                <FacultyCard teacher={teacher} />
              </div>
            ))}
          </div>
        </div>

        {pageCount > 1 && (
          <div className="mt-8 flex items-center justify-center gap-1.5">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex
                    ? "w-[36px] bg-white"
                    : "w-2 bg-[rgba(255,255,255,0.17)] backdrop-blur-[12.25px]"
                }`}
              />
            ))}
          </div>
        )}
      </SectionShell>
    </section>
  );
};

export default Faculty;
