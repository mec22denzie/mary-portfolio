import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2026 Mary Eden Ciasico. All rights reserved.</p>

        <nav className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="#home"
          className="back-to-top"
          aria-label="Back to top"
        >
          ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;