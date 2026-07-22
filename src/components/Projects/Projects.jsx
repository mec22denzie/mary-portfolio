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
  {
    title: "Student Shop",
    description:
      "A student marketplace and donation app where users can post, browse, and donate used items they no longer need.",
    tech: "React Native • Expo • Firebase • Firestore",
    live: "https://info5139-falconshop.web.app",
    github: "https://github.com/mec22denzie/info_5139_Application-Project",
  },
  {
    title: "Command TV UI Pattern Library",
    description:
      "A responsive UI pattern library created for the Command TV dashboard, featuring typography standards, color systems, reusable interface elements, chart designs, and layout patterns.",
    tech: "HTML5 • CSS3 • Bootstrap • JavaScript • jQuery • Power BI",
    live: "https://command-tv-ui-pattern-library.vercel.app",
    github: "https://github.com/mec22denzie/command-tv-ui-pattern-library",
  },
  {
    title: "Command TV Analytics Dashboard",
    description:
      "A responsive analytics dashboard that visualizes YouTube channel statistics through interactive charts, summary cards, and data-driven insights.",
    tech: "HTML5 • CSS3 • JavaScript • D3.js",
    live: "https://command-tv-dashboard.vercel.app/",
    github: "https://github.com/mec22denzie/Info_3171_group_project",
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