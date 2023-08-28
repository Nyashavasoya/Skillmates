import React, { useState, useEffect } from 'react';

const UpdateProjectForm = ({ projectId }) => {
  const [project, setProject] = useState({});
  const [projectName, setProjectName] = useState('');
  const [technology, setTechnology] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    // Fetch the project details from the backend using the projectId
    fetch(`/api/projects/${projectId}`)
      .then(response => response.json())
      .then(data => {
        setProject(data);
        setProjectName(data.projectName);
        setTechnology(data.technology);
        setDescription(data.description);
      })
      .catch(error => console.error('Error fetching project details:', error));
  }, [projectId]);

  const handleSubmit = e => {
    e.preventDefault();
    // Send the updated project data to the backend for update
    fetch(`/api/projects/${projectId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ projectName, technology, description }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response, you might want to update the UI or navigate to a new page
        console.log('Project updated:', data);
      })
      .catch(error => console.error('Error updating project:', error));
  };

  return (
    <div>
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
