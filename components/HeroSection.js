import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full pt-[7rem] flex justify-center items-center background mb-[7rem] border-b-[3px] border-[tomato]  ">
      <div className="text-center mb-[6rem] relative">
        <span className="text-[2rem] font-bold text-[#eee] absolute top-0 left-[6%]">
          Hello, I&#39;m
        </span>
        <h1 className="text-[8.5rem] font-bold text-[#eee] space-x-[.03em] shadow-[1px_2px_4px_rgba(0,0,0,0.8)] mb-[7rem] pt-[2rem] rounded-2xl max-[470px]:text-[6rem] ease-in duration-300">
          Michael Cervone
        </h1>
        <h2 className="text-center text-[2.5rem]">Web Developer.</h2>
        <p className="text-center text-[2rem]">
          My passion is making modern responsive websites!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
