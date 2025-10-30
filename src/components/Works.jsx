import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => (
  <motion.article
    variants={fadeIn("up", "spring", index * 0.12, 0.85)}
    className="group relative flex h-full flex-col overflow-hidden rounded-[28px]"
  >
    <div className="glass-border rounded-[28px] p-[1.5px] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-glow md:h-[450px]">
      <div className="glass-panel flex h-full flex-col justify-between rounded-[26px] p-6">
        <div className="relative h-56 w-full overflow-hidden rounded-[22px]">
          <img
            src={image}
            alt={`${name} preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <button
            type="button"
            onClick={() => window.open(source_code_link, "_blank")}
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:scale-105 hover:bg-white/20"
            aria-label={`Open ${name} source code`}
          >
            <img src={github} alt="GitHub" className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 space-y-3">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-sm leading-6 text-white/70">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white/70 ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.article>
);

const Works = () => {
  return (
    <section className="relative">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Signature builds.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-sm leading-7 text-white/70"
      >
        Selected projects that balance artistry with robust engineering. Each
        launch is a handcrafted journey from concept and brand through to
        maintainable code and premium delivery.
      </motion.p>

      <motion.div
        variants={staggerContainer(0.12, 0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 grid gap-8 md:grid-cols-3"
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Works, "work");
