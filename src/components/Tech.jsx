import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <section className="relative">
      <p className="text-xs uppercase tracking-[0.35em] text-accent">Capabilities</p>
      <h2 className="mt-3 text-[30px] font-semibold text-white sm:text-[36px]">A curated toolset</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70">
        Modern frameworks, robust architecture, and elegant UX. I craft every product with a balanced blend of technology and taste, selecting the stack that unlocks fluent, scalable experiences.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.08, 0.65)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="group"
          >
            <div className="flex flex-col items-center gap-4 text-center transition-transform duration-500 group-hover:-translate-y-2">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <p className="text-sm font-medium text-white/80">{technology.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");
