import React from "react";

const Data = [
  {
    id: 1,
    Name: "lorem ipsum",
    details: "Lorem ipsum dolor sit amet consectetur.",
    image: "https://kuyou.id/content/images/ctc_2020021605150668915.jpg",
  },
  {
    id: 2,
    Name: "lorem ipsum",
    details: "Lorem ipsum dolor sit amet consectetur.",
    image:
      "https://asset.kompas.com/crops/Pk_pN6vllxXy1RshYsEv74Q1BYA=/56x0:1553x998/750x500/data/photo/2021/06/16/60c8f9d68ff4a.jpg",
  },
  {
    id: 3,
    Name: "lorem ipsum",
    details: "Lorem ipsum dolor sit amet consectetur.",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/7/2019/07/33-GettyImages-154260931-216706f.jpg?quality=90&resize=768%2C574",
  },
  {
    id: 4,
    Name: "lorem ipsum",
    details: "Lorem ipsum dolor sit amet consectetur.",
    image:
      "https://wisatamuda.com/wp-content/uploads/2019/02/1-Golden-Gate-Bridge-Gambar-dan-Foto-Tempat-Wisata-Terbaik-di-San-Fransisco-USA.jpg",
  },
  {
    id: 5,
    Name: "lorem ipsum",
    details: "Lorem ipsum dolor sit amet consectetur.",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/7/2019/07/33-GettyImages-154260931-216706f.jpg?quality=90&resize=768%2C574",
  },
  {
    id: 6,
    Name: "lorem ipsum",
    details: "Lorem ipsum dolor sit amet consectetur.",
    image: "https://kuyou.id/content/images/ctc_2020021605150668915.jpg",
  },
];

const Features = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-7xl px-5 py-4 mx-auto">
        <div className="flex flex-wrap w-full mb-4 p-4">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900 text-center">
              Courses
            </h1>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center">
          {Data.map((item) => (
            <div className="p-4" key={item.id}>
              <div className="bg-white p-6 rounded-lg">
                <img
                  className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded-lg w-full object-cover object-center mb-6"
                  src={item.image}
                  alt={item.Name}
                />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {item.Name}
                </h2>
                <p className="leading-relaxed text-base">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
