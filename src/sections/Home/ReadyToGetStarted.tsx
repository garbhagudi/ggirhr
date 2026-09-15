import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "components/ui/Button";
import Glow from "components/ui/Glow";
import { CALL_US_HREF, WHATSAPP_HREF } from "lib/contact";
import { SOCIAL_NETWORKS } from "components/ui/icons/socialNetworks";
import WhatsAppIcon from "components/ui/icons/WhatsAppIcon";

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
const ColumnHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="relative inline-block text-[15px] font-semibold text-black pb-2.5 sm:text-lg">
    {children}
    <span className="absolute bottom-0 left-0 h-[2px] w-8 bg-black rounded-[2px] sm:w-3/5" />
  </h3>
);

const PulseLine = ({
  side,
  className = "",
}: {
  side: "left" | "right";
  className?: string;
}) => (
  <div className={`relative h-[38px] w-full ${className}`} aria-hidden="true">
    <Image
      src={`/icons/footer-pulse-line-${side}.svg`}
      alt=""
      fill
      sizes="100vw"
      className="object-fill"
    />
  </div>
);

const FooterLinkList = ({
  links,
}: {
  links: { name: string; href: string }[];
}) => (
  <ul className="mt-4 space-y-0 sm:space-y-3">
    {links.map((item) => (
      <li key={item.name}>
        <Link
          href={item.href}
          className="text-black/80 text-[13px] leading-10 hover:text-[#1DA8E1] transition-colors sm:text-sm sm:leading-normal"
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
);

const ReadyToGetStarted = () => {
  return (
    <footer className="relative overflow-hidden bg-white pt-16 pb-10">
      <Glow className="w-[240px] h-[240px] sm:w-[454px] sm:h-[454px] -right-10 -top-16 bg-[rgba(165,220,243,0.91)] blur-[102px]" />
      <Glow className="w-[240px] h-[240px] sm:w-[454px] sm:h-[454px] -left-32 top-64 bg-[rgba(165,220,243,0.83)] blur-[102px]" />
      <Glow className="hidden sm:block w-[454px] h-[454px] -left-32 -top-24 bg-[rgba(165,220,243,0.43)] blur-[102px]" />
      <Glow className="hidden sm:block w-[454px] h-[454px] -right-10 top-64 bg-[rgba(165,220,243,0.48)] blur-[102px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 xl:px-0">
        {/* CTA row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-[23px] sm:text-[46px] leading-tight font-normal text-black">
              Ready to get{" "}
              <span className="font-bold text-[#1DA8E1]">started?</span>
            </h2>
            <p className="mt-2 text-black text-[13px] leading-6 sm:text-lg">
              We&apos;re here to provide information, advice, support.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 sm:shrink-0">
            <Button
              href={CALL_US_HREF}
              variant="primary"
              size="md"
              rounded="sm"
              className="h-10 sm:h-auto"
            >
              Call Us
            </Button>
            <Button
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="md"
              rounded="sm"
              className="h-10 !border-[#374151] !text-black hover:!bg-black/5 sm:h-auto"
              leftIcon={
                <WhatsAppIcon
                  size={20}
                  color="#4CAF50"
                />
              }
            >
              WhatsApp
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-[#0000003D]" />

        {/* Logo, socials & link columns */}
        <div className="pt-10 flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-4">
            <Image
              src="https://ap-south-1.graphassets.com/AEQ42Ga7sTjWPxPil2Xudz/cmsegtq5201oe06pryy2gzwdk"
              alt="GarbhaGudi IVF logo"
              width={210}
              height={52}
              className="w-[172px] sm:w-44"
            />
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-3">
              {SOCIAL_NETWORKS.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="w-[29px] h-[29px] flex items-center justify-center rounded-full bg-[#1DA8E1] shadow-[inset_0px_1px_11px_#1587A9] hover:bg-[#1998cd] transition-colors sm:w-[43px] sm:h-[43px]"
                >
                  <Icon
                    size={19}
                    color="#fff"
                    className="w-[17.5px] h-[17.5px] sm:w-[19px] sm:h-[19px]"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:flex sm:flex-wrap sm:gap-16">
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
      </div>
      <div className="relative mt-10 flex items-center justify-center gap-4 sm:gap-6">
        <PulseLine
          side="left"
          className="w-full flex-1"
        />
        <p className="text-xs text-gray-700 text-center flex-1 max-w-[250px] sm:text-sm sm:text-gray-600 whitespace-nowrap">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-[#BB2649]"> GGIRHR </span>, Inc. All rights
          reserved.
        </p>
        <PulseLine
          side="right"
          className="w-full flex-1"
        />
      </div>
    </footer>
  );
};

export default ReadyToGetStarted;
