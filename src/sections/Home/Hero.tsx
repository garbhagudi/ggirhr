import React, { useState } from "react";
import Image from "next/image";
import Chip from "components/ui/Chip";
import Button from "components/ui/Button";
import RibbonWave from "components/ui/RibbonWave";
import { SOCIAL_NETWORKS } from "components/ui/icons/socialNetworks";

type Slide = { image: string; alt: string };
const DEFAULT_SLIDES: Slide[] = [
  { image: "/Desktop_Banner.svg", alt: "GGIRHR" },
];

const RailLine = ({ side }: { side: "top" | "bottom" }) => (
  <Image
    src={`/icons/hero-social-rail-line-${side}.svg`}
    alt=""
    width={9}
    height={149}
    aria-hidden="true"
  />
);

/** Shape of the Hygraph `alumniCountries` entries, as partitioned in `pages/index.tsx`. */
type Country = { id: string; name: string; image: { url: string } };

const StatsCard = ({
  className = "",
  countries = [],
}: {
  className?: string;
  countries?: Country[];
}) => (
  <div
    className={`absolute flex items-center gap-2.5 lg:gap-3 rounded-[60px] lg:rounded-[80px] bg-white px-2 lg:px-4 py-2 lg:py-2.5 shadow-[0_4px_50px_rgba(9,14,71,0.19)] ${className}`}
  >
    {/* Alumni country flags, matching the "15+ Countries" label beside them and
        the round-flag treatment in `AffiliationsAlumni`. `bg-gray-200` stays as
        the ground so a country published without a flag still reads as a
        circle, and an empty CMS list falls back to four plain circles. */}
    <div className="flex -space-x-2.5">
      {(countries.length > 0 ? countries.slice(0, 4) : [null, null, null, null]).map(
        (country, i) => (
          <div
            key={country?.id ?? i}
            className="relative overflow-hidden h-7 w-7 lg:h-10 lg:w-10 rounded-full border-2 border-white bg-gray-200"
          >
            {country && (
              <Image
                src={country.image.url}
                alt={`${country.name} flag`}
                fill
                sizes="(min-width: 1024px) 40px, 28px"
                className="object-cover"
              />
            )}
          </div>
        ),
      )}
    </div>
    <div>
      <p className="text-xl lg:text-[30px] leading-none font-bold text-primaryBlue tracking-widest">
        15+{" "}
        <span className="text-[11px] lg:text-[13px] uppercase">Countries</span>
      </p>
      <p className="mt-1.5 lg:mt-2 text-[11px] lg:text-[13px] font-bold tracking-[0.12em] lg:tracking-[0.21em] uppercase text-black whitespace-nowrap">
        Fellows and Students
      </p>
    </div>
  </div>
);

const Hero = ({
  slides = DEFAULT_SLIDES,
  alumniCountries = [],
}: {
  slides?: Slide[];
  alumniCountries?: Country[];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex] ?? slides[0];

  return (
    <div className="px-5 xl:px-[30px] my-4 md:my-8">
      <div className="relative overflow-hidden rounded-xl xl:rounded-[30px] bg-[#D2EEF9] px-2.5 sm:px-8 lg:px-[89px] pt-10 sm:pt-16 lg:py-0 lg:min-h-[738px] flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
        <div className="absolute -top-3 lg:top-6 left-6 lg:left-24 z-1">
          <RibbonWave
            width={160}
            height={96}
            color="#FFFFFF"
            className="w-[96px] sm:w-[260px] sm:h-[96px] rotate-[-12.21deg]"
          />
        </div>
        <div className="order-2 lg:order-none w-full -mx-5 sm:-mx-8 -mb-10 sm:-mb-16 lg:m-0 lg:absolute lg:-bottom-24 lg:right-0 lg:w-1/2 lg:h-full">
          <Image
            src={activeSlide.image}
            alt={activeSlide.alt}
            width={757}
            height={732}
            className="w-full h-auto"
            priority
          />
          <StatsCard
            className="lg:hidden left-1/2 -translate-x-1/2 bottom-6"
            countries={alumniCountries}
          />
        </div>
        <div className="hidden lg:flex absolute left-[34px] top-1/2 -translate-y-1/2 flex-col items-center gap-[42px]">
          <RailLine side="top" />
          <div className="flex flex-col items-center gap-7">
            {SOCIAL_NETWORKS.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="transition-opacity hover:opacity-70"
              >
                <Icon size={18} color="#666666" />
              </a>
            ))}
          </div>
          <RailLine side="bottom" />
        </div>

        <div className="relative z-10 w-full flex flex-col items-center text-center lg:items-start lg:text-left lg:pl-8">
          <div className="flex flex-col items-center lg:items-start gap-[18px] lg:gap-8">
            <Chip
              variant="pink"
              size="sm"
              className="!text-xs lg:!text-lg !text-center"
            >
              Premier Reproductive Health &amp; Research Institute in Bangalore,
              India
            </Chip>
            <div className="flex flex-col gap-3.5 lg:gap-6">
              <h1 className="text-[30px] sm:text-4xl lg:text-5xl xl:text-[60px] xl:leading-[58px] font-bold text-black">
                Welcome to <span className="text-primaryBlue">GGIRHR</span>
              </h1>

              <p className="max-w-[536px] text-center lg:text-justify text-[13px] sm:text-lg leading-6 lg:leading-[27px] font-semibold text-black">
                GarbhaGudi Institute of Reproductive Health &amp; Research is a
                platform launched by a team of renowned specialists interested
                in training medical professionals and science students in
                reproductive medicine and infertility.
              </p>
            </div>
            <Button
              href="/gg-care"
              variant="primary"
              rounded="md"
              className="!text-[#F1F1F1] max-w-fit"
            >
              Contact Us
            </Button>
          </div>

          <div className="mt-8 lg:mt-16 flex items-center gap-1.5">
            {slides.map((slide, i) => (
              <button
                key={slide.image + i}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setActiveIndex(i)}
                className={
                  i === activeIndex
                    ? "h-2 w-9 rounded-full bg-primaryBlue"
                    : "h-2 w-2 rounded-full bg-[#CFCFCF]"
                }
              />
            ))}
          </div>
        </div>
        <div className="hidden lg:flex relative w-full h-full lg:w-1/2">
          <div className="relative w-full h-full -ml-64 mt-96 self-start">
            <StatsCard className="right-16 -bottom-6" countries={alumniCountries} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
