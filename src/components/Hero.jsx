import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import robot from "../assets/robot.png";

const Hero = () => {
  return (
    <section className={`relative w-full min-h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Jane</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop , APIs, user interfaces <br className="sm:block hidden" />
            and web applications
          </p>
        </div>
      </div>

      <div className="flex absolute inset-0 top-[350px] mx-auto w-full  justify-center flex-wrap px-3">
        <div>
          <br />
          <p className="text-lg font-medium">
            "Software is a great combination of artistry and engineering."
          </p>
          <p className="text-sm text-gray-600">- Bill Gates</p>
        </div>
        <div className="mt-5 sm:mt-0">
          <motion.img
            src={robot}
            alt="Robot"
            className="w-48 h-auto sm:w-64 mb-4 sm:mb-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
