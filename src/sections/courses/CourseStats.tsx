import React from "react";
import SectionShell from "components/ui/SectionShell";

type Course = {
  title?: string;
  numberOfStudentIntakePerBatch?: string | null;
  numberOfBatchesPerYear?: string | null;
  duration?: string | null;
  fees?: string | null;
};

type Stat = { value: string; label: string };

// "12 Months" → { value: "12", label: "Months Duration" }; anything that
// doesn't start with a number is shown whole under "Duration".
const durationStat = (duration: string): Stat => {
  const match = duration.match(/^(\d+)\s+(.+)$/);
  return match
    ? { value: match[1], label: `${match[2]} Duration` }
    : { value: duration, label: "Duration" };
};

// All values come from the course's Hygraph record; empty fields are skipped.
const buildStats = (course: Course): Stat[] => {
  const clean = (v?: string | null) => v?.trim() || "";
  const intake = clean(course.numberOfStudentIntakePerBatch);
  const batches = clean(course.numberOfBatchesPerYear);
  const duration = clean(course.duration);
  const fees = clean(course.fees);
  const feeLabel = course.title?.trim().startsWith("Fellowship")
    ? "Fellowship Fee"
    : "Course Fee";

  return [
    intake && { value: intake, label: "Student Per Batch" },
    batches && { value: batches, label: "Batches Per Year" },
    duration && durationStat(duration),
    fees && { value: fees, label: feeLabel },
  ].filter(Boolean) as Stat[];
};

const LINE = "pointer-events-none absolute opacity-60";

// Figma: desktop one row split by vertical gradient lines; mobile 2×2 with a
// centre vertical line and a short horizontal line under each top cell.
const CourseStats = ({ course }: { course?: Course }) => {
  const stats = course ? buildStats(course) : [];
  if (stats.length === 0) return null;
  const last = stats.length - 1;

  return (
    <SectionShell
      as="section"
      aria-label="Course highlights"
      className="py-10 font-primary lg:py-16"
    >
      <div className="grid grid-cols-2 lg:flex lg:justify-between">
        {stats.map(({ value, label }, i) => {
          const mobileVertical = i % 2 === 0 && i < last;
          const mobileHorizontal = i < 2 && stats.length > 2;
          return (
            <div
              key={label}
              className="relative flex flex-col items-center py-7 text-center lg:flex-1 lg:px-6 lg:py-0"
            >
              <p className="text-[35px] font-semibold leading-none text-[#1DA8E1] sm:text-[70px]">
                {value}
              </p>
              <p className="mt-3 text-[15px] font-semibold leading-6 text-black sm:text-[20px] lg:mt-5">
                {label}
              </p>
              <span
                aria-hidden="true"
                className={`${LINE} right-0 top-1/2 h-[90px] w-px -translate-y-1/2 bg-[linear-gradient(180deg,transparent,#1DA8E1,transparent)] lg:h-[110px] ${
                  mobileVertical ? "block" : "hidden"
                } ${i < last ? "lg:block" : "lg:hidden"}`}
              />
              {mobileHorizontal && (
                <span
                  aria-hidden="true"
                  className={`${LINE} bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#1DA8E1,transparent)] lg:hidden`}
                />
              )}
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
};

export default CourseStats;
