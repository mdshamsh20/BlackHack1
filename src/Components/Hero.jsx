import React from 'react'
import HeroInputBox from './HeroInputBox'
import image from './img/image 1.jpg'
const Hero = () => {
  return (
    <div>
    <div className="bg-[#020017] mt-4 pb-6 sm:pb-8 lg:pb-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      
      <section className="flex flex-col justify-around gap-2 sm:gap-4 md:gap-4 lg:flex-row">
      <div className="h-48 overflow-hidden rounded-lg mt-6 bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
          <img src={image} className="h-full w-full object-cover object-center" alt='text' />
        </div>
        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
  
          <h1 className="mb-4 text-3xl font-bold text-[#FFFEFE] sm:text-4xl md:mb-4 md:text-4xl">A website which <br/> helps the coder<br/> to compete <br/> friendly</h1>
  
          <p className="mb-8 leading-relaxed text-[#EBFF00] md:mb-12 lg:w-4/5 xl:text-lg">LOREM IPSUM SOME BLA BLA TEXTS </p>
  
          <HeroInputBox />

        </div>
      
        
      </section>
    </div>
  </div>
    </div>
  )
}

export default Hero;
