import { GitHub, LinkedIn, LogoDev } from "@mui/icons-material";
import React from "react";
import logo from "./logo.png";

const socialLinks = [
  {
    label: "LinkedIn",
    icon: <LinkedIn fontSize="medium" />,
    href: "https://www.linkedin.com/in/ndirangu-jane-692477256/",
    accent: "from-[#60a5fa] to-[#7c3aed]",
  },
  {
    label: "Dev community",
    icon: <LogoDev fontSize="medium" />,
    href: "https://dev.to/jane49cloud",
    accent: "from-[#f472b6] to-[#facc15]",
  },
  {
    label: "GitHub",
    icon: <GitHub fontSize="medium" />,
    href: "https://github.com/Jane49-cloud",
    accent: "from-[#22d3ee] to-[#2dd4bf]",
  },
];

const Socials = () => {
  return (
    <div className="glass-border h-full rounded-[28px] p-[1.5px]">
      <div className="glass-panel relative h-full rounded-[26px] px-8 py-10">
        <div className="absolute right-10 top-10 h-28 w-28 rounded-full bg-accent/30 blur-2xl" />
        <div className="absolute -left-12 bottom-10 h-36 w-36 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative z-10 flex flex-col gap-8">
          <div className="flex items-center gap-6">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border border-white/20">
              <img src={logo} alt="Jane Ndirangu" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Stay connected</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Let’s create your next flagship experience
              </h3>
            </div>
          </div>

          <ul className="flex flex-col gap-3">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() => window.open(item.href, "_blank")}
                  className={`group flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-left text-white/70 transition hover:border-white/30 hover:bg-white/10`}
                >
                  <span className="flex items-center gap-4 text-sm font-medium text-white">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${item.accent} text-white shadow-lg shadow-black/30`}>
                      {item.icon}
                    </span>
                    {item.label}
                  </span>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/40 group-hover:text-white/70">
                    Open
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-xs text-white/70">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Availability</p>
            <p className="mt-2 text-white/80">Currently booking select collaborations for Q3–Q4 2024.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
