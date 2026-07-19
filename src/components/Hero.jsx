import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-intro">Hello, I’m</p>

          <h1 className="hero-title">Mary Eden Ciasico</h1>

          <h2 className="hero-role">Web Developer</h2>

          <p className="hero-description">
            I build modern, responsive, and user-friendly web applications
            using React, JavaScript, and other modern technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Projects
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a href="mailto:your-email@example.com" aria-label="Email">
              ✉
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