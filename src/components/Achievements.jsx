import { achievementsData } from "../data/portfolioData";
import { useIntersectionObserver, useCounter } from "../hooks/useIntersectionObserver";

function AchItem({ value, label, desc, delay }) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });
  const count = useCounter(value, isVisible);

  return (
    <div ref={ref} className={`ach-item reveal reveal-delay-${delay}`}>
      <div className="ach-num">
        <span>{count}</span>
        <span>+</span>
      </div>
      <div className="ach-label">{label}</div>
      <div className="ach-desc">{desc}</div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: 0 }}>
      <div className="achievements-grid">
        {achievementsData.map((item, i) => (
          <AchItem key={item.label} {...item} delay={i} />
        ))}
      </div>
    </section>
  );
}