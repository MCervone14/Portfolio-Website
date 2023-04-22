import Image from "next/image";
import React from "react";
import { skillIcons, skillImages } from "./Tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center background mb-[3rem] border-b-[3px] border-accent bg-lightPrimary py-[6rem]">
      <div className="text-center mb-[1rem] relative">
        <span className="text-[2rem] font-bold text-secondary absolute top-0 left-[6%]">
          Hello, I&#39;m
        </span>
        <h1 className=" flex flex-wrap gap-8 items-center justify-center lg:text-[8rem] md:text-[6rem] sm:text-[4rem] px-4 font-bold text-secondary mb-8 pt-4 rounded-2xl max-[470px]:text-[6rem] ease-in duration-300">
          Michael Cervone
          <Image
            src="/me.jpg"
            alt="Developer Michael Cervone"
            width={150}
            height={150}
            className="rounded-full"
          />
        </h1>
        <h2 className="text-center text-secondary text-[3.5rem]">
          Web Developer
        </h2>
      </div>
      <p className="text-center text-[2rem] text-secondary italic">
        “Develop success from failures. Discouragement and failure are two of
        the surest stepping stones to success.” —Dale Carnegie
      </p>
      <div className="w-full">
        <ul className="flex flex-wrap gap-4 mt-20 w-full justify-around items-center pb-10">
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
