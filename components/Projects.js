import { useRef } from "react";
import { motion, useSpring, useScroll } from "framer-motion";
import Project from "./Project";
import { projectData } from "../projectData";

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
  });

  return (
    <div className="relative" ref={ref} id="projects">
      <div className="sticky top-0 left-0 pt-[25px] text-center text-orange-500 text-5xl z-10 bg-primary">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="h-3 bg-accent" />
      </div>
      {projectData.map((item) => (
        <Project key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Projects;
