import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <span>MC</span>
        </NavLink>

        <button
          type="button"
          className={`menu-button ${menuOpen ? "open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(previous => !previous)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="tour-navbar"
          className={`navbar-menu ${menuOpen ? "open" : ""}`}
        >
          <ul className="navbar-links">
            <li>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/aboutMe" onClick={closeMenu}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/skill" onClick={closeMenu}>
                Skills
              </NavLink>
            </li>

            <li>
              <NavLink to="/experience" onClick={closeMenu}>
                Experience
              </NavLink>
            </li>

            <li>
              <NavLink to="/projects" onClick={closeMenu}>
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>

            <li>
              <a
                href="/resume.pdf"
                className="resume-button"
                download
                onClick={closeMenu}
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