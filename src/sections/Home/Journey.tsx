"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Glow from "components/ui/Glow";
import RibbonWave from "components/ui/RibbonWave";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Button from "components/ui/Button";

const MICROSCOPE_IMAGE = "/Journey.png";

const PROGRAMS = [
  "Clinical ART",
  "Embryology",
  "Obstetric Ultrasound",
  "Other",
];

const COUNTRY_CODES = [
  { code: "+91", label: "India" },
  { code: "+971", label: "UAE" },
  { code: "+1", label: "USA / Canada" },
  { code: "+44", label: "UK" },
  { code: "+61", label: "Australia" },
  { code: "+65", label: "Singapore" },
];

const fieldBase =
  "w-full rounded-md border border-white bg-transparent px-4 text-[13px] text-white " +
  "placeholder:text-white/60 focus:outline-none focus:bg-[#FFFFFF61] transition-colors " +
  "sm:py-3 sm:text-base";

const inputClasses = `${fieldBase} h-10 sm:h-auto`;
const textareaClasses = `${fieldBase} h-[69px] py-2.5 sm:h-auto sm:min-h-[110px]`;

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
  <span className="text-[13px] tracking-[-0.02em] leading-[26px] text-[#B8CFDB] transition-colors group-focus-within:text-white sm:text-base sm:tracking-normal lg:leading-[51px]">
    {children}
  </span>
);

const FieldError = ({ message }: { message?: string }) =>
  message ? <p className="text-sm text-red-200 mt-1">{message}</p> : null;

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
  <div className={`group flex flex-col gap-1.5 sm:gap-3 ${className}`}>
    <label htmlFor={htmlFor}>
      <FieldLabel>{label}</FieldLabel>
    </label>
    {children}
  </div>
);

const Journey = () => {
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
      Program: "",
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
      responseData?.data[0]?.code === "SUCCESS" &&
        router.push("/thank-you.html");
    } catch (err) {
      setLoad(false);
      console.log(err);
    }
  };

  return (
    <section className="relative bg-[#1D94CC] min-h-[500px] overflow-hidden pt-0 pb-[60px] lg:py-20">
      <Glow className="-z-0 w-[320px] h-[320px] sm:w-[600px] sm:h-[600px] bg-[rgba(47,126,188,0.65)] blur-[150px] left-1/2 -translate-x-1/2 top-1/3" />
      <Glow className="-z-0 w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] bg-[#2790E3] blur-[150px] right-0 bottom-0" />

      <div className="relative w-full h-[440px] sm:h-[280px] lg:absolute lg:top-0 lg:left-0 lg:w-1/2 lg:h-full">
        <Image
          src={MICROSCOPE_IMAGE}
          alt="Researcher examining a sample under a microscope"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <RibbonWave
        width={300}
        height={138}
        className="absolute top-10 right-4 w-[300px] opacity-80 hidden sm:block"
      />
      <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-0 ">
        <div className="hidden lg:block relative w-1/2"></div>
        <div className="relative lg:ml-20 max-w-xl flex-1 w-full flex flex-col gap-5 sm:gap-6 lg:gap-8 px-5 pt-6 pb-0 sm:p-10">
          <div className="relative">
            <h2 className="font-heading text-[23px] lg:text-[46px] leading-tight text-white">
              Start Your <span className="font-bold">Journey</span>
            </h2>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 sm:gap-6"
          >
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
              <FieldGroup
                htmlFor="First_Name"
                label="First Name"
                className="flex-1"
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
                className="flex-1"
              >
                <input
                  type="text"
                  id="Last_Name"
                  className={inputClasses}
                  {...register("Last_Name", {
                    required: "Last name is required",
                  })}
                />
                <FieldError message={errors.Last_Name?.message as string} />
              </FieldGroup>
            </div>

            <FieldGroup htmlFor="Phone" label="Mobile*">
              <div className="flex items-stretch h-10 sm:h-auto rounded-md border border-white bg-transparent focus-within:bg-[#FFFFFF61] transition-colors overflow-hidden">
                <div className="relative flex items-center gap-1.5 pl-3 pr-5 border-r border-white/40 shrink-0">
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
                    className="appearance-none bg-transparent text-[13px] sm:text-base text-white focus:outline-none cursor-pointer"
                    {...register("Country_Code")}
                  >
                    {COUNTRY_CODES.map(({ code, label }) => (
                      <option
                        key={code}
                        value={code}
                        title={label}
                        className="text-black"
                      >
                        {code}
                      </option>
                    ))}
                  </select>
                  <Chevron className="absolute right-1.5 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
                </div>
                <input
                  type="tel"
                  id="Phone"
                  placeholder="Enter mobile number"
                  className="w-full bg-transparent px-4 text-[13px] sm:text-base sm:py-3 text-white placeholder:text-white/60 focus:outline-none"
                  {...register("Phone", {
                    required: "Mobile number is required",
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

            <FieldGroup htmlFor="Program" label="Select a Program">
              <div className="relative">
                <select
                  id="Program"
                  defaultValue=""
                  className={`${inputClasses} appearance-none pr-10`}
                  {...register("Program")}
                >
                  <option value="" disabled className="text-black">
                    Choose a program
                  </option>
                  {PROGRAMS.map((program) => (
                    <option
                      key={program}
                      value={program}
                      className="text-black"
                    >
                      {program}
                    </option>
                  ))}
                </select>
                <Chevron className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
              </div>
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
              variant="light"
              rounded="md"
              fullWidth
              isLoading={load}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Journey;
