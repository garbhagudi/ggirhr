import React from 'react';
import {
  EMAIL_HREF,
  FACEBOOK_HREF,
  LINKEDIN_HREF,
  TWITTER_HREF,
  WHATSAPP_HREF,
  YOUTUBE_HREF,
} from 'lib/contact';
import { SocialIconProps } from 'components/ui/icons/SocialIconBase';
import EmailIcon from 'components/ui/icons/EmailIcon';
import FacebookIcon from 'components/ui/icons/FacebookIcon';
import LinkedInIcon from 'components/ui/icons/LinkedInIcon';
import WhatsAppIcon from 'components/ui/icons/WhatsAppIcon';
import TwitterIcon from 'components/ui/icons/TwitterIcon';
import YouTubeIcon from 'components/ui/icons/YouTubeIcon';

export type SocialNetwork = {
  /** Doubles as the React key and the wrapping link's accessible name. */
  name: string;
  href: string;
  Icon: React.ComponentType<SocialIconProps>;
};

/**
 * The social row, in display order. Shared by the home-page footer
 * (`sections/Home/ReadyToGetStarted.tsx`) and the hero social rail
 * (`sections/Home/Hero.tsx`) so the two can't drift in order or URL.
 *
 * Callers own the wrapper element and pass `size`/`color` to suit their
 * surface — white glyphs in blue circles in the footer, grey glyphs in the
 * hero rail.
 */
export const SOCIAL_NETWORKS: readonly SocialNetwork[] = [
  { name: 'Email', href: EMAIL_HREF, Icon: EmailIcon },
  { name: 'Facebook', href: FACEBOOK_HREF, Icon: FacebookIcon },
  { name: 'LinkedIn', href: LINKEDIN_HREF, Icon: LinkedInIcon },
  { name: 'WhatsApp', href: WHATSAPP_HREF, Icon: WhatsAppIcon },
  { name: 'Twitter', href: TWITTER_HREF, Icon: TwitterIcon },
  { name: 'YouTube', href: YOUTUBE_HREF, Icon: YouTubeIcon },
];
