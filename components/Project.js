import { useRef } from "react";
import Link from "next/link";
import { motion, useTransform, useScroll } from "framer-motion";

const Project = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [-1, 1, 0.8]);

  return (
    <motion.div style={{ opacity }} className="my-40">
      <div className="flex items-center justify-center w-full h-full overflow-hidden">
        <div className="max-w-screen-2xl h-full m-auto flex flex-col lg:flex-row px-5 items-center justify-center gap-12">
          <div className="flex-1 h-[50%]" ref={ref}>
            <motion.img
              src={item.image}
              alt="project images"
              className="w-full h-full object-cover border-4 border-orange-500 rounded-2xl"
            />
          </div>
          <motion.div className="flex-1 flex flex-col gap-8">
            <h2 className="text-5xl">{item.title}</h2>
            <p className="text-2xl">{item.desc}</p>
            <div className="flex gap-5">
              <Link
                target="_blank"
                href={item.website}
                className="bg-orange-500 text-center border-none font-bold rounded-2xl p-3 w-32 cursor-pointer hover:bg-primary hover:text-secondary"
              >
                See Website
              </Link>
              <Link
                target="_blank"
                href={item.code}
                className="bg-orange-500 border-none text-center font-bold rounded-2xl p-3 w-32 cursor-pointer hover:bg-primary hover:text-secondary"
              >
                See Docs
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
