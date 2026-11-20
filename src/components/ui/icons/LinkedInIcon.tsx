import React from 'react';
import SocialIconBase, {
  DEFAULT_SOCIAL_ICON_COLOR,
  SocialIconProps,
} from 'components/ui/icons/SocialIconBase';

/**
 * LinkedInIcon
 *
 * Solid LinkedIn "in" glyph. Used in the footer social row
 * (`sections/Home/ReadyToGetStarted.tsx`) and the hero social rail
 * (`sections/Home/Hero.tsx`).
 *
 * Usage:
 *   <LinkedInIcon size={19} color="#fff" />
 */
export const LinkedInIcon = ({
  color = DEFAULT_SOCIAL_ICON_COLOR,
  ...rest
}: SocialIconProps) => (
  <SocialIconBase {...rest}>
    <path
      d='M6.94 8.5H4.56V19.5H6.94V8.5ZM5.75 7.03A1.38 1.38 0 1 0 5.76 4.27a1.38 1.38 0 0 0 0 2.76ZM19.5 19.5v-6.02c0-3.22-1.72-4.72-4.02-4.72-1.85 0-2.68 1.02-3.14 1.73V8.5H9.96c.03.7 0 11 0 11h2.38v-6.14c0-.33.02-.66.12-.9.27-.66.87-1.34 1.9-1.34 1.34 0 1.87.99 1.87 2.45V19.5h2.27Z'
      fill={color}
    />
  </SocialIconBase>
);

export default LinkedInIcon;
