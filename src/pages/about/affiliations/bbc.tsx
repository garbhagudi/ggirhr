import React from "react";

type Props = {};

const bcc = (props: Props) => {
  return (
    <div>
      <div className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill bg-[url('https://www.ggirhr.com/wp-content/uploads/2015/12/ima-doctor-1.jpg')] ">
        <div className="max-w-7xl mx-auto md:w-1/2">
          <p className="font-bold text-sm uppercase">Services</p>
          <p className="text-3xl font-bold">Multimedia products</p>
          <p className="text-2xl mb-10 leading-none">
            Atractive designs for your brand
          </p>
          <a
            href="#"
            className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
          >
            Contact us
          </a>
        </div>
      </div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              About IMA-AMS
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              voluptatum eaque veritatis aliquid voluptates? Error perspiciatis
              ab neque maxime pariatur. Porro dolore, omnis, soluta doloribus
              sunt nam quaerat beatae debitis earum labore commodi qui sed.
              Molestias, sapiente sint eum esse alias suscipit aliquam error,
              animi illum nisi ducimus a nihil laudantium cum dignissimos quo.
              Culpa eaque aspernatur ab, enim quae deleniti asperiores natus
              placeat impedit.
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full h-full rounded-3xl"
              src="https://medicaldialogues.in/h-upload/2020/07/23/132207-1600x960128635-indian-medical-association.webp"
              alt="A group of People"
            />
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-heading text-center mb-10 font-semibold">
        Courses Offered
      </h1>
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 mx-auto">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="font-normal text-gray-700 mb-3">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href="#"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bcc;
