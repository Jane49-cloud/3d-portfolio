import React from "react";

export const Footer = () => {
  return (
    <footer className="relative mt-auto border-t border-white/5 bg-black/20 px-6 py-8 backdrop-blur-xl sm:px-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 text-sm text-white/60 sm:flex-row sm:justify-between">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Jane Ndirangu. Crafted with intention and precision.
        </p>
        <a
          href="tel:+254791055992"
          className="rounded-full border border-white/10 bg-white/5 px-5 py-2 font-medium text-white/80 transition hover:border-white/30 hover:text-white"
        >
          +254&nbsp;791&nbsp;055&nbsp;992
        </a>
      </div>
    </footer>
  );
};
