import { motion } from "framer-motion";
import { workHistory } from "../constants";

const WorkHistory = () => (
  <section className="work-history" id="history">
    <div className="section-inner">
      <motion.header
        className="history-heading"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow"><span>02</span> Work history</p>
        <h2>Different teams.<br /><em>Real responsibility.</em></h2>
        <p>
          A practical record of the environments I have worked in—from product
          teams and customer work to financial systems and multi-vendor commerce.
        </p>
      </motion.header>

      <div className="history-route" aria-label="Jane Ndirangu work history">
        <svg className="history-path" viewBox="0 0 1200 600" aria-hidden="true" preserveAspectRatio="none">
          <defs>
            <linearGradient id="history-gradient" x1="0" x2="1">
              <stop offset="0" stopColor="#a65d36" />
              <stop offset="1" stopColor="#d18a57" />
            </linearGradient>
          </defs>
          <path d="M 18 505 C 220 530, 245 108, 475 208 S 750 520, 910 305 S 1075 104, 1182 132" />
          <path className="history-path-active" d="M 18 505 C 220 530, 245 108, 475 208 S 750 520, 910 305 S 1075 104, 1182 132" />
        </svg>

        <div className="history-cards">
          {workHistory.map((job, index) => (
            <motion.article
              key={job.company}
              className={`history-card history-card-${index + 1}`}
              initial={{ opacity: 0, y: index % 2 ? 36 : -36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
            >
              <div className="history-card-top">
                <span className="history-number">{job.number}</span>
                <span>{job.period}</span>
              </div>
              <p>{job.focus}</p>
              <h3>{job.company}</h3>
              <strong>{job.role}</strong>
              <div className="history-divider" />
              <p className="history-summary">{job.summary}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WorkHistory;
