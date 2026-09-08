import React from 'react';
import SocialIconBase, {
  DEFAULT_SOCIAL_ICON_COLOR,
  SocialIconProps,
} from 'components/ui/icons/SocialIconBase';

/**
 * FacebookIcon
 *
 * Solid Facebook "f" glyph. Used in the footer social row
 * (`sections/Home/ReadyToGetStarted.tsx`) and the hero social rail
 * (`sections/Home/Hero.tsx`).
 *
 * Usage:
 *   <FacebookIcon size={19} color="#fff" />
 */
export const FacebookIcon = ({
  color = DEFAULT_SOCIAL_ICON_COLOR,
  ...rest
}: SocialIconProps) => (
  <SocialIconBase {...rest}>
    <path
      d='M14.5 7.9h1.9V4.9c-.33-.04-1.47-.14-2.8-.14-2.77 0-4.67 1.7-4.67 4.82v2.56H6V15.5h3.1V21h3.44v-5.5h2.98l.47-3.35H12.5V9.9c0-.97.27-1.99 2.15-1.99Z'
      fill={color}
    />
  </SocialIconBase>
);

export default FacebookIcon;
