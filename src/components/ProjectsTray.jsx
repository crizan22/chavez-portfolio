import ProjectCard from './ProjectCard';
import projects from '../data/projects';
import './ProjectsTray.css';

// The dropdown panel. "show" class is added when isOpen is true.
function ProjectsTray({ isOpen }) {
  return (
    <div
      id="dropdownMenu"
      className={`tray dropdown-menu ${isOpen ? 'show' : ''}`}
      aria-hidden={!isOpen}
    >
      <div className="tray__inner">
        <div className="tray__head">
          <span className="tray__path">Projects</span>
          <span className="tray__count">{projects.length} stored</span>
        </div>

        <div className="tray__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsTray;