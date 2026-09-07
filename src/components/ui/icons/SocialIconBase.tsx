import React from 'react';

/**
 * SocialIconBase
 *
 * Shared <svg> shell for the per-network social icons in this folder
 * (EmailIcon, FacebookIcon, LinkedInIcon, WhatsAppIcon, TwitterIcon,
 * YouTubeIcon). Every glyph is a square 24x24 viewBox, so height tracks
 * `size` exactly — unlike `components/ui/QuoteIcon`, no aspect-ratio math
 * is needed here.
 *
 * Each icon file supplies only its own <path> as children, which is why
 * the one odd glyph out — Email, the only stroke-based mark — needs no
 * special casing in this file.
 *
 * `aria-hidden` defaults to true: these icons are always paired with an
 * accessible name on the wrapping <a>/<button>. `...rest` is spread after
 * it so a caller can override.
 */

export const SOCIAL_ICON_VIEWBOX = 24;

/** Fallback glyph color — readable on the light backgrounds this site uses. */
export const DEFAULT_SOCIAL_ICON_COLOR = '#666666';

export type SocialIconProps = Omit<
  React.SVGAttributes<SVGSVGElement>,
  'width' | 'height' | 'viewBox'
> & {
  /** Width & height in px (the glyphs are square). */
  size?: number;
  /** Any CSS color. Pass `"currentColor"` to drive it from a Tailwind `text-*` class. */
  color?: string;
};

type SocialIconBaseProps = Omit<SocialIconProps, 'color'> & {
  children: React.ReactNode;
};

export const SocialIconBase = ({
  size = SOCIAL_ICON_VIEWBOX,
  className,
  children,
  ...rest
}: SocialIconBaseProps) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${SOCIAL_ICON_VIEWBOX} ${SOCIAL_ICON_VIEWBOX}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    aria-hidden='true'
    {...rest}
  >
    {children}
  </svg>
);

export default SocialIconBase;
