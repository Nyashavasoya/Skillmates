import React from 'react';
import './project-features.css';
import axios from 'axios';

const DeleteProject = ({ projectId }) => {
  const handleDelete = () => {
    
    axios.delete(`/api/projects/${projectId}`)
      .then(response => {
        console.log('Project deleted:', response.data);
      })
      .catch(error => {
        console.error('Error deleting project:', error);
      });
  };

  return (
    <div class='delete-form'>
      <h2>Delete Project</h2>
      <p>Are you sure you want to delete this project?</p>
      <button onClick={handleDelete}>Delete Project</button>
    </div>
  );
};

export default DeleteProject;
