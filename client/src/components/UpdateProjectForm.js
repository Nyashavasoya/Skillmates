import React, { useState, useEffect } from 'react';
import './project-features.css';
import axios from 'axios';

const UpdateProjectForm = ({ projectId }) => {
  const [project, setProject] = useState({});
  const [projectName, setProjectName] = useState('');
  const [technology, setTechnology] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {

    axios.get(`/api/projects/${projectId}`)
      .then(response => {
        const projectData = response.data;
        setProjectName(projectData.projectName);
        setTechnology(projectData.technology);
        setDescription(projectData.description);
      })
      .catch(error => {
        console.error('Error fetching project data:', error);
      });
  }, [projectId]);

  const handleSubmit = e => {
    e.preventDefault();
    
    axios.put(`/api/projects/${projectId}`, {
      projectName,
      technology,
      description
    })
      .then(response => {
        console.log('Project updated:', response.data);
      })
      .catch(error => console.error('Error updating project:', error));
  };

  return (
    <div class='update-form'>
      <h2>Update Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={e => setProjectName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Technology"
          value={technology}
          onChange={e => setTechnology(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button type="submit">Update Project</button>
      </form>
    </div>
  );
};

export default UpdateProjectForm;
