import { motion } from "framer-motion";
import { caseStudies, projects } from "../constants";

const CaseStudy = ({ study, index }) => (
  <motion.article
    className={index === 0 ? "case-study featured" : "case-study"}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -4 }}
  >
    <header className="case-study-header">
      <div>
        <p className="project-eyebrow">{study.number} / {study.label}</p>
        <h3>{study.name}</h3>
      </div>
    </header>

    <div className="case-study-body">
      <div className="case-summary">
        <p className="case-role">{study.role}</p>
        <p>{study.summary}</p>
        <div className="case-outcome">
          <span>Outcome</span>
          <strong>{study.outcome}</strong>
        </div>
      </div>

      <div className="case-scope">
        <p className="case-label">What I worked on</p>
        <ul>
          {study.scope.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>

    <div className="case-challenge">
      <span>One challenge</span>
      <p>{study.challenge}</p>
    </div>

    <footer className="case-footer">
      <ul aria-label={study.name + " technologies"}>
        {study.stack.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </footer>
  </motion.article>
);

const Works = () => (
  <section className="work identity-work" id="work">
    <div className="section-inner">
      <motion.header
        className="section-heading work-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div>
          <p className="eyebrow"><span>01</span> Selected work</p>
          <h2>A closer look at<br /><em>two products.</em></h2>
        </div>
        <p>
          LifeFast is a personal project I took from an idea to Google Play.
          Ziya is team-based fintech work across a mobile app and an
          administration dashboard.
        </p>
      </motion.header>

      <div className="case-study-list">
        {caseStudies.map((study, index) => (
          <CaseStudy key={study.name} study={study} index={index} />
        ))}
      </div>

      <motion.div
        className="earlier-work"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55 }}
      >
        <motion.div
          className="earlier-work-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <p className="eyebrow">Other projects</p>
          <p>A few smaller applications from different stages of my development work.</p>
        </motion.div>
        <motion.div
          className="earlier-work-list"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          variants={{ show: { transition: { staggerChildren: 0.07 } } }}
        >
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.source_code_link}
              target="_blank"
              rel="noreferrer"
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -4 }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{project.name}</strong>
              <small>{project.eyebrow}</small>
              <i aria-hidden="true">↗</i>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Works;
