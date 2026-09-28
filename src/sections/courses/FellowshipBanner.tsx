"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { PhoneIcon } from "@heroicons/react/solid";
import Glow from "components/ui/Glow";
import Button from "components/ui/Button";

// Placeholders — the Figma spec references a DNA-strand background image and
// two award/certificate images that don't exist in this repo. Swap these for
// the real assets once supplied.
const DNA_BACKGROUND_IMAGE = "/research-microscope.png";
const AWARD_IMAGE_ONE = "/images/why-ggirhr-1.webp";
const AWARD_IMAGE_TWO = "/images/why-ggirhr-2.webp";

const COUNTRY_CODES = [
  { code: "+91", label: "India" },
  { code: "+971", label: "UAE" },
  { code: "+1", label: "USA / Canada" },
  { code: "+44", label: "UK" },
  { code: "+61", label: "Australia" },
  { code: "+65", label: "Singapore" },
];

const fieldBase =
  "w-full rounded-md border border-[#D9D9D9] bg-white px-4 text-[13px] text-[#111111] " +
  "placeholder:text-gray-400 focus:outline-none focus:border-[#1DA8E1] " +
  "focus:shadow-[0px_4px_24px_#BAEFFF] transition-colors sm:py-3 sm:text-base";

const inputClasses = `${fieldBase} h-10 sm:h-auto sm:h-[50px]`;
const textareaClasses = `${fieldBase} h-[85px] py-2.5 sm:min-h-[85px]`;

const Chevron = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 8 5"
    fill="none"
    aria-hidden="true"
    className={`w-2 h-[5px] ${className}`}
  >
    <path
      d="M1 1L4 4L7 1"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FieldLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[16px] tracking-[-0.02em] leading-[26px] text-[#111111]/80">
    {children}
  </span>
);

const FieldError = ({ message }: { message?: string }) =>
  message ? <p className="text-sm text-red-500 mt-1">{message}</p> : null;

const FieldGroup = ({
  htmlFor,
  label,
  className = "",
  children,
}: {
  htmlFor: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}) => (
  <div className={`flex flex-col gap-3 ${className}`}>
    <label htmlFor={htmlFor}>
      <FieldLabel>{label}</FieldLabel>
    </label>
    {children}
  </div>
);

const StatBadge = () => (
  <div className="flex items-center gap-2.5 rounded-[130px] bg-white px-2.5 py-2 sm:px-3 sm:py-2.5 shadow-[0px_4px_14px_rgba(0,0,0,0.08)]">
    {/* Placeholder avatars — no CMS-backed "professionals" imagery exists yet. */}
    <div className="flex -space-x-2.5">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border-2 border-white bg-gray-200"
        />
      ))}
    </div>
    <p className="text-sm sm:text-lg font-bold text-[#5B65DC]">
      500+ Professionals trained in India
    </p>
  </div>
);

const AwardsCard = () => (
  <div className="relative z-20 hidden sm:flex bg-white rounded-[10px] shadow-[0px_4px_14px_rgba(0,0,0,0.1)] px-5 py-5 gap-4 items-center w-fit max-w-[389px]">
    <div className="flex flex-col gap-3">
      <p className="text-[13px] font-bold tracking-[0.1em] uppercase text-black">
        Awards
      </p>
      <div className="flex items-center gap-4">
        <Image
          src={AWARD_IMAGE_ONE}
          alt="GGIRHR training certification"
          width={90}
          height={70}
          className="h-[70px] w-auto object-contain"
        />
        <div className="h-[66px] w-px bg-[#707070]" />
        <Image
          src={AWARD_IMAGE_TWO}
          alt="GGIRHR institutional certification"
          width={68}
          height={70}
          className="h-[70px] w-auto object-contain"
        />
      </div>
    </div>
  </div>
);

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
      className="flex flex-col gap-6 w-full"
    >
      <div className="flex flex-col sm:flex-row gap-6">
        <FieldGroup htmlFor="First_Name" label="First Name" className="flex-1">
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

        <FieldGroup htmlFor="Last_Name" label="Last Name" className="flex-1">
          <input
            type="text"
            id="Last_Name"
            className={inputClasses}
            {...register("Last_Name")}
          />
        </FieldGroup>
      </div>

      <FieldGroup htmlFor="Phone" label="Phone*">
        <div className="flex items-stretch h-10 sm:h-[50px] rounded-md border border-[#D9D9D9] bg-white focus-within:border-[#1DA8E1] focus-within:shadow-[0px_4px_24px_#BAEFFF] transition-colors overflow-hidden">
          <div className="relative flex items-center gap-1.5 pl-3 pr-5 border-r border-[#D9D9D9] shrink-0">
            {countryCode === "+91" && (
              <Image
                src="/icons/flag-in.svg"
                alt=""
                width={22}
                height={15}
                className="shrink-0"
              />
            )}
            <select
              aria-label="Country code"
              className="appearance-none bg-transparent text-[13px] sm:text-base text-[#414141] focus:outline-none cursor-pointer pr-3"
              {...register("Country_Code")}
            >
              {COUNTRY_CODES.map(({ code, label }) => (
                <option key={code} value={code} title={label}>
                  {code}
                </option>
              ))}
            </select>
            <Chevron className="absolute right-1.5 top-1/2 -translate-y-1/2 text-[#414141] pointer-events-none" />
          </div>
          <input
            type="tel"
            id="Phone"
            placeholder="Enter mobile number"
            className="w-full bg-transparent px-4 text-[13px] sm:text-base sm:py-3 text-[#111111] placeholder:text-gray-400 focus:outline-none"
            {...register("Phone", {
              required: "Phone number is required",
              validate: (value, formValues) =>
                formValues.Country_Code === "+91"
                  ? /^[0-9]{10}$/.test(value) ||
                    "Enter a valid 10-digit mobile number"
                  : /^[0-9]{6,15}$/.test(value) ||
                    "Enter a valid mobile number",
            })}
          />
        </div>
        <FieldError message={errors.Phone?.message as string} />
      </FieldGroup>

      <FieldGroup htmlFor="Email" label="Email address*">
        <input
          type="email"
          id="Email"
          className={inputClasses}
          {...register("Email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
        />
        <FieldError message={errors.Email?.message as string} />
      </FieldGroup>

      <FieldGroup htmlFor="Description" label="Message">
        <textarea
          id="Description"
          className={textareaClasses}
          {...register("Description")}
        />
      </FieldGroup>

      <Button
        type="submit"
        variant="primary"
        rounded="md"
        fullWidth
        isLoading={load}
        className="!text-white h-[45px]"
      >
        Submit
      </Button>
    </form>
  );
};

const FellowshipBanner = ({ course }: { course?: { title?: string } }) => {
  const title = course?.title || "Fellowship in Clinical Embryology";
  // Split the last word(s) off so it can be highlighted in blue, matching the
  // reference design ("Fellowship in Clinical" + "Embryology" in blue).
  const titleWords = title.split(" ");
  const highlightWord = titleWords.pop();
  const leadWords = titleWords.join(" ");

  return (
    <div className="px-5 xl:px-[30px] my-4 md:my-8">
      <div className="relative overflow-hidden rounded-xl xl:rounded-[30px] bg-[#D2EEF9] px-5 py-10 sm:px-8 sm:py-12 lg:px-[89px] lg:py-16 lg:min-h-[738px] flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-8">
        <Glow className="hidden lg:block -z-0 w-[454px] h-[454px] -left-[127px] -top-[148px] bg-[rgba(255,255,255,0.5)] blur-[80px]" />
        <Glow className="-z-0 w-[298px] h-[298px] right-0 lg:right-[-42px] top-[-100px] lg:-top-[42px] bg-[#7ADCF9] blur-[120px] lg:blur-[202px]" />

        {/* Background DNA-strand illustration — placeholder, see comment at top of file. */}
        <div className="hidden lg:block absolute z-0 right-0 top-0 w-[55%] h-full opacity-70">
          <Image
            src={DNA_BACKGROUND_IMAGE}
            alt=""
            fill
            aria-hidden="true"
            sizes="55vw"
            className="object-cover object-left [transform:matrix(-0.98,0.18,0.18,0.98,0,0)]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(210,238,249,0)_40%,#D2EEF9_85%)]" />
        </div>

        {/* Left column: headline, copy, CTAs, stat badge, awards card */}
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col gap-6">
          <StatBadge />

          <div className="flex flex-col gap-4">
            <h1 className="font-heading text-[32px] leading-[36px] sm:text-[44px] sm:leading-[48px] lg:text-[61px] lg:leading-[58px] text-black">
              {leadWords}{" "}
              <span className="text-primaryBlue font-bold">{highlightWord}</span>
            </h1>
            <p className="max-w-[619px] text-[15px] sm:text-lg leading-6 sm:leading-[27px] font-semibold text-justify text-[#374151]">
              Develop industry-ready clinical embryology skills through
              extensive hands-on training, expert mentorship, research
              exposure, and placement support.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              href={`/contact?pageVisit=/courses/fellowship-in-clinical-embryology`}
              variant="primary"
              rounded="sm"
              className="!text-[#F1F1F1]"
            >
              Contact Us
            </Button>
            <Button
              href="tel:+919108910852"
              variant="outline"
              rounded="sm"
              leftIcon={<PhoneIcon className="w-4 h-4" />}
            >
              Call Us
            </Button>
          </div>

          <AwardsCard />
        </div>

        {/* Right column: application form card */}
        <div className="relative z-20 w-full lg:w-1/2 flex lg:justify-end">
          <div className="w-full lg:max-w-[552px] flex flex-col gap-8 bg-white rounded-[20px] shadow-[0px_4px_54px_rgba(87,209,245,0.39)] px-6 py-8 sm:px-10 sm:py-10">
            <h2 className="font-heading text-[22px] sm:text-[26px] leading-[29px] text-black">
              Start Your{" "}
              <span className="text-primaryBlue font-bold">
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
