import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerDashboard from './pages/CustomerDashboard';
import ProjectDashboard from './pages/ProjectDashboard';
import CustomerPortal from './pages/CustomerPortal'; // Added Customer Portal

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/customer-portal">Customer Portal</Link> {/* Added Customer Portal Link */}
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/customers" element={<CustomerDashboard />} />
        <Route path="/projects" element={<ProjectDashboard />} />
        <Route path="/customer-portal" element={<CustomerPortal />} /> {/* New Customer Portal Route */}
      </Routes>
    </Router>
  );
}

export default App;
