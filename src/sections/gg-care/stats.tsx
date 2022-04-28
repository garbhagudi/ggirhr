const Stats = () => {
  return (
    <div className="bg-brandBlue">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-heading">
            HAPPY TO ASSIST YOU
          </h2>
          <p className="mt-3 text-xl text-white sm:mt-4 font-content">
            Anywhere! Anytime!
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-7xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-1  text-lg leading-6 font-medium text-white font-content">
              Available in
            </dt>
            <dd className="order-2 mt-2 text-5xl font-extrabold text-white font-heading">
              20+
            </dd>
            <dd className="order-3  text-lg leading-6 font-medium text-white font-content">
              Languages
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-1  text-lg leading-6 font-medium text-white font-content">
              More than
            </dt>
            <dd className="order-2 mt-2 text-5xl font-extrabold text-white font-heading">
              1M+
            </dd>
            <dd className="order-3  text-lg leading-6 font-medium text-white font-content">
              Questions Answered
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-1  text-lg leading-6 font-medium text-white font-content">
              Available
            </dt>
            <dd className="order-2 mt-2 text-5xl font-extrabold text-white font-heading">
              24/7
            </dd>
            <dd className="order-3  text-lg leading-6 font-medium text-white font-content">
              365 Days
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Stats;
