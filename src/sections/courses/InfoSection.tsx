import React from "react";
import Button from "components/ui/Button";
import Chip from "components/ui/Chip";
import SectionShell from "components/ui/SectionShell";
import { CALL_US_HREF } from "lib/contact";

export type InfoItem = {
  order?: number;
  heading?: string | null;
  subheading?: string | null;
  paragraph?: string | null;
  points?: { heading?: string | null; paragraph?: string | null }[] | null;
  button?: { text?: string | null; url?: string | null } | null;
};

const BODY =
  "text-[13px] font-semibold leading-6 text-[#374151] sm:text-base sm:leading-[26px]";

const InfoSection = ({ item }: { item: InfoItem }) => {
  const heading = item.heading?.trim();
  const subheading = item.subheading?.trim();
  const paragraphs = (item.paragraph ?? "")
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
  const points = (item.points ?? [])
    .map((point) => ({
      lead: point?.heading?.trim(),
      text: point?.paragraph?.trim(),
    }))
    .filter(({ lead, text }) => lead || text);
  const buttonText = item.button?.text?.trim();

  if (!heading && !paragraphs.length && !points.length) return null;

  return (
    <SectionShell as="section" className="py-10 font-primary sm:py-16">
      <div className="mx-auto flex max-w-[1135px] flex-col items-center text-center">
        {subheading && (
          <Chip variant="pink" className="uppercase">
            {subheading}
          </Chip>
        )}
        {heading && (
          <h2
            className={`text-[23px] font-bold leading-tight text-black sm:text-[46px] ${
              subheading ? "mt-3 sm:mt-[34px]" : ""
            }`}
          >
            {heading}
          </h2>
        )}
        {paragraphs.length > 0 && (
          <div className={`mt-2 flex flex-col gap-4 sm:mt-5 ${BODY}`}>
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}
        {points.length > 0 && (
          <ul
            className={`mt-6 flex w-full max-w-[900px] list-disc flex-col gap-4 pl-5 text-left sm:mt-8 ${BODY}`}
          >
            {points.map(({ lead, text }, i) => (
              <li key={i}>
                {lead && (
                  <span className="font-bold text-black">
                    {lead}
                    {text && ":"}
                  </span>
                )}{" "}
                {text}
              </li>
            ))}
          </ul>
        )}
        {buttonText && (
          <Button
            href={item.button?.url?.trim() || CALL_US_HREF}
            variant="primary"
            rounded="sm"
            className="mt-6"
          >
            {buttonText}
          </Button>
        )}
      </div>
    </SectionShell>
  );
};

export default InfoSection;
