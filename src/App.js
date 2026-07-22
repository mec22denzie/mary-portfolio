import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import AboutMePage from "./pages/AboutMePage";
import SkillPage from "./pages/SkillPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <div className="site-background">
        <div className="background-glow glow-one"></div>
        <div className="background-glow glow-two"></div>
        <div className="background-grid"></div>
      </div>

      <Navbar />

      <main className="site-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/aboutMe" element={<AboutMePage />} />
          <Route path="/skill" element={<SkillPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;