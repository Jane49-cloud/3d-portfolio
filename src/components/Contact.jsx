import { motion } from "framer-motion";
import { useState } from "react";

const email = "janendirangu49@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-noise" aria-hidden="true" />
      <div className="section-inner contact-inner">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        ><span>04</span> Contact</motion.p>
        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 46, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.18 }}
          transition={{ duration: 0.7, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h2>Say hello.</h2>
            <p>
              If my experience sounds useful for your team or product, send me
              a note. I&apos;m always happy to have a straightforward conversation
              about the work.
            </p>
          </div>
          <div className="contact-actions">
            <a className="contact-email" href={`mailto:${email}`}>
              <small>Write to me</small>
              <span>{email}</span>
              <i aria-hidden="true">↗</i>
            </a>
            <button type="button" onClick={copyEmail}>
              {copied ? "Copied to clipboard" : "Copy email address"}
            </button>
          </div>
        </motion.div>

        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span><i className="status-dot" /> Kenya based · open to product teams</span>
          <nav aria-label="Social links">
            <a href="https://github.com/Jane49-cloud" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/ndirangu-jane-692477256/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://dev.to/jane49cloud" target="_blank" rel="noreferrer">Dev.to ↗</a>
          </nav>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
