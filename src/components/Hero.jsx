import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/pic.jpeg";
import resume from "../assets/resume.pdf"; // Make sure the path to your PDF is correct
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ml-4 lg:ml-8">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Shakti Priya
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Aspiring Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              href={resume}
              download="Shakti_Priya_Resume.pdf"
              className="mt-4 inline-block bg-purple-900 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-purple-600 transition-colors duration-300"
            >
              Download Resume
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-center mt-8 lg:mt-0">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="max-w-xs"
              src={profilePic}
              alt="Shakti Priya"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
