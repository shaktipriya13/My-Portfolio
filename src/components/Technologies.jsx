import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
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
  SiPostman,
  SiDocker,
  SiVisualstudiocode,
  SiPrisma,
  SiSequelize,
  SiMongoose,
  SiWebrtc,
  SiSocketdotio,
} from "react-icons/si";
import { FaNodeJs, FaGithub } from "react-icons/fa";
import { PiCopilotLogoBold } from "react-icons/pi";
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
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {[
          { Icon: SiC, color: "text-blue-600", duration: 2.2 },
          { Icon: SiCplusplus, color: "text-blue-600", duration: 2.5 },
          { Icon: SiMysql, color: "text-orange-600", duration: 2.7 },
          { Icon: SiPython, color: "text-yellow-400", duration: 3 },
          { Icon: SiHtml5, color: "text-orange-600", duration: 3.2 },
          { Icon: SiCss3, color: "text-blue-600", duration: 3.4 },
          { Icon: SiJavascript, color: "text-yellow-400", duration: 3.9 },
          { Icon: SiBootstrap, color: "text-purple-600", duration: 4 },
          { Icon: SiGit, color: "text-red-600", duration: 4.2 },
          { Icon: FaGithub, color: "", duration: 4.5 },
          { Icon: SiMongodb, color: "text-green-500", duration: 2.8 },
          { Icon: FaNodeJs, color: "text-green-500", duration: 5 },
          { Icon: RiReactjsLine, color: "text-cyan-400", duration: 3.3 },
          { Icon: TbBrandNextjs, color: "", duration: 5.7 },
          { Icon: SiTailwindcss, color: "text-blue-500", duration: 2.8 },
          { Icon: SiPostman, color: "text-orange-500", duration: 3.1 },
          { Icon: SiDocker, color: "text-blue-500", duration: 4.6 },
          { Icon: SiVisualstudiocode, color: "text-blue-500", duration: 3.8 },
          { Icon: PiCopilotLogoBold, color: "text-green-500", duration: 4.3 },
          { Icon: SiPrisma, color: "text-gray-500", duration: 3.5 },
          { Icon: SiSequelize, color: "text-blue-500", duration: 3.7 },
          { Icon: SiMongoose, color: "text-red-500", duration: 4.1 },
          { Icon: TbBrandRedux, color: "text-purple-500", duration: 4.4 },
          { Icon: SiWebrtc, color: "text-red-500", duration: 3.6 },
          { Icon: SiSocketdotio, color: "", duration: 4.8 },
        ].map(({ Icon, color, duration }, index) => (
          <motion.div
            key={index}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <Icon className={`text-6xl ${color}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
