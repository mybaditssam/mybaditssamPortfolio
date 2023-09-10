import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Assets/projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      name: 'AMS Sync',
      image: 'https://via.placeholder.com/300x200?text=Project+1',
    },
    {
      id: 2,
      name: 'D&D Chracter Creator',
      image: 'https://via.placeholder.com/300x200?text=Project+2',
    },
    {
      id: 3,
      name: 'Blog App',
      image: 'https://via.placeholder.com/300x200?text=Project+3',
    },
    {
      id: 4,
      name: 'Node Employee Database App',
      image: 'https://via.placeholder.com/300x200?text=Project+4',
    },
    {
      id: 5,
      name: 'Installable Weather Application',
      image: 'https://via.placeholder.com/300x200?text=Project+5',
    },
    {
      id: 6,
      name: 'AMS Link',
      image: 'https://via.placeholder.com/300x200?text=Project+6',
    },
  ];

  return (
    <div>
      <h2 id="projects">Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <Card key={project.id} className="project-card">
            <Card.Img
              variant="top"
              src={project.image}
              alt={project.name}
            />
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>
                {/* Add project description or other information here */}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
