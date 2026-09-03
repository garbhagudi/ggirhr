"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Button from "components/ui/Button";

const MICROSCOPE_IMAGE = "/research-microscope.png";

const PROGRAMS = [
  "Clinical ART",
  "Embryology",
  "Obstetric Ultrasound",
  "Other",
];

const inputClasses =
  "w-full rounded-md border border-white bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20 transition-colors";

const FieldLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-base text-white/80">{children}</span>
);

const FieldError = ({ message }: { message?: string }) =>
  message ? <p className="text-sm text-red-200 mt-1">{message}</p> : null;

const Journey = () => {
  const router = useRouter();
  const path = usePathname();
  const pageVisit = router?.query?.pageVisit || path;
  const utmCampaign = router.query?.utm_campaign || "";

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      First_Name: "",
      Last_Name: "",
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

  const [load, setLoad] = useState(false);

  const onSubmit = async (data) => {
    setLoad(true);
    try {
      const response = await fetch("/api/createLeads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
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
    <section className="relative bg-[#1A97CA] overflow-hidden py-20">
      <div
        className="pointer-events-none absolute -z-0 w-[600px] h-[600px] rounded-full bg-[rgba(47,126,188,0.65)] blur-[150px] left-1/2 -translate-x-1/2 top-1/3"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -z-0 w-[320px] h-[320px] rounded-full bg-[#2790E3] blur-[150px] right-0 bottom-0"
        aria-hidden
      />

        <div className="absolute top-0 left-0 w-1/2 h-full">
          <Image
            src={MICROSCOPE_IMAGE}
            alt="Researcher examining a sample under a microscope"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      <div className="relative z-10 px-16 flex flex-col lg:flex-row gap-8 lg:gap-0 rounded-[20px] overflow-hidden shadow-2xl">
        <div className="relative w-full flex-1 h-[300px] lg:h-auto min-h-[500px] "></div>

        <div className="relative max-w-lg flex-1 w-full flex flex-col gap-8 p-6 sm:p-10">
          <div className="relative">
            <h2 className="font-heading text-[32px] sm:text-[46px] leading-tight text-white">
              Start Your <span className="font-bold">Journey</span>
            </h2>
            <Image
              src="/ribbon-wave-icon.svg"
              alt=""
              width={120}
              height={60}
              className="absolute -top-4 right-0 opacity-80 hidden sm:block"
            />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col gap-3 flex-1">
                <label htmlFor="First_Name">
                  <FieldLabel>First Name</FieldLabel>
                </label>
                <input
                  type="text"
                  id="First_Name"
                  className={inputClasses}
                  {...register("First_Name", {
                    required: "First name is required",
                  })}
                />
                <FieldError message={errors.First_Name?.message as string} />
              </div>

              <div className="flex flex-col gap-3 flex-1">
                <label htmlFor="Last_Name">
                  <FieldLabel>Last Name</FieldLabel>
                </label>
                <input
                  type="text"
                  id="Last_Name"
                  className={inputClasses}
                  {...register("Last_Name", {
                    required: "Last name is required",
                  })}
                />
                <FieldError message={errors.Last_Name?.message as string} />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="Phone">
                <FieldLabel>Mobile*</FieldLabel>
              </label>
              <div className="flex items-stretch rounded-md border border-white bg-white/10 focus-within:bg-white/20 transition-colors overflow-hidden">
                <span className="flex items-center gap-1.5 px-4 text-white border-r border-white/40">
                  <span aria-hidden>🇮🇳</span>
                  <span>+91</span>
                </span>
                <input
                  type="tel"
                  id="Phone"
                  placeholder="Enter mobile number"
                  className="w-full bg-transparent px-4 py-3 text-white placeholder:text-white/60 focus:outline-none"
                  {...register("Phone", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit mobile number",
                    },
                  })}
                />
              </div>
              <FieldError message={errors.Phone?.message as string} />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="Email">
                <FieldLabel>Email address*</FieldLabel>
              </label>
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
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="Program">
                <FieldLabel>Select a Program</FieldLabel>
              </label>
              <select
                id="Program"
                defaultValue=""
                className={`${inputClasses} appearance-none`}
                {...register("Program")}
              >
                <option value="" disabled className="text-black">
                  Choose a program
                </option>
                {PROGRAMS.map((program) => (
                  <option key={program} value={program} className="text-black">
                    {program}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="Description">
                <FieldLabel>Message</FieldLabel>
              </label>
              <textarea
                id="Description"
                rows={3}
                className={inputClasses}
                {...register("Description")}
              />
            </div>

            <Button type="submit" variant="light" fullWidth isLoading={load}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Journey;
