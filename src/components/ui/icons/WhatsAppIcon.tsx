import React from 'react';
import SocialIconBase, {
  DEFAULT_SOCIAL_ICON_COLOR,
  SocialIconProps,
} from 'components/ui/icons/SocialIconBase';

/**
 * WhatsAppIcon
 *
 * Outlined WhatsApp handset-in-speech-bubble glyph. Used in three places:
 * the footer social row and the "WhatsApp" CTA button (both in
 * `sections/Home/ReadyToGetStarted.tsx`, at `#fff` and `#4CAF50`
 * respectively) and the hero social rail (`sections/Home/Hero.tsx`).
 *
 * Usage:
 *   <WhatsAppIcon size={20} color="#4CAF50" />
 */
export const WhatsAppIcon = ({
  color = DEFAULT_SOCIAL_ICON_COLOR,
  ...rest
}: SocialIconProps) => (
  <SocialIconBase {...rest}>
    <path
      d='M12.02 3.5a8.42 8.42 0 0 0-7.2 12.77L3.5 20.5l4.36-1.28a8.42 8.42 0 1 0 4.16-15.72Zm0 1.66a6.75 6.75 0 0 1 5.7 10.36l-.13.2.63 2.34-2.4-.63-.2.12a6.75 6.75 0 1 1-3.6-12.4Zm-3.42 3.5c-.17 0-.44.06-.67.32-.23.26-.87.85-.87 2.07 0 1.22.9 2.4 1.02 2.56.13.17 1.75 2.68 4.24 3.65 2.08.82 2.5.66 2.95.62.45-.04 1.44-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.23-.16-.48-.28-.26-.13-1.5-.74-1.74-.82-.23-.09-.4-.13-.57.13-.17.26-.65.82-.8 1-.14.16-.28.18-.53.06-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.28-1.51-1.43-1.77-.14-.26-.02-.4.11-.53.12-.12.26-.3.4-.46.13-.16.17-.26.26-.44.08-.17.04-.32-.02-.45-.06-.13-.57-1.4-.79-1.9-.2-.5-.42-.43-.57-.43h-.55Z'
      fill={color}
    />
  </SocialIconBase>
);

export default WhatsAppIcon;
