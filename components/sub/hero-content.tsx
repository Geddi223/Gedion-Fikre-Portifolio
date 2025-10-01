"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Hey, I&apos;m_______{" "}
            </span>{" "}
            Gedion{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Fikre
            </span>
          </span>   
            
        </motion.div>
        
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        > <><p>BSc in Information Systems.</p></>
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Skilled in building responsive, user-friendly applications and integrating backend APIs. Passionate about problem-solving and eager to contribute to innovative digital solutions.
        </motion.p>

        <motion.div variants={slideInFromLeft(1)} className="flex flex-row items-center gap-4">
          <motion.a
            href="/Gedion Fikre cv.pdf"
            download
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] inline-flex items-center justify-center"
          >
            Download CV
            <span className="ml-2">
              <Image
                src="/download-icon.svg"
                alt="download icon"
                width={15}
                height={15}
                draggable={false}
                className="inline-block"
              />
            </span>
          </motion.a>

          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[700px] inline-flex items-center justify-center"
          >
            Contact Me
          </motion.button>
        </motion.div>
        
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
