import { useState, useEffect } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const s = window.scrollY;
      const t = document.body.scrollHeight - window.innerHeight;
      setProgress(t > 0 ? (s / t) * 100 : 0);
      setScrolled(s > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { progress, scrolled };
}