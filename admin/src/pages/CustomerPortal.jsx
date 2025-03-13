import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import "./CustomerPortal.css";

const CustomerPortal = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/projects", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((response) => setProjects(response.data))
    .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="customer-container">
      <h2>My Projects</h2>

      {projects.length === 0 ? (
        <p>No projects assigned yet.</p>
      ) : (
        projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>

            {/* Project Images */}
            <div className="project-media">
              {project.images?.map((img, idx) => (
                <img key={idx} src={img} alt={`Project ${idx}`} />
              ))}
            </div>

            {/* Project Videos */}
            <div className="project-media">
              {project.videos?.map((vid, idx) => (
                <video key={idx} controls>
                  <source src={vid} type="video/mp4" />
                  Your browser does not support video.
                </video>
              ))}
            </div>

            {/* Project Progress Pie Chart */}
            <div className="chart-container">
              <Pie
                data={{
                  labels: ["Completed", "Remaining"],
                  datasets: [
                    {
                      data: [project.progress, 100 - project.progress],
                      backgroundColor: ["#4CAF50", "#FFC107"],
                    },
                  ],
                }}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CustomerPortal;
