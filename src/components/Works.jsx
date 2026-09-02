import { motion } from "framer-motion";
import { caseStudies, projects } from "../constants";

const CaseStudy = ({ study, index }) => (
  <motion.article
    className={index === 0 ? "case-study featured" : "case-study"}
    initial={{ opacity: 0, y: 52, scale: 0.985 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: false, amount: 0.1 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -4 }}
  >
    <header className="case-study-header">
      <div>
        <p className="project-eyebrow">{study.number} / {study.label}</p>
        <h3>{study.name}</h3>
      </div>
    </header>

    {study.visuals ? (
      <motion.div
        className="case-product-visuals"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      >
        {study.visuals.map((visual) => (
          <motion.figure
            key={visual.alt}
            variants={{
              hidden: { opacity: 0, y: 24, rotate: 1 },
              show: { opacity: 1, y: 0, rotate: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <img src={visual.src} alt={visual.alt} loading="lazy" />
            <figcaption>{visual.alt.replace("LifeFast ", "")}</figcaption>
          </motion.figure>
        ))}
      </motion.div>
    ) : (
      <motion.div
        className="case-workflow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div><span>01</span><strong>Mobile journeys</strong><small>Members · agents</small></div>
        <i aria-hidden="true">→</i>
        <div><span>02</span><strong>Go APIs</strong><small>Business rules · data</small></div>
        <i aria-hidden="true">→</i>
        <div><span>03</span><strong>Admin oversight</strong><small>Operations · follow-up</small></div>
        <p>Product visuals are omitted to protect internal and customer information.</p>
      </motion.div>
    )}

    {study.visuals && (
      <motion.div
        className="case-architecture"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        aria-label="LifeFast architecture: React Native app to Node.js API to PostgreSQL and supporting services"
      >
        <span>React Native app</span><i>→</i>
        <span>Node.js API</span><i>→</i>
        <span>PostgreSQL</span><i>+</i>
        <span>email · notifications · admin</span>
      </motion.div>
    )}

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
      {study.links && (
        <div className="case-links">
          {study.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      )}
    </footer>
  </motion.article>
);

const Works = () => (
  <section className="work identity-work" id="work">
    <div className="section-inner">
      <motion.header
        className="section-heading work-heading"
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="eyebrow"><span>01</span> Product case studies</p>
          <h2>A closer look at<br /><em>selected work.</em></h2>
        </div>
        <p>
          LifeFast follows an independent product from idea to Google Play.
          Ziya looks at fintech work across a mobile app and an administration
          dashboard. Together, they show different parts of how I work.
        </p>
      </motion.header>

      <div className="case-study-list">
        {caseStudies.map((study, index) => (
          <CaseStudy key={study.name} study={study} index={index} />
        ))}
      </div>

      <motion.div
        className="earlier-work"
        initial={{ opacity: 0, y: 46, scale: 0.99 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="earlier-work-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <p className="eyebrow">Other projects</p>
          <p>Three more projects across commerce, operations, and publishing.</p>
        </motion.div>
        <motion.div
          className="earlier-work-list"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.08 }}
          variants={{ show: { transition: { staggerChildren: 0.07 } } }}
        >
          {projects.slice(0, 3).map((project, index) => (
            <motion.a
              key={project.name}
              href={project.source_code_link}
              target="_blank"
              rel="noreferrer"
              variants={{
                hidden: { opacity: 0, y: 32, scale: 0.97 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className="earlier-work-image">
                <img src={project.image} alt={project.name + " interface"} loading="lazy" />
              </div>
              <div className="earlier-work-title">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{project.name}</strong>
                <i aria-hidden="true">↗</i>
              </div>
              <small>{project.eyebrow}</small>
              <p>{project.description}</p>
              <ul aria-label={project.name + " technologies"}>
                {project.tags.slice(0, 3).map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Works;
