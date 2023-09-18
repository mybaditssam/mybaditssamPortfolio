import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Assets/navigation.css';
import ContactForm from './Contact';
import Resume from './Resume';

function Navigation({ showAboutMe, showProjects, setShowAboutMe, setShowProjects }) {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const handleAboutMeClick = () => {
    setShowAboutMe(true);
    setShowProjects(false);
    setShowContactForm(false);
    setShowResume(false); // Hide Resume when About Me is clicked
  };

  const handleProjectsClick = () => {
    setShowProjects(true);
    setShowAboutMe(false);
    setShowContactForm(false);
    setShowResume(false); // Hide Resume when Projects is clicked
  };

  const handleContactClick = () => {
    setShowContactForm(true);
    setShowAboutMe(false);
    setShowProjects(false);
    setShowResume(false);
  };

  const handleResumeClick = () => {
    setShowResume(true); // Show Resume when Resume is clicked
    setShowAboutMe(false);
    setShowProjects(false);
    setShowContactForm(false);
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
                onClick={handleProjectsClick}
                className={showProjects ? 'active-link' : ''}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                onClick={handleContactClick}
                className={showContactForm ? 'active-link' : ''}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                onClick={handleResumeClick}
                className={showResume ? 'active-link' : ''}
              >
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showContactForm && <ContactForm />}
      {showResume && <Resume />}
    </div>
  );
}

export default Navigation;
