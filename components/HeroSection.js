import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-[700px] pt-[3rem] flex justify-center items-center background mb-[3rem] border-b-[3px] border-accent  backgroundHero">
      <div className="text-center mb-[1rem] relative">
        <span className="text-[2rem] font-bold text-secondary absolute top-0 left-[6%]">
          Hello, I&#39;m
        </span>
        <h1 className="text-[8.5rem] px-4 font-bold text-secondary shadow-[1px_2px_4px_rgba(0,0,0,0.8)] mb-8 pt-4 rounded-2xl max-[470px]:text-[6rem] ease-in duration-300">
          <span className="effect-shine">Michael Cervone</span>
        </h1>
        <h2 className="text-center text-[3.5rem]">Web Developer</h2>
        <p className="text-center text-[2rem]">
          My passion is making modern websites!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
