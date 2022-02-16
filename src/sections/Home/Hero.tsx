import React from "react";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="relative w-full h-full pb-10">
        <div className="relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
          <div className="text-color w-full md:w-1/3 lg:w-1/2 pt-16 lg:pt-8 xl:pt-16">
            <h1 className="text-4xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-gray-900 font-bold font-heading xl:-mt-16">
              GGIRHR
            </h1>
            <div className="text-base lg:text-base pb-10 sm:pb-0 pt-10 xl:pt-6">
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, fugit. Sed culpa et repellat, eum maiores voluptatum
                repudiandae fugit provident mollitia similique voluptate
                aliquam, quia soluta. Molestias enim vitae provident fuga
                tenetur placeat dolores, quam perspiciatis magnam exercitationem
                fugiat id rerum sunt iusto odio a, est quos illum, libero optio
                ut quasi nemo laudantium accusamus. Nam ut iure beatae accusamus
                sapiente, exercitationem temporibus corporis quisquam.
              </h2>
            </div>

            <div className="lg:flex">
              <button className="hover:opacity-90 text-base w-full xl:text-base xl:w-48 mt-4 xl:mt-8 py-4 bg-brandBlue text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
          <img
            className="w-full mt-6 md:mt-0 object-cover md:w-2/3 lg:w-1/2 md:-ml-4 lg:-ml-4 xl:ml-0"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Graphic.png"
            alt="sample page"
            role="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
