import Image from "next/image";
import React from "react";
import { skillIcons, skillImages } from "./Tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

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
      <div className="w-full">
        <ul className="flex flex-wrap gap-4 mt-20 w-full justify-around items-center">
          {skillIcons.map((skill, index) => (
            <motion.li
              drag
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }}
              key={index}
            >
              <FontAwesomeIcon
                icon={skill.icon}
                className={`text-primary fa-4x ${skill.styles}`}
              />
            </motion.li>
          ))}
          {skillImages.map((skill, index) => (
            <motion.li
              drag
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }}
              key={index}
            >
              <Image
                src={skill.icon}
                width={80}
                height={80}
                className=""
                alt={skill.credit}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
