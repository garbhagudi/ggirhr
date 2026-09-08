import React, { forwardRef } from 'react';
import Link from 'next/link';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'light'
  | 'muted';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'inline' | 'icon-sm' | 'icon-md';
export type ButtonRounded = 'full' | 'md' | 'sm';

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: ButtonRounded;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
};

// Renders a <Link> when `href` is passed, a <button> otherwise — same API either way.
type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const cx = (...classes: Array<string | false | undefined>) =>
  classes.filter(Boolean).join(' ');

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-[#1DA8E1] text-white shadow-[0px_4px_14px_rgba(0,0,0,0.1)] hover:bg-[#1998cd] active:bg-[#1687b8]',
  secondary:
    'bg-brandDark text-white shadow-[0px_4px_14px_rgba(0,0,0,0.1)] hover:bg-black active:bg-black',
  outline:
    'bg-transparent text-[#1DA8E1] border sm:border-2 border-[#1DA8E1] hover:bg-[#1DA8E1]/10 active:bg-[#1DA8E1]/20',
  ghost:
    'bg-transparent text-[#1DA8E1] hover:bg-[#1DA8E1]/10 active:bg-[#1DA8E1]/20 shadow-none',
  link:
    'bg-transparent text-[#1DA8E1] underline shadow-none hover:opacity-70 active:opacity-80',
  light:
    'bg-white text-[#1DA8E1] shadow-[0px_4px_14px_rgba(0,0,0,0.1)] hover:bg-gray-50 active:bg-gray-100',
  // The grey secondary CTA from the About Us mock — same at every breakpoint.
  muted:
    'bg-[#E0E0E0] text-black border border-[#BEB5B5] hover:bg-[#D5D5D5] active:bg-[#CACACA]',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'text-[13px] leading-5 px-4 py-2 gap-2 sm:text-sm',
  md: 'text-[13px] leading-5 px-4 py-2.5 gap-2 sm:text-base sm:px-6 sm:py-3.5 sm:gap-2.5',
  lg: 'text-lg px-8 py-4 gap-3',
  inline: 'p-0 gap-1',
  'icon-sm': 'w-[31px] h-[31px] p-0 gap-0 shrink-0 sm:w-9 sm:h-9',
  'icon-md': 'w-11 h-11 p-0 gap-0 shrink-0',
};

const ROUNDED_CLASSES: Record<ButtonRounded, string> = {
  full: 'rounded-full',
  md: 'rounded-md',
  sm: 'rounded sm:rounded-md',
};

const BASE_CLASSES =
  'inline-flex flex-row items-center justify-center font-semibold ' +
  'transition-colors duration-200 focus:outline-none focus-visible:ring-2 ' +
  'focus-visible:ring-[#1DA8E1] focus-visible:ring-offset-2 ' +
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

const Spinner = () => (
  <svg
    className='h-4 w-4 animate-spin'
    viewBox='0 0 24 24'
    fill='none'
    aria-hidden='true'
  >
    <circle
      className='opacity-25'
      cx='12'
      cy='12'
      r='10'
      stroke='currentColor'
      strokeWidth='4'
    />
    <path
      className='opacity-75'
      fill='currentColor'
      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
    />
  </svg>
);

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    variant = 'primary',
    size = 'md',
    rounded = 'full',
    fullWidth = false,
    leftIcon,
    rightIcon,
    isLoading = false,
    className,
    children,
    ...rest
  } = props;

  const classes = cx(
    BASE_CLASSES,
    ROUNDED_CLASSES[rounded],
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    fullWidth && 'w-full',
    className
  );

  const content = (
    <>
      {isLoading ? <Spinner /> : leftIcon}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </>
  );

  if ('href' in props && props.href) {
    const { href, ...anchorRest } = rest as Omit<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      keyof BaseProps
    > & { href: string };
    return (
      <Link
        href={props.href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        aria-disabled={isLoading || undefined}
        {...anchorRest}
      >
        {content}
      </Link>
    );
  }

  const buttonRest = rest as Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    keyof BaseProps
  >;

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={buttonRest.type ?? 'button'}
      className={classes}
      disabled={isLoading || buttonRest.disabled}
      {...buttonRest}
    >
      {content}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
