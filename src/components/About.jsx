import { useIntersectionObserver, useCounter } from "../hooks/useIntersectionObserver";
import { aboutData } from "../data/portfolioData";
import { iconMap } from "./Icons";

function StatCard({ value, label, desc, delay = 0 }) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });
  const count = useCounter(value, isVisible);

  return (
    <div
      ref={ref}
      className="stat-card"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="stat-num">{count}</div>
      <div className="stat-label">{label}</div>
      <div className="stat-desc">{desc}</div>
    </div>
  );
}

export default function About() {
  const { title, paragraphs, expertise, stats } = aboutData;

  return (
    <section id="about">
      <div className="section-inner">
        <div className="section-label reveal">About</div>
        <div className="about-grid">
          {/* Story */}
          <div className="about-story reveal">
            <h3>{title}</h3>
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="expertise-list">
              {expertise.map(({ label, icon }) => {
                const Icon = iconMap[icon];
                return (
                  <div key={label} className="expertise-item">
                    <div className="expertise-icon">
                      {Icon && <Icon />}
                    </div>
                    {label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="about-stats reveal">
            <div className="stat-row">
              <StatCard {...stats[0]} />
              <StatCard {...stats[1]} delay={0.1} />
            </div>
            <div className="stat-row">
              <StatCard {...stats[2]} delay={0.2} />
              <StatCard {...stats[3]} delay={0.3} />
            </div>
            <div className="stat-card stat-card-dark">
              <div
                className="stat-num"
                style={{
                  background:
                    "linear-gradient(135deg,var(--highlight),var(--accent))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ECE
              </div>
              <div className="stat-label">Electronics & Communication</div>
              <div className="stat-desc">Graduate Engineer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}