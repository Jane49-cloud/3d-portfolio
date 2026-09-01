import { motion } from "framer-motion";
import portrait from "../assets/slack2-profile-optimized.jpg";
import { services } from "../constants";

const About = () => (
  <section className="about" id="about">
    <div className="section-inner">
      <div className="about-grid">
        <motion.div
          className="about-portrait"
          initial={{ opacity: 0, rotate: -2, y: 26 }}
          whileInView={{ opacity: 1, rotate: -1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          whileHover={{ rotate: 0, scale: 1.01 }}
        >
          <img src={portrait} alt="Jane Ndirangu, full-stack developer" />
          <div className="portrait-caption">
            <span>Jane Ndirangu</span>
            <small>Software engineer · Kenya</small>
          </div>
          <span className="portrait-stamp">Build<br />+ ship</span>
        </motion.div>

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <p className="eyebrow"><span>02</span> How I work</p>
          <h2>I like seeing<br /><em>the full picture.</em></h2>
          <div className="about-text">
            <p>
              I&apos;m a software engineer with a background in Business
              Information Technology. My focus is React Native and Expo, backed
              by hands-on experience across React, APIs, PostgreSQL and
              production infrastructure.
            </p>
            <p>
              I tend to ask how the full journey works: what the user is trying
              to do, what the API returns, where the data comes from and what
              happens after release. That context helps me make better choices
              in the part I am building.
            </p>
          </div>
          <blockquote>
            <span>My working principle</span>
            Understand what the product is for, make the next step clear, and
            leave the code easier to follow than I found it.
          </blockquote>
        </motion.div>
      </div>

      <motion.div
        className="services-list"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        {services.map((service) => (
          <motion.article
            key={service.number}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <span>{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);

export default About;
