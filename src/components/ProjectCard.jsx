import './ProjectCard.css';

function ProjectCard({ project }) {
  const { title, description, tags = [], codeUrl, demoUrl } = project;

  return (
    <article className="card">
      <div className="card__top">
        <span aria-hidden="true">📁</span>
        <h3 className="card__title">{title}</h3>
      </div>

      <p className="card__desc">{description}</p>

      <ul className="card__tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <div className="card__links">
        {codeUrl && (
          <a href={codeUrl} target="_blank" rel="noopener noreferrer">code →</a>
        )}
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">demo →</a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;