import "./AboutMe.css";
import profileImage from "../../assets/profile.png";

function AboutMe() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-image-wrapper">
          <img
            src={profileImage}
            alt="Mary Eden Ciasico"
            className="about-profile-image"
          />
        </div>

        <div className="about-introduction">
          <p className="about-label">About Me</p>

          <h1>
            Engineer by Profession.
            <span> Developer by Passion.</span>
          </h1>

          <p className="about-lead">
            I am an automotive systems design engineer and web developer who
            enjoys solving technical problems and creating practical,
            user-friendly digital experiences.
          </p>

          <p>
            I bring more than 13 years of experience in automotive electrical
            systems, wire harness design, product development, validation, and
            production support for Toyota and Mazda vehicle programs.
          </p>

          <p>
            After completing my Diploma in Web Development and Internet
            Applications at Fanshawe College, I expanded my skills into React,
            JavaScript, HTML, CSS, Firebase, WordPress, and other modern web
            technologies.
          </p>

          <div className="about-actions">
            <a href="/resume.pdf" className="about-primary-button" download>
              Download Resume
            </a>

            <a href="/contact" className="about-secondary-button">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section className="about-details">
        <article className="about-card">
          <span className="about-card-number">01</span>
          <h2>Engineering Experience</h2>
          <p>
            My background includes automotive electrical architecture, wiring
            harness development, electrical schematics, system integration,
            engineering changes, root-cause analysis, and production launch
            support.
          </p>
        </article>

        <article className="about-card">
          <span className="about-card-number">02</span>
          <h2>Web Development</h2>
          <p>
            I create responsive and accessible web applications using React,
            JavaScript, HTML, CSS, Firebase, REST APIs, WordPress, Git, and
            modern development practices.
          </p>
        </article>

        <article className="about-card">
          <span className="about-card-number">03</span>
          <h2>My Goal</h2>
          <p>
            My goal is to combine engineering knowledge with software
            development to create reliable digital products, technical tools,
            and solutions that improve how people work and interact with
            technology.
          </p>
        </article>
      </section>

      <section className="about-journey">
        <div>
          <p className="about-label">My Journey</p>
          <br />
          <h2>From 
            <br />
            automotive design
            <br />
            to digital
            <br />
            development
            </h2>
        </div>

        <div className="journey-content">
          <p>
            My engineering career taught me how to analyze complex systems, 
            communicate across international teams, review technical requirements, 
            and solve problems with accuracy and attention to detail.
          </p>

          <p>
            My career in automotive systems design engineering strengthened my
            analytical thinking, precision, and collaboration skills. Pursuing web
            development gave me the opportunity to combine my engineering experience
            with software development, allowing me to build modern web applications
            while continuously learning new technologies and solving real-world
            problems.
          </p>
        </div>
      </section>

      <section className="about-skills">
        <p className="about-label">Core Skills</p>
        <h2>What I bring</h2>

        <div className="about-skill-list">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Firebase</span>
          <span>WordPress</span>
          <span>Git & GitHub</span>
          <span>Wire Harness Design</span>
          <span>Electrical Schematics</span>
          <span>System Integration</span>
          <span>Root-Cause Analysis</span>
          <span>Cross-Functional Collaboration</span>
        </div>
      </section>
    </main>
  );
}

export default AboutMe;