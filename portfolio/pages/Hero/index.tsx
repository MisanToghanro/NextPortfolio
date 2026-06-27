import Link from "next/link";
import { motion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

const MotionLink = motion(Link)

const HomePage = () => {
  return (
    <motion.section
  variants={container}
  initial="hidden"
  animate="show"
      id="home"
      className="min-h-screen flex items-center justify-center px-6 mb-10 md:mb-0"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

        {/* Small Badge */}
        <motion.span variants={item} className="inline-flex items-center gap-2 rounded-full border border-[#41C9B9]/30 bg-[#41C9B9]/10 px-5 py-2 text-sm font-medium text-[#41C9B9] shadow-[0_0_30px_rgba(65,201,185,0.15)] mb-4">
          <span className="h-2 w-2 rounded-full bg-[#41C9B9] animate-pulse"></span>
            Frontend Developer
          </motion.span>

        {/* Main Heading */}
        <motion.h1
        animate={{opacity:1, y:0}}
        initial={{opacity:0, y:30}}
        transition={{duration:0.8, delay:1, ease:"easeOut"}}
        variants={item}
         className="text-4xl md:text-7xl font-bold leading-tight text-[#5648B7]">
          Learn,
          <span className="text-[#41C9B9]">
            Build
          </span>
          & Deploy
        </motion.h1>

        {/* Description */}
         <motion.p variants={item} className="mt-8 max-w-2xl text-lg md:text-xl leading-8 text-gray-500 ">
  I build modern, responsive web applications with{" "}
  <span className="font-semibold text-[#5648B7]">
    React, Next.js, TypeScript
  </span>{" "}
  and{" "}
  <span className="font-semibold text-[#5648B7]">
    Tailwind CSS
  </span>
  . Continuously learning and transforming ideas into intuitive digital experiences through clean code and thoughtful design.
</ motion.p >

        {/* CTA Buttons */}
        <motion.div variants={item} className="mt-12 flex flex-col sm:flex-row gap-4">

          <MotionLink
          animate={{x:0, opacity:0.99}}
          initial={{x:-100, opacity:0}}
          transition={{type:"spring", stiffness:100, duration:0.1, delay:1}}
            href="#services"
            className="rounded-full bg-[#5648B7] px-8 py-4 text-white font-medium transition hover:scale-105 hover:bg-[#473aa3]"
          >
            View My Work
          </MotionLink>

          <MotionLink
          animate={{x:0, opacity:0.99}}
          initial={{x:100, opacity:0}}
          transition={{type:"spring", stiffness:100, duration:0.1, delay:1}}
            href="#contact"
            className="rounded-full border border-[#5648B7] px-8 py-4 font-medium text-[#5648B7] transition hover:bg-[#5648B7] hover:text-white"
          >
            Let's Connect
          </MotionLink>

        </motion.div>

      </div>
    </motion.section>
  );
};

export default HomePage;
