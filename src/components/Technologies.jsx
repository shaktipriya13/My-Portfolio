import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiMongodb,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiGit,
  SiMysql,
  SiCplusplus,
  SiC,
  SiTailwindcss,
} from "react-icons/si";
import { FaNodeJs, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiC className="text-6xl text-blue-600" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCplusplus className="text-6xl text-blue-600" />
        </motion.div>
        <motion.div
        variants={iconVariants(2.7)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-6xl text-orange-600" />
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-6xl text-yellow-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(3.2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiHtml5 className="text-6xl text-orange-600" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3.4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCss3 className="text-6xl text-blue-600" />
        </motion.div>
        <motion.div
        variants={iconVariants(3.9)}
        initial="initial"
        animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-6xl text-yellow-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiBootstrap className="text-6xl text-purple-600" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4.2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGit className="text-6xl text-red-600" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGithub className="text-6xl" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.8)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-6xl text-green-500" />
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-6xl text-green-500" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3.3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-6xl text-cyan-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(5.7)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-6xl" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.8)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-6xl text-blue-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
