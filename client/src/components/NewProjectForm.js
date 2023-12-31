import React, { useState } from 'react';
import './project-features.css';
import axios from 'axios';

const NewProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [technology, setTechnology] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Send the project data to the backend for creation
    // Example API request using Fetch:
    const newProject = {
      projectName: projectName,
      technology: technology,
      description: description,
    };

    
    axios.post('/api/projects', newProject)
      .then(response => {
        console.log('New project created:', response.data);
      })
      .catch(error => {
        console.error('Error creating project:', error);
      });
  };

  return (
    <div class='create-form'>
      <h2>Create New Project</h2>
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
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
};

export default NewProjectForm;
