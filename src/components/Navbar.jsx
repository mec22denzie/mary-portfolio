import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <span>MC</span>
          
        </NavLink>

        <nav id="tour-navbar">
          <ul className="navbar-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/aboutMe">About</NavLink>
            </li>

            <li>
              <NavLink to="/skill">Skills</NavLink>
            </li>

            <li>
              <NavLink to="/experience">Experience</NavLink>
            </li>

            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>

            <li>
              <a
                href="/resume.pdf"
                className="resume-button"
                download
              >
                ↓ Download Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;