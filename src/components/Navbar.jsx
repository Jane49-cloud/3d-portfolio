import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-wrap ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="nav-bar" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Jane Ndirangu — home">
          <span className="wordmark-mark">JN</span>
          <span className="wordmark-name">
            Jane M. Ndirangu <small>Software engineer</small>
          </span>
        </a>

        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>
              {link.title}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="/Jane-Ndirangu-Resume.pdf" download>
          Résumé <span aria-hidden="true">↓</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
