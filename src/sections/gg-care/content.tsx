import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/solid';

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
                      <a
                        href='mailto:training@ggirhr.com'
                        className='text-brandPink2 hover:underline'
                      >
                        <AtSymbolIcon className='inline-flex w-5 h-5' />{' '}
                        training@ggirhr.com
                      </a>
                    </dd>
                  </div>
                  <div className='mt-1'>
                    <dt className='sr-only'>Phone number</dt>
                    <dd>
                      <a
                        href='tel:+919108910852'
                        className='text-brandBlue hover:underline'
                      >
                        <PhoneIcon className='inline-block w-5 h-5' />{' '}
                        +919108910852
                      </a>
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
                      <a
                        href='mailto:manager@ggirhr.com'
                        className='text-brandPink2 hover:underline'
                      >
                        <AtSymbolIcon className='inline-flex w-5 h-5' />{' '}
                        manager@ggirhr.com
                      </a>
                    </dd>
                  </div>
                  <div className='mt-1'>
                    <dt className='sr-only'>Phone number</dt>
                    <dd>
                      <a
                        href='tel:+919108910852'
                        className='text-brandBlue hover:underline'
                      >
                        <PhoneIcon className='inline-block w-5 h-5' />{' '}
                        +919108910852
                      </a>
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
                      <a
                        href='mailto:hr@garbhagudi.com'
                        className='text-brandPink2 hover:underline'
                      >
                        <AtSymbolIcon className='inline-flex w-5 h-5' />{' '}
                        hr@garbhagudi.com
                      </a>
                    </dd>
                  </div>
                  <div className='mt-1'>
                    <dt className='sr-only'>Phone number</dt>
                    <dd>
                      <a
                        href='tel:+919606002999'
                        className='text-brandBlue hover:underline'
                      >
                        <PhoneIcon className='inline-block w-5 h-5' /> +91 96060
                        02999
                      </a>
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
                      <a
                        href='mailto:jayaram@garbhagudi.com'
                        className='text-brandPink2 hover:underline'
                      >
                        <AtSymbolIcon className='inline-flex w-5 h-5' />{' '}
                        jayaram@garbhagudi.com
                      </a>
                    </dd>
                  </div>
                  <div className='mt-1'>
                    <dt className='sr-only'>Phone number</dt>
                    <dd>
                      <a
                        href='tel:+919980997111'
                        className='text-brandBlue hover:underline'
                      >
                        <PhoneIcon className='inline-block w-5 h-5' /> +91 99809
                        97111
                      </a>
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
            <div className='mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2 font-content'>
              <div>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Hanumanthanagar
                </h3>
                <div className='mt-2 text-base text-gray-500'>
                  <p className='mt-1'>
                    <a
                      href='tel:+919886915556'
                      className='text-brandBlue hover:underline'
                    >
                      <PhoneIcon className='inline-block w-5 h-5' /> +91 98869
                      15556
                    </a>
                  </p>
                  <p>
                    Subhasri Complex, 210/A, Kumaraswamy Temple Rd, 2nd Block,
                    Phase 1, Banashankari Stage I, Banashankari,
                  </p>
                  <p className='mt-1 mb-5'>Bengaluru, Karnataka 560050</p>
                  <a
                    href='https://g.page/GG1-HN?share'
                    className='py-2 px-3 bg-brandBlue text-white font-semibold rounded-3xl hover:bg-bratext-brandBlue'
                    target={'_blank'}
                    rel='noreferrer'
                  >
                    Directions
                  </a>
                </div>
              </div>
              <div>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Kalyan Nagar
                </h3>
                <div className='mt-2 text-base text-gray-500'>
                  <p className='mt-1'>
                    <a
                      href='tel:+918861433339'
                      className='text-brandBlue hover:underline'
                    >
                      <PhoneIcon className='inline-block w-5 h-5' /> +91 88614
                      33339
                    </a>
                  </p>
                  <p>
                    Park Landing, 5AC-709, Outer Ring Rd, Balachandra Layout,
                    HRBR Layout 2nd Block, Chelekare, Extension,
                  </p>
                  <p className='mt-1 mb-5'>Bengaluru, Karnataka 560043</p>
                  <a
                    href='https://g.page/GarbhaGudi-IVF-Bangalore?share'
                    className='py-2 px-3 bg-brandBlue text-white font-semibold rounded-3xl hover:bg-bratext-brandBlue'
                    target={'_blank'}
                    rel='noreferrer'
                  >
                    Directions
                  </a>
                </div>
              </div>
              <div>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  South End Circle
                </h3>
                <div className='mt-2 text-base text-gray-500'>
                  <p className='mt-1'>
                    <a
                      href='tel:+919972463355'
                      className='text-brandBlue hover:underline'
                    >
                      <PhoneIcon className='inline-block w-5 h-5' /> +91 99724
                      63355
                    </a>
                  </p>
                  <p>
                    South End Circle, 26, Pattalamma Temple Rd, Basavanagudi,
                  </p>
                  <p className='mt-1 mb-5'>Bengaluru, Karnataka 560004</p>
                  <a
                    href='https://g.page/ggivf?share'
                    className='py-2 px-3 bg-brandBlue text-white font-semibold rounded-3xl hover:bg-bratext-brandBlue'
                    target={'_blank'}
                    rel='noreferrer'
                  >
                    Directions
                  </a>
                </div>
              </div>
              <div>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Electronic City
                </h3>
                <div className='mt-2 text-base text-gray-500'>
                  <p className='mt-1'>
                    <a
                      href='tel:+918861811116'
                      className='text-brandBlue hover:underline'
                    >
                      <PhoneIcon className='inline-block w-5 h-5' /> +91 88618
                      11116
                    </a>
                  </p>
                  <p>
                    Ganesh Towers,3rd Floor, 60/5 and 60/6, NH 44, Beside Andhra
                    Bank, Konappana Agrahara, Electronic City,
                  </p>
                  <p className='mt-1 mb-5'>Bengaluru, Karnataka 560100</p>
                  <a
                    href='https://g.page/GG4-EC?share'
                    className='py-2 px-3 bg-brandBlue text-white font-semibold rounded-3xl hover:bg-bratext-brandBlue'
                    target={'_blank'}
                    rel='noreferrer'
                  >
                    Directions
                  </a>
                </div>
              </div>
              <div>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Marathahalli
                </h3>
                <div className='mt-2 text-base text-gray-500'>
                  <p className='mt-1'>
                    <a
                      href='tel:+918105181515'
                      className='text-brandBlue hover:underline'
                    >
                      <PhoneIcon className='inline-block w-5 h-5' /> +91 81051
                      81515
                    </a>
                  </p>
                  <p>
                    4TH floor, Chirag Towers, Born Babies Building, 24 & 64,
                    Service Rd, next to कलामंदिर, Marathahalli,
                  </p>
                  <p className='mt-1 mb-5'>Bengaluru, Karnataka 560037</p>
                  <a
                    href='https://goo.gl/maps/kxhfM5SCZuq6EDnE9'
                    className='py-2 px-3 bg-brandBlue text-white font-semibold rounded-3xl hover:bg-bratext-brandBlue'
                    target={'_blank'}
                    rel='noreferrer'
                  >
                    Directions
                  </a>
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
