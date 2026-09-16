import React from "react";
import Image from "next/image";
import Chip from "components/ui/Chip";
import Button from "components/ui/Button";
import SectionShell from "components/ui/SectionShell";
import { HOME_FEATURE_IMAGE } from "sections/Home/assets";

// "About Us" intro — image beside the copy on desktop, stacked below lg.
const AboutUs = () => (
  <SectionShell className="py-[60px] sm:py-12 lg:py-24 flex flex-col lg:flex-row gap-[26px] sm:gap-8 lg:gap-12 bg-[#D2EEF9]">
    <Image
      src={HOME_FEATURE_IMAGE}
      width={306}
      height={226}
      alt="Home"
      className="w-full h-auto aspect-[335/161] object-cover rounded-[20px] sm:aspect-auto sm:rounded-2xl lg:w-[306px] lg:rounded-none lg:shrink-0 overflow-hidden"
    />
    <div className="space-y-5 flex flex-col">
        <Chip variant="pink">ABOUT US</Chip>
      <p className="text-lg sm:text-2xl lg:text-[32px] !leading-[47px]">
        <span className="font-bold">
          GarbhaGudi Institute of Reproductive Health and Research (GGIRHR) is
          one of India’s premier infertility training organizations.{" "}
        </span>
        <span className="font-normal">
          It started in 2018 and is headed by Dr. Asha S Vijay, the honorable
          dean and scientific director of GGIRHR.
        </span>
      </p>
      <div>
        {/* `py-2.5` makes the 40px mobile box; `sm:py-2` restores size="sm". */}
        <Button
          href="/about"
          variant="muted"
          size="sm"
          rounded="md"
          className="py-2.5 sm:py-2"
        >
          Learn More
        </Button>
      </div>
    </div>
  </SectionShell>
);

export default AboutUs;
