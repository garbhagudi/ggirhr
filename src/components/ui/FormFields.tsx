import React from "react";
import Image from "next/image";

export const COUNTRY_CODES = [
  { code: "+91", label: "India" },
  { code: "+971", label: "UAE" },
  { code: "+1", label: "USA / Canada" },
  { code: "+44", label: "UK" },
  { code: "+61", label: "Australia" },
  { code: "+65", label: "Singapore" },
];

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validatePhone = (value: string, countryCode: string) =>
  countryCode === "+91"
    ? /^[0-9]{10}$/.test(value) || "Enter a valid 10-digit mobile number"
    : /^[0-9]{6,15}$/.test(value) || "Enter a valid mobile number";

const fieldBase =
  "w-full rounded-md border border-[#D9D9D9] bg-white px-4 text-[13px] text-[#111111] " +
  "placeholder:text-gray-400 focus:outline-none focus:border-[#1DA8E1] " +
  "focus:shadow-[0px_4px_24px_#BAEFFF] transition-colors sm:py-3 sm:text-base";

export const inputClasses = `${fieldBase} h-10 sm:h-auto sm:h-[50px]`;
export const textareaClasses = `${fieldBase} h-[85px] py-2.5 sm:min-h-[85px]`;

export const Chevron = ({ className = "" }: { className?: string }) => (
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

export const FieldLabel = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`text-[16px] tracking-[-0.02em] leading-[26px] text-[#111111]/80 ${className}`}
  >
    {children}
  </span>
);

export const FieldError = ({ message }: { message?: string }) =>
  message ? <p className="text-sm text-red-500 mt-1">{message}</p> : null;

export const FieldGroup = ({
  htmlFor,
  label,
  className = "",
  labelClassName,
  children,
}: {
  htmlFor: string;
  label: React.ReactNode;
  className?: string;
  labelClassName?: string;
  children: React.ReactNode;
}) => (
  <div className={`flex flex-col gap-3 ${className}`}>
    <label htmlFor={htmlFor}>
      <FieldLabel className={labelClassName}>{label}</FieldLabel>
    </label>
    {children}
  </div>
);

type PhoneInputProps = {
  id: string;
  countryCode: string;
  selectProps: React.SelectHTMLAttributes<HTMLSelectElement> & {
    ref?: React.Ref<HTMLSelectElement>;
  };
  inputProps: React.InputHTMLAttributes<HTMLInputElement> & {
    ref?: React.Ref<HTMLInputElement>;
  };
};

// Country-code select (with the Indian flag for +91) fused to a tel input.
export const PhoneInput = ({
  id,
  countryCode,
  selectProps,
  inputProps,
}: PhoneInputProps) => (
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
        {...selectProps}
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
      id={id}
      placeholder="Enter mobile number"
      className="w-full bg-transparent px-4 text-[13px] sm:text-base sm:py-3 text-[#111111] placeholder:text-gray-400 focus:outline-none"
      {...inputProps}
    />
  </div>
);
