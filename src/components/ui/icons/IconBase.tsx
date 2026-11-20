import React from 'react';

/**
 * IconBase
 *
 * Generic <svg> shell for glyphs exported straight from Figma with their own
 * (possibly non-square) viewBox — e.g. the Contact support icons
 * (ChatSupportIcon 36×36, CallSupportIcon 30×30, CounsellingIcon 40×43).
 * `SocialIconBase` stays the shell for the square 24×24 social marks.
 *
 * `size` sets the rendered width; height follows the viewBox aspect ratio so
 * a tall glyph like CounsellingIcon never distorts. When sizing from Tailwind
 * instead, pass `className="w-… h-auto"` — CSS wins over the attributes.
 *
 * `aria-hidden` defaults to true: these icons always sit next to a visible
 * label. `...rest` is spread after it so a caller can override.
 */

/** Fallback glyph color — the Figma icons are white on a blue disc. */
export const DEFAULT_ICON_COLOR = '#FFFFFF';

export type IconProps = Omit<
  React.SVGAttributes<SVGSVGElement>,
  'width' | 'height' | 'viewBox'
> & {
  /** Rendered width in px; height is derived from the viewBox. */
  size?: number;
  /** Any CSS color. Pass `"currentColor"` to drive it from a Tailwind `text-*` class. */
  color?: string;
};

type IconBaseProps = Omit<IconProps, 'color'> & {
  viewBoxWidth: number;
  viewBoxHeight: number;
  children: React.ReactNode;
};

export const IconBase = ({
  viewBoxWidth,
  viewBoxHeight,
  size = viewBoxWidth,
  className,
  children,
  ...rest
}: IconBaseProps) => (
  <svg
    width={size}
    height={(size * viewBoxHeight) / viewBoxWidth}
    viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    aria-hidden='true'
    {...rest}
  >
    {children}
  </svg>
);

export default IconBase;
