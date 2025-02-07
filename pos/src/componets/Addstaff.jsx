import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Addstaff.css';

const Addstaff = ({ isOpen, onClose }) => {
  const [staff, setStaff] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    age: "",
    salary: "",
    position: "",
    timings: "",
  });

  const handleChange = (e) => {
    setStaff({ ...staff, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/employees/add', staff);
      console.log("New Staff Added:", response.data);
      alert("Staff member added successfully!");
      onClose(); // Close the form after successful submission
    } catch (error) {
      console.error('Error adding staff member:', error);
      alert('Failed to add staff member. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`add-staff-menu ${isOpen ? "open" : ""}`}>
      <div className="menu-header2">
        <h3>Add New Staff</h3>
        <i className="fa-solid fa-arrow-left icon6" style={{ fontSize: "11px", color: "#00163B" }} onClick={onClose}></i>
      </div>
      <hr className="divider3" />

      <form className="staff-form" onSubmit={handleSubmit}>
        <label>ID:</label>
        <input type="text" name="id" value={staff.id} onChange={handleChange} required />

        <label>Name:</label>
        <input type="text" name="name" value={staff.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={staff.email} onChange={handleChange} required />

        <label>Phone:</label>
        <input type="tel" name="phone" value={staff.phone} onChange={handleChange} required />

        <div className="form-row3">
          <div className="input-group">
            <label>Age:</label>
            <input type="text" name="age" value={staff.age} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Salary:</label>
            <input type="number" name="salary" value={staff.salary} onChange={handleChange} required />
          </div>
        </div>

        <label>Position:</label>
        <input type="text" name="position" value={staff.position} onChange={handleChange} required />

        <label>Timings:</label>
        <input type="text" name="timings" value={staff.timings} onChange={handleChange} required />

        <div className="btn2">
          <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
          <button type="submit" className="submit-button">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Addstaff;
