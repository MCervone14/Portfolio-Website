import Image from "next/image";
import React from "react";
import { skillIcons, skillImages } from "../Helpers/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center mb-10">
      <div className="w-full h-[600px] flex background border-accent pb-10 pt-4 bg-primary">
        <div className="mb-4 relative flex flex-col md:flex-row items-center gap-28">
          <div className="flex flex-col flex-wrap pb-5 justify-center text-secondary">
            <span className="text-4xl text-white font-bold absolute top-0 left-10">
              Hello, I&#39;m
            </span>
            <h1 className="text-9xl px-4 font-bold pt-20 ease-in duration-300">
              Michael Cervone
            </h1>
            <p className="text-center text-secondary text-5xl mb-4">
              Front-End Developer
            </p>
            <p className="text-center text-3xl text-secondary italic px-2 ">
              “Develop success from failures.” — Dale Carnegie
            </p>
          </div>
          <Image
            src="/me.jpg"
            alt="Web Developer Michael Cervone"
            width={300}
            height={300}
            className="rounded-full mx-auto object-cover h-80 w-80 shadow-2xl z-20"
          />
        </div>
      </div>
      <div className="bg-secondary absolute bottom-0 rounded-xl p-4 hidden md:block">
        <ul className="flex flex-wrap gap-4 w-full justify-center items-center p-5">
          {skillIcons.map((skill, index) => (
            <li key={index}>
              <FontAwesomeIcon
                icon={skill.icon}
                className={`text-primary fa-4x ${skill.styles}`}
              />
            </li>
          ))}
          {skillImages.map((skill, index) => (
            <li key={index}>
              <Image
                src={skill.icon}
                width={80}
                height={80}
                className=""
                alt={skill.credit}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="shadow-lg h-[70px] bg-secondary w-full hidden md:block" />
    </div>
  );
};

export default HeroSection;
