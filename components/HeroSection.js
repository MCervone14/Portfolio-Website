import Image from "next/image";
import React from "react";
import { skillIcons, skillImages } from "./Tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center background mb-[3rem] border-b-[3px] border-accent bg-lightPrimary py-[10rem]">
      <div className="text-center mb-[1rem] relative">
        <span className="text-[2rem] font-bold text-secondary absolute top-0 left-[6%]">
          Hello, I&#39;m
        </span>
        <div className="flex flex-wrap gap-8 items-center justify-center pb-5">
          <h1 className="lg:text-[8rem] md:text-[6rem] sm:text-[4rem] px-4 font-bold text-secondary mb-8 pt-4 rounded-2xl max-[470px]:text-[6rem] ease-in duration-300">
            Michael Cervone
          </h1>
          <Image
            src="/me.jpg"
            alt="Developer Michael Cervone"
            width={150}
            height={200}
            className="rounded-full h-[140px] object-cover "
          />
        </div>
        <h2 className="text-center text-secondary text-[3.5rem]">
          Web Developer
        </h2>
      </div>
      <p className="text-center text-[2rem] text-secondary italic">
        “Develop success from failures.” — Dale Carnegie
      </p>
      <div className="w-full px-5">
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
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                damping: 5,
                stiffness: 40,
                restDelta: 0.001,
                duration: 0.3,
              }}
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
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                damping: 5,
                stiffness: 40,
                restDelta: 0.001,
                duration: 0.3,
              }}
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
