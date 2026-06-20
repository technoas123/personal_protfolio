import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, isVisible };
}

export function useCounter(target, isVisible) {
  const [count, setCount] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    if (!isVisible || doneRef.current) return;
    doneRef.current = true;

    let current = 0;
    const step = target / 80;

    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(Math.floor(current));
      if (current >= target) {
        clearInterval(interval);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isVisible, target]);

  return count;
}