import React from "react";
import SectionShell from "components/ui/SectionShell";
import type { IconProps } from "components/ui/icons/IconBase";
import ChatSupportIcon from "components/ui/icons/ChatSupportIcon";
import CallSupportIcon from "components/ui/icons/CallSupportIcon";
import CounsellingIcon from "components/ui/icons/CounsellingIcon";
import { CALL_US_HREF } from "lib/contact";

type SupportOption = {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
  // Figma size on desktop, ~0.8× on mobile to match the smaller disc.
  iconClassName: string;
  ctaLabel: string;
  href: string;
  external?: boolean;
};

const SUPPORT_OPTIONS: SupportOption[] = [
  {
    title: "Chat Support",
    description:
      "Chat online with our team now from anywhere. We provide you with a seamless and hassle-free online chat experience from the comfort of your home. Get the proper assistance now!",
    icon: ChatSupportIcon,
    iconClassName: "h-auto w-[29px] sm:w-9",
    ctaLabel: "Chat Now",
    href: "https://salesiq.zoho.com/signaturesupport.ls?widgetcode=siq9cb07e4f29c86a0622c4785734fcaba7b624414ff160b99492e8afeead60bd0a",
    external: true,
  },
  {
    title: "Call Support",
    description:
      "Reach out to us with your questions, concerns, or challenges. We’ll be happy to help you at any time, and we’re always trying to make things easier for you!",
    icon: CallSupportIcon,
    iconClassName: "h-auto w-6 sm:w-[30px]",
    ctaLabel: "Call Now",
    href: CALL_US_HREF,
  },
  {
    title: "Book a Counselling Session",
    description:
      "Know more about all the courses we offer and which one is best best fit for your career.",
    icon: CounsellingIcon,
    iconClassName: "h-auto w-8 sm:w-10",
    ctaLabel: "Book an Appointment",
    href: "#contact-form",
  },
];

// White glowing tile around a blue disc; the Figma glyphs are white.
const IconBadge = ({
  icon: Icon,
  iconClassName,
}: Pick<SupportOption, "icon" | "iconClassName">) => (
  <div className="grid h-[73px] w-[73px] place-items-center rounded-full bg-white shadow-[0_0_10.6px_rgba(87,209,245,0.28)] sm:h-[90px] sm:w-[90px] sm:shadow-[0_0_13px_rgba(87,209,245,0.28)]">
    <div className="grid h-[62px] w-[62px] place-items-center rounded-full bg-primaryBlue sm:h-[76px] sm:w-[76px]">
      <Icon className={iconClassName} />
    </div>
  </div>
);

const SupportCard = ({
  title,
  description,
  icon,
  iconClassName,
  ctaLabel,
  href,
  external,
}: SupportOption) => (
  <div className="flex flex-col items-center rounded-xl border border-[#D9D9D9] bg-white px-7 pt-5 pb-6 text-center transition-shadow duration-200 hover:border-transparent hover:shadow-[0_4px_54px_rgba(0,0,0,0.08)] focus-within:border-transparent focus-within:shadow-[0_4px_54px_rgba(0,0,0,0.08)] sm:rounded-[20px] sm:px-[30px] sm:py-9">
    <IconBadge icon={icon} iconClassName={iconClassName} />
    <h3 className="mt-5 text-[15px] font-semibold text-black sm:mt-4 sm:text-xl">
      {title}
    </h3>
    <span
      aria-hidden="true"
      className="mt-2 h-0 w-7 border-t-[2.3px] border-black sm:w-[30px] sm:border-t-[2.5px] sm:border-[#374151]"
    />
    <p className="mt-3 text-[13px] leading-5 text-black sm:text-base sm:leading-6 sm:text-[#374151]">
      {description}
    </p>
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noreferrer" })}
      className="mt-auto pt-5 text-[13px] font-bold text-primaryBlue underline sm:pt-6 sm:text-lg"
    >
      {ctaLabel}
    </a>
  </div>
);

const SupportCards = () => (
  <SectionShell
    as="section"
    aria-labelledby="contact-heading"
    className="bg-white py-10 sm:py-20"
  >
    <h2 className="sr-only" id="contact-heading">
      Contact us
    </h2>
    <div className="mx-auto grid max-w-[335px] grid-cols-1 gap-5 sm:max-w-none sm:grid-cols-3">
      {SUPPORT_OPTIONS.map((option) => (
        <SupportCard key={option.title} {...option} />
      ))}
    </div>
  </SectionShell>
);

export default SupportCards;
