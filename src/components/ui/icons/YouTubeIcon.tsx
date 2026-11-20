import React from 'react';
import SocialIconBase, {
  DEFAULT_SOCIAL_ICON_COLOR,
  SocialIconProps,
} from 'components/ui/icons/SocialIconBase';

/**
 * YouTubeIcon
 *
 * Monochrome YouTube play-plate glyph, recolorable via `color`. Used in the
 * footer social row (`sections/Home/ReadyToGetStarted.tsx`) and the hero
 * social rail (`sections/Home/Hero.tsx`).
 *
 * NOTE: `lib/svg` exports a *different* component of the same name — a
 * brand-colored plate (`#FF0000` + white triangle, `className`-only API)
 * used by `pages/courses/[slug].tsx`. Different glyph, different import
 * path; consolidating the two is a separate design call.
 *
 * Usage:
 *   <YouTubeIcon size={19} color="#fff" />
 */
export const YouTubeIcon = ({
  color = DEFAULT_SOCIAL_ICON_COLOR,
  ...rest
}: SocialIconProps) => (
  <SocialIconBase {...rest}>
    <path
      d='M20.6 8.2a2.5 2.5 0 0 0-1.76-1.77C17.2 6 12 6 12 6s-5.2 0-6.84.43A2.5 2.5 0 0 0 3.4 8.2 26.3 26.3 0 0 0 3 12a26.3 26.3 0 0 0 .4 3.8 2.5 2.5 0 0 0 1.76 1.77C6.8 18 12 18 12 18s5.2 0 6.84-.43a2.5 2.5 0 0 0 1.76-1.77c.28-1.24.4-2.52.4-3.8a26.3 26.3 0 0 0-.4-3.8ZM10.2 14.6V9.4l4.6 2.6-4.6 2.6Z'
      fill={color}
    />
  </SocialIconBase>
);

export default YouTubeIcon;
