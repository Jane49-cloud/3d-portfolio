import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import portrait from "../assets/slack2-profile-optimized.jpg";

const route = [
  { number: "01", title: "Interfaces", detail: "Mobile · web" },
  { number: "02", title: "Systems", detail: "APIs · data · integrations" },
  { number: "03", title: "Delivery", detail: "Infrastructure · releases" },
];

const fade = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Africa/Nairobi",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    updateTime();
    const timer = window.setInterval(updateTime, 30000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero identity-hero" id="top">
      <div className="hero-grain" aria-hidden="true" />
      <div className="coffee-moment" aria-hidden="true">
        <span className="coffee-steam steam-one" />
        <span className="coffee-steam steam-two" />
        <span className="coffee-steam steam-three" />
        <span className="coffee-saucer" />
        <span className="coffee-cup" />
        <span className="coffee-ground ground-one" />
        <span className="coffee-ground ground-two" />
        <span className="coffee-ground ground-three" />
        <span className="coffee-ground ground-four" />
      </div>

      <div className="hero-layout identity-layout">
        <motion.div
          className="hero-copy identity-copy"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={fade} className="hero-kicker">
            <span className="status-dot" /> Jane M. Ndirangu · Kenya
          </motion.div>

          <motion.h1 variants={fade} transition={{ duration: 0.7 }}>
            Hi, I&apos;m Jane.
            <em>I build digital products.</em>
          </motion.h1>

          <motion.div variants={fade} className="identity-intro">
            <p className="identity-position">
              I&apos;m a software engineer working across mobile, web and the
              systems behind them.
            </p>
            <p>
              I&apos;ve worked across mobile apps, web dashboards, APIs, databases
              and releases. I like understanding the whole flow and helping the
              pieces make sense together.
            </p>
          </motion.div>

          <motion.div variants={fade} className="hero-actions identity-actions">
            <a className="button button-accent" href="#work">
              See my work <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="mailto:janendirangu49@gmail.com">
              Email me <span aria-hidden="true">↗</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="ownership-board"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.16 }}
          aria-label="A quick overview of Jane's work"
        >
          <div className="ownership-topline">
            <span>A QUICK OVERVIEW</span>
            <span>NAIROBI {time} EAT</span>
          </div>

          <div className="ownership-person">
            <div className="ownership-photo">
              <img src={portrait} alt="Jane Ndirangu" />
            </div>
            <div>
              <small>What I work on</small>
              <strong>Product engineering across the stack</strong>
              <span>Interfaces · APIs · data · delivery</span>
            </div>
          </div>

          <div className="ownership-route">
            {route.map((item) => (
              <div key={item.number}>
                <span>{item.number}</span>
                <div>
                  <strong>{item.title}</strong>
                  <small>{item.detail}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="ownership-proof">
            <div><strong>Mobile</strong><span>Apps people carry</span></div>
            <div><strong>Web</strong><span>Tools teams use</span></div>
            <div><strong>Backend</strong><span>Enough to follow the data</span></div>
          </div>

          <p className="ownership-note">
            Usually somewhere between the app, the API, and a cup of coffee.
          </p>
        </motion.div>
      </div>

      <div className="hero-strip identity-strip" aria-label="Jane's engineering focus">
        <span><b>01</b> Mobile & web</span><i>·</i>
        <span><b>02</b> APIs & data</span><i>·</i>
        <span><b>03</b> Delivery & infrastructure</span>
      </div>
    </section>
  );
};

export default Hero;
