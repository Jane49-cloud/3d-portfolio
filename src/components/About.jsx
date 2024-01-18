import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
    <div className="  xs:w-[250px] w-full">
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className="w-[90%] blue-white-gradient  p-[1px] rounded-[8px] shadow-card"
        >
            <div
                options={{
                    max: 2,
                    scale: 1,
                    speed: 300,
                }}
                className="bg-tertiary rounded-[8px] h-[280px] flex justify-evenly items-center flex-col border-b-4"
            >
                {/* <div className="bg-yellow-200 w-full item-center flex justify-center ">
                   
                </div>

                <div>
                    {' '}
                    
                </div> */}

                {/* upper */}
                <div className="w-full h-1/2  flex justify-center items-center">
                    <img src={icon} alt="web-development" className="w-16 h-16 object-contain " />
                </div>
                <div className="w-full h-1/2 pt-4">
                    <h3 className="text-white text-[20px] font-bold  flex items-center justify-center">
                        {title}
                    </h3>
                </div>
            </div>
        </motion.div>
    </div>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                This section showcases the services I offer, including web development, React
                development, and content writing. I specialize in creating scalable and secure web
                applications and dynamic user interfaces using the latest technologies and
                frameworks.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, 'about');
