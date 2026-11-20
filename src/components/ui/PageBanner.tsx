import React from 'react';
import Image from 'next/image';
import RibbonWave from 'components/ui/RibbonWave';

/**
 * PageBanner
 *
 * Rounded inner-page hero from the Figma Contact/About frames: photo on the
 * right 65% fading into pale blue on the left, title low-left and a white
 * ribbon top-left (desktop); centred title over a blurred strip with the
 * photo below it (mobile). Used by `sections/contact/Hero.tsx` and
 * `sections/About/Banner.tsx`.
 *
 * Usage:
 *   <PageBanner
 *     title={<>Contact <span className='font-bold text-primaryBlue'>Us</span></>}
 *     image='/images/contact/contact-banner.png'
 *     mobileImage='/images/contact/contact-banner-mobile.png'
 *     alt='…'
 *   />
 */

export type PageBannerProps = {
  title: React.ReactNode;
  /** Desktop photo (≈ 900×550). */
  image: string;
  /** Mobile crop (≈ 335×266); falls back to `image`. */
  mobileImage?: string;
  alt: string;
  /** e.g. an `object-[x_y]` class to tune the mobile crop of `image`. */
  mobileImageClassName?: string;
  /** Aspect of the mobile photo box — match it to the mobile export. */
  mobileAspectClassName?: string;
};

const WHITE_WASH =
  'bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,#FFFFFF_100%)]';

export const PageBanner = ({
  title,
  image,
  mobileImage = image,
  alt,
  mobileImageClassName = '',
  mobileAspectClassName = 'aspect-[335/266]',
}: PageBannerProps) => (
  <div className='px-5 sm:px-[30px] my-4 sm:my-8'>
    <div className='relative overflow-hidden h-[400px] rounded-xl bg-[#D2EEF9] sm:h-[550px] sm:bg-white sm:rounded-[30px]'>
      {/* One image per breakpoint; `sizes` keeps the hidden one at the
          smallest srcset candidate. */}
      <div
        className={`sm:hidden absolute inset-x-0 bottom-0 z-0 ${mobileAspectClassName}`}
      >
        <Image
          src={mobileImage}
          alt={alt}
          fill
          sizes='(min-width: 640px) 0px, 100vw'
          className={`object-cover ${mobileImageClassName}`}
          priority
        />
        {/* Fade anchored to the photo's own top edge: the photo is
            bottom-pinned, so its top moves with width (e.g. it clears the
            blurred title strip at 320px). */}
        <div className='absolute inset-x-0 top-0 h-[56px] bg-[linear-gradient(180deg,#D2EEF9_0%,rgba(210,238,249,0)_100%)]' />
      </div>
      <div className='hidden sm:block absolute inset-y-0 right-0 z-0 w-[65%]'>
        <Image
          src={image}
          alt={alt}
          fill
          sizes='(min-width: 640px) 65vw, 0px'
          className='object-cover'
          priority
        />
      </div>

      {/* Desktop: fade the photo into pale blue towards the left. */}
      <div
        className={`hidden sm:block absolute inset-y-0 left-0 z-10 w-[54.8%] ${WHITE_WASH}`}
      />
      <div
        className={`hidden sm:block absolute inset-y-0 left-0 z-10 w-[68.9%] ${WHITE_WASH}`}
      />
      <div className='hidden sm:block absolute inset-y-0 left-0 z-10 w-[66.9%] bg-[linear-gradient(270deg,rgba(210,238,249,0)_0%,#D2EEF9_45.77%,#D2EEF9_100%)]' />

      {/* Mobile: soft pale-blue strip the title sits on. */}
      <div className='sm:hidden absolute left-1/2 top-[13px] z-10 h-[125px] w-[381px] -translate-x-1/2 bg-[#D2EEF9] blur-[12px]' />

      <RibbonWave
        color='#FFFFFF'
        width={214}
        height={84}
        className='absolute left-[23px] top-[20px] z-20 w-[77px] -rotate-[12.21deg] sm:left-[47px] sm:top-[64px] sm:w-[214px] sm:-rotate-[7.36deg]'
      />

      <h1 className='absolute inset-x-0 top-[80px] z-20 text-center text-[31px] leading-[58px] text-black sm:inset-x-auto sm:top-auto sm:left-[119px] sm:bottom-[138px] sm:text-left sm:text-[61px]'>
        {title}
      </h1>
    </div>
  </div>
);

export default PageBanner;
