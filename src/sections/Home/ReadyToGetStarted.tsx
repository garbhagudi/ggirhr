import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "components/ui/Button";

const ABOUT_LINKS = [
  { name: "Vision & Mission", href: "/about/mission-and-vision" },
  { name: "Leadership", href: "/about/leadership" },
  { name: "Awards & Accolades", href: "/about/awards-and-accolades" },
];

const SUPPORT_LINKS = [
  { name: "Courses", href: "/courses" },
  { name: "CMEs", href: "/events" },
  { name: "Contact Us", href: "/gg-care" },
  { name: "Career", href: "https://www.garbhagudi.com/careers" },
];

const LEGAL_LINKS = [{ name: "Privacy Policy", href: "/legal/privacy-policy" }];

const CALL_US_HREF = "tel:+919108910852";
const WHATSAPP_HREF = "https://api.whatsapp.com/send/?phone=919108910852&text=Hi.";

// Small circular social icon buttons. Glyphs are plain inline SVGs (no
// dependency) following the inline-icon convention used by QuoteIcon.
const SOCIAL_LINKS: { name: string; href: string; path: React.ReactNode }[] = [
  {
    name: "Email",
    href: "mailto:training@ggirhr.com",
    path: (
      <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11Zm2.06.3 6.6 4.95a.6.6 0 0 0 .68 0l6.6-4.95" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/GGIRHR/",
    path: (
      <path d="M14.5 7.9h1.9V4.9c-.33-.04-1.47-.14-2.8-.14-2.77 0-4.67 1.7-4.67 4.82v2.56H6V15.5h3.1V21h3.44v-5.5h2.98l.47-3.35H12.5V9.9c0-.97.27-1.99 2.15-1.99Z" fill="#fff" />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/garbhagudi-institute-of-reproductive-health-research/",
    path: (
      <path d="M6.94 8.5H4.56V19.5H6.94V8.5ZM5.75 7.03A1.38 1.38 0 1 0 5.76 4.27a1.38 1.38 0 0 0 0 2.76ZM19.5 19.5v-6.02c0-3.22-1.72-4.72-4.02-4.72-1.85 0-2.68 1.02-3.14 1.73V8.5H9.96c.03.7 0 11 0 11h2.38v-6.14c0-.33.02-.66.12-.9.27-.66.87-1.34 1.9-1.34 1.34 0 1.87.99 1.87 2.45V19.5h2.27Z" fill="#fff" />
    ),
  },
  {
    name: "WhatsApp",
    href: WHATSAPP_HREF,
    path: (
      <path d="M12.02 3.5a8.42 8.42 0 0 0-7.2 12.77L3.5 20.5l4.36-1.28a8.42 8.42 0 1 0 4.16-15.72Zm0 1.66a6.75 6.75 0 0 1 5.7 10.36l-.13.2.63 2.34-2.4-.63-.2.12a6.75 6.75 0 1 1-3.6-12.4Zm-3.42 3.5c-.17 0-.44.06-.67.32-.23.26-.87.85-.87 2.07 0 1.22.9 2.4 1.02 2.56.13.17 1.75 2.68 4.24 3.65 2.08.82 2.5.66 2.95.62.45-.04 1.44-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.23-.16-.48-.28-.26-.13-1.5-.74-1.74-.82-.23-.09-.4-.13-.57.13-.17.26-.65.82-.8 1-.14.16-.28.18-.53.06-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.28-1.51-1.43-1.77-.14-.26-.02-.4.11-.53.12-.12.26-.3.4-.46.13-.16.17-.26.26-.44.08-.17.04-.32-.02-.45-.06-.13-.57-1.4-.79-1.9-.2-.5-.42-.43-.57-.43h-.55Z" fill="#fff" />
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ggirhr",
    path: (
      <path d="M17.5 5.5h2.4l-5.24 6 6.16 8h-4.83l-3.78-4.95L7.9 19.5H5.5l5.6-6.4-5.9-7.6h4.95l3.42 4.53L17.5 5.5Zm-.85 12.6h1.34L7.4 6.83H5.96l10.7 11.27Z" fill="#fff" />
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCPWVap8s4REIDwqYpHq0pew",
    path: (
      <path d="M20.6 8.2a2.5 2.5 0 0 0-1.76-1.77C17.2 6 12 6 12 6s-5.2 0-6.84.43A2.5 2.5 0 0 0 3.4 8.2 26.3 26.3 0 0 0 3 12a26.3 26.3 0 0 0 .4 3.8 2.5 2.5 0 0 0 1.76 1.77C6.8 18 12 18 12 18s5.2 0 6.84-.43a2.5 2.5 0 0 0 1.76-1.77c.28-1.24.4-2.52.4-3.8a26.3 26.3 0 0 0-.4-3.8ZM10.2 14.6V9.4l4.6 2.6-4.6 2.6Z" fill="#fff" />
    ),
  },
];

// Underlined column heading, mirroring the "Line 10" rule under each label
// in the Figma frame.
const ColumnHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="inline-block text-lg font-semibold text-black pb-3 border-b-2 border-black">
    {children}
  </h3>
);

// Thin heartbeat/pulse squiggle flanking the copyright line, matching the
// reference design's Vector 29/30. Mirrored via `scale-x-[-1]` on one side.
const PulseLine = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 20"
    preserveAspectRatio="none"
    className={`h-4 w-full ${className}`}
    aria-hidden="true"
  >
    <path
      d="M0 10H70L78 2L86 18L94 10H200"
      fill="none"
      stroke="#172A64"
      strokeWidth="1.2"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);

const FooterLinkList = ({
  links,
}: {
  links: { name: string; href: string }[];
}) => (
  <ul className="mt-4 space-y-3">
    {links.map((item) => (
      <li key={item.name}>
        <Link
          href={item.href}
          className="text-black/80 text-sm hover:text-[#1DA8E1] transition-colors"
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
);

// "Ready to get started?" CTA banner + footer. Rendered only on the Home
// page in place of the global <Footer /> (see _app.tsx).
const ReadyToGetStarted = () => {
  return (
    <footer className="relative overflow-hidden bg-white pt-16 pb-10">
      {/* Decorative blurred glows, positioned per Figma's four corner Ellipses */}
      <div className="absolute w-[454px] h-[454px] -right-10 -top-16 rounded-full bg-[rgba(165,220,243,0.91)] blur-[102px] pointer-events-none" />
      <div className="absolute w-[454px] h-[454px] -left-32 top-64 rounded-full bg-[rgba(165,220,243,0.83)] blur-[102px] pointer-events-none" />
      <div className="absolute w-[454px] h-[454px] -left-32 -top-24 rounded-full bg-[rgba(165,220,243,0.43)] blur-[102px] pointer-events-none" />
      <div className="absolute w-[454px] h-[454px] -right-10 top-64 rounded-full bg-[rgba(165,220,243,0.48)] blur-[102px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 xl:px-0">
        {/* CTA row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-[32px] sm:text-[46px] leading-tight font-normal text-black">
              Ready to get <span className="font-bold text-[#1DA8E1]">started?</span>
            </h2>
            <p className="mt-2 text-black text-base sm:text-lg">
              We&apos;re here to provide information, advice, support.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button href={CALL_US_HREF} variant="primary" size="md" rounded="md">
              Call Us
            </Button>
            <Button
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="md"
              rounded="md"
              className="!border-black !text-black hover:!bg-black/5"
              leftIcon={
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12.02 3.5a8.42 8.42 0 0 0-7.2 12.77L3.5 20.5l4.36-1.28a8.42 8.42 0 1 0 4.16-15.72Zm0 1.66a6.75 6.75 0 0 1 5.7 10.36l-.13.2.63 2.34-2.4-.63-.2.12a6.75 6.75 0 1 1-3.6-12.4Zm-3.42 3.5c-.17 0-.44.06-.67.32-.23.26-.87.85-.87 2.07 0 1.22.9 2.4 1.02 2.56.13.17 1.75 2.68 4.24 3.65 2.08.82 2.5.66 2.95.62.45-.04 1.44-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.23-.16-.48-.28-.26-.13-1.5-.74-1.74-.82-.23-.09-.4-.13-.57.13-.17.26-.65.82-.8 1-.14.16-.28.18-.53.06-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.28-1.51-1.43-1.77-.14-.26-.02-.4.11-.53.12-.12.26-.3.4-.46.13-.16.17-.26.26-.44.08-.17.04-.32-.02-.45-.06-.13-.57-1.4-.79-1.9-.2-.5-.42-.43-.57-.43h-.55Z"
                    fill="#4CAF50"
                  />
                </svg>
              }
            >
              WhatsApp
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-black/[.24]" />

        {/* Logo, socials & link columns */}
        <div className="pt-10 flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-4">
            <Image
              src="https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegtq5201oe06pryy2gzwdk"
              alt="GarbhaGudi IVF logo"
              width={210}
              height={52}
              className="w-44"
            />
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="w-[43px] h-[43px] flex items-center justify-center rounded-full bg-[#1DA8E1] shadow-[inset_0px_1px_11px_#1587A9] hover:bg-[#1998cd] transition-colors"
                >
                  <svg width="19" height="19" viewBox="0 0 24 24">
                    {social.path}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-16">
            <div>
              <ColumnHeading>About</ColumnHeading>
              <FooterLinkList links={ABOUT_LINKS} />
            </div>
            <div>
              <ColumnHeading>Support</ColumnHeading>
              <FooterLinkList links={SUPPORT_LINKS} />
            </div>
            <div>
              <ColumnHeading>Legal</ColumnHeading>
              <FooterLinkList links={LEGAL_LINKS} />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <PulseLine className="hidden sm:block flex-1" />
          <p className="text-sm text-gray-600 text-center whitespace-nowrap">
            &copy; {new Date().getFullYear()} GGIRHR, Inc. All rights reserved.
          </p>
          <PulseLine className="hidden sm:block flex-1 scale-x-[-1]" />
        </div>
      </div>
    </footer>
  );
};

export default ReadyToGetStarted;
