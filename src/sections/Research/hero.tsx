import React from 'react';

const Hero = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex flex-wrap mt-16'>
        <div className='w-full lg:w-5/12 px-4'>
          <div className='hero-content'>
            <h1 className=' text-dark font-bold text-4xl sm:text-[42px] lg:text-[40px] xl:text-[42px] pb-5 font-heading'>
              Introduction
            </h1>
            <div className='text-base mb-8 text-body-color max-w-2xl'>
              Subsumed with the Basic Research unit with the goal of
              establishing and expanding its in-house capabilities for
              generation of scientific knowledge regarding human reproduction
              and infertility. In our research we test hypothesis, ideas, and
              results recently published in the literature to check their
              usefulness and validity before incorporating them in our clinical
              protocols. We aim to be at the forefront of knowledge generation
              in our field.
              <br /> <br />
              <div className='text-lg font-heading font-bold pb-3'>
                Our Mission
              </div>
              All inclusively our mission is to broaden and flourish magnificent
              trail blazing, internationally competitive research, with focus on
              clearly defined clinical problems in both male and female ART
              patients beneficial to provide translational transfer and support
              to all our clinics for the benefit of assisted reproduction
              patients worldwide.
            </div>
          </div>
        </div>
        <div className='hidden lg:block lg:w-1/12 px-4'></div>
        <div className='w-full lg:w-6/12 px-4 flex items-center'>
          <div className='lg:text-right lg:ml-auto'>
            <div className='relative inline-block z-10 pt-4 lg:pt-0'>
              <img
                src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1740117190/GGIRHR/Images/c_10_11zon_w9303y.webp'
                alt='GGRIHR'
                className='max-w-full lg:ml-auto rounded-lg rounded-tl-[48px] shadow-2xl drop-shadow-2xl'
              />
            </div>
          </div>
        </div>
        <div className='mt-11 px-3 lg:px-0'>
          <div className='pb-4 lg:pb-12 px-4 space-y-3'>
            <div>
              We actively monitor current trends and debates, and contribute to
              the development of knowledge and techniques in our field.
            </div>
            <div>
              Currently, the primary focuses of the research team consist of
              improving clinical outcomes, developing methods for quality
              assurance, data management and medical monitoring.{' '}
            </div>
          </div>
          <div className='flex justify-center flex-col md:flex-row'>
            <div className='w-full lg:w-6/12 px-4 flex items-center justify-center'>
              <div className='lg:text-right mx-auto'>
                <div className='relative inline-block z-10 pt-4 lg:pt-0'>
                  <img
                    src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1740120465/GGIRHR/Research%20Assets/cdc-IFpQtennlj8-unsplash-min_ksx5qc.webp'
                    alt='hero'
                    className='max-w-full mx-auto rounded-lg rounded-br-[48px] shadow-2xl drop-shadow-2xl'
                  />
                </div>
              </div>
            </div>
            <div className='hidden lg:block lg:w-1/12 px-4'></div>
            <div className='max-w-xl flex justify-center flex-col px-3 lg:px-0'>
              <div className='text-lg font-bold py-2'>
                We aim to train early career scientists:
              </div>
              <ul className='space-y-3 list-inside list-disc'>
                <li>
                  In reproduction biology and assisted reproduction techniques
                </li>
                <li>
                  Develop fruitful collaborations and synergies with companies,
                  clinics, and educational research institutions
                </li>
                <li>
                  Participate actively in national and international meetings of
                  the assisted reproduction community
                </li>
                <li>
                  Ensuring wide dissemination of our research through
                  publication of our work in the top journals of our field.
                </li>
              </ul>
            </div>
          </div>
          <div className='pt-4 lg:pt-12 space-y-3 px-4'>
            <div>
              In addition, GGIRHR works in close collaboration with NITTE
              University- Mangalore and BBC- Bangalore Bio innovation Center
              which works closely with Karnataka Innovation & Technology Society
              (KITS), providing interdisciplinary support across the
              organization by interfacing with the clinical and embryology
              teams, in order to produce a streamlined process that facilitates
              efficiency.
            </div>
            <div>
              The Research Department of GGIRHR hosts a multidiscipilinary team
              of clinicians and scientists with expertise in a wide range of
              investigation into the health of oocytes (eggs) and embryos,
              through clinical research of common gynecological conditions, such
              as endometriosis and polycystic ovarian syndrome, and rare
              disorders of sexual development.{' '}
            </div>
            <div>
              GGIRHR has always been on the forefront to set the standards for
              ethics in biomedical and health research. To ensure highest
              professional and ethical standards for biomedical and health
              research at all stages right from its inception, honesty in
              conduct of research, obtaining relevant approvals, efficiency,
              judicious use of resources, ensuring accountability, transparency,
              declaration and management of Conflict of Interest (COI), justice,
              reliable data collection, handling, interpretation, integrity in
              analysis, reporting, publication and translation for the benefit
              of population, the team of External and Internal Ethical
              Committee, Scientific review committee take upon the responsible
              conduct of Research.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
