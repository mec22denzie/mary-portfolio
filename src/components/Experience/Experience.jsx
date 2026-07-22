import { useState } from "react";
import "./Experience.css";
//import Certificates from "../../assets/certificates";

const experiences = [
  {
    title: "System Design Engineer – Wire Harness",
    company:
      "Furukawa Automotive Systems Design Philippines / Toyota Motor North America",
    location: "Michigan, USA",
    dates: "September 2018 – February 2023",
    summary:
      "Supported electrical distribution system and instrument-panel wire-harness development for Toyota vehicle programs.",
    responsibilities: [
      "Supported wire-harness system design for Toyota Tundra and Tacoma vehicle programs.",
      "Developed and validated electrical circuits, wiring diagrams, and harness drawings.",
      "Reviewed engineering changes, circuit requirements, connector details, and wire specifications.",
      "Investigated electrical, packaging, and manufacturing concerns using root-cause analysis and 5 Why methods.",
      "Coordinated with OEM engineers, suppliers, manufacturing teams, and cross-functional groups.",
      "Supported prototype builds, vehicle validation, launch activities, and production concerns.",
    ],
    tools: [
      "Capital Logic",
      "Capital XC",
      "Capital Integrator",
      "CATIA V5",
      "Teamcenter",
      "Microsoft Excel",
    ],
  },
  {
    title: "Design Support Engineer – Toyota Wire Harness",
    company:
      "Furukawa Automotive Systems Design Philippines / Toyota Motor Corporation",
    location: "Nagoya, Japan",
    dates: "November 2017 – May 2018",
    summary:
      "Supported Toyota wire-harness circuit design, drawing validation, and engineering-quality checks.",
    responsibilities: [
      "Created and reviewed wire-harness circuit and drawing information using CR5000.",
      "Performed design-rule checks, back-annotation, and drawing-quality validation.",
      "Reviewed circuit connections, wire specifications, connector information, and design changes.",
      "Coordinated technical concerns between Japan-based engineers and the offshore design team.",
      "Supported training and knowledge transfer after completing the overseas assignment.",
    ],
    tools: ["CR5000", "CATIA V5", "Microsoft Excel"],
  },
  {
    title: "Circuitry Design Engineer – Mazda Wire Harness",
    company:
      "Furukawa Automotive Systems Design Philippines / Mazda Motor Corporation",
    location: "Hiroshima, Japan",
    dates: "October 2013 – August 2015",
    summary:
      "Developed and validated Mazda wire-harness circuitry using Capital electrical design applications.",
    responsibilities: [
      "Created and modified Mazda wire-harness circuit diagrams.",
      "Used Capital Logic, Capital XC, and Capital Integrator for circuit development.",
      "Reviewed connectors, terminals, wire specifications, circuit connections, and design changes.",
      "Supported electrical drawing validation and design-quality reviews.",
      "Worked with Japanese engineering teams to resolve circuit and drawing concerns.",
      "Transferred technical knowledge and supported mentoring of other engineers.",
    ],
    tools: ["Capital Logic", "Capital XC", "Capital Integrator"],
  },
  {
    title: "Wire Harness Design Engineer / Group Leader",
    company: "Furukawa Automotive Systems Design Philippines, Inc.",
    location: "Biñan, Laguna, Philippines",
    dates: "May 2010 – May 2023",
    summary:
      "Progressed through automotive electrical design and leadership roles during a 13-year engineering career.",
    responsibilities: [
      "Developed, reviewed, and validated automotive wire-harness drawings and electrical circuits.",
      "Supported connector selection, terminal selection, wire specifications, BOM updates, and engineering changes.",
      "Performed drawing-quality reviews and troubleshooting for multiple automotive customers.",
      "Led workload coordination, technical reviews, training, and mentoring activities.",
      "Supported Toyota, Mazda, Suzuki, Honda, Subaru, and other automotive programs.",
      "Collaborated with customer engineers, suppliers, manufacturing teams, and internal departments.",
    ],
    tools: [
      "Capital Logic",
      "Capital XC",
      "Capital Integrator",
      "CR5000",
      "CATIA V5",
      "Microsoft Excel",
      "Microsoft Visio",
    ],
  },
];

const trainings = [
  {
    title: "Making Circuit Diagrams for Mazda Wire Harness",
    dates: "October 2013 – August 2015",
    location: "Hiroshima, Japan",
    organization: "Mazda Motor Corporation",
    topics: ["Capital XC", "Capital Integrator", "Capital Logic"],
  },
  {
    title: "PDPC and Electrical Design Training",
    dates: "June 5–7, 2013",
    location: "Biñan, Laguna, Philippines",
    organization: "Furukawa Automotive Systems Design Philippines, Inc.",
    topics: [
      "Packaging of Design Progress Chart",
      "Layout Drawing",
      "Terminal Voltage and Circuit Resistance",
      "Half Electrification",
    ],
  },
  {
    title: "Making Circuit Diagrams for Mazda Wire Harness",
    dates: "March 28 – April 24, 2013",
    location: "Hiroshima, Japan",
    organization: "Mazda Motor Corporation",
    topics: ["Capital Logic"],
  },
  {
    title: "On-Site Mentoring",
    dates: "March 13–15, 2013",
    location: "Biñan, Laguna, Philippines",
    organization: "Furukawa Automotive Systems Design Philippines, Inc.",
    topics: ["Capital Library", "Capital Logic Generative"],
  },
  {
    title: "Suzuki Wire Harness Design Checks",
    dates: "February 2013",
    location: "Biñan, Laguna, Philippines",
    organization: "Furukawa Automotive Systems Design Philippines, Inc.",
    topics: [
      "Suzuki Wire Harness Product Design Condition Check",
      "Suzuki Design Change Check",
    ],
  },
  {
    title: "Achievement and Goal Setting",
    dates: "October 20, 2012",
    location: "Biñan, Laguna, Philippines",
    organization: "Furukawa Automotive Systems Design Philippines, Inc.",
    topics: ["Goal Setting", "Performance Development"],
  },
  {
    title: "Quality Control Circle",
    dates: "September 15, 2012",
    location: "Biñan, Laguna, Philippines",
    organization: "Furukawa Automotive Systems Design Philippines, Inc.",
    topics: ["Quality Improvement", "Team Problem Solving"],
  },
  {
    title: "Honda Wire Harness Drawing Checks",
    dates: "March 29–30, 2012",
    location: "Biñan, Laguna, Philippines",
    organization: "Furukawa Automotive Systems Design Philippines, Inc.",
    topics: [
      "Honda Drawing Check",
      "Honda Terminal Label",
      "Honda Circuit Deletion",
    ],
  },
  {
    title: "Subaru Parts List Development",
    dates: "February 21, 2012",
    location: "Biñan, Laguna, Philippines",
    organization: "Furukawa Automotive Systems Design Philippines, Inc.",
    topics: ["Subaru Parts List Preparation"],
  },
  {
    title: "Quality Management System and ISO 9001:2008",
    dates: "April 11, 2011",
    location: "Biñan, Laguna, Philippines",
    organization: "Furukawa Automotive Systems Design Philippines, Inc.",
    topics: [
      "Understanding Quality Management Systems",
      "ISO 9001:2008",
    ],
  },
  {
    title: "3D Wire Harness Parts Data Creation",
    dates: "August 2010 – November 2010",
    location: "Shiga, Japan",
    organization: "Furukawa Automotive Systems Inc.",
    topics: [
      "CATIA V5",
      "3D Connector Data",
      "Wire Harness Parts Modelling",
    ],
  },
];

const certificates = [
  {
    id: 1,
    title: "All Certificates",/* 
    issuer: "Furukawa Automotive Systems Design Philippines",
    date: "March 4, 2017",
    page: 5, */
  },
/*   {
    id: 2,
    title: "Quality Management System and ISO 9001:2008",
    issuer: "Global Systems Management Consultancy",
    date: "April 11, 2011",
    page: 15,
  }, */
];

const education = [
  {
    degree: "Diploma in Web Development and Internet Applications",
    school: "Fanshawe College",
    location: "London, Ontario, Canada",
    dates: "January 2025 – April 2026",
    description:
      "Completed hands-on training in front-end development, back-end development, databases, mobile applications, content management systems, and collaborative software development.",
    subjects: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "React Native",
      "TypeScript",
      "Node.js",
      "PHP",
      "SQL",
      "Firebase",
      "WordPress",
      "REST APIs",
      "D3.js",
      "Chart.js",
      "Git and GitHub",
    ],
  },
  {
    degree: "Bachelor of Science in Electronics and Communications Engineering",
    school: "Central Philippine University",
    location: "Iloilo City, Philippines",
    dates: "2001 – 2007",
    description:
      "Studied electronics, electrical circuits, communications systems, engineering mathematics, control systems, and computer programming.",
    subjects: [
      "Electrical Circuits",
      "Digital Electronics",
      "Analog Electronics",
      "Communications Engineering",
      "Microprocessors",
      "Control Systems",
      "Engineering Mathematics",
      "Computer Programming",
    ],
  },
];

function ExperienceCard({ experience }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="experience-card">
      <div className="experience-card-header">
        <div>
          <p className="experience-dates">{experience.dates}</p>
          <h3>{experience.title}</h3>
          <p className="experience-company">{experience.company}</p>
          <p className="experience-location">{experience.location}</p>
        </div>

        <button
          type="button"
          className="details-button"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
        >
          {isOpen ? "Hide details" : "View details"}
        </button>
      </div>

      <p className="experience-summary">{experience.summary}</p>

      {isOpen && (
        <div className="experience-details">
          <h4>Responsibilities and achievements</h4>

          <ul>
            {experience.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>

          <div className="tools-section">
            <h4>Tools and technologies</h4>

            <div className="tag-list">
              {experience.tools.map((tool) => (
                <span className="experience-tag" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

function TrainingCard({ training }) {
  return (
    <article className="training-card">
      <p className="training-dates">{training.dates}</p>

      <h3>{training.title}</h3>

      <p className="training-organization">{training.organization}</p>

      <p className="training-location">{training.location}</p>

      <div className="tag-list">
        {training.topics.map((topic) => (
          <span className="training-tag" key={topic}>
            {topic}
          </span>
        ))}
      </div>
    </article>
  );
}

function EducationCard({ education }) {
  return (
    <article className="education-card">
      <p className="education-dates">{education.dates}</p>

      <h3>{education.degree}</h3>

      <p className="education-school">{education.school}</p>

      <p className="education-location">{education.location}</p>

      <p className="education-description">
        {education.description}
      </p>

      <div className="tag-list">
        {education.subjects.map((subject) => (
          <span className="education-tag" key={subject}>
            {subject}
          </span>
        ))}
      </div>
    </article>
  );
}

function CertificateCard({ certificate }) {
  return (
    <article className="certificate-card">
      <div className="certificate-pdf-wrapper">
        <iframe
          title={certificate.title}
          src={`/certificates/All-Certificates.pdf#page=${certificate.page}&view=FitH`}
          className="certificate-pdf"
        />
      </div>

      <div className="certificate-card-content">
        <h3>{certificate.title}</h3>

        <p className="certificate-issuer">{certificate.issuer}</p>

        <p className="certificate-date">{certificate.date}</p>

        <a
          className="certificate-link"
          href={`/certificates/All-Certificates.pdf#page=${certificate.page}`}
          target="_blank"
          rel="noreferrer"
        >
          View certificate
        </a>
      </div>
    </article>
  );
}

function Experience() {
  const [activeSection, setActiveSection] = useState("experience");

  return (
    <main className="experience-page">
      <section className="experience-hero">
        <p className="experience-eyebrow">Professional Journey</p>

        <h1>Experience and Training</h1>

        <p>
          More than 13 years of automotive electrical and wire-harness
          engineering experience, including international assignments in Japan
          and the United States, team leadership, and continuous technical
          development.
        </p>
      </section>

      <section className="experience-overview">
        <article>
          <strong>13+</strong>
          <span>Years in automotive engineering</span>
        </article>

        <article>
          <strong>3</strong>
          <span>Countries of professional experience</span>
        </article>

        <article>
          <strong>6+</strong>
          <span>Automotive customer programs</span>
        </article>

        <article>
          <strong>10+</strong>
          <span>Technical training programs</span>
        </article>
      </section>

      <div className="experience-tabs" role="tablist">
        <button
            type="button"
            className={activeSection === "experience" ? "active" : ""}
            onClick={() => setActiveSection("experience")}
        >
            Professional Experience
        </button>

        <button
            type="button"
            className={activeSection === "education" ? "active" : ""}
            onClick={() => setActiveSection("education")}
        >
            Education
        </button>

        <button
            type="button"
            className={activeSection === "training" ? "active" : ""}
            onClick={() => setActiveSection("training")}
        >
            Training
        </button>

        <button
            type="button"
            className={activeSection === "certificates" ? "active" : ""}
            onClick={() => setActiveSection("certificates")}
        >
            Certificates
        </button>
        </div>

      {activeSection === "experience" && (
        <section className="experience-section">
          <div className="section-heading">
            <p>Career History</p>
            <h2>Professional Experience</h2>
          </div>

          <div className="experience-timeline">
            {experiences.map((experience) => (
              <ExperienceCard
                experience={experience}
                key={`${experience.title}-${experience.dates}`}
              />
            ))}
          </div>
        </section>
      )}

      {activeSection === "training" && (
        <section className="experience-section">
          <div className="section-heading">
            <p>Continuous Development</p>
            <h2>Technical Training</h2>
          </div>

          <div className="training-grid">
            {trainings.map((training) => (
              <TrainingCard
                training={training}
                key={`${training.title}-${training.dates}`}
              />
            ))}
          </div>
        </section>
      )}

      {activeSection === "education" && (
        <section className="experience-section">
            <div className="section-heading">
            <p>Academic Background</p>

            <h2>Education</h2>
            </div>

            <div className="education-grid">
            {education.map((item) => (
                <EducationCard
                key={item.degree}
                education={item}
                />
            ))}
            </div>
        </section>
        )}

      {activeSection === "certificates" && (
        <section className="experience-section">
            <div className="section-heading">
            <p>Credentials</p>
            <h2>Certificates</h2>
            </div>

            <div className="certificate-grid">
            {certificates.map((certificate) => (
                <CertificateCard
                key={certificate.id}
                certificate={certificate}
                />
            ))}
            </div>
        </section>
        )}
    </main>
  );
}

export default Experience;