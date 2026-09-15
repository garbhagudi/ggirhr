import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { UserIcon } from "@heroicons/react/solid";
import Chip from "components/ui/Chip";
import SectionShell from "components/ui/SectionShell";
import useAutoCarousel from "components/ui/useAutoCarousel";

const CARD_GAP = 16;
const CARD_HEIGHT = 445;
const DESCRIPTION_HEIGHT = 120;

const COMPANY_LINKEDIN_URL =
  "https://www.linkedin.com/company/garbhagudi-institute-of-reproductive-health-research/";

type Teacher = {
  id: string;
  name: string;
  designation?: string;
  slug?: string;
  image?: { url?: string };
  imageAlt?: string;
};

const AvatarGroup = ({ avatars }: { avatars: Teacher[] }) => (
  <span className="inline-flex items-center align-middle mx-1.5 lg:mx-2">
    {avatars.map((teacher, i) => (
      <span
        key={teacher.id}
        className="relative w-[22px] h-[22px] lg:w-12 lg:h-12 rounded-full bg-[#1DA8E1] ring-1 ring-white flex items-center justify-center overflow-hidden"
        style={{ marginLeft: i === 0 ? 0 : -10, zIndex: avatars.length - 1 - i }}
      >
        {teacher.image?.url ? (
          <Image
            src={teacher.image.url}
            alt={teacher.imageAlt || teacher.name}
            fill
            sizes="(min-width: 1024px) 48px, 22px"
            className="object-cover"
          />
        ) : (
          <UserIcon className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-white" />
        )}
      </span>
    ))}
  </span>
);

const Experts = ({ teachers }: { teachers: Teacher[] }) => {
  // Paging is shared with About/Faculty via useAutoCarousel. Only the hook is
  // shared: the two cards differ in inset, panel treatment, glow and icon, so
  // folding the JSX together would take a theme flag per difference.
  //
  // `teachers` is typed as required but guarded below, so keep the fallback.
  const { trackRef, currentIndex, setCurrentIndex, cardWidth, pageCount, setPaused } =
    useAutoCarousel({ itemCount: teachers?.length ?? 0, gap: CARD_GAP });

  if (!teachers || teachers.length === 0) return null;

  const step = cardWidth + CARD_GAP;

  return (
    <SectionShell as="section" className="py-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <Chip variant="pink" size="sm">
            Experts
          </Chip>
          <h1 className="text-[23px] sm:text-[36px] lg:text-[46px] font-heading text-black mt-4 flex items-center flex-wrap leading-tight lg:leading-[65px]">
            Meet Our <AvatarGroup avatars={teachers.slice(0, 4)} />{" "}
            <span className="text-brandBlue font-bold">Experts</span>
          </h1>
        </div>
        <p className="text-black font-semibold max-w-md leading-7">
          Our team of fertility specialists have been known for their extensive
          clinical experience and research contributions and their success in
          treating the most challenging fertility cases.
        </p>
      </div>

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
            transform: `translateX(-${currentIndex * step}px)`,
            transition: "transform 500ms ease-in-out",
          }}
        >
          {teachers.map((item) => {
            return (
              <div
                key={item.id}
                className="relative flex-shrink-0"
                style={{ width: `${cardWidth}px`, height: `${CARD_HEIGHT}px` }}
              >
                {/* Soft glow backdrop peeking out from behind the card */}
                <Image
                  src="/card-glow-backdrop.svg"
                  alt=""
                  fill
                  className="absolute top-2 left-2 -z-10 rounded-2xl"
                />
                <Link href={`/faculty/${item?.slug}`} passHref>
                  <div
                    className="relative rounded-2xl overflow-hidden"
                    style={{
                      height: `${CARD_HEIGHT}px`,
                    }}
                  >
                    <Image
                      src={item?.image?.url}
                      alt={item?.imageAlt || item?.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover"
                    />
                    <div
                      className="absolute bottom-2 left-2 right-2 bg-[#FFFFFFDE] rounded-[10px] px-3 flex flex-col items-center justify-center gap-2 text-center overflow-hidden text-black shadow-[#00000047]"
                      style={{ height: `${DESCRIPTION_HEIGHT}px` }}
                    >
                      <h3 className="text-xl font-semibold">{item?.name}</h3>
                      <p className="text-sm">{item?.designation}</p>
                      <SocialIcon
                        as="span"
                        url={COMPANY_LINKEDIN_URL}
                        style={{ width: "30px", height: "30px" }}
                        className="bg-[#1587A9] rounded-full"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {pageCount > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCurrentIndex(i)}
              className="h-2 rounded-full transition-all"
              style={{
                width: i === currentIndex ? "36px" : "8px",
                backgroundColor: i === currentIndex ? "#1587A9" : "#CFCFCF",
              }}
            />
          ))}
        </div>
      )}
    </SectionShell>
  );
};

export default Experts;
