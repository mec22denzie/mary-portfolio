import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2026 Mary Eden Ciasico. All rights reserved.</p>

        <nav className="footer-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/aboutMe">About</NavLink>
          <NavLink to="/skill">Skills</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
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