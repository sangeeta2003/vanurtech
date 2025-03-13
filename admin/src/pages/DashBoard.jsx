import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/customers")
      .then(response => setCustomers(response.data))
      .catch(error => console.error("Error fetching customers:", error));

    axios.get("http://localhost:5000/projects")
      .then(response => setProjects(response.data))
      .catch(error => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>

      {/* Customers Section */}
      <div className="dashboard-section">
        <h3>Customers</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.name}</td>
                <td>{customer.contact}</td>
                <td>{customer.email}</td>
                <td>{customer.siteLocation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Projects Section */}
      <div className="dashboard-section">
        <h3>Projects</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>{project.name}</td>
                <td>{project.status}</td>
                <td>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
