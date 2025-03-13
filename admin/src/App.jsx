import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CustomerDashboard from "./pages/CustomerDashboard";
import ProjectDashboard from "./pages/ProjectDashboard";
import CustomerPortal from "./pages/CustomerPortal";
import Dashboard from "./pages/DashBoard";
import "./App.css"; // Import global styles

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar Navigation */}
        <aside className="sidebar">
          <h2 className="logo">Project Manager</h2>
          <nav>
            <NavLink to="/" className="nav-link" end>Login</NavLink>
            <NavLink to="/register" className="nav-link">Register</NavLink>
            <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
            <NavLink to="/customers" className="nav-link">Customers</NavLink>
            <NavLink to="/projects" className="nav-link">Projects</NavLink>
            <NavLink to="/customer-portal" className="nav-link">Customer Portal</NavLink>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<CustomerDashboard />} />
            <Route path="/projects" element={<ProjectDashboard />} />
            <Route path="/customer-portal" element={<CustomerPortal />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
