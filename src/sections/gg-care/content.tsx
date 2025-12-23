import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
        <div className='divide-y-2 divide-gray-200'>
          <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
            <h2 className='text-2xl font-extrabold text-gray-900 sm:text-3xl font-heading'>
              Get in touch
            </h2>
            <div className='mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2 font-content'>
              <div>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Academics & Queries
                </h3>
                <dl className='mt-2 text-base text-gray-500'>
                  <div>
                    <dt className='sr-only'>Email</dt>
                    <dd>
                      <Link
                        href='mailto:training@ggirhr.com'
                        className='text-brandPink2 hover:underline'
                      >
                        <AtSymbolIcon className='inline-flex w-5 h-5' />{' '}
                        training@ggirhr.com
                      </Link>
                    </dd>
                  </div>
                  <div className='mt-1'>
                    <dt className='sr-only'>Phone number</dt>
                    <dd>
                      <Link
                        href='tel:+919108910852'
                        className='text-brandBlue hover:underline'
                      >
                        <PhoneIcon className='inline-block w-5 h-5' /> +91 9108
                        9108 52
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Feedback & Complaints
                </h3>
                <dl className='mt-2 text-base text-gray-500'>
                  <div>
                    <dt className='sr-only'>Email</dt>
                    <dd>
                      <Link
                        href='mailto:manager@ggirhr.com'
                        className='text-brandPink2 hover:underline'
                      >
                        <AtSymbolIcon className='inline-flex w-5 h-5' />{' '}
                        manager@ggirhr.com
                      </Link>
                    </dd>
                  </div>
                  <div className='mt-1'>
                    <dt className='sr-only'>Phone number</dt>
                    <dd>
                      <Link
                        href='tel:+919108910852'
                        className='text-brandBlue hover:underline'
                      >
                        <PhoneIcon className='inline-block w-5 h-5' /> +91 9108
                        9108 52
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Human Resources
                </h3>
                <dl className='mt-2 text-base text-gray-500'>
                  <div>
                    <dt className='sr-only'>Email</dt>
                    <dd>
                      <Link
                        href='mailto:hr@garbhagudi.com'
                        className='text-brandPink2 hover:underline'
                      >
                        <AtSymbolIcon className='inline-flex w-5 h-5' />{' '}
                        hr@garbhagudi.com
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Partnership
                </h3>
                <dl className='mt-2 text-base text-gray-500'>
                  <div>
                    <dt className='sr-only'>Email</dt>
                    <dd>
                      <Link
                        href='mailto:jayaram@garbhagudi.com'
                        className='text-brandPink2 hover:underline'
                      >
                        <AtSymbolIcon className='inline-flex w-5 h-5' />{' '}
                        jayaram@garbhagudi.com
                      </Link>
                    </dd>
                  </div>
                  <div className='mt-1'>
                    <dt className='sr-only'>Phone number</dt>
                    <dd>
                      <Link
                        href='tel:+919980997111'
                        className='text-brandBlue hover:underline'
                      >
                        <PhoneIcon className='inline-block w-5 h-5' /> +91 9980
                        9971 11
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className='mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8'>
            <h2 className='text-2xl font-extrabold text-gray-900 sm:text-3xl font-heading'>
              Locations
            </h2>
            <div className='relative h-[36rem] w-full items-end justify-start overflow-hidden rounded-lg border-2 border-brandPurpleDark bg-gray-300 p-2 md:ml-auto lg:p-10 mt-8 lg:mt-0 lg:col-span-2 font-content flex'>
              <iframe
                width='100%'
                height='100%'
                className='absolute inset-0 dark:brightness-75 dark:contrast-150 dark:grayscale dark:invert border-0'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='map'
                src={
                  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.548126617046!2d77.57422009999999!3d12.9367387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156527450c35%3A0x617a33b43836856d!2sGGIRHR%20-%20GarbhaGudi%20Institute%20of%20Reproductive%20Health%20%26%20Research!5e0!3m2!1sen!2sin!4v1741251561868!5m2!1sen!2sin'
                }
              ></iframe>
              <div className='shadow-3xl relative flex flex-wrap rounded-3xl bg-white py-6 dark:bg-gray-800'>
                <div className='px-6 lg:w-1/2'>
                  <div className='title-font font-qs text-xs font-semibold tracking-widest text-gray-800 dark:text-gray-200'>
                    ADDRESS
                  </div>
                  <p className='mt-1 font-content text-sm text-gray-800 dark:text-gray-200'>
                    1st Floor, Shubhashri Pride, No. 41, S End Rd, next to
                    Bharathi Nursing Home, Tata Silk Farm, Basavanagudi,
                    Bengaluru, Karnataka 560004
                  </p>
                </div>
                <div className='mt-4 px-6 lg:mt-0 lg:w-1/2'>
                  <div className='font-qs text-xs font-semibold tracking-widest text-gray-800 dark:text-gray-200'>
                    EMAIL
                  </div>
                  <div className='leading-relaxed'>
                    <Link
                      href='mailto:training@ggirhr.com'
                      className='font-qs text-sm text-brandPink'
                    >
                      training@ggirhr.com
                    </Link>
                  </div>
                  <div className='mt-4 font-qs text-xs font-semibold tracking-widest text-gray-800 dark:text-gray-200'>
                    PHONE
                  </div>
                  <p className='font-qs text-sm leading-relaxed text-gray-800 dark:text-gray-200'>
                    <Link href='tel:+919108910852'>+91 9108 9108 52</Link>
                  </p>
                  <div className='mt-4 font-qs text-xs font-semibold tracking-widest text-gray-800 dark:text-gray-200'>
                    WhatsApp
                  </div>
                  <p className='font-qs text-sm leading-relaxed text-gray-800 dark:text-gray-200'>
                    <Link
                      href='https://wa.me/co?text=Hi.'
                      target='_blank'
                      rel='noreferrer'
                    >
                      +91 8310 1453 01
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
