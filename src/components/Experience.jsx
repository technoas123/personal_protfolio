import { experienceData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-inner">
        <div className="section-label reveal">Experience</div>
        <h2 className="section-title reveal">Academic & Professional Journey</h2>
        <div className="timeline">
  {experienceData.map((item, i) => (
    <div
        key={i}
        className={`timeline-item ${
            i % 2 === 0 ? "left" : "right"
        } reveal ${i > 0 ? `reveal-delay-${i}` : ""}`}
        >
        <div className="timeline-content">
            <div className="timeline-period">{item.period}</div>
            <div className="timeline-role">{item.role}</div>
            <div className="timeline-org">{item.org}</div>
            <div className="timeline-desc">{item.desc}</div>

            <div className="timeline-tags">
            {item.tags.map((tag) => (
                <span key={tag} className="tl-tag">
                {tag}
                </span>
            ))}
            </div>
        </div>
        </div>
    ))}
    </div>
      </div>
    </section>
  );
}