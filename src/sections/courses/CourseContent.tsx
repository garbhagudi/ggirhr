import React from "react";
import Image from "next/image";
import Chip from "components/ui/Chip";
import Glow from "components/ui/Glow";
import RibbonWave from "components/ui/RibbonWave";
import { RichTextSection, textOf } from "lib/richText";

type Topic = {
  heading: string;
  points: string[];
  image: { src: string; width: number; height: number };
};

const IMAGES: Topic["image"][] = [
  { src: "/images/courses/content-embryology.png", width: 337, height: 305 },
  { src: "/images/courses/content-semenology.png", width: 470, height: 369 },
  { src: "/images/courses/content-genetics.png", width: 502, height: 325 },
  { src: "/images/courses/content-art-lab.png", width: 426, height: 391 },
];

// The course's `courseContent` rich text: each Heading 3 starts a topic, and
// every list item (or paragraph) under it is one point. Images repeat in order.
const toTopics = (raw: any): Topic[] => {
  const topics: Topic[] = [];
  for (const node of raw?.children ?? []) {
    const text = textOf(node).trim();
    if (!text) continue;
    if (node.type === "heading-three") {
      topics.push({
        heading: text,
        points: [],
        image: IMAGES[topics.length % IMAGES.length],
      });
    } else if (topics.length > 0) {
      const items = node.type?.endsWith("-list") ? node.children : [node];
      topics[topics.length - 1].points.push(
        ...items.map((item) => textOf(item).trim()).filter(Boolean)
      );
    }
  }
  return topics;
};

const Point = ({ text }: { text: string }) => {
  const match = text.match(/^([^:]{1,20}):\s(.+)$/);
  if (!match) return <>{text}</>;
  return (
    <>
      <span className="font-bold text-white">{match[1]}:</span> {match[2]}
    </>
  );
};

const TopicBlock = ({ topic }: { topic: Topic }) => (
  <div>
    <h3 className="mb-3 text-left text-[20px] font-bold leading-tight text-white sm:mb-4 sm:text-[32px]">
      {topic.heading}
    </h3>
    <ul className="flex flex-col gap-1.5 sm:gap-2">
      {topic.points.map((point) => (
        <li
          key={point}
          className="text-left text-[13px] font-semibold leading-5 text-[#DEDEDE] sm:text-base sm:leading-[30px]"
        >
          <Point text={point} />
        </li>
      ))}
    </ul>
  </div>
);

const TopicRow = ({ topic, imageLeft }: { topic: Topic; imageLeft: boolean }) => (
  <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-[74px]">
    <div
      className={`order-first flex justify-center ${
        imageLeft
          ? "sm:w-[470px] sm:shrink-0"
          : "sm:order-last sm:flex-1"
      }`}
    >
      <Image
        src={topic.image.src}
        alt=""
        aria-hidden="true"
        width={topic.image.width}
        height={topic.image.height}
        sizes={`(min-width: 640px) ${topic.image.width}px, 65vw`}
        className="h-auto w-[65%] max-w-[260px] sm:w-auto sm:max-w-full"
      />
    </div>
    <div className={imageLeft ? "sm:flex-1" : "sm:ml-[53px] sm:w-[592px] sm:shrink-0"}>
      <TopicBlock topic={topic} />
    </div>
  </div>
);

const CourseContent = ({ section }: { section?: RichTextSection }) => {
  const topics = toTopics(section?.content?.raw);
  if (topics.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-[#1A97CA] pb-20 pt-[60px] font-primary sm:py-[100px]">
      <Glow className="hidden sm:block -z-0 left-1/2 top-[568px] h-[1083px] w-[1083px] -translate-x-1/2 bg-[rgba(118,180,228,0.51)] blur-[300px]" />

      <RibbonWave
        width={300}
        height={150}
        className="absolute left-5 top-4 z-10 w-[80px] -rotate-[20.09deg] sm:-rotate-[18.14deg] sm:left-[138px] sm:top-[46px] sm:w-[240px]"
      />

      <div className="relative z-10 flex flex-col items-start px-5 sm:items-center sm:px-0">
        <Chip
          variant="glass"
          className="!px-4 !py-2 !text-[12px] font-bold uppercase !tracking-[0.1em] shadow-[0_4px_14px_rgba(0,0,0,0.1)] sm:!py-3 sm:!text-[15px]"
        >
          Content
        </Chip>
        <h2 className="mt-3 text-[23px] font-normal leading-tight text-white sm:mt-6 sm:text-[46px] sm:leading-[50px]">
          Course{" "}
          <span className="font-bold">{section?.heading || "Content"}</span>
        </h2>
      </div>

      <div className="relative z-10 mt-10 flex flex-col gap-14 px-5 sm:mx-auto sm:mt-[70px] sm:max-w-[1250px] sm:gap-20 sm:px-0">
        {topics.map((topic, i) => (
          <TopicRow key={topic.heading} topic={topic} imageLeft={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
};

export default CourseContent;
