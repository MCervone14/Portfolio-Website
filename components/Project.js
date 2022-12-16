import React from "react";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
  return (
    <div className="pb-[10.188rem] flex flex-col justify-center items">
      <div className="mx-auto w-1/2 flex justify-end max-[960px]:flex-col max-[960px]:w-[100%] max-[960px]:gap-10 max-[960px]:items-center gap-[14rem] mb-[3rem]">
        <div className="flex flex-col mr-1 gap-3 text-[2rem] max-[960px]:flex relative">
          <Image
            src="/earth64.png"
            width={64}
            height={64}
            className="absolute top-0 left-[-37%]"
            alt="Our Planet Earth Logo"
          />
          <h2>Our Planet Earth</h2>
          <span className="text-sm uppercase">Climate Blogging Website</span>
        </div>
        <div className="text-[24px] w-1/2 max-[596px]:w-2/3">
          <h4 className="mb-10 ">
            Designed and Implemented using Next.js and Tailwind.
          </h4>
          <div className="flex flex-col items-start gap-1">
            <Link
              className="flex items-center gap-[20px] bg-[#FF7961] text-white hover:bg-[#FF6347] active:bg-[##FF6347] font-bold  uppercase text-xs px-2 py-1 
            rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              href="https://ourplanetearth.eco"
            >
              View Project{" "}
              <Image
                src="/right-arrow.svg"
                width={33}
                height={33}
                alt="Right Arrow Icon made by Kiran Shastry on Iconscout.com"
                class="tipper"
              />{" "}
            </Link>
            <Link
              className="flex items-center gap-[23.5px] justify-between bg-[#FF7961] text-white hover:bg-[#FF6347] active:bg-[#FF6347] font-bold uppercase text-xs px-2 py-1 
            rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              href="https://github.com/MCervone14"
            >
              View Github
              <Image
                src="/right-arrow.svg"
                width={33}
                height={33}
                alt="Right Arrow Icon made by Kiran Shastry on Iconscout.com"
              />{" "}
            </Link>
          </div>
        </div>
      </div>
      <Image
        src="/FullOurPlanetEarthPicture.png"
        alt="Our Planet Earth website"
        width={900}
        height={450}
        id="project"
        objectFit="cover"
        className="w-[900px] mx-auto rounded-lg border-8 border-[black]"
      />
    </div>
  );
};

export default Project;
