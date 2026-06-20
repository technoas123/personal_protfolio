import { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WaveformStrip from "./components/WaveformStrip";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Small delay so components are mounted
    const timer = setTimeout(() => {
      const els = document.querySelectorAll(".reveal");
      els.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <ScrollProgress />

      <div className="ambient-bg">
        <div className="orb-1 ambient-orb" />
        <div className="orb-2 ambient-orb" />
        <div className="orb-3 ambient-orb" />
      </div>
      <div className="bg-grid" />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero theme={theme} />
        <WaveformStrip />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}