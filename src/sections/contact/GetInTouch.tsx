import React from "react";
import Chip from "components/ui/Chip";
import { ContentContainer } from "components/ui/SectionShell";
import type { IconProps } from "components/ui/icons/IconBase";
import EmailIcon from "components/ui/icons/EmailIcon";
import CallSupportIcon from "components/ui/icons/CallSupportIcon";
import AcademicsIcon from "components/ui/icons/AcademicsIcon";
import FeedbackIcon from "components/ui/icons/FeedbackIcon";
import HumanResourcesIcon from "components/ui/icons/HumanResourcesIcon";
import PartnershipIcon from "components/ui/icons/PartnershipIcon";
import EnquiryForm from "sections/contact/EnquiryForm";

type Department = {
  title: string;
  icon: React.ComponentType<IconProps>;
  email: string;
  phone?: { label: string; href: string };
};

const MAIN_PHONE = { label: "+91 9108 9108 52", href: "tel:+919108910852" };

const DEPARTMENTS: Department[] = [
  {
    title: "Academics & Queries",
    icon: AcademicsIcon,
    email: "training@ggirhr.com",
    phone: MAIN_PHONE,
  },
  {
    title: "Feedback & Complaints",
    icon: FeedbackIcon,
    email: "manager@ggirhr.com",
    phone: MAIN_PHONE,
  },
  {
    title: "Human Resources",
    icon: HumanResourcesIcon,
    email: "hr@garbhagudi.com",
  },
  {
    title: "Partnership",
    icon: PartnershipIcon,
    email: "jayaram@garbhagudi.com",
    phone: { label: "+91 9980 9971 11", href: "tel:+919980997111" },
  },
];

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.548126617046!2d77.57422009999999!3d12.9367387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156527450c35%3A0x617a33b43836856d!2sGGIRHR%20-%20GarbhaGudi%20Institute%20of%20Reproductive%20Health%20%26%20Research!5e0!3m2!1sen!2sin!4v1741251561868!5m2!1sen!2sin";

const ICON_COLOR = "#1DA8E1";

const ContactLine = ({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="flex items-center gap-[7px] text-[13px] font-semibold leading-5 text-[#8E8E8E] transition-colors hover:text-primaryBlue sm:gap-1.5 sm:text-base whitespace-nowrap"
  >
    {/* Fixed-width slot so email and phone text line up. */}
    <span className="flex w-[18px] shrink-0 justify-center">{icon}</span>
    <span className="break-all">{children}</span>
  </a>
);

const DepartmentCard = ({ title, icon: Icon, email, phone }: Department) => (
  <div className="flex flex-col rounded-xl border border-[#D9D9D9] px-[27px] pt-[22px] pb-7 sm:rounded-[20px] sm:px-5 sm:pt-[29px]">
    <div className="grid h-[53px] w-[53px] place-items-center rounded-[20px] bg-[#F6F6F6]">
      <Icon />
    </div>
    <h3 className="mt-5 text-[15px] font-semibold text-black sm:text-xl whitespace-nowrap">
      {title}
    </h3>
    <span
      aria-hidden="true"
      className="mt-[14px] sm:mt-[11px] h-0 w-[37px] border-t-[3px] border-black sm:w-[30px] sm:border-t-[2.5px] sm:border-[#374151]"
    />
    <div className="flex flex-col gap-3 sm:gap-4 mt-5">
      <ContactLine
        href={`mailto:${email}`}
        icon={
          <EmailIcon
            size={26}
            color={ICON_COLOR}
            className="h-6 w-6 sm:h-[26px] sm:w-[26px]"
          />
        }
      >
        {email}
      </ContactLine>
      {phone && (
        <ContactLine
          href={phone.href}
          icon={<CallSupportIcon size={13} color={ICON_COLOR} />}
        >
          {phone.label}
        </ContactLine>
      )}
    </div>
  </div>
);

const GetInTouch = () => (
  <ContentContainer
    as="section"
    id="contact-form"
    aria-labelledby="get-in-touch-heading"
    className="bg-white py-12 scroll-mt-24 sm:py-20"
  >
    <div className="text-center">
      <Chip variant="pink" className="uppercase">
        Contact Information
      </Chip>
      <h2
        id="get-in-touch-heading"
        className="mt-2 text-[23px] leading-tight text-black sm:text-[46px]"
      >
        Get in <span className="font-bold text-primaryBlue">Touch</span>
      </h2>
    </div>

    <div className="mx-auto mt-6 flex max-w-[1147px] flex-col gap-5 rounded-[20px] bg-white p-[15px] shadow-[0px_4px_54px_rgba(0,0,0,0.08)] sm:mt-8 sm:gap-10 sm:p-[26px] sm:py-[50px] sm:pr-[30px]">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-[519fr_552fr]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-[23px] sm:gap-y-[18px]">
          {DEPARTMENTS.map((department) => (
            <DepartmentCard key={department.title} {...department} />
          ))}
        </div>
        <EnquiryForm />
      </div>

      <div className="relative h-[180px] overflow-hidden rounded-xl sm:h-[415px] sm:rounded-[20px]">
        <iframe
          title="GGIRHR location on Google Maps"
          src={MAP_EMBED_SRC}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  </ContentContainer>
);

export default GetInTouch;
