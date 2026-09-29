import PageBanner from 'components/ui/PageBanner';

const Hero = () => (
  <PageBanner
    title={
      <>
        Contact <span className='font-bold text-primaryBlue'>Us</span>
      </>
    }
    image='/images/contact/contact-banner.png'
    mobileImage='/images/contact/contact-banner-mobile.png'
    alt='A GGIRHR support advisor on a call at her desk'
  />
);

export default Hero;
