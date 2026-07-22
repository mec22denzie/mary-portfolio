import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-intro">Hello, I’m</p>

          <h1 id="tour-name" className="hero-title">Mary Eden Ciasico</h1>

          <h2 className="hero-role">System Design Engineer/ 
            <br />
            Web Developer
          </h2>

          <p className="hero-description">
            {/* With a background in automotive systems design and a passion for web
            development, I build responsive and user-friendly applications using
            React, JavaScript, and other modern technologies. I enjoy creating
            practical solutions that improve everyday experiences. */}
            I am an automotive systems design engineer and web developer who enjoys 
            solving technical problems and creating user-friendly digital experiences. 
            I enjoy exploring new technologies, solving challenging problems, 
            and continuously expanding my skills. I believe the best solutions 
            come from combining technical expertise with creativity, collaboration, 
            and a passion for continuous learning.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="primary-button">
              View My Projects
            </Link>
            <Link to="/contact" className="secondary-button">
              Contact Me
            </Link>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/mec22denzie"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/mary-ciasico"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:maryciasico@yahoo.com"
              aria-label="Email"
            >
              <MdEmail />
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="code-card">
            <div className="code-card-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-symbol">&lt;/&gt;</div>

            <div className="code-lines">
              <span className="code-line line-1"></span>
              <span className="code-line line-2"></span>
              <span className="code-line line-3"></span>
              <span className="code-line line-4"></span>
              <span className="code-line line-5"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;