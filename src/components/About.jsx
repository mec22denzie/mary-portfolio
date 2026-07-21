import "./About.css";
import profileImage from "../assets/profile.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image-column">
          <img
            src={profileImage}
            alt="Mary Eden Ciasico"
            className="about-image"
          />
        </div>

        <div className="about-content">
          <p className="about-label">ABOUT ME</p>

          <h2 className="about-title">
            Engineer by Profession.
            <br />
            Developer by <span>Passion.</span>
          </h2>

          <p className="about-description">
            I’m an Electronics and Communications Engineer with more than
            13 years of experience in Automotive Systems Engineering. I
            recently completed a Diploma in Web Development and Internet
            Applications at Fanshawe College, and I enjoy building clean,
            efficient, and user-friendly web applications.
          </p>

          <Link to="/AboutMe" className="about-button">
            ♙ More About Me
          </Link>
        </div>

        <div className="about-features">
          <div className="about-feature">
            <div className="feature-icon">&lt;/&gt;</div>

            <div>
              <h3>Web Development</h3>
              <p>React, JavaScript, HTML, CSS, and more</p>
            </div>
          </div>

          <div className="about-feature">
            <div className="feature-icon">⚙</div>

            <div>
              <h3>Engineering Background</h3>
              <p>
                Automotive Systems, Electrical, Wiring Harness, Diagnostics
              </p>
            </div>
          </div>

          <div className="about-feature">
            <div className="feature-icon">◎</div>

            <div>
              <h3>Problem Solver</h3>
              <p>Analytical mindset with strong troubleshooting skills</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;