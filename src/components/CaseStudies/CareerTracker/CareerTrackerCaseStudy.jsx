import "./CareerTrackerCaseStudy.css";

function CareerTrackerCaseStudy() {
  return (
    <section className="case-study">

      {/* Hero */}
      <div className="hero">

        <p className="project-type">
          Product Design • UX Design • Front-End Development
        </p>

        <h1>Career Tracker</h1>

        <p className="tagline">
          Organize your job search. Track every opportunity. Move forward with confidence.
        </p>

      </div>

      {/* Project Overview */}

      <section className="overview">

        <h2>Project Overview</h2>

        <div className="overview-grid">
        <div className="overview-card">
            <h3>Role</h3>
            <p>Product Designer • UX Designer • Front-End Developer</p>
        </div>

        <div className="overview-card">
            <h3>Duration</h3>
            <p>Independent Project</p>
        </div>

        <div className="overview-card">
            <h3>Platform</h3>
            <p>Web Application</p>
        </div>

        <div className="overview-card">
            <h3>Team</h3>
            <p>Solo Project</p>
        </div>

        <div className="overview-card technologies-card">
            <h3>Technologies</h3>

            <div className="technology-list">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Firebase</span>
            <span>Firestore</span>
            <span>GitHub</span>
            <span>Figma</span>
            </div>
        </div>
        </div>

        <p className="overview-description">
          Career Tracker is a web application designed to help job seekers
          organize applications, monitor interview progress, manage recruiter
          information, and stay organized throughout the job search process.
          This project combines user-centered design with modern front-end
          development to create an intuitive and responsive experience.
        </p>

      </section>

      {/* Problem */}

      <section className="problem">

        <h2>Problem Statement</h2>

        <p>
          Searching for a job can quickly become overwhelming. Applicants often
          apply to dozens of positions across multiple job boards and company
          websites. As the number of applications grows, it becomes difficult
          to remember where they applied, monitor interview progress, manage
          follow-ups, and stay organized.
        </p>

        <p>
          Many people rely on spreadsheets, handwritten notes, or email folders,
          making the process time-consuming and difficult to manage.
        </p>

        <p>
          As someone transitioning from automotive engineering into software
          development, I experienced these challenges firsthand. I wanted to
          build a simple, intuitive application that would help users organize
          every stage of their job search while providing meaningful insights
          into their progress.
        </p>

      </section>

      {/* Goal */}
      <section className="case-study-section goals-section">
        <p className="case-study-section__eyebrow">03 — Project Direction</p>

        <h2 className="case-study-section__title">Goal</h2>

        <p className="case-study-section__intro">
            Design and build a modern web application that helps job seekers manage
            every stage of the application process—from submitting applications to
            receiving offers.
        </p>

        <p className="goals-section__lead">
            The application should help users:
        </p>

        <ul className="goals-list">
            <li>Track job applications in one place</li>
            <li>Monitor interview progress</li>
            <li>Record recruiter information and notes</li>
            <li>Visualize application statistics</li>
            <li>Stay organized throughout the job search</li>
        </ul>
        </section>

        {/* Design Challenge */}
        <section className="case-study-section">
        {/* <p className="case-study-section__eyebrow">04 — Design Thinking</p> */}
        <h2 className="case-study-section__title">Design Challenge</h2>

        <div className="challenge-card">
            <p>
            How might we help job seekers easily organize dozens of applications
            while minimizing cognitive load and making progress immediately visible?
            </p>
        </div>
        </section>

        {/* Success Metrics */}
        <section className="case-study-section">
       {/*  <p className="case-study-section__eyebrow">05 — Measuring Success</p> */}
        <h2 className="case-study-section__title">Success Metrics</h2>

        <p className="case-study-section__intro">
            The design would be considered successful if users could complete important
            tasks quickly, understand their progress at a glance, and use the application
            comfortably across different devices.
        </p>

        <div className="metrics-grid">
            <article className="metric-card">
            <span className="metric-card__number">01</span>
            <h3>Fast Data Entry</h3>
            <p>A user can add a new application in less than 30 seconds.</p>
            </article>

            <article className="metric-card">
            <span className="metric-card__number">02</span>
            <h3>Clear Status Visibility</h3>
            <p>Users can immediately identify the current status of every application.</p>
            </article>

            <article className="metric-card">
            <span className="metric-card__number">03</span>
            <h3>Easy Navigation</h3>
            <p>Important information can be found within two clicks.</p>
            </article>

            <article className="metric-card">
            <span className="metric-card__number">04</span>
            <h3>Useful Overview</h3>
            <p>The dashboard communicates progress without overwhelming the user.</p>
            </article>

            <article className="metric-card">
            <span className="metric-card__number">05</span>
            <h3>Responsive Experience</h3>
            <p>The interface works smoothly on desktop, tablet, and mobile devices.</p>
            </article>
        </div>
        </section>

        {/* Target Users */}
        <section className="case-study-section">
       {/*  <p className="case-study-section__eyebrow">06 — Audience</p> */}
        <h2 className="case-study-section__title">Target Users</h2>

        <p className="case-study-section__intro">
            Career Tracker is designed for people managing an active job search across
            multiple companies, platforms, and stages.
        </p>

        <div className="audience-grid">
            <article className="audience-card">
            <h3>Recent Graduates</h3>
            <p>Users beginning their careers and applying to many entry-level roles.</p>
            </article>

            <article className="audience-card">
            <h3>Career Changers</h3>
            <p>Professionals transitioning into a new field or industry.</p>
            </article>

            <article className="audience-card">
            <h3>Active Job Seekers</h3>
            <p>Applicants managing opportunities across multiple employers.</p>
            </article>

            <article className="audience-card">
            <h3>International Students</h3>
            <p>Graduates navigating employment searches alongside work-status requirements.</p>
            </article>

            <article className="audience-card">
            <h3>Experienced Professionals</h3>
            <p>Professionals exploring new opportunities while remaining organized.</p>
            </article>
        </div>
        </section>

        {/* Pain Points and Opportunities */}
        <section className="case-study-section">
       {/*  <p className="case-study-section__eyebrow">07–08 — Insights</p> */}
        <h2 className="case-study-section__title">Pain Points and Opportunities</h2>

        <div className="insights-grid">
            <article className="insight-panel">
            <h3>Pain Points</h3>
            <p className="insight-panel__intro">
                Before using Career Tracker, users often struggle to:
            </p>

            <ul className="insight-list insight-list--pain">
                <li>Remember where they applied</li>
                <li>Track interview dates</li>
                <li>Keep recruiter contact information organized</li>
                <li>Monitor application progress</li>
                <li>Remember follow-up deadlines</li>
                <li>Stay motivated during a long job search</li>
                <li>Manage applications across multiple job websites</li>
            </ul>
            </article>

            <article className="insight-panel">
            <h3>Product Opportunities</h3>
            <p className="insight-panel__intro">
                These challenges create opportunities to provide:
            </p>

            <ul className="insight-list insight-list--opportunity">
                <li>Dashboard overview</li>
                <li>Job status timeline</li>
                <li>Interview calendar</li>
                <li>Recruiter contact management</li>
                <li>Search and filters</li>
                <li>Application statistics</li>
                <li>Mobile-friendly design</li>
                <li>Resume and cover-letter tracking</li>
                <li>Follow-up reminders</li>
                <li>Notes for each application</li>
            </ul>
            </article>
        </div>
        </section>

        {/* Product Vision */}
        <section className="case-study-section vision-section">
        {/* <p className="case-study-section__eyebrow">09 — Product Strategy</p> */}
        <h2 className="case-study-section__title">Product Vision</h2>

        <blockquote className="vision-card">
            Career Tracker empowers job seekers to stay organized, confident, and
            motivated by transforming a stressful job search into a clear, manageable,
            and data-driven experience.
        </blockquote>
        </section>

    </section>
  );
}

export default CareerTrackerCaseStudy;