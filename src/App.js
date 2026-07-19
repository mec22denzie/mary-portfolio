import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";


import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;


