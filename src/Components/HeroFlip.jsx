import React from "react";
import image5 from './img/image5.jpg'

const Hero = () => {
  return (
    <div>
      <div className="bg-[#020017] pt-4 pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section className="flex flex-col justify-around gap-2 sm:gap-4 md:gap-4 lg:flex-row">
            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
              <h1 className="mb-2 text-3xl uppercase  text-gray-400 sm:text-4xl md:mb-4 md:text-4xl">
                Challenge a <br /> friendly hack
              </h1>
              <h1 className="mb-4 text-3xl uppercase font-bold text-[#FFFEFE] sm:text-4xl md:mb-4 md:text-4xl">
                Win<br/> exciting<br/> rewards
              </h1>

              <p className="mb-4 leading-relaxed text-[#FFFEFE] md:mb-6 lg:w-4/5 xl:text-lg">
                LOREM IPSUM SOME BLA BLA TEXTS{" "}
              </p>

              <button className="bg-[#1A58B6] w-1/3 rounded-sm uppercase py-4 text-white font-semibold ">
                Get Started
              </button>
            </div>
            <div className="h-48 overflow-hidden rounded-lg mt-6 bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
              <img
                src={image5}
                alt="Photo by Fakurian Design"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
