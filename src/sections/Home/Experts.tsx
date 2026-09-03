import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { UserIcon } from "@heroicons/react/solid";
import Chip from "components/ui/Chip";

const ACCENT = "#1DA8E1";
const CARD_GAP = 16;
const CARD_HEIGHT = 445;
const DESCRIPTION_HEIGHT = 120;
const AUTO_ADVANCE_MS = 3500;
const RESIZE_DEBOUNCE_MS = 150;

const COMPANY_LINKEDIN_URL =
  "https://www.linkedin.com/company/garbhagudi-institute-of-reproductive-health-research/";

const AvatarGroup = () => (
  <span className="inline-flex items-center align-middle mx-2">
    {[0, 1, 2, 3].map((i) => (
      <span
        key={i}
        className="w-12 h-12 rounded-full bg-[#1DA8E1] ring-1 ring-white flex items-center justify-center overflow-hidden"
        style={{ marginLeft: i === 0 ? 0 : -12, zIndex: 3 - i }}
      >
        <UserIcon className="w-5 h-5 text-white" />
      </span>
    ))}
  </span>
);

type Teacher = {
  id: string;
  name: string;
  designation?: string;
  slug?: string;
  image?: { url?: string };
  imageAlt?: string;
};

const Experts = ({ teachers }: { teachers: Teacher[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [cardWidth, setCardWidth] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let debounceTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const width = window.innerWidth;
        const visible = width < 640 ? 1 : width < 1024 ? 2 : 3;
        const containerWidth =
          trackRef.current?.parentElement?.clientWidth ?? 0;
        const width_ = (containerWidth - CARD_GAP * (visible - 1)) / visible;
        setItemsPerView((prev) => (prev === visible ? prev : visible));
        setCardWidth(width_);
      }, RESIZE_DEBOUNCE_MS);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(debounceTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxIndex = teachers?.length
    ? Math.max(0, teachers.length - itemsPerView)
    : 0;
  const pageCount = maxIndex + 1;

  useEffect(() => {
    if (paused || pageCount <= 1) return;
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % pageCount);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused, pageCount]);

  if (!teachers || teachers.length === 0) return null;

  const step = cardWidth + CARD_GAP;
  const centerOffset = Math.floor((itemsPerView - 1) / 2);

  return (
    <section className="max-w-7xl mx-auto px-4 xl:px-0 py-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <Chip variant="pink" size="sm" className="shadow[0px_4px_14px_0px_#0000001A] filter-blur-[4px]">
            Experts
          </Chip>
          <h1 className="text-[46px] font-heading text-black mt-4 flex items-center flex-wrap leading-[65px]">
            Meet Our <AvatarGroup />{" "}
            <span className="text-[#249DC1] font-bold">Experts</span>
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
          {teachers.map((item, index) => {
            const active = index === currentIndex + centerOffset;
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
                    className={`relative rounded-2xl overflow-hidden`}
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
    </section>
  );
};

export default Experts;
