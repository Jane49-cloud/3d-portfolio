import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.25, 0.85)}
      className="group relative mt-12 h-full"
    >
      <div className="glass-border rounded-[26px] p-[1.5px] transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-glow">
        <div className="glass-panel flex min-h-[260px] flex-col items-center justify-center gap-6 rounded-[24px] px-8 py-10 text-center">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
            <img src={icon} alt={title} className="h-12 w-12 object-contain" />
            <span className="absolute -inset-3 rounded-3xl border border-white/5" />
          </div>
          <h3 className="text-[18px] font-semibold text-white">{title}</h3>
          <p className="text-sm text-white/60">
            Bespoke strategy, seamless execution, and measurable value for every
            product touchpoint.
          </p>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section className="relative">
      <motion.div variants={textVariant()} className="space-y-4">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Premium craftsmanship.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 max-w-3xl text-base leading-7 text-white/70"
      >
        I translate complex business goals into elevated, human-centered
        experiences. From brand-first storytelling to scalable engineering, I
        partner with teams to launch premium products that feel intentional at
        every interaction.
      </motion.p>

      <div className="mt-10 grid gap-6 md:grid-cols-3 xl:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
