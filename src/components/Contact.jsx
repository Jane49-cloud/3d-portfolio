import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Socials from "./socials";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:janendirangu49@gmail.com?subject=${subject}&body=${body}`;

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative">
      <div className="flex flex-col gap-5">
        <p className={styles.sectionSubText}>Contact</p>
        <h2 className={styles.sectionHeadText}>Let’s build something iconic.</h2>
      </div>

      <div className="mt-8 flex flex-col gap-8 xl:flex-row">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="glass-border w-full xl:max-w-3xl"
        >
          <div className="glass-panel rounded-[28px] px-5 sm:px-8 py-7 sm:py-10">
            <h3 className="text-xl font-semibold text-white">Project inquiry</h3>
            <p className="mt-2 text-xs text-white/60">
              Share a little about your goals and I’ll respond within 24 hours.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-6"
            >
              <label className="flex flex-col gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/60">
                  Your name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/60">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/60">
                  Project details
                </span>
                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-fit items-center justify-center rounded-full bg-gradient-to-r from-accent to-indigo-500 px-7 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Send message
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-1"
        >
          <Socials />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
