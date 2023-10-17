import { skillIcons } from "./Helpers/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../public/MikeCPic2.png";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 1558,
  },
  animate: {
    x: "-250%",
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <section>
      <div className="h-full bg-primary flex flex-col lg:flex-row">
        <div className="w-full h-full flex-1 flex justify-center md:max-w-screen-2xl">
          <motion.div
            className="flex flex-col justify-center items-center md:items-start text-secondary gap-10 py-5"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="text-7xl md:text-8xl text-center"
              variants={textVariants}
            >
              Michael Cervone
            </motion.h1>
            <motion.p
              className="text-4xl md:text-5xl text-center"
              variants={textVariants}
            >
              Front-End Developer
            </motion.p>
            <motion.div variants={textVariants} className="flex">
              <Link href="#projects">
                <motion.button
                  className="p-5 border-2 z-10 border-secondary rounded-xl bg-transparent text-secondary mr-5 cursor-pointer font-light hover:text-accent hover:border-accent"
                  variants={textVariants}
                >
                  See the Latest Works
                </motion.button>
              </Link>
              <Link href="#contact">
                <motion.button
                  className="p-5 border-2 z-10 border-secondary rounded-xl bg-transparent text-secondary mr-5 cursor-pointer font-light hover:text-accent hover:border-accent"
                  variants={textVariants}
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
            <motion.div
              className="flex flex-wrap justify-center items-center font-bold bg-secondary w-fit px-3 py-5 rounded-xl"
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              {skillIcons.map((skill, index) => (
                <FontAwesomeIcon
                  icon={skill.icon}
                  className={`text-primary fa-2xl pr-6 ${skill.styles}`}
                  key={index}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
        <div className="flex-1 relative">
          <Image
            fill
            src={profilePic}
            alt="Front-End Developer Michael Cervone"
            className="object-contain"
            blurDataURL="../public/MikeCPic2.png"
            placeholder="blur"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
