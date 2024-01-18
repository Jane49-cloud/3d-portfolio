import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import robot from '../assets/robot.png';
import code from '../assets/codep.jpg';

const Hero = () => {
    return (
        <section className={`relative w-full min-h-screen mx-auto  max-w-7xl mx-auto$`}>
            <div
                className={`absolute inset-0 top-[120px]   max-w-7xl mx-auto${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5 ">
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

            <div className=" absolute inset-0  top-[260px] md:top-[350px]  w-full   px-3  justify-between max-w-[90rem] mx-auto mt-10 flex flex-wrap gap-2 rounded-[20px] bg-opacity-100 items-center">
                <div className="mt-5 sm:mt-0">
                    <img
                        src={code}
                        alt="Robot"
                        className=" h-64 sm:w-64 mb-4 sm:mb-0 rounded-full object-cover hidden md:block"
                    />
                </div>
                <div className="bg-black-200 w-full lg:w-[20%] mt-4 p-10 rounded-[10px]  shadow-lg lg:h-[200px] flex-grow">
                    <br />
                    <p className="text-lg font-medium ">
                        "Coding is not just about commands and algorithms; it's a symphony of
                        creativity and logic, where every line of code tells a story, and every
                        function paints a picture of innovation."
                    </p>
                    <p className="text-sm text-gray-600">- Unknown Developer</p>
                </div>

                <div className=" sm:mt-0 bg-none">
                    <img src={robot} alt="Robot" className=" h-auto sm:w-64 mb-4 sm:mb-0" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
