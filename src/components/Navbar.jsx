import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 left-0 right-0 z-50 flex w-full items-center py-4 sm:py-5 transition-all duration-500 ${
        scrolled
          ? "bg-[#080d23]/90 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/40"
          : "bg-[#060b1d]/70 backdrop-blur-lg border-b border-white/5 shadow-lg shadow-black/20"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={Logo}
            alt="logo"
            className="h-10 w-10 rounded-full border border-white/20 object-cover"
          />
          <p className="flex cursor-pointer items-center text-[18px] font-semibold text-white md:text-[20px]">
            Jane
            <span className="ml-2 hidden rounded-full bg-white/10 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.3em] text-accent sm:inline-flex">
              Software Developer
            </span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden list-none items-center gap-10 text-[16px] text-white/70 sm:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative cursor-pointer font-medium transition-colors duration-300 hover:text-white ${
                active === nav.title ? "text-white" : ""
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              <span
                className={`absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-accent via-white/70 to-transparent transition-transform duration-300 ${
                  active === nav.title ? "scale-x-100" : "hover:scale-x-100"
                }`}
              />
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-accent to-indigo-500 px-6 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(79,209,197,0.35)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(79,209,197,0.35)]"
          >
            Let's collaborate
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="flex flex-1 justify-end items-center sm:hidden">
          <button
            className="p-2 -mr-2"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain brightness-200"
            />
          </button>

          {/* Mobile Dropdown Menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } glass-panel absolute right-4 top-[68px] z-50 min-w-[260px] rounded-2xl border border-white/15 bg-[#080d23]/95 backdrop-blur-xl p-6 shadow-2xl shadow-black/60`}
          >
            <ul className="flex list-none flex-1 flex-col items-start gap-6 text-white/90 w-full">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`w-full cursor-pointer text-[16px] font-medium transition-all duration-300 ${
                    active === nav.title
                      ? "text-white pl-2 border-l-2 border-accent"
                      : "hover:text-white hover:pl-2"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className="block py-1">
                    {nav.title}
                  </a>
                </li>
              ))}
              <li className="w-full pt-3 border-t border-white/10">
                <a
                  href="#contact"
                  className="block rounded-full bg-gradient-to-r from-accent to-indigo-500 px-5 py-2.5 text-center text-[15px] font-semibold text-white shadow-lg shadow-accent/30 transition-transform active:scale-95"
                  onClick={() => setToggle(false)}
                >
                  Let's collaborate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
