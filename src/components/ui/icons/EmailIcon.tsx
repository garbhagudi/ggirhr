import React from 'react';
import SocialIconBase, {
  DEFAULT_SOCIAL_ICON_COLOR,
  SocialIconProps,
} from 'components/ui/icons/SocialIconBase';

/**
 * EmailIcon
 *
 * Envelope glyph for the `mailto:` contact link — used in the footer social
 * row (`sections/Home/ReadyToGetStarted.tsx`) and the hero social rail
 * (`sections/Home/Hero.tsx`).
 *
 * The only stroke-based mark in this folder (the other five networks are
 * solid fills), so `color` drives `stroke` rather than `fill` here.
 *
 * Usage:
 *   <EmailIcon size={19} color="#fff" />
 */
export const EmailIcon = ({
  color = DEFAULT_SOCIAL_ICON_COLOR,
  ...rest
}: SocialIconProps) => (
  <SocialIconBase {...rest}>
    <path
      d='M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11Zm2.06.3 6.6 4.95a.6.6 0 0 0 .68 0l6.6-4.95'
      fill='none'
      stroke={color}
      strokeWidth='1.6'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </SocialIconBase>
);

export default EmailIcon;
