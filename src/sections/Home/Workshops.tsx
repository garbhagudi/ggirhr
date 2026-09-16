import React, { useState } from "react";
import Image from "next/image";
import Button from "components/ui/Button";
import Tabs, { TabOption } from "components/ui/Tabs";
import SectionShell from "components/ui/SectionShell";
import RibbonWave from "components/ui/RibbonWave";

type WorkshopTab = "workshop" | "events";

const TAB_OPTIONS: TabOption<WorkshopTab>[] = [
  { label: "Workshop", value: "workshop" },
  { label: "Upcoming Events", value: "events" },
];

type Workshop = {
  id: string;
  title?: string;
  subTitle?: string;
  slug?: string;
  image?: { url?: string };
};

// The desktop grid is four fixed slots, not a flowing list: the CMS supplies the
// content and these supply the position. Hygraph items are zipped onto them by
// index (ordered by the model's `order` field), so a fifth entry isn't rendered.
type CardSlot = {
  span: "tall-left" | "short" | "tall-right";
  placement: string;
};

const CARD_LAYOUT: CardSlot[] = [
  {
    span: "tall-left",
    placement: "lg:col-start-1 lg:row-start-1 lg:row-span-2",
  },
  { span: "short", placement: "lg:col-start-2 lg:row-start-1" },
  { span: "short", placement: "lg:col-start-2 lg:row-start-2" },
  {
    span: "tall-right",
    placement: "lg:col-start-3 lg:row-start-1 lg:row-span-2",
  },
];

const Workshops = ({ workshops }: { workshops?: Workshop[] }) => {
  const [activeTab, setActiveTab] = useState<WorkshopTab>("workshop");

  const cards = (workshops ?? [])
    .slice(0, CARD_LAYOUT.length)
    .map((workshop, index) => ({ ...workshop, ...CARD_LAYOUT[index] }));

  return (
    <SectionShell
      as="section"
      className="relative overflow-hidden bg-[#1D9ACD] py-[60px] sm:py-14 lg:bg-primaryBlue-600 lg:py-20"
    >
      <div
        aria-hidden
        className="absolute -z-10 w-[1083px] h-[1083px] rounded-full top-[768px] left-[calc(50%-36px)] -translate-x-1/2 sm:hidden"
        style={{
          background:
            "radial-gradient(closest-side, rgba(47, 126, 188, 0.65) 0%, rgba(47, 126, 188, 0) 100%)",
        }}
      />
      <div
        aria-hidden
        className="hidden sm:block absolute sm:w-[700px] sm:h-[700px] rounded-full bg-[#50C8F9] blur-[160px] -z-10"
        style={{ top: "20%", right: "-10%" }}
      />
      <RibbonWave
        width={140}
        height={84}
        className="absolute top-1 left-6 w-[77px] opacity-70 sm:top-6 sm:left-4 sm:w-[90px] lg:top-8 lg:left-16 lg:w-[140px]"
      />

      <div className="flex flex-col items-center gap-4 lg:gap-5 mb-9 sm:mb-10 lg:mb-12">
        <span className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white text-[12px] sm:text-[15px] font-bold tracking-[0.1em] sm:tracking-widest uppercase leading-none sm:leading-7 text-center">
          Research and Workshops
        </span>
        <h1 className="text-white text-[23px] sm:text-[36px] lg:text-[46px] text-center max-w-[263px] sm:max-w-none leading-[22px] sm:leading-tight lg:leading-[50px]">
          Workshops & Professional <span className="font-bold">Training</span>
        </h1>
        <p className="text-[#DEDEDE] font-semibold max-w-[336px] sm:max-w-3xl mx-auto text-center text-[13px] leading-5 sm:text-base sm:leading-normal lg:text-lg">
          Looking to stay ahead in reproductive medicine and ART? Explore our
          upcoming conferences, workshops, and educational events to keep your
          knowledge current and your skills evolving.
        </p>

        <Tabs<WorkshopTab>
          options={TAB_OPTIONS}
          value={activeTab}
          onChange={setActiveTab}
          className="mt-2"
        />
      </div>
      {cards.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_0.75fr] lg:grid-rows-2 gap-4 h-auto lg:h-[472px]">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`relative rounded-xl sm:rounded-[20px] overflow-hidden aspect-square sm:aspect-auto sm:h-[240px] lg:h-auto ${card.placement}`}
            >
              {card.image?.url && (
                <Image
                  src={card.image.url}
                  alt={card.title ?? ""}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              )}
              <div className="absolute inset-x-0 bottom-0 h-[87%] sm:h-1/2 bg-gradient-to-t from-[#081336] via-[#09153c]/60 to-transparent" />

              {card.span === "tall-left" && (
                <Button
                  variant="light"
                  size="icon-md"
                  aria-label="View workshop"
                  className="absolute top-[18px] right-6 !w-[34px] !h-[34px] sm:top-6 sm:!w-11 sm:!h-11 -rotate-[24.16deg]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="block w-4 h-4 sm:w-[18px] sm:h-[20px]"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>
              )}

              <div className="absolute bottom-5 left-5 right-5 leading-7">
                <h2 className="text-white font-semibold text-[15px] leading-[21px] sm:text-xl sm:leading-7">
                  {card.title}
                </h2>
                {card.subTitle?.trim() && (
                  <p className="text-[#DEDEDE] mt-2 text-[13px] leading-5 sm:text-base sm:leading-6">
                    {card.subTitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </SectionShell>
  );
};

export default Workshops;
