import React from "react";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const Video = () => {
  return (
    <div>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 mb-16 ">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl font-heading">
                <span className="block text-gray-900">GGIRHR&apos;s</span>
                <span className="block text-brandPink3">Mission </span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-content">
              &quot;To provide learners with a specialized reproductive health
              and infertility education of exceptional quality and prepare every
              individual to serve the underserved. Special attention is directed
              to teaching and research activities, including CME programs and
              initiatives. We also strive to empower doctors and other medical
              professionals to deliver the highest quality patient care and
              prepare the next generation of skilled clinical and scientific
              leaders.&quot;
            </p>
          </div>
          <div className="mt-12 relative sm:max-w-xl sm:mx-auto lg:mt-0 lg:max-w-xl lg:mx-0 lg:col-span-6">
            <div className="relative mx-auto w-full aspect-video shadow-lg rounded-3xl overflow-hidden">
              <LiteYouTubeEmbed
                id="3l4gWsVlhE4"
                title="Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay"
                poster="maxresdefault"
                thumbnail={""}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Video;
