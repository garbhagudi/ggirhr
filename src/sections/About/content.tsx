import React from "react";

const Data = [
  {
    id: 1,
    date: "February 2022",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores illum, molestias ducimus temporibus nihil.",
    link: "#",
  },
  {
    id: 2,
    date: "February 2022",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores illum, molestias ducimus temporibus nihil.",
    link: "",
  },
  {
    id: 3,
    date: "February 2022",
    title: "Lorem, ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores illum, molestias ducimus temporibus nihil.",
    link: "",
  },
  {
    id: 4,
    date: "February 2022",
    title: "IMA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores illum, molestias ducimus temporibus nihil.",
    link: "",
  },
  {
    id: 5,
    date: "February 2022",
    title: "Innaguration",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores illum, molestias ducimus temporibus nihil.",
    link: "",
  },
];

const Content = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="py-16 text-center text-4xl font-heading font-bold">
        GGIRHR at a Glance
      </div>
      <ol className="relative border-l border-gray-200 max-w-3xl mx-auto">
        {Data.map((item) => (
          <li className="mb-10 ml-4" key={item.id}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
              {item.date}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 ">
              {item.title}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 ">
              {item.description}
            </p>
            {item.link && (
              <a
                href={item.link}
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
              >
                Learn more
                <svg
                  className="ml-2 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Content;
