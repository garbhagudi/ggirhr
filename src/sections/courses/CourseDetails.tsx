import React, { useState } from "react";
import Image from "next/image";
import Chip from "components/ui/Chip";
import SectionShell from "components/ui/SectionShell";

// Same asset the site header uses.
const LOGO_URL =
  "https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegtq5201oe06pryy2gzwdk";

type Course = {
  title?: string;
  videoId?: string | null;
  qualification?: string | null;
};

const YouTubeGlyph = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 17" aria-hidden="true" className={className}>
    <path
      fill="#FF4040"
      d="M23.5 2.65A3.02 3.02 0 0 0 21.38.5C19.5 0 12 0 12 0S4.5 0 2.62.5A3.02 3.02 0 0 0 .5 2.65C0 4.55 0 8.5 0 8.5s0 3.95.5 5.85a3.02 3.02 0 0 0 2.12 2.15C4.5 17 12 17 12 17s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.15c.5-1.9.5-5.85.5-5.85s0-3.95-.5-5.85Z"
    />
    <path fill="#FFFFFF" d="M9.6 12.14 15.9 8.5 9.6 4.86v7.28Z" />
  </svg>
);

// Figma Group 2085663168: desktop 522×387 card, mobile 335×248 (≈0.64 scale).
const VideoCard = ({ videoId, title }: { videoId: string; title?: string }) => {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(
    `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  );

  return (
    <div className="relative w-full max-w-[522px] shrink-0 rounded-[12.8px] bg-white p-[7px] shadow-[0_2.57px_41px_rgba(0,0,0,0.11)] lg:rounded-[20px] lg:p-[11px] lg:shadow-[0_4px_64px_rgba(0,0,0,0.11)]">
      <div className="relative overflow-hidden rounded-[6.4px] bg-[#EBE8F3] lg:rounded-[10px]">
        {/* Top strip: slanted logo badge (with pink under-strip) + YouTube label */}
        <div className="relative flex h-[49px] items-start justify-between lg:h-[76px]">
          <div className="relative mt-[9px] lg:mt-[14px]">
            <div className="absolute left-0 top-[11px] h-[28px] w-[110px] bg-[#EF3E66] [clip-path:polygon(0_0,100%_0,88%_100%,0_100%)] lg:top-[17px] lg:h-[44px] lg:w-[172px]" />
            <div className="relative flex h-[36px] w-[132px] items-center bg-white pl-[3px] shadow-[0_2.57px_5.5px_rgba(0,0,0,0.05)] [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)] lg:h-[56px] lg:w-[206px] lg:pl-1">
              <Image
                src={LOGO_URL}
                alt="GarbhaGudi GGIRHR"
                width={182}
                height={43}
                className="h-auto w-[117px] lg:w-[182px]"
              />
            </div>
          </div>
          <div className="mr-4 mt-[13px] flex items-center gap-[6px] lg:mr-[26px] lg:mt-[21px] lg:gap-[10px]">
            <YouTubeGlyph className="h-[14px] w-[19px] lg:h-[21px] lg:w-[30px]" />
            <span className="text-[14px] font-semibold leading-none text-black lg:text-[22px]">
              YouTube
            </span>
          </div>
        </div>

        <div className="relative aspect-video w-full">
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={title || "Course video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            // Plain <img>: i.ytimg.com isn't in next.config image domains.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumb}
              alt={title ? `${title} video` : "Course video"}
              loading="lazy"
              onError={() =>
                setThumb(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`)
              }
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          {/* Figma "Vector 31" + blurred "Rectangle 34": lavender blocks that
              hide the branding baked into the thumbnail's top edge, so only
              the strip's badge/label show. */}
          {!playing && (
            <>
              <div className="absolute left-0 top-0 h-[26%] w-[44.6%] bg-[#EBE8F3]" />
              <div className="absolute -top-[12px] right-0 h-[calc(15.6%+12px)] w-[59.4%] bg-[#EBE8F3] blur-[4px] lg:-top-[19px] lg:h-[calc(15.6%+19px)] lg:blur-[6px]" />
            </>
          )}
        </div>
      </div>

      {!playing && (
        <button
          type="button"
          aria-label="Play video"
          onClick={() => setPlaying(true)}
          className="absolute left-1/2 top-[calc(50%+24.5px)] flex h-[53px] w-[53px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.1)] transition-transform hover:scale-105 lg:left-auto lg:right-[-34px] lg:top-[calc(50%+96px)] lg:h-20 lg:w-20 lg:translate-x-0"
        >
          <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#1DA8E1] lg:h-[69px] lg:w-[69px]">
            <svg
              viewBox="0 0 14 16"
              aria-hidden="true"
              className="ml-[2px] h-[13px] w-[12px] lg:h-5 lg:w-[18px]"
            >
              <path
                fill="#FFFFFF"
                d="M13 6.27a2 2 0 0 1 0 3.46L3 15.5A2 2 0 0 1 0 13.77V2.23A2 2 0 0 1 3 .5l10 5.77Z"
              />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
};

// Video (course.videoId) + eligibility copy (course.qualification) from Hygraph.
const CourseDetails = ({ course }: { course?: Course }) => {
  const videoId = course?.videoId?.trim();
  const paragraphs = (course?.qualification ?? "")
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  if (!videoId && paragraphs.length === 0) return null;

  return (
    <SectionShell
      as="section"
      className="flex flex-col gap-[30px] py-10 font-primary lg:flex-row lg:items-center lg:gap-10 lg:py-16"
    >
      {videoId && <VideoCard videoId={videoId} title={course?.title} />}

      <div className="flex flex-col items-start">
        <Chip variant="pink" className="uppercase">
          Course Details
        </Chip>
        <h2 className="mt-[18px] text-left text-[23px] font-normal leading-[29px] text-black lg:mt-5 lg:max-w-[420px] lg:text-[46px] lg:leading-[50px]">
          Begin Your{" "}
          <span className="font-bold text-primaryBlue">Medical Career Here</span>
        </h2>
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="mt-[18px] text-justify text-[13px] font-semibold leading-5 text-[#374151] lg:max-w-[540px] lg:text-base lg:leading-[26px]"
          >
            {p}
          </p>
        ))}
      </div>
    </SectionShell>
  );
};

export default CourseDetails;
