import React from 'react';
import SocialIconBase, {
  DEFAULT_SOCIAL_ICON_COLOR,
  SocialIconProps,
} from 'components/ui/icons/SocialIconBase';

/**
 * TwitterIcon
 *
 * The X-era Twitter glyph. Named "Twitter" (not "X") to stay consistent
 * with the `twitter.com/ggirhr` URL in `lib/contact` and the accessible
 * name screen-reader users already hear — renaming is a product call, not
 * a refactor.
 *
 * Used in the footer social row (`sections/Home/ReadyToGetStarted.tsx`)
 * and the hero social rail (`sections/Home/Hero.tsx`).
 *
 * Usage:
 *   <TwitterIcon size={19} color="#fff" />
 */
export const TwitterIcon = ({
  color = DEFAULT_SOCIAL_ICON_COLOR,
  ...rest
}: SocialIconProps) => (
  <SocialIconBase {...rest}>
    <path
      d='M17.5 5.5h2.4l-5.24 6 6.16 8h-4.83l-3.78-4.95L7.9 19.5H5.5l5.6-6.4-5.9-7.6h4.95l3.42 4.53L17.5 5.5Zm-.85 12.6h1.34L7.4 6.83H5.96l10.7 11.27Z'
      fill={color}
    />
  </SocialIconBase>
);

export default TwitterIcon;
