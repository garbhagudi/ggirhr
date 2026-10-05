import React, { useState } from "react";
import Chip from "components/ui/Chip";
import ChevronDownIcon from "components/ui/icons/ChevronDownIcon";

type Faq = { question: string; answer: string };

export const parseFaqs = (faqJson: unknown): Faq[] => {
  let data: any = faqJson;
  if (typeof data === "string") {
    try {
      data = JSON.parse(data);
    } catch {
      return [];
    }
  }
  const entries = Array.isArray(data) ? data : data?.mainEntity;
  if (!Array.isArray(entries)) return [];
  return entries
    .map((e: any) => ({
      question: String(e?.name ?? "").trim(),
      answer: String(e?.acceptedAnswer?.text ?? "").trim(),
    }))
    .filter((f) => f.question && f.answer);
};

const PLACEHOLDER_ANSWER =
  "Laboratory work, hands-on experience, interactive discussions, case-based learning, and advanced technology-driven tools to foster critical thinking and problem-solving at GarbhaGudi IVF Centre. Effective learning is facilitated when like-minded professionals are actively engaged in a collaborative ecosystem.";
const PLACEHOLDER_FAQS: Faq[] = [1, 2, 3, 4].map((n) => ({
  question: `Lorem Ipsum has been the industry's standard ${n}`,
  answer: PLACEHOLDER_ANSWER,
}));

const pad = (n: number) => String(n).padStart(2, "0");

const CourseFaq = ({ faqJson }: { faqJson?: unknown }) => {
  const parsed = parseFaqs(faqJson);
  const faqs = parsed.length > 0 ? parsed : PLACEHOLDER_FAQS;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#D2EEF9] px-5 pb-14 pt-[51px] font-primary sm:px-0 sm:py-[100px]">
      <div className="mx-auto max-w-[1140px]">
        <Chip variant="pink" className="uppercase">
          FAQ
        </Chip>
        <h2 className="mt-4 text-left text-[23px] font-normal leading-tight text-black sm:mt-5 sm:text-[46px] sm:leading-[50px]">
          Common Questions,
          <br className="sm:hidden" />{" "}
          <span className="font-bold text-primaryBlue">Quick Answers</span>
        </h2>

        <ul className="mt-5 flex flex-col gap-5 sm:mt-[30px]">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            return (
              <li
                key={faq.question}
                className={`rounded-[10px] border transition-colors ${
                  isOpen
                    ? "border-[#C2C2C2] bg-white sm:border-transparent"
                    : "border-[#979797] sm:border-[#C2C2C2]"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`flex w-full items-center gap-[10px] pl-3 pr-[30px] text-left sm:gap-[19px] sm:pl-[30px] sm:pr-9 ${
                    isOpen ? "pb-2 pt-4 sm:pb-0 sm:pt-[22px]" : "py-4"
                  }`}
                >
                  <span
                    className={`shrink-0 text-[17px] font-semibold leading-5 ${
                      isOpen ? "text-black" : "text-[#979797]"
                    }`}
                  >
                    {pad(i + 1)}
                  </span>
                  <span
                    className={`flex-1 text-[15px] font-semibold leading-5 sm:text-[20px] sm:leading-[22px] ${
                      isOpen ? "text-black" : "text-[#979797]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    size={14}
                    aria-hidden="true"
                    className={`shrink-0 text-black transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p
                    id={panelId}
                    className="px-3 pb-6 pt-3 text-justify text-[13px] font-semibold leading-[22px] text-[#374151] sm:max-w-[1046px] sm:pb-6 sm:pl-[68px] sm:pr-9 sm:pt-3 sm:text-base sm:leading-6"
                  >
                    {faq.answer}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default CourseFaq;
