import "./Skills.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaWordpress,
  FaChartBar,
} from "react-icons/fa";

import {
  SiFirebase,
  SiTypescript,
  SiD3,
  SiAxios,
} from "react-icons/si";

import { useRef } from "react";

const skills = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "React", icon: <FaReact /> },
  { name: "React Native", icon: <FaReact /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Firestore", icon: <SiFirebase /> },
  { name: "REST APIs", icon: <SiAxios /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "WordPress", icon: <FaWordpress /> },
  { name: "D3.js", icon: <SiD3 /> },
  { name: "Chart.js", icon: <FaChartBar /> },
];

function Skills() {
    const slider = useRef();

    const slideLeft = () => {
    slider.current.scrollLeft -= 250;
    };

    const slideRight = () => {
    slider.current.scrollLeft += 250;
    };

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <p className="skills-label">MY SKILLS</p>
          <h2 id="tour-skill">Technologies I Work With</h2>
        </div>

        <div className="skills-slider-wrapper">

        <button
            className="slider-arrow left"
            onClick={slideLeft}
        >
            <FaChevronLeft />
        </button>

        <div
            className="skills-slider"
            ref={slider}
        >
            {skills.map((skill) => (
            <div className="skill-item" key={skill.name}>
                <div className="skill-icon">{skill.icon}</div>
                <p>{skill.name}</p>
            </div>
            ))}
        </div>

        <button
            className="slider-arrow right"
            onClick={slideRight}
        >
            <FaChevronRight />
        </button>

        </div>
      </div>
    </section>
  );
}

export default Skills;