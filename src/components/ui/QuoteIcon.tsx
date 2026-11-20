import React from 'react';

/**
 * QuoteIcon
 *
 * The decorative double-quote mark used on testimonial cards (see
 * `sections/Home/Voices.tsx`). Inlined as SVG (source: public/icons/quote-icon.svg)
 * so callers can recolor and resize it via props instead of being stuck with
 * a static asset's baked-in fill.
 *
 * Usage:
 *   <QuoteIcon />
 *   <QuoteIcon size={40} color="#1DA8E1" className="opacity-40" />
 */

const VIEWBOX_WIDTH = 47;
const VIEWBOX_HEIGHT = 33;

export type QuoteIconProps = Omit<React.SVGAttributes<SVGSVGElement>, 'width' | 'height'> & {
  /** Width in px; height scales to match the icon's natural aspect ratio. */
  size?: number;
  color?: string;
};

export const QuoteIcon = ({
  size = VIEWBOX_WIDTH,
  color = '#4AC9FD',
  className,
  ...rest
}: QuoteIconProps) => (
  <svg
    width={size}
    height={(VIEWBOX_HEIGHT / VIEWBOX_WIDTH) * size}
    viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...rest}
  >
    <path
      d="M39.1881 12.6801C38.4361 12.4936 38.1096 11.6135 38.5786 10.9961C39.7279 9.48266 42.4163 6.9501 44.9162 5.44264C45.8369 4.90931 46.4187 3.94061 46.4187 2.92294C46.4187 0.839604 44.2864 -0.614428 42.3485 0.257793C36.7975 2.69833 26.6396 9.69935 26.4115 22.1227C26.3047 27.9606 30.9671 32.9584 36.8059 32.9154C42.4875 32.8738 47 28.2871 47 22.6436C47 17.8051 43.6675 13.7908 39.1881 12.6801ZM12.737 12.6782C11.9825 12.4931 11.655 11.6115 12.1245 10.9936C13.2743 9.48068 15.9617 6.94911 18.4606 5.44264C19.3813 4.90931 19.9631 3.94061 19.9631 2.92294C19.9631 0.839604 17.8308 -0.614428 15.8929 0.257793C10.3202 2.729 0 9.85173 0 22.5952C0 28.3128 4.60303 32.9154 10.2722 32.9154C15.9414 32.9154 20.5924 28.3128 20.5924 22.5952C20.5924 17.7972 17.2554 13.7849 12.737 12.6782Z"
      fill={color}
    />
  </svg>
);

export default QuoteIcon;
