import React, { useState } from 'react';
import '../Assets/resume.css'

function Resume() {
  const frontEndProficiencies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Redux',
    'Bootstrap',
    'SASS/SCSS',
    'Responsive Web Design',
  ];

  const backEndProficiencies = [
    'Node.js',
    'Express.js',
    'MongoDB',
    'SQL',
    'RESTful APIs',
    'Authentication (e.g., JWT)',
    'Server Deployment (e.g., Heroku, AWS)',
  ];

 
  const combinedProficiencies = [...frontEndProficiencies, ...backEndProficiencies].join('\n');

  const downloadCombinedProficiencies = () => {
    const blob = new Blob([combinedProficiencies], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.pdf';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mt-5">
      <h2>Resume</h2>
      <div className="row">
        <div className="col-md-12">
          <h3> Proficiencies</h3>
          <textarea
            className="form-control"
            rows="10"
            value={combinedProficiencies}
            readOnly
          ></textarea>
          <button className="btn btn-primary mt-3 custom-button" onClick={downloadCombinedProficiencies}>
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
