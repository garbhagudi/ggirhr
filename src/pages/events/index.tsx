import Head from "next/head";
import React from "react";

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Events and Webinars | GGIRHR</title>
      </Head>
      <div className="w-full mt-10 mb-6 lg:mb-0">
        <h1 className="sm:text-4xl text-4xl font-bold mb-2 text-gray-900 text-center font-heading">
          Events and Webinars
        </h1>
        <h3 className="text-center max-w-3xl mx-auto font-semibold mt-4 text-gray-900">
          Check Our Upcoming and Events, CMEs and Webinars
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {Data?.map((item) => (
          <div
            className="max-w-sm rounded-2xl overflow-hidden shadow-lg mx-auto my-16"
            key={item.id}
          >
            <img
              className="w-full"
              src={item.image}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <h1 className="font-bold text-xl mb-2">{item.title}</h1>
              <p className="text-gray-800 h-auto md:h-80 ">
                {item.description}
              </p>
            </div>
            {item.date && (
              <dt className="px-7 pt-4 pb-2">Date: {item?.date}</dt>
            )}
            {item.link && (
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <a href={item.link} target={"_blank"} rel="noreferrer">
                    Register Now
                  </a>
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;

const Data = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1651043879/GGIRHR/Images/Webinar_wjquhx.jpg",
    title: "GarbhaGnan",
    description:
      " As part of our endeavour to keep doctors tuned with the latest updates relating to the infertility realm, GGIRHR conducts CMEs and webinars for postgraduate medical students on the last Tuesday of every month. It’s free!",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfO3c2uHDyrnXHhuKqKylXxqgJOC9icAlAZHu3oTlDJN8db1w/viewform?usp=sf_link",
    date: "Every Last Tuesday of the Month",
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1651043879/GGIRHR/Images/Webinar_wjquhx.jpg",
    title: "Embryology Webinars",
    description:
      " The embryology webinars offer priceless experience and a detailed understanding of the critical aspects involved in performing more successful IVF, ICSI, IUI, and various other procedures as a part of assisted reproductive technologies. The sole objective behind GGIRHR’s embryology webinars is to deliver a competitive learning experience for aspiring embryologists. In addition, we offer career guidance to instil confidence and broaden the individual’s exposure to career prospects.",
    link: "",
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1651043879/GGIRHR/Images/Webinar_wjquhx.jpg",
    title: "Physical CMEs",
    description:
      "GGIRHR is pleased to organize physical CMEs for postgraduate medical students upon request. Our CMEs provide an excellent platform for refining skills, networking with our eminent faculties, and growing professionally by acquiring new skills and gaining a broader knowledge base.",
    link: "",
  },
];
