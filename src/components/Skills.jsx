import { skillsData } from "../data/portfolioData";
import { iconMap } from "./Icons";

function SkillCard({ title, icon, badges, delay = 0 }) {
  const Icon = iconMap[icon];
  return (
    <div className={`skill-card reveal reveal-delay-${delay}`}>
      <div className="skill-card-header">
        <div className="skill-icon">{Icon && <Icon />}</div>
        <div className="skill-card-title">{title}</div>
      </div>
      <div className="skill-badges">
        {badges.map((badge) => (
          <span key={badge} className="badge">
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-inner">
        <div className="section-label reveal">Skills</div>
        <h2 className="section-title reveal">The toolbox.</h2>
        <div className="skills-grid">
          {skillsData.map((skill, i) => (
            <SkillCard key={skill.title} {...skill} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}