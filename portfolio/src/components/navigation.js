import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Assets/navigation.css';
import ContactForm from './Contact'; // Import the ContactForm component

function Navigation({ showAboutMe, showProjects, setShowAboutMe, setShowProjects }) {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleAboutMeClick = () => {
    setShowAboutMe(true);
    setShowProjects(false);
    setShowContactForm(false); // Hide ContactForm when About Me is clicked
  };

  const handleProjectsClick = () => {
    setShowProjects(true);
    setShowAboutMe(false);
    setShowContactForm(false); // Hide ContactForm when Projects is clicked
  };

  const handleContactClick = () => {
    setShowContactForm(true); // Show ContactForm when Contact Me is clicked
    setShowAboutMe(false);
    setShowProjects(false);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Samuel Hernandez</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={handleAboutMeClick}
                className={showAboutMe ? 'active-link' : ''}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                onClick={handleContactClick}
                className={showContactForm ? 'active-link' : ''}
              >
                Contact Me
              </Nav.Link>
              <Nav.Link
                onClick={handleProjectsClick}
                className={showProjects ? 'active-link' : ''}
              >
                Project Library
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showContactForm && <ContactForm />}
    </div>
  );
}

export default Navigation;
