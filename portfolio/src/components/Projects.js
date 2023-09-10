import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Assets/projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Econnect Frontend',
      image: 'https://via.placeholder.com/300x200?text=Project+1',
      deployedAppLink: 'https://econnect.eco',
      githubRepoLink: 'https://github.com/epicaregroupinc/econnect_front',
    },
    {
      id: 2,
      name: 'D&D Character Creator',
      image: 'https://via.placeholder.com/300x200?text=Project+2',
      deployedAppLink: 'https://example.com/project2',
      githubRepoLink: 'https://github.com/yourusername/project2',
    },
    {
      id: 3,
      name: 'Econnect Backend',
      image: 'https://via.placeholder.com/300x200?text=Project+3',
      deployedAppLink: 'https://example.com/project2',
      githubRepoLink: 'https://github.com/epicaregroupinc/econnect_back',
    },
    {
      id: 4,
      name: 'README Generator',
      image: 'https://via.placeholder.com/300x200?text=Project+4',
      deployedAppLink: 'https://mybaditssam.github.io/Read-Me-Generator/',
      githubRepoLink: 'https://github.com/mybaditssam/Read-Me-Generator',
    },
    {
      id: 5,
      name: 'Blog Application',
      image: 'https://via.placeholder.com/300x200?text=Project+5',
      deployedAppLink: 'https://example.com/project2',
      githubRepoLink: 'https://github.com/mybaditssam/myTechBlog',
    },
    {
      id: 6,
      name: 'Employee Management System',
      image: 'https://via.placeholder.com/300x200?text=Project+6',
      deployedAppLink: 'https://example.com/project2',
      githubRepoLink: 'https://github.com/mybaditssam/myBusiness',
    },
    // Add more project properties for more projects =D =D
  ];

  return (
    <div>
      <h2 id="projects">Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <Card key={project.id} className="project-card">
            <a href={project.deployedAppLink} target="_blank" rel="noopener noreferrer">
              <Card.Img
                variant="top"
                src={project.image}
                alt={project.name}
              />
            </a>
            <Card.Body>
              <a href={project.deployedAppLink} target="_blank" rel="noopener noreferrer">
                <Card.Title>{project.name}</Card.Title>
              </a>
              <div className="project-links">
                <a href={project.deployedAppLink} target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn0.iconfinder.com/data/icons/data-analytics-45/62/flexible-deployment-application-options-manage-512.png" alt="External Link" className="project-icon" />
                </a>
                <a href={project.githubRepoLink} target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="project-icon" />
                </a>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
