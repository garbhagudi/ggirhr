import React from 'react';
import {
  GiFizzingFlask,
  GiArchiveResearch,
  GiCheckMark,
  GiMagnifyingGlass,
  GiStable,
} from 'react-icons/gi';
import { HiDocument, HiClipboardCheck, HiDocumentReport } from 'react-icons/hi';

const Steps = () => {
  return (
    <div>
      <section className='text-gray-600 body-font'>
        <h2 className='text-xl lg:text-2xl text-center font-heading font-bold'>
          Review of research documents and handling research before publication
          / dissemination at Institution
        </h2>
        <div className='container px-5 py-10 lg:py-16 mx-auto flex flex-wrap'>
          <div className='flex flex-wrap w-full'>
            <div className='lg:w-3/5 md:w-1/2 md:pr-10 md:py-6'>
              <div className='flex relative pb-12'>
                <div className='h-full w-10 absolute inset-0 flex items-center justify-center'></div>
              </div>
              {steps.map((step) => (
                <div
                  className='flex items-center relative pb-12 font-content'
                  key={step.id}
                >
                  <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
                    {step.id === 8 || (
                      <div className='h-full w-1 bg-gray-200 pointer-events-none ml-2'></div>
                    )}
                  </div>
                  <div className='flex-shrink-0 w-12 h-12 rounded-full bg-brandBlue inline-flex items-center justify-center text-white relative z-10'>
                    <div className='text-2xl flex items-center justify-center'>
                      {step.icon}
                    </div>
                  </div>
                  <div className='flex-grow pl-4'>
                    <div className='font-medium text-base text-gray-900'>
                      {step.heading}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <img
              className='lg:w-2/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12'
              src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1687352781/GGIRHR/Research%20Assets/cdc-_N7I1JyPYJw-unsplash-min_1_fn5h13.webp'
              alt='step'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Steps;

const steps = [
  {
    id: 1,
    icon: <GiFizzingFlask />,
    heading:
      'RIU – Facilitates and guides implementation of research / CRA - Develops and updates research topic',
  },
  {
    id: 2,
    icon: <GiArchiveResearch />,
    heading: 'Research at GGIRHR',
  },
  {
    id: 3,
    icon: <GiCheckMark />,
    heading: 'Obtain approvals from  IEC, EC, others...',
  },
  {
    id: 4,
    icon: <GiMagnifyingGlass />,
    heading:
      'Conduct research in accordance with GGIRHR Ethical Guidelines applicable',
  },
  {
    id: 5,
    icon: <GiStable />,
    heading: 'Maintain integrity in data ',
  },
  {
    id: 6,
    icon: <HiDocument />,
    heading:
      'Before publication / dissemination, research document is prepared',
  },
  {
    id: 7,
    icon: <HiClipboardCheck />,
    heading:
      'Researcher will submit plagiarism check report, documents and undertaking to Director/Head',
  },
  {
    id: 8,
    icon: <HiDocumentReport />,
    heading: 'Annual report on final decisions to be communicated to RIU',
  },
];
