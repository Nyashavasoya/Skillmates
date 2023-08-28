import React from 'react';
import './project-features.css';

const DeleteProject = ({ projectId }) => {
  const handleDelete = () => {
    // Send a request to the backend to delete the project
    fetch(`/api/projects/${projectId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response, you might want to update the UI or navigate to a new page
        console.log('Project deleted:', data);
      })
      .catch(error => console.error('Error deleting project:', error));
  };

  return (
    <div class='delete-form'>
      <button onClick={handleDelete}>Delete Project</button>
    </div>
  );
};

export default DeleteProject;
