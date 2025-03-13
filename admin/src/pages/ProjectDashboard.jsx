import { useState } from "react";
import "./ProjectDashboard.css";

const ProjectDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    status: "Pending",
    documents: [],
  });

  const handleAddProject = () => {
    setProjects([...projects, newProject]);
    setNewProject({ name: "", description: "", status: "Pending", documents: [] });
  };

  return (
    <div className="dashboard-container">
      <h2>Project Management</h2>

      <div className="project-form">
        <input type="text" placeholder="Project Name" value={newProject.name} onChange={(e) => setNewProject({ ...newProject, name: e.target.value })} />
        <textarea placeholder="Description" value={newProject.description} onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}></textarea>
        <select value={newProject.status} onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <input type="file" multiple onChange={(e) => setNewProject({ ...newProject, documents: [...e.target.files] })} />
        <button onClick={handleAddProject}>Add Project</button>
      </div>

      <h3>Project List</h3>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <strong>{project.name}</strong> - {project.status}
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDashboard;
