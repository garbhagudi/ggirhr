import React, { useState, useRef } from "react";
import Image from "next/image";
import Button from "components/ui/Button";
import Chip from "components/ui/Chip";
import QuoteIcon from "components/ui/QuoteIcon";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { FaStar } from "react-icons/fa";

const CARD_WIDTH = 360;
const CARD_GAP = 16;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
const CARD_HEIGHT = 290;
const RESIZE_DEBOUNCE_MS = 150;

const AVATAR_COLORS = ["#1DA8E1", "#4A90E2", "#F5A623", "#50B1CD"];

type Voice = {
  name: string;
  quote: string;
};

const VOICES: Voice[] = [
  {
    name: "Adriane Ddamulira",
    quote:
      "It’s been a great experience learning at Garbhagudi IVF Centre KalyaNagar branch with great mentorship of Dr Aparna N and team. Thank you for advancing ...",
  },
  {
    name: "Gasthony Alobo",
    quote:
      "NRF program at GGIRHR is well structured to help practicing gynecologists get deep understanding of infertility management without leaving their work place ...",
  },
  {
    name: "kunal kuhikar",
    quote:
      "My name is Kunal Kuhikar, and I am pursuing my Master’s in Molecular and Human Genetics with specialization in Clinical Embryology ...",
  },
  {
    name: "Shivani Rao",
    quote:
      "Finished 3 months CFS course at GGIRHR. I found the program very focussed on building core understanding and concepts around assisted reprexposure to",
  },
  {
    name: "Priya Sharma",
    quote:
      "The hands-on training and mentorship at GGIRHR gave me the confidence to handle complex fertility cases independently within a few months …",
  },
];

const Voices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let debounceTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const containerWidth =
          trackRef.current?.parentElement?.clientWidth ?? 0;
        const visible = Math.max(
          1,
          Math.floor((containerWidth + CARD_GAP) / CARD_STEP),
        );
        setItemsPerView((prev) =>
          Math.floor(prev) === visible ? prev : visible,
        );
      }, RESIZE_DEBOUNCE_MS);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(debounceTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxIndex = Math.max(0, VOICES.length - Math.floor(itemsPerView));
  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  const goToNext = () =>
    canGoNext && setCurrentIndex((i) => Math.min(i + 1, maxIndex));
  const goToPrev = () =>
    canGoPrev && setCurrentIndex((i) => Math.max(i - 1, 0));

  return (
    <section className="relative overflow-hidden bg-[#1A97CA] py-20 px-40">
      <div className="mx-auto flex flex-col">
        <Chip
          variant="blue"
          size="sm"
          className="uppercase tracking-widest !bg-[#FFFFFF1A] text-white shadow[#0000001A] filter-blur-[47.9px] font-bold"
        >
          Testimonial
        </Chip>
        <div className="flex items-center justify-between mt-6 mb-10">
          <h1 className="text-white text-[46px] leading-[65px] mx-6">
            Fellows and <span className="font-bold">Student Voices</span>
          </h1>
          <div className="flex items-center gap-3">
            <Button
              onClick={goToPrev}
              disabled={!canGoPrev}
              aria-label="Previous testimonials"
              variant="ghost"
              size="icon-sm"
              className="!bg-white/10 !text-white hover:!bg-white/20 disabled:!opacity-40"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </Button>
            <Button
              onClick={goToNext}
              disabled={!canGoNext}
              aria-label="Next testimonials"
              variant="light"
              size="icon-sm"
              className="disabled:!opacity-40"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * CARD_STEP}px)` }}
          >
            {VOICES.map((voice, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={voice.name}
                  className="flex-shrink-0"
                  style={{ width: `${CARD_WIDTH}px` }}
                >
                  <div
                    className={`relative rounded-2xl px-5 py-6 flex flex-col justify-between overflow-hidden shadow-[#00000017] ${
                      isActive
                        ? "bg-white shadow-md"
                        : "bg-[#FFFFFF1A] filter-blur-[47.9px]"
                    }`}
                    style={{ height: `${CARD_HEIGHT}px` }}
                  >
                    <QuoteIcon
                      size={31}
                      color={isActive ? "#4AC9FD" : "#FFFFFF6B"}
                      className={`absolute top-5 right-5`}
                      aria-hidden="true"
                    />

                    <div className="flex flex-col gap-4 pt-6 leading-6">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <FaStar
                            key={starIndex}
                            className="w-3.5 h-3.5 text-[#FDD663]"
                          />
                        ))}
                      </div>
                      <p
                        className={`${
                          isActive ? "text-gray-900" : "text-[#DEDEDE]"
                        }`}
                      >
                        {voice.quote}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 mt-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                        style={{
                          backgroundColor:
                            AVATAR_COLORS[index % AVATAR_COLORS.length],
                        }}
                      >
                        {voice.name.charAt(0)}
                      </div>
                      <div className="flex flex-col gap-1">
                        <span
                          className={`font-semibold text-xl leading-7 ${
                            isActive ? "text-black" : "text-white"
                          }`}
                        >
                          {voice.name}
                        </span>
                        <Image
                          src="/icons/google-logo.svg"
                          alt="Google"
                          width={61}
                          height={21}
                          className={isActive ? "" : "brightness-0 invert"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Voices;
