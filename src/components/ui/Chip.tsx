import React, { forwardRef } from 'react';

export type ChipVariant = 'pink' | 'blue' | 'dark' | 'outline';
export type ChipSize = 'sm' | 'md' | 'lg';

export type ChipProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> & {
  variant?: ChipVariant;
  size?: ChipSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

const cx = (...classes: Array<string | false | undefined>) =>
  classes.filter(Boolean).join(' ');

const VARIANT_CLASSES: Record<ChipVariant, string> = {
  pink: 'bg-white text-[#BB2649] shadow-[0px_4px_14px_rgba(0,0,0,0.1)]',
  blue: 'bg-white text-[#1DA8E1] shadow-[0px_4px_14px_rgba(0,0,0,0.1)]',
  dark: 'bg-brandDark text-white shadow-[0px_4px_14px_rgba(0,0,0,0.1)]',
  outline: 'bg-transparent text-brandDark border border-brandDark/20',
};

const SIZE_CLASSES: Record<ChipSize, string> = {
  sm: 'text-xs px-3 py-1.5 gap-1.5',
  md: 'text-xs px-4 py-1.5 gap-2 tracking-widest sm:text-[15px] sm:leading-normal sm:py-2 sm:tracking-normal',
  lg: 'text-base px-5 py-4 gap-2.5',
};

const BASE_CLASSES =
  'inline-flex flex-row items-center justify-center w-fit rounded-[70px] font-bold';

export const Chip = forwardRef<HTMLDivElement, ChipProps>((props, ref) => {
  const {
    variant = 'pink',
    size = 'md',
    leftIcon,
    rightIcon,
    className,
    children,
    ...rest
  } = props;

  return (
    <div
      ref={ref}
      className={cx(
        BASE_CLASSES,
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className
      )}
      {...rest}
    >
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </div>
  );
});

Chip.displayName = 'Chip';

export default Chip;
