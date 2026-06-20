import { heroData } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon, EmailIcon } from "./Icons";

export default function Contact() {
  const cards = [
    {
      title: "Email",
      description: "For opportunities, collaborations and professional inquiries.",
      link: heroData.socials.email,
      label: "Send Email",
      Icon: EmailIcon,
    },
    {
      title: "LinkedIn",
      description: "Professional networking and career updates.",
      link: heroData.socials.linkedin,
      label: "Connect",
      Icon: LinkedinIcon,
    },
    {
      title: "GitHub",
      description: "Projects, experiments and open-source work.",
      link: heroData.socials.github,
      label: "View Projects",
      Icon: GithubIcon,
    },
  ];

  return (
    <section id="contact">
      <div className="section-inner">
        <div className="contact-inner">
          <div
            className="section-label reveal"
            style={{ justifyContent: "center" }}
          >
            Contact
          </div>

          <h2 className="section-title reveal">
            Let's Connect.
          </h2>

          <p className="contact-sub reveal">
            Open to opportunities in wireless communications, signal processing, embedded systems, and software engineering.            
          </p>

          <div className="contact-grid">
            {cards.map(({ title, description, link, label, Icon }) => (
              <a
                key={title}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-card-icon">
                  <Icon size={24} />
                </div>

                <h3>{title}</h3>

                <p>{description}</p>

                <span>{label} →</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}