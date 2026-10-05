"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { PhoneIcon } from "@heroicons/react/solid";
import Glow from "components/ui/Glow";
import RibbonWave from "components/ui/RibbonWave";
import Button from "components/ui/Button";
import {
  EMAIL_PATTERN,
  FieldError,
  FieldGroup,
  PhoneInput,
  inputClasses,
  textareaClasses,
  validatePhone,
} from "components/ui/FormFields";

const DNA_BACKGROUND_IMAGE = "/images/courses/dna-strand.png";
const AWARD_IMAGE_ONE = "/images/courses/award-university.png";
const AWARD_IMAGE_TWO = "/images/courses/award-institutional.png";
// Placeholder — the avatar photos aren't in the repo yet.

const StatBadge = () => (
  <div className="flex items-center gap-[5px] rounded-[130px] bg-white py-[3.5px] pl-[5px] pr-[10px]">
    {/* Placeholder avatars — no CMS-backed "professionals" imagery exists yet. */}
    <div className="flex -space-x-[9px] sm:-space-x-3">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-[29px] w-[29px] rounded-full border-[0.75px] border-white bg-gray-200 sm:h-[38px] sm:w-[38px] sm:border"
        />
      ))}
    </div>
    <p className="text-xs font-bold leading-none text-black sm:text-lg">
      <span className="text-[#5B65DC]">500+</span> Professionals trained in
      India
    </p>
  </div>
);

// Figma "Group 2085663110": 389×149 on desktop, full card width on mobile.
const AwardsCard = () => (
  <div className="relative z-20 flex w-full flex-col gap-3 rounded-[10px] text-left bg-white px-[10px] py-3 shadow-[0px_4px_14px_rgba(0,0,0,0.1)] sm:w-fit sm:max-w-[389px] sm:gap-[21px] sm:pb-[18px] sm:pl-[15px] sm:pr-[14px] sm:pt-[19px]">
    <p className="text-[11px] font-bold uppercase leading-none tracking-[0.1em] text-black sm:text-[15px]">
      Awards
    </p>
    <div className="flex items-center gap-4 sm:gap-[27px]">
      <Image
        src={AWARD_IMAGE_ONE}
        alt="GGIRHR training certification"
        width={174}
        height={81}
        className="h-[50px] w-auto object-contain sm:h-[81px]"
      />
      <div className="h-[45px] w-[1.3px] bg-[#707070] sm:h-[66px]" />
      <Image
        src={AWARD_IMAGE_TWO}
        alt="GGIRHR institutional certification"
        width={131}
        height={79}
        className="h-[50px] w-auto object-contain sm:h-[79px]"
      />
    </div>
  </div>
);

// Mobile labels are 13px/#374151; the shared FieldLabel default is desktop.
const LABEL =
  "!text-[13px] !leading-4 !text-[#374151] sm:!text-[16px] sm:!leading-[26px] sm:!text-[#111111]/80";
const GROUP = "!gap-2 sm:!gap-3";

const ApplicationForm = () => {
  const router = useRouter();
  const path = usePathname();
  const pageVisit = router?.query?.pageVisit || path;
  const utmCampaign = router.query?.utm_campaign || "";

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      First_Name: "",
      Last_Name: "",
      Country_Code: "+91",
      Phone: "",
      Email: "",
      Description: "",
      Lead_Source: "Online",
      Lead_Sub_Source: "GGIRHR",
      UTM_Campaign: utmCampaign,
      Page_Visited: pageVisit,
      Campaign: { id: "6231628000046715055" },
    },
  });

  useEffect(() => {
    setValue("Page_Visited", `${window.location?.origin}${pageVisit}`);
  }, [pageVisit, setValue]);

  useEffect(() => {
    setValue("UTM_Campaign", utmCampaign);
  }, [utmCampaign, setValue]);

  const countryCode = watch("Country_Code");
  const [load, setLoad] = useState(false);

  const onSubmit = async (data) => {
    setLoad(true);
    const { Country_Code, ...lead } = data;
    try {
      const response = await fetch("/api/createLeads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: { ...lead, Phone: `${Country_Code}${data.Phone}` },
        }),
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setLoad(false);
      if (responseData?.data[0]?.code === "SUCCESS") {
        reset();
        router.push("/thank-you.html");
      }
    } catch (err) {
      setLoad(false);
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-4 sm:gap-[34px]"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        <FieldGroup
          htmlFor="First_Name"
          label="First Name"
          className={`flex-1 ${GROUP}`}
          labelClassName={LABEL}
        >
          <input
            type="text"
            id="First_Name"
            className={inputClasses}
            {...register("First_Name", {
              required: "First name is required",
            })}
          />
          <FieldError message={errors.First_Name?.message as string} />
        </FieldGroup>

        <FieldGroup
          htmlFor="Last_Name"
          label="Last Name"
          className={`flex-1 ${GROUP}`}
          labelClassName={LABEL}
        >
          <input
            type="text"
            id="Last_Name"
            className={inputClasses}
            {...register("Last_Name")}
          />
        </FieldGroup>
      </div>

      <FieldGroup
        htmlFor="Phone"
        label={
          <>
            <span className="sm:hidden">Mobile*</span>
            <span className="hidden sm:inline">Phone*</span>
          </>
        }
        className={GROUP}
        labelClassName={LABEL}
      >
        <PhoneInput
          id="Phone"
          countryCode={countryCode}
          selectProps={register("Country_Code")}
          inputProps={register("Phone", {
            required: "Phone number is required",
            validate: (value, formValues) =>
              validatePhone(value, formValues.Country_Code),
          })}
        />
        <FieldError message={errors.Phone?.message as string} />
      </FieldGroup>

      <FieldGroup
        htmlFor="Email"
        label="Email address*"
        className={GROUP}
        labelClassName={LABEL}
      >
        <input
          type="email"
          id="Email"
          className={inputClasses}
          {...register("Email", {
            required: "Email is required",
            pattern: {
              value: EMAIL_PATTERN,
              message: "Invalid email format",
            },
          })}
        />
        <FieldError message={errors.Email?.message as string} />
      </FieldGroup>

      <FieldGroup
        htmlFor="Description"
        label="Message"
        className={GROUP}
        labelClassName={LABEL}
      >
        <textarea
          id="Description"
          className={`${textareaClasses} !h-[65px] sm:!h-[85px]`}
          {...register("Description")}
        />
      </FieldGroup>

      <Button
        type="submit"
        variant="primary"
        rounded="md"
        fullWidth
        isLoading={load}
        className="!text-white sm:h-[45px]"
      >
        Submit
      </Button>
    </form>
  );
};

const FELLOWSHIP_SLUG = "fellowship-in-clinical-embryology";
const FELLOWSHIP_SUBTITLE =
  "Develop industry-ready clinical embryology skills through extensive hands-on training, expert mentorship, research exposure, and placement support.";

// Shared hero for every /courses/[slug] page.
const FellowshipBanner = ({
  course,
}: {
  course?: { title?: string; slug?: string; metaDescription?: string };
}) => {
  const title = course?.title || "Fellowship in Clinical Embryology";
  const subtitle =
    course?.slug === FELLOWSHIP_SLUG
      ? FELLOWSHIP_SUBTITLE
      : course?.metaDescription;
  const titleWords = title.trim().split(/\s+/);
  const highlightWords = titleWords.splice(-2).join(" ");
  const leadWords = titleWords.join(" ");

  return (
    <div className="my-4 px-5 font-primary sm:my-8 sm:px-[30px]">
      <div className="relative flex flex-col gap-5 overflow-hidden rounded-xl bg-[#D2EEF9] px-[10px] pb-[39px] pt-[62px] sm:px-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:rounded-[30px] sm:py-[43px] sm:pl-[89px] sm:pr-[70px]">
        <Glow className="hidden sm:block -z-0 w-[454px] h-[454px] -left-[127px] -top-[148px] bg-[rgba(255,255,255,0.5)] blur-[80px]" />
        <Glow className="-z-0 w-[298px] h-[298px] right-0 sm:right-[-42px] top-[-100px] sm:-top-[42px] bg-[#7ADCF9] blur-[120px] sm:blur-[202px]" />

        <Image
          src={DNA_BACKGROUND_IMAGE}
          alt=""
          aria-hidden="true"
          width={955}
          height={738}
          sizes="(min-width: 640px) 955px, 502px"
          className="pointer-events-none absolute -left-[122px] top-[569px] z-0 h-auto w-[502px] max-w-none sm:-top-[30px] sm:left-[425px] sm:w-[955px]"
        />

        <RibbonWave
          color="#FFFFFF"
          width={214}
          height={84}
          className="absolute left-[17px] top-[6px] z-10 w-[77px] -rotate-[12.21deg] sm:-top-[5px] sm:left-6 sm:w-[214px] sm:-rotate-[7.36deg]"
        />

        {/* Left column: stat badge, headline, copy, CTAs, awards card */}
        <div className="relative z-10 flex w-full flex-col items-center text-center sm:items-start sm:text-left sm:w-1/2">
          <StatBadge />

          <h1 className="mt-[10px] max-w-[280px] text-[31px] font-normal leading-[33px] text-[#111111] sm:mt-6 sm:max-w-[606px] sm:text-[61px] sm:leading-[58px] sm:text-black">
            {leadWords}{" "}
            <span className="font-bold text-primaryBlue">{highlightWords}</span>
          </h1>
          {subtitle && (
            <p className="mt-[10px] text-[13px] font-semibold leading-[20px] text-black sm:text-[#374151] sm:mt-[15px] sm:max-w-[619px] sm:text-justify sm:text-lg sm:leading-[27px]">
              {subtitle}
            </p>
          )}

          <div className="mt-[10px] flex items-center gap-[10px] sm:mt-[21px] sm:gap-4">
            <Button
              href={`/contact?pageVisit=/courses/${course?.slug ?? FELLOWSHIP_SLUG}`}
              variant="primary"
              rounded="sm"
              className="!text-[#F1F1F1] sm:leading-[30px]"
            >
              Contact Us
            </Button>
            <Button
              href="tel:+919108910852"
              variant="outline"
              rounded="sm"
              className="sm:!border sm:leading-[30px]"
              leftIcon={
                <PhoneIcon className="h-[13px] w-[13px] sm:h-[18px] sm:w-[18px]" />
              }
            >
              Call Us
            </Button>
          </div>

          <div className="mt-6 w-full sm:mt-[31px] sm:w-auto">
            <AwardsCard />
          </div>
        </div>

        {/* Right column: application form card */}
        <div className="relative z-20 flex w-full sm:w-1/2 sm:justify-end">
          <div className="flex w-full flex-col gap-2 rounded-[6.7px] bg-white px-4 py-5 shadow-[0_2.69px_9.4px_rgba(0,0,0,0.1)] sm:gap-[34px] sm:rounded-[20px] sm:p-10 sm:shadow-[0px_4px_54px_rgba(87,209,245,0.39)] sm:max-w-[552px]">
            <h2 className="text-[20px] font-normal leading-[29px] text-black sm:text-[26px]">
              Start Your{" "}
              <span className="font-bold text-primaryBlue">
                Application Journey
              </span>
            </h2>
            <ApplicationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FellowshipBanner;
