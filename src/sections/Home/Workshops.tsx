import React, { useState } from "react";
import Image from "next/image";
import Button from "components/ui/Button";
import Tabs, { TabOption } from "components/ui/Tabs";

const PLACEHOLDER_IMAGE =
  "https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegs19a01gx06pr749twdyd";

type WorkshopTab = "workshop" | "events";

const TAB_OPTIONS: TabOption<WorkshopTab>[] = [
  { label: "Workshop", value: "workshop" },
  { label: "Upcoming Events", value: "events" },
];

type WorkshopCard = {
  title: string;
  description?: string;
  span: "tall-left" | "short" | "tall-right";
  // Explicit grid placement — the 4 cards don't pack in row-major order
  // (tall-left / two-stacked-middle / tall-right), so leaving this to the
  // browser's default auto-placement puts cards in the wrong cells and
  // forces an extra implicit row. Each card names its own cell instead.
  placement: string;
};

const WORKSHOP_CARDS: WorkshopCard[] = [
  {
    title: "IUI Workshop",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers",
    span: "tall-left",
    placement: "col-start-1 row-start-1 row-span-2",
  },
  { title: "3D GYN USG", span: "short", placement: "col-start-2 row-start-1" },
  {
    title: "Comprehensive TVS (Transvaginal Ultrasound) Scan",
    span: "short",
    placement: "col-start-2 row-start-2",
  },
  {
    title: "Mastering Egg Pickup",
    span: "tall-right",
    placement: "col-start-3 row-start-1 row-span-2",
  },
];

const Workshops = () => {
  const [activeTab, setActiveTab] = useState<WorkshopTab>("workshop");

  return (
    <section className="relative overflow-hidden bg-[#1A97CA] py-20 px-40">
      <div
        className="absolute w-[700px] h-[700px] rounded-full bg-[#50C8F9] blur-[160px] -z-10"
        style={{ top: "20%", right: "-10%" }}
      />
      <Image
        src="/ribbon-wave-icon.svg"
        alt=""
        width={140}
        height={84}
        className="absolute top-8 left-16 opacity-70"
      />

      <div className="flex flex-col items-center gap-5 mb-12">
        <span className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white text-[15px] font-bold tracking-widest uppercase leading-7">
          Research and Workshops
        </span>
        <h1 className="text-white text-[46px] text-center leading-[50px]">
          Workshops & Professional <span className="font-bold">Training</span>
        </h1>
        <p className="text-[#DEDEDE] font-semibold max-w-3xl mx-auto text-center text-lg">
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

      <div className="grid grid-cols-[1.3fr_1fr_0.75fr] grid-rows-2 gap-4 h-[472px] max-w-7xl mx-auto">
        {WORKSHOP_CARDS.map((card) => (
          <div
            key={card.title}
            className={`relative rounded-[20px] overflow-hidden ${card.placement}`}
          >
            <Image
              src={PLACEHOLDER_IMAGE}
              alt={card.title}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#081336] via-[#09153c]/60 to-transparent" />

            {card.span === "tall-left" && (
              <Button
                variant="light"
                size="icon-md"
                aria-label="View workshop"
                className="absolute top-6 right-6"
              >
                &#8594;
              </Button>
            )}

            <div className="absolute bottom-5 left-5 right-5 leading-7">
              <h2 className="text-white font-semibold text-xl">{card.title}</h2>
              {card.description && (
                <p className="text-[#DEDEDE] mt-2 leading-6">
                  {card.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workshops;
