import { useState } from "react";
import "./CustomerDashboard.css";

const CustomerDashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    address: "",
    squareFeet: "",
    contact: "",
    email: "",
    siteLocation: "",
    buildingType: "Residential",
  });

  const handleAddCustomer = () => {
    setCustomers([...customers, newCustomer]);
    setNewCustomer({
      name: "",
      address: "",
      squareFeet: "",
      contact: "",
      email: "",
      siteLocation: "",
      buildingType: "Residential",
    });
  };

  return (
    <div className="dashboard-container">
      <h2>Customer Management</h2>
      
      <div className="customer-form">
        <input type="text" placeholder="Name" value={newCustomer.name} onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })} />
        <input type="text" placeholder="Address" value={newCustomer.address} onChange={(e) => setNewCustomer({ ...newCustomer, address: e.target.value })} />
        <input type="text" placeholder="Square Feet" value={newCustomer.squareFeet} onChange={(e) => setNewCustomer({ ...newCustomer, squareFeet: e.target.value })} />
        <input type="text" placeholder="Contact Number" value={newCustomer.contact} onChange={(e) => setNewCustomer({ ...newCustomer, contact: e.target.value })} />
        <input type="email" placeholder="Email" value={newCustomer.email} onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })} />
        <input type="text" placeholder="Site Location" value={newCustomer.siteLocation} onChange={(e) => setNewCustomer({ ...newCustomer, siteLocation: e.target.value })} />
        
        <select value={newCustomer.buildingType} onChange={(e) => setNewCustomer({ ...newCustomer, buildingType: e.target.value })}>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
        </select>

        <button onClick={handleAddCustomer}>Add Customer</button>
      </div>

      <h3>Customer List</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Sq. Ft.</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Location</th>
            <th>Building Type</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.address}</td>
              <td>{customer.squareFeet}</td>
              <td>{customer.contact}</td>
              <td>{customer.email}</td>
              <td>{customer.siteLocation}</td>
              <td>{customer.buildingType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerDashboard;
