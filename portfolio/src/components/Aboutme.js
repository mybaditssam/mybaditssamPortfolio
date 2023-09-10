import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Assets/aboutme.css';
import profileImage from '../Assets/Sam.jpeg'

function AboutMe({ showProjects, handleToggleProjectsClick }) {
  return (
    <Card className="about-me-card">
      <Card.Header className="about-me-header">Who Am I?</Card.Header>
      <Card.Body>
        <Card.Title className="about-me-title">Samuel Hernandez</Card.Title>
        <img src={profileImage} alt="Profile" className="profile-image" />
        <Card.Text className="about-me-text">
          Full-Stack Web Developer
          <br />
          Salesforce Administrator
          <br />
          Salesforce Developer
        </Card.Text>

        <div className="about-me-content">
          <p>
            Samuel Hernandez embarked on his journey in the world of technology
            after completing his Associate of Arts degree in an unrelated field.
            It was during this time that he began to delve into the realm of
            Salesforce, exploring the intricacies of Salesforce component
            development. This exploration ignited a passion within Samuel for
            creating and innovating with technology.
          </p>
          <p>
            As he continued to hone his skills, Samuel delved deeper into the
            Salesforce ecosystem, ultimately becoming a proficient Salesforce
            administrator and a junior developer. Over time, his knowledge and
            expertise expanded to encompass both front-end and back-end
            development, culminating in his current role as a full-stack
            developer.
          </p>
          <p>
            The world of technology and software engineering has been an
            incredible adventure for Samuel, and he is excited about the
            limitless possibilities it holds for the future. He is forever
            grateful for the path he discovered and eagerly anticipates the
            exciting opportunities that lie ahead in this dynamic field.
          </p>
        </div>
      </Card.Body>
      <Card.Footer className="about-me-footer">mybaditssam</Card.Footer>
    </Card>
  );
}

export default AboutMe;
