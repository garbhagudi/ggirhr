import React from "react";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const data = [
  {
    id: 1,
    videoId: "mlOOztCaBwc",
  },
  {
    id: 2,
    videoId: "pqHz_W_SxWg",
  },

  {
    id: 3,
    videoId: "Rse0H2UQqCY",
  },
  {
    id: 4,
    videoId: "pFdDXPezOxQ",
  },
  {
    id: 5,
    videoId: "NyPwSGHE9WM",
  },
  {
    id: 6,
    videoId: "m6x102K39wI",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 560, min: 0 },
    items: 1,
  },
};

const Video = () => {
  return (
    <div className="container mx-auto text-center py-8">
      <span className="text-2xl lg:text-4xl font-extrabold text-brandDark font-heading">
        Testimonials from our students
      </span>
      <div className="px-3 sm:px-0">
        <Carousel
          responsive={responsive}
          autoPlaySpeed={360000}
          partialVisbile={true}
          focusOnSelect={true}
          ssr={true}
          infinite={true}
          showDots={true}
          swipeable={true}
          draggable={true}
        >
          {data.map((item) => {
            return (
              <div
                className="md:w-4/6 mx-auto aspect-video mt-8 overflow-hidden rounded-3xl border-2 border-brandBlue"
                key={item.id}
              >
                <LiteYouTubeEmbed
                  id={item.videoId}
                  title="Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay"
                  poster="maxresdefault"
                  thumbnail={""}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Video;
