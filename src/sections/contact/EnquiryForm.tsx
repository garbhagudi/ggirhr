"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Button from "components/ui/Button";
import {
  EMAIL_PATTERN,
  FieldError,
  FieldGroup,
  PhoneInput,
  inputClasses,
  validatePhone,
} from "components/ui/FormFields";

// Same lead payload as `components/Form.tsx` and the Fellowship
// `ApplicationForm`, restyled to the Contact page Figma card.
const EnquiryForm = () => {
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
      Last_Name: "",
      Country_Code: "+91",
      Phone: "",
      Email: "",
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
    <div className="flex flex-col gap-6 rounded-[20px] bg-white px-5 py-6 shadow-[0px_4px_54px_rgba(87,209,245,0.23)] sm:gap-[29px] sm:p-10">
      <h3 className="text-[22px] leading-[29px] text-black sm:text-[26px]">
        GGIRHR{" "}
        <span className="font-bold text-primaryBlue">Enquiry Form</span>
      </h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-5 sm:gap-[29px]"
      >
        <FieldGroup htmlFor="Last_Name" label="Full Name">
          <input
            type="text"
            id="Last_Name"
            className={inputClasses}
            {...register("Last_Name", {
              required: "Full name is required",
            })}
          />
          <FieldError message={errors.Last_Name?.message as string} />
        </FieldGroup>

        <FieldGroup htmlFor="Phone" label="Phone*">
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

        <FieldGroup htmlFor="Email" label="Email address*">
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

        <div className="flex flex-col items-center gap-4">
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
          <button
            type="button"
            onClick={() => reset()}
            className="text-sm leading-[26px] tracking-[-0.02em] text-[#111111]/80 underline"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
