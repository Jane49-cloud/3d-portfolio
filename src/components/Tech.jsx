import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { notes } from "../constants";

const toolsets = [
  {
    id: "mobile",
    label: "Mobile",
    number: "01",
    title: "Apps for phones and tablets.",
    description: "Android and iOS product journeys from application state through testing and store release.",
    tools: ["React Native", "Expo", "Expo Router", "EAS Build", "Android", "iOS"],
  },
  {
    id: "web",
    label: "Web & state",
    number: "02",
    title: "Interfaces with context.",
    description: "Web products and dependable client-side data flows for complex operations.",
    tools: ["React", "TypeScript", "Redux Toolkit", "RTK Query", "Ant Design"],
  },
  {
    id: "backend",
    label: "Backend & data",
    number: "03",
    title: "Beyond the interface.",
    description: "The services, integrations and data decisions that make the product work.",
    tools: ["Node.js", "Express", "PostgreSQL", "Firebase", "REST APIs", "Go API integration"],
  },
  {
    id: "production",
    label: "Production",
    number: "04",
    title: "Getting it into the world.",
    description: "Infrastructure, external services and release work that turn a build into a product.",
    tools: ["DigitalOcean", "Ubuntu", "Nginx", "SSL", "Google Play"],
  },
];

const Tech = () => {
  const [activeId, setActiveId] = useState(toolsets[0].id);
  const active = toolsets.find((item) => item.id === activeId);

  return (
    <section className="notes-section" id="toolkit">
      <div className="section-inner">
        <motion.header
          className="notes-heading"
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow"><span>03</span> Tools I use</p>
          <div>
            <h2>My working<br /><em>toolkit.</em></h2>
            <p>
              My work moves between the interface and the systems supporting
              it. React Native and Expo are important parts of that range,
              alongside web applications, APIs, data and production delivery.
            </p>
          </div>
        </motion.header>

        <motion.div
          className="toolbox"
          id="toolbox"
          initial={{ opacity: 0, y: 48, scale: 0.975 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="toolbox-intro">
            <p className="eyebrow">Grouped by where they help</p>
            <h2>Pick a layer.</h2>
          </div>
          <div className="toolbox-tabs" role="tablist" aria-label="Technical toolkit">
            {toolsets.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={activeId === item.id}
                className={activeId === item.id ? "active" : ""}
                onClick={() => setActiveId(item.id)}
              >
                <span>{item.number}</span>{item.label}
              </button>
            ))}
          </div>
          <div className="toolbox-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                role="tabpanel"
              >
                <div>
                  <small>{active.label}</small>
                  <h3>{active.title}</h3>
                  <p>{active.description}</p>
                </div>
                <ul>
                  {active.tools.map((tool, index) => (
                    <li key={tool}><span>{String(index + 1).padStart(2, "0")}</span>{tool}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          className="writing-block"
          id="notes"
          initial={{ opacity: 0, y: 46 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="writing-heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            <p className="eyebrow">Writing & notes</p>
            <p>Older notes from learning in public—the trail behind the work.</p>
          </motion.div>
          <motion.div
            className="notes-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            {notes.map((note) => (
              <motion.a
                key={note.number}
                href={note.href}
                target="_blank"
                rel="noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 34, scale: 0.96 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
              >
                <span>{note.number}</span>
                <small>{note.label}</small>
                <h3>{note.title}</h3>
                <i aria-hidden="true">Read on DEV ↗</i>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;
