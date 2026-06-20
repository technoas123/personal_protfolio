import { useState } from "react";
import { projectsData } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

const wavePoints = [
  "0,30 30,10 60,50 90,5 120,45 150,20 180,40 210,15 240,35 270,10 300,45 330,20 360,38 400,30",
  "0,30 40,15 80,45 120,20 160,40 200,25 240,42 280,18 320,38 360,22 400,30",
  "0,30 25,20 50,40 75,15 100,35 125,25 150,42 175,18 200,32 225,22 250,38 275,20 300,35 325,25 350,40 375,22 400,30",
];

function ProjectCard({ project, index, onOpen }) {
  return (
    <div className={`project-card reveal reveal-delay-${index}`}>
      <div className={`project-visual ${project.pvClass}`}>
        {project.featured && (
          <span className="featured-badge">Featured</span>
        )}

        <svg
          className="pv-wave"
          viewBox="0 0 400 60"
          preserveAspectRatio="none"
        >
          <polyline
            points={wavePoints[index % wavePoints.length]}
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="2"
          />
        </svg>

        <div
          style={{
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="pv-icon">{project.icon}</div>
          <div className="pv-label">{project.pvLabel}</div>
        </div>
      </div>

      <div className="project-body">
        <div className="project-tag">{project.tag}</div>

        <div className="project-title">
          {project.title}
        </div>

        <div className="project-desc">
          {project.desc}
        </div>

        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">
              {t}
            </span>
          ))}
        </div>

        <div className="project-footer">
          <button
            className="btn-ghost"
            onClick={() => onOpen(project)}
          >
            {project.demoLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState(null);

  return (
    <section id="projects">
      <div className="section-inner">
        <div className="section-label reveal">
          Projects
        </div>

        <h2 className="section-title reveal">
          Selected work.
        </h2>

        <div className="projects-grid">
          {projectsData.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}