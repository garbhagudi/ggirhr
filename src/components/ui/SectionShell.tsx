import React from 'react';

const cx = (...classes: Array<string | false | undefined>) =>
  classes.filter(Boolean).join(' ');

/** Full-bleed section gutters: 16px → 24px → 160px. */
export const SECTION_GUTTERS = 'px-4 sm:px-6 lg:px-40';

/** Centred, width-clamped content column. */
export const CONTENT_GUTTERS = 'px-4 sm:px-6 xl:px-0';

export type SectionShellProps =
  React.HTMLAttributes<HTMLDivElement> & {
    /** Renders a <section> instead of a <div>. */
    as?: 'div' | 'section';
    children: React.ReactNode;
  };

export const SectionShell = ({
  as: Tag = 'div',
  className,
  children,
  ...rest
}: SectionShellProps) => (
  <Tag className={cx(SECTION_GUTTERS, className)} {...rest}>
    {children}
  </Tag>
);

export type ContentContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: 'div' | 'section';
  children: React.ReactNode;
};

export const ContentContainer = ({
  as: Tag = 'div',
  className,
  children,
  ...rest
}: ContentContainerProps) => (
  <Tag
    className={cx('max-w-6xl mx-auto', CONTENT_GUTTERS, className)}
    {...rest}
  >
    {children}
  </Tag>
);

export default SectionShell;
