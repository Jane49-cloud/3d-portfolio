import React from "react";
import { motion } from "framer-motion";
import RobotImage from "../assets/robot.png";
import compSite from "../assets/compsight.png";
import { styles } from "../styles";

const Robot = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 w-full p-3">
      <div className="flex flex-col items-center  rounded ">
        <motion.img
          src={compSite}
          className="w-40 h-56 sm:w-64 sm:h-80  object-cover"
          alt=""
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
        <p className={`mt-2 text-white`}>Compelling Web Designs</p>
      </div>
      <div className="flex flex-col items-center sm:mr-10 bg-yellow-500 "></div>
      <div className="flex flex-col items-center sm:mr-10 rounded ">
        <motion.img
          src={RobotImage}
          alt="robot"
          className="w-40 h-56 sm:w-64 sm:h-80 object-cover"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
        <p className={`mt-2 text-white`}>Business Automation</p>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[100px] max-w-7xl mx-auto px-5 sm:px-10 flex flex-row items-start gap-5 pb-2">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-500" />
          <div className="w-0 sm:h-80 h-40 bg-gradient-to-b from-purple-500 to-indigo-700" />
        </div>

        <div>
          <h3 className={`${styles.sectionHeadText} text-white`}>
            Hi, I'm <span className="text-purple-500">Jane</span>
          </h3>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I develop websites, APIs, and user interfaces
          </p>
          <p className="text-white mt-2">
            I specialize in creating engaging user experiences that drive
            business growth.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <Robot />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-end items-center px-5">
        <a href="#about">
          <div className="w-12 h-14 rounded-3xl border-4 border-indigo-700 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-indigo-700 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
