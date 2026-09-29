import React from "react";
import PageBanner from "components/ui/PageBanner";

export default function Banner() {
  return (
    <PageBanner
      title={
        <>
          About <span className="font-bold text-primaryBlue">GGIRHR</span>
        </>
      }
      image="/images/about/about-banner.png"
      mobileImage="/images/about/about-banner-mobile.png"
      mobileAspectClassName="aspect-[335/293]"
      alt="Gloved hands handling an embryo under a microscope"
    />
  );
}
