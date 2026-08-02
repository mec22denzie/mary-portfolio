import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openResumeModal = () => {
    closeMenu();
    setResumeModalOpen(true);
  };

  const closeResumeModal = () => {
    setResumeModalOpen(false);
  };

  return (
    <>
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
            onClick={() => setMenuOpen((previous) => !previous)}
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
                <button
                  type="button"
                  className="resume-button"
                  onClick={openResumeModal}
                >
                  ↓ Download Resume
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {resumeModalOpen && (
        <div
          className="resume-modal-overlay"
          onClick={closeResumeModal}
        >
          <div
            className="resume-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="resume-modal-close"
              onClick={closeResumeModal}
              aria-label="Close resume selection"
            >
              ×
            </button>

            <h2 id="resume-modal-title">Choose a Resume</h2>

            <div className="resume-options">
              <a
                href="/resume_s.pdf"
                className="resume-option"
                download
                onClick={closeResumeModal}
              >
                <span className="resume-option-icon">📄</span>

                <span className="resume-option-text">
                  <strong>Junior Software Engineer Resume</strong>
                  <small>
                    Front-End, React, JavaScript, and software roles
                  </small>
                </span>

                <span className="resume-download-label">
                  Download
                </span>
              </a>

              <a
                href="/resume_e.pdf"
                className="resume-option"
                download
                onClick={closeResumeModal}
              >
                <span className="resume-option-icon">📄</span>

                <span className="resume-option-text">
                  <strong>
                    Automotive Systems Design Engineer Resume
                  </strong>
                  <small>
                    Wire harness, system design, and DRE roles
                  </small>
                </span>

                <span className="resume-download-label">
                  Download
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;