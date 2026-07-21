import "./Projects.css";

const projects = [
  {
    title: "Career Tracker",
    description:
      "A responsive career management application that helps users organize job applications and monitor their progress.",
    tech: "React • CSS • JavaScript",
    live: "https://career-tracker-7ttg.vercel.app/",
    github: "https://github.com/mec22denzie/careerTracker",
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive career management application that helps users organize job applications and monitor their progress.",
    tech: "Wordpress",
    live: "https://maryportfolio.rf.gd",
    github: "https://github.com/mec22denzie/careerTracker",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-wrapper">
        <h2>Projects</h2>

        <p className="projects-subtitle">
          A selection of projects I have designed and developed.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="project-tech">{project.tech}</span>

              <div className="project-links">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;