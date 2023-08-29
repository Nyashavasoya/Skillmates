import React, { useState, useEffect } from 'react';
import './project-features.css';
import axios from 'axios';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  return (
    <div class ='project-list'>
      <h2>Project List</h2>
      {projects.map(project => (
        <div key={project._id}>
          <h3>{project.projectName}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
