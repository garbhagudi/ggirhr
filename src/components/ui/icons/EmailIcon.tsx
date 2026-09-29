import React from 'react';
import SocialIconBase, {
  DEFAULT_SOCIAL_ICON_COLOR,
  SocialIconProps,
} from 'components/ui/icons/SocialIconBase';

/**
 * EmailIcon
 *
 * Solid envelope glyph (Figma) for `mailto:` links — used in the footer
 * social row (`sections/Home/ReadyToGetStarted.tsx`), the hero social rail
 * (`sections/Home/Hero.tsx`) and the Get in Touch contact lines
 * (`sections/contact/GetInTouch.tsx`).
 *
 * The Figma glyph is 17×17; it is centred in the shared 24×24 viewBox so it
 * sits at the same optical size as the other social marks.
 *
 * Usage:
 *   <EmailIcon size={19} color="#fff" />
 */
export const EmailIcon = ({
  color = DEFAULT_SOCIAL_ICON_COLOR,
  ...rest
}: SocialIconProps) => (
  <SocialIconBase {...rest}>
    <g transform='translate(3.5 3.5)'>
      <path
        d='M16.6779 6.33516C16.8074 6.23223 17 6.32852 17 6.49121V13.2812C17 14.1611 16.2861 14.875 15.4062 14.875H1.59375C0.713867 14.875 0 14.1611 0 13.2812V6.49453C0 6.32852 0.189258 6.23555 0.32207 6.33848C1.06582 6.91621 2.05195 7.65 5.43867 10.1104C6.13926 10.6217 7.32129 11.6975 8.5 11.6908C9.68535 11.7008 10.8906 10.6018 11.5646 10.1104C14.9514 7.65 15.9342 6.91289 16.6779 6.33516ZM8.5 10.625C9.27031 10.6383 10.3793 9.65547 10.9371 9.25039C15.3432 6.05293 15.6785 5.77402 16.6945 4.97715C16.8871 4.82773 17 4.59531 17 4.34961V3.71875C17 2.83887 16.2861 2.125 15.4062 2.125H1.59375C0.713867 2.125 0 2.83887 0 3.71875V4.34961C0 4.59531 0.112891 4.82441 0.305469 4.97715C1.32148 5.7707 1.65684 6.05293 6.06289 9.25039C6.6207 9.65547 7.72969 10.6383 8.5 10.625Z'
        fill={color}
      />
    </g>
  </SocialIconBase>
);

export default EmailIcon;
