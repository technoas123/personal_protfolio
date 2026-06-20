import { useState } from "react";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { navLinks } from "../data/portfolioData";
import logo from "../assets/logo.png";

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" />
    <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" />
    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10">
    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
  </svg>
);

export default function Navbar({ theme, toggleTheme }) {
  const { scrolled } = useScrollProgress();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      {mobileOpen && (
        <div className="mobile-menu open">
          <button
            className="mobile-close"
            onClick={() => setMobileOpen(false)}
          >
            ✕
          </button>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <div className="nav-inner">
          <a
            className="nav-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            >
                <img
                    src={logo}
                    alt="Logo"
                    className="navbar-logo"
                />              
            </a>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title="Toggle light/dark"
            >
              <div className="theme-toggle-knob">
                {theme === "dark" ? <MoonIcon /> : <SunIcon />}
              </div>
            </button>

            <a
              className="nav-cta"
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Get in Touch
            </a>

            <button
              className="hamburger"
              onClick={() => setMobileOpen(true)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}