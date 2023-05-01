import Image from "next/image";
import React from "react";
import { skillIcons, skillImages } from "./Helpers/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center background border-accent pb-10 pt-40">
      <div className="text-center mb-[1rem] relative">
        <span className="text-[2rem] font-bold text-[black]/90 absolute top-0 left-[6%]">
          Hello, I&#39;m
        </span>
        <div className="flex flex-wrap gap-8 items-center justify-center pb-5">
          <h1 className="lg:text-[10rem] md:text-[8rem] sm:text-[4rem] px-4 font-bold text-black mb-8 pt-4 rounded-2xl max-[470px]:text-[6rem] ease-in duration-300">
            Michael Cervone
          </h1>
          <Image
            src="/me.jpg"
            alt="Developer Michael Cervone"
            width={150}
            height={200}
            className="rounded-full h-[140px] object-cover"
          />
        </div>
        <h2 className="text-center text-secondary text-[3.5rem] text-[black]/90">
          Web Developer
        </h2>
      </div>
      <p className="text-center text-[2rem] text-[black]/90 italic ">
        “Develop success from failures.” — Dale Carnegie
      </p>
      <div className="mx-5 w-[70%]">
        <ul className="flex flex-wrap gap-4 mt-20 w-full  justify-around items-center pb-10 mx-auto">
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
