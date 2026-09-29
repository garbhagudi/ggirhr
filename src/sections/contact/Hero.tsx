import Image from 'next/image';
import RibbonWave from 'components/ui/RibbonWave';

const BANNER_IMAGE = '/images/contact/contact-banner.png';
const BANNER_IMAGE_MOBILE = '/images/contact/contact-banner-mobile.png';
const BANNER_ALT = 'A GGIRHR support advisor on a call at her desk';

const WHITE_WASH =
  'bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,#FFFFFF_100%)]';

const Hero = () => {
  return (
    <div className='px-5 sm:px-[30px] my-4 sm:my-8'>
      <div className='relative overflow-hidden h-[400px] rounded-xl bg-[#D2EEF9] sm:h-[550px] sm:bg-white sm:rounded-[30px]'>
        {/* Figma exports a separate crop per breakpoint; `sizes` keeps the
            hidden one at the smallest srcset candidate. */}
        <div className='sm:hidden absolute inset-x-0 bottom-0 z-0 aspect-[335/266]'>
          <Image
            src={BANNER_IMAGE_MOBILE}
            alt={BANNER_ALT}
            fill
            sizes='(min-width: 640px) 0px, 100vw'
            className='object-cover'
            priority
          />
        </div>
        <div className='hidden sm:block absolute inset-y-0 right-0 z-0 w-[65%]'>
          <Image
            src={BANNER_IMAGE}
            alt={BANNER_ALT}
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
          Contact <span className='font-bold text-primaryBlue'>Us</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
