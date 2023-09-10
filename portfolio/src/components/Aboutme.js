import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutMe({ showProjects, handleToggleProjectsClick }) {
  return (
    <Card className="text-center">
      <Card.Header>Who Am I?</Card.Header>
      <Card.Body>
        <Card.Title>Samuel Hernandez</Card.Title>
        <Card.Text>
          Full-Stack Web Developer<br />
          Salesforce Administrator<br />
          Salesforce Developer
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">mybaditssam</Card.Footer>
    </Card>
  );
}

export default AboutMe;
