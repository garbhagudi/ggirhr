import React from "react";
import Link from "next/link";
import ChevronDownIcon from "components/ui/icons/ChevronDownIcon";
import { blogsHref } from "lib/blogs";

const WINDOW = 5;

// Figma: mobile Frame 2131330284 ~24×23 boxes, 6px apart (sized by padding);
// desktop Frame 2131330285 42×40 boxes, 10px apart. Page count comes from
// Hygraph via `total`.
const BOX =
  "flex min-w-[24px] items-center justify-center rounded-[4px] px-[7px] py-[4.66px] text-[11.66px] font-normal leading-[14px] transition-colors sm:h-10 sm:w-[42px] sm:min-w-0 sm:rounded-[6px] sm:px-3 sm:py-2 sm:text-[20px] sm:leading-6";
const IDLE =
  "border border-[#C2C2C2] text-[#979797] hover:border-primaryBlue hover:text-primaryBlue";
const ACTIVE = "bg-primaryBlue text-[#F1F1F1]";
const DISABLED = `${IDLE} pointer-events-none opacity-50`;

type LinkTarget = { href: string; shallow?: boolean; scroll?: boolean };

// Up to WINDOW page numbers centred on `current`, clamped to [1, total].
const pageWindow = (current: number, total: number) => {
  const size = Math.min(WINDOW, total);
  const start = Math.min(
    Math.max(1, current - Math.floor(size / 2)),
    total - size + 1,
  );
  return Array.from({ length: size }, (_, i) => start + i);
};

const Arrow = ({
  target,
  label,
  children,
}: {
  target: LinkTarget | null;
  label: string;
  children: React.ReactNode;
}) =>
  target ? (
    <Link {...target} aria-label={label} className={`${BOX} ${IDLE}`}>
      {children}
    </Link>
  ) : (
    <span aria-hidden="true" className={`${BOX} ${DISABLED}`}>
      {children}
    </span>
  );

const Pagination = ({
  current,
  total,
  query,
}: {
  current: number;
  total: number;
  query?: string;
}) => {
  if (total <= 1) return null;

  // Search paging is shallow and keeps the scroll position; list pages need
  // their own static data.
  const link = (n: number): LinkTarget => ({
    href: blogsHref(n, query),
    ...(query ? { shallow: true, scroll: false } : {}),
  });

  return (
    <nav
      aria-label="Blog pages"
      className="flex items-stretch justify-center gap-[6px] py-10 sm:gap-[10px] sm:py-16"
    >
      <Arrow
        target={current > 1 ? link(current - 1) : null}
        label="Previous page"
      >
        <ChevronDownIcon
          size={14}
          aria-hidden="true"
          className="h-auto w-2 rotate-90 sm:w-[14px]"
        />
      </Arrow>
      {pageWindow(current, total).map((n) => (
        <Link
          key={n}
          {...link(n)}
          aria-current={n === current ? "page" : undefined}
          className={`${BOX} ${n === current ? ACTIVE : IDLE}`}
        >
          {n}
        </Link>
      ))}
      <Arrow
        target={current < total ? link(current + 1) : null}
        label="Next page"
      >
        <ChevronDownIcon
          size={14}
          aria-hidden="true"
          className="h-auto w-2 -rotate-90 sm:w-[14px]"
        />
      </Arrow>
    </nav>
  );
};

export default Pagination;
