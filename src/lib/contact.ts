/**
 * Canonical GGIRHR contact & social URLs.
 *
 * Single source of truth, so the home-page footer
 * (`sections/Home/ReadyToGetStarted.tsx`), the hero social rail
 * (`sections/Home/Hero.tsx`) and — in a follow-up —
 * `components/footer/footer.tsx` + `sections/Home/Experts.tsx` can't drift
 * apart. Deliberately React-free: the `react-social-icons` consumers need
 * these URLs without pulling in six icon components.
 */

// `tel:+919108910852` and the WhatsApp `phone=919108910852` are the SAME
// number in two formats. Kept adjacent, and spelled out rather than derived
// from a shared const (the `+` prefix difference makes the derivation harder
// to read than the duplication), so a number change updates both.
export const CALL_US_HREF = "tel:+919108910852";
export const WHATSAPP_HREF =
  "https://api.whatsapp.com/send/?phone=919108910852&text=Hi.";

export const EMAIL_HREF = "mailto:training@ggirhr.com";
export const FACEBOOK_HREF = "https://www.facebook.com/GGIRHR/";
export const LINKEDIN_HREF =
  "https://www.linkedin.com/company/garbhagudi-institute-of-reproductive-health-research/";
export const TWITTER_HREF = "https://twitter.com/ggirhr";
export const YOUTUBE_HREF =
  "https://www.youtube.com/channel/UCPWVap8s4REIDwqYpHq0pew";
