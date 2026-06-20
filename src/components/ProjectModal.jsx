export default function ProjectModal({
  project,
  onClose,
}) {
  if (!project) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="modal-header">
          <div>
            <div className="modal-tag">
              {project.tag}
            </div>

            <h2 className="modal-title">
              {project.title}
            </h2>
          </div>

          <div className="modal-icon">
            {project.icon}
          </div>
        </div>

        <p className="modal-overview">
          {project.overview}
        </p>

        <div className="modal-content-grid">
          <div className="modal-section">
            <h3>My Contributions</h3>

            <ul>
              {project.contributions?.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>

          <div className="modal-section">
            <h3>Key Highlights</h3>

            <ul>
              {project.highlights?.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="modal-tech">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="tech-badge"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="modal-actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              GitHub →
            </a>
          )}

          {project.demo &&
            project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Live Demo →
              </a>
            )}

          <button
            className="btn-ghost"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}