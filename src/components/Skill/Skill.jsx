import { useMemo, useState } from "react";
import "./Skill.css";

const skills = [
  // Automotive Engineering
  {
    name: "Wire Harness Design",
    category: "Automotive Engineering",
    level: "Expert",
  },
  {
    name: "Electrical Distribution Systems (EDS)",
    category: "Automotive Engineering",
    level: "Expert",
  },
  {
    name: "Wiring Harness Routing",
    category: "Automotive Engineering",
    level: "Expert",
  },
  {
    name: "Harness Packaging",
    category: "Automotive Engineering",
    level: "Expert",
  },
  {
    name: "Circuit Design and Development",
    category: "Automotive Engineering",
    level: "Expert",
  },
  {
    name: "Vehicle Electrical Systems",
    category: "Automotive Engineering",
    level: "Expert",
  },
  {
    name: "Wiring Diagram Development",
    category: "Automotive Engineering",
    level: "Expert",
  },
  {
    name: "Connector and Terminal Selection",
    category: "Automotive Engineering",
    level: "Advanced",
  },
  {
    name: "Splice Design",
    category: "Automotive Engineering",
    level: "Advanced",
  },
  {
    name: "BOM Management",
    category: "Automotive Engineering",
    level: "Expert",
  },
  {
    name: "Engineering Change Management",
    category: "Automotive Engineering",
    level: "Expert",
  },
  {
    name: "Design Reviews",
    category: "Automotive Engineering",
    level: "Expert",
  },
  {
    name: "Launch Support",
    category: "Automotive Engineering",
    level: "Expert",
  },
  {
    name: "Manufacturing Support",
    category: "Automotive Engineering",
    level: "Advanced",
  },
  {
    name: "Supplier Collaboration",
    category: "Automotive Engineering",
    level: "Expert",
  },
  {
    name: "Electrical Schematic Analysis",
    category: "Automotive Engineering",
    level: "Expert",
  },
  {
    name: "CAN Fundamentals",
    category: "Automotive Engineering",
    level: "Intermediate",
  },
  {
    name: "Automotive Diagnostics",
    category: "Automotive Engineering",
    level: "Advanced",
  },

  // Engineering Quality
  {
    name: "Root Cause Analysis",
    category: "Engineering Quality",
    level: "Expert",
  },
  {
    name: "5 Why Analysis",
    category: "Engineering Quality",
    level: "Expert",
  },
  {
    name: "Troubleshooting",
    category: "Engineering Quality",
    level: "Expert",
  },
  {
    name: "DFMEA",
    category: "Engineering Quality",
    level: "Advanced",
  },
  {
    name: "DVP&R",
    category: "Engineering Quality",
    level: "Advanced",
  },
  {
    name: "Design Verification",
    category: "Engineering Quality",
    level: "Advanced",
  },
  {
    name: "Requirements Analysis",
    category: "Engineering Quality",
    level: "Expert",
  },
  {
    name: "Technical Documentation",
    category: "Engineering Quality",
    level: "Expert",
  },
  {
    name: "Quality Reviews",
    category: "Engineering Quality",
    level: "Expert",
  },

  // Automotive Tools
  {
    name: "Capital Logic",
    category: "Automotive Tools",
    level: "Expert",
  },
  {
    name: "Capital XC",
    category: "Automotive Tools",
    level: "Expert",
  },
  {
    name: "Capital Integrator",
    category: "Automotive Tools",
    level: "Expert",
  },
  {
    name: "CR5000",
    category: "Automotive Tools",
    level: "Expert",
  },
  {
    name: "CATIA V5",
    category: "Automotive Tools",
    level: "Advanced",
  },
  {
    name: "Siemens NX",
    category: "Automotive Tools",
    level: "Learning",
  },
  {
    name: "Teamcenter",
    category: "Automotive Tools",
    level: "Intermediate",
  },
  {
    name: "Microsoft Visio",
    category: "Automotive Tools",
    level: "Advanced",
  },
  {
    name: "Microsoft Project",
    category: "Automotive Tools",
    level: "Intermediate",
  },

  // Front-End Development
  {
    name: "HTML5",
    category: "Front-End Development",
    level: "Advanced",
  },
  {
    name: "CSS3",
    category: "Front-End Development",
    level: "Advanced",
  },
  {
    name: "JavaScript",
    category: "Front-End Development",
    level: "Advanced",
  },
  {
    name: "React",
    category: "Front-End Development",
    level: "Advanced",
  },
  {
    name: "TypeScript",
    category: "Front-End Development",
    level: "Intermediate",
  },
  {
    name: "React Native",
    category: "Front-End Development",
    level: "Intermediate",
  },
  {
    name: "Responsive Web Design",
    category: "Front-End Development",
    level: "Advanced",
  },
  {
    name: "Bootstrap",
    category: "Front-End Development",
    level: "Advanced",
  },
  {
    name: "CSS Grid",
    category: "Front-End Development",
    level: "Advanced",
  },
  {
    name: "Flexbox",
    category: "Front-End Development",
    level: "Advanced",
  },
  {
    name: "DOM Manipulation",
    category: "Front-End Development",
    level: "Advanced",
  },
  {
    name: "jQuery",
    category: "Front-End Development",
    level: "Intermediate",
  },

  // Back-End and Databases
  {
    name: "Node.js",
    category: "Back-End and Databases",
    level: "Intermediate",
  },
  {
    name: "Express.js",
    category: "Back-End and Databases",
    level: "Intermediate",
  },
  {
    name: "PHP",
    category: "Back-End and Databases",
    level: "Intermediate",
  },
  {
    name: "SQL",
    category: "Back-End and Databases",
    level: "Intermediate",
  },
  {
    name: "Firebase",
    category: "Back-End and Databases",
    level: "Intermediate",
  },
  {
    name: "Firestore",
    category: "Back-End and Databases",
    level: "Intermediate",
  },
  {
    name: "REST APIs",
    category: "Back-End and Databases",
    level: "Intermediate",
  },
  {
    name: "AJAX",
    category: "Back-End and Databases",
    level: "Intermediate",
  },
  {
    name: "JSON",
    category: "Back-End and Databases",
    level: "Advanced",
  },
  {
    name: "MongoDB",
    category: "Back-End and Databases",
    level: "Learning",
  },

  // Data and Visualization
  {
    name: "D3.js",
    category: "Data and Visualization",
    level: "Intermediate",
  },
  {
    name: "Chart.js",
    category: "Data and Visualization",
    level: "Intermediate",
  },
  {
    name: "Power BI",
    category: "Data and Visualization",
    level: "Intermediate",
  },
  {
    name: "Data Visualization",
    category: "Data and Visualization",
    level: "Intermediate",
  },

  // CMS and Design
  {
    name: "WordPress",
    category: "CMS and Design",
    level: "Intermediate",
  },
  {
    name: "Elementor",
    category: "CMS and Design",
    level: "Intermediate",
  },
  {
    name: "WooCommerce",
    category: "CMS and Design",
    level: "Intermediate",
  },
  {
    name: "UI Pattern Libraries",
    category: "CMS and Design",
    level: "Advanced",
  },
  {
    name: "Typography",
    category: "CMS and Design",
    level: "Intermediate",
  },
  {
    name: "Color Systems",
    category: "CMS and Design",
    level: "Intermediate",
  },

  // Development Tools
  {
    name: "Git",
    category: "Development Tools",
    level: "Advanced",
  },
  {
    name: "GitHub",
    category: "Development Tools",
    level: "Advanced",
  },
  {
    name: "Vercel",
    category: "Development Tools",
    level: "Intermediate",
  },
  {
    name: "VS Code",
    category: "Development Tools",
    level: "Advanced",
  },
  {
    name: "npm",
    category: "Development Tools",
    level: "Intermediate",
  },
  {
    name: "Jira",
    category: "Development Tools",
    level: "Advanced",
  },
  {
    name: "Azure DevOps",
    category: "Development Tools",
    level: "Intermediate",
  },
  {
    name: "Docker",
    category: "Development Tools",
    level: "Learning",
  },
  {
    name: "CI/CD",
    category: "Development Tools",
    level: "Learning",
  },

  // Professional Skills
  {
    name: "Engineering Leadership",
    category: "Professional Skills",
    level: "Expert",
  },
  {
    name: "Team Mentoring",
    category: "Professional Skills",
    level: "Expert",
  },
  {
    name: "Cross-Functional Collaboration",
    category: "Professional Skills",
    level: "Expert",
  },
  {
    name: "Problem Solving",
    category: "Professional Skills",
    level: "Expert",
  },
  {
    name: "Technical Communication",
    category: "Professional Skills",
    level: "Expert",
  },
  {
    name: "Customer Communication",
    category: "Professional Skills",
    level: "Advanced",
  },
  {
    name: "Presentation Skills",
    category: "Professional Skills",
    level: "Advanced",
  },
  {
    name: "Training and Coaching",
    category: "Professional Skills",
    level: "Expert",
  },
];

const levels = ["All", "Expert", "Advanced", "Intermediate", "Learning"];

function Skill() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(skills.map((skill) => skill.category))];
    return ["All", ...uniqueCategories];
  }, []);

  const filteredSkills = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return skills.filter((skill) => {
      const matchesSearch =
        skill.name.toLowerCase().includes(normalizedSearch) ||
        skill.category.toLowerCase().includes(normalizedSearch) ||
        skill.level.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        selectedCategory === "All" || skill.category === selectedCategory;

      const matchesLevel =
        selectedLevel === "All" || skill.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchTerm, selectedCategory, selectedLevel]);

  const groupedSkills = useMemo(() => {
    return filteredSkills.reduce((groups, skill) => {
      if (!groups[skill.category]) {
        groups[skill.category] = [];
      }

      groups[skill.category].push(skill);
      return groups;
    }, {});
  }, [filteredSkills]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedLevel("All");
  };

  const hasActiveFilters =
    searchTerm !== "" ||
    selectedCategory !== "All" ||
    selectedLevel !== "All";

  return (
    <main className="skills-page">
      <section className="skills-hero">
        <p className="skills-eyebrow">Engineering and Technology</p>

        <h1>Skills and Expertise</h1>

        <p className="skills-introduction">
          Search my automotive engineering, software development, design,
          data visualization, and professional skills.
        </p>
      </section>

      <section className="skills-legend" aria-label="Proficiency level guide">
        <article className="legend-item">
          <span className="level-dot expert-dot"></span>
          <div>
            <strong>Expert</strong>
            <p>
              Extensive professional experience and able to mentor others.
            </p>
          </div>
        </article>

        <article className="legend-item">
          <span className="level-dot advanced-dot"></span>
          <div>
            <strong>Advanced</strong>
            <p>Strong working knowledge and able to work independently.</p>
          </div>
        </article>

        <article className="legend-item">
          <span className="level-dot intermediate-dot"></span>
          <div>
            <strong>Intermediate</strong>
            <p>
              Comfortable using it on projects with occasional reference.
            </p>
          </div>
        </article>

        <article className="legend-item">
          <span className="level-dot learning-dot"></span>
          <div>
            <strong>Learning</strong>
            <p>
              Familiar through coursework or projects and continuing to grow.
            </p>
          </div>
        </article>
      </section>

      <section className="skills-controls" aria-label="Skill search and filters">
        <div className="search-group">
          <label htmlFor="skill-search">Search skills</label>

          <div className="search-input-wrapper">
            <span className="search-icon" aria-hidden="true">
              ⌕
            </span>

            <input
              id="skill-search"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Try Wire Harness, CR5000, React, HTML..."
            />
          </div>
        </div>

        <div className="filter-row">
          <div className="filter-group">
            <label htmlFor="category-filter">Category</label>

            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "All" ? "All categories" : category}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="level-filter">Proficiency</label>

            <select
              id="level-filter"
              value={selectedLevel}
              onChange={(event) => setSelectedLevel(event.target.value)}
            >
              {levels.map((level) => (
                <option key={level} value={level}>
                  {level === "All" ? "All levels" : level}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            className="clear-button"
            onClick={clearFilters}
            disabled={!hasActiveFilters}
          >
            Clear filters
          </button>
        </div>
      </section>

      <section className="skills-results">
        <div className="results-heading">
          <h2>Technical Skills</h2>

          <p aria-live="polite">
            Showing <strong>{filteredSkills.length}</strong> of{" "}
            <strong>{skills.length}</strong> skills
          </p>
        </div>

        {filteredSkills.length > 0 ? (
          <div className="skill-category-list">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <section className="skill-category" key={category}>
                <div className="category-heading">
                  <h3>{category}</h3>
                  <span>{categorySkills.length} skills</span>
                </div>

                <div className="skills-grid">
                  {categorySkills.map((skill) => (
                    <article
                      className={`skill-card ${skill.level.toLowerCase()}`}
                      key={`${skill.category}-${skill.name}`}
                    >
                      <div className="skill-card-top">
                        <h4>{skill.name}</h4>

                        <span
                          className={`skill-level ${skill.level.toLowerCase()}`}
                        >
                          <span
                            className={`level-dot ${skill.level.toLowerCase()}-dot`}
                          ></span>
                          {skill.level}
                        </span>
                      </div>

                      <p>{skill.category}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>No matching skills found</h3>
            <p>
              Try another keyword or clear the selected category and proficiency
              filters.
            </p>

            <button type="button" onClick={clearFilters}>
              Show all skills
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Skill;