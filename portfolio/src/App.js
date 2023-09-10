import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/navigation';
import AboutMe from './components/Aboutme';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import Background from './components/Background';

function App() {
  const [showAboutMe, setShowAboutMe] = useState(true); // Set to true by default
  const [showProjects, setShowProjects] = useState(false);
  const [showBackground, setShowBackground] = useState(true);

  useEffect(() => {
    setShowAboutMe(true);
    setShowProjects(false);
    setShowBackground(true);
  }, []);

  return (
    <div>
      {showBackground && <Background />}
      <Navigation
        showAboutMe={showAboutMe}
        showProjects={showProjects}
        setShowAboutMe={setShowAboutMe}
        setShowProjects={setShowProjects}
      />
      <div className="content-container">
        {showAboutMe && <AboutMe />}
        {showProjects && <Projects />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
