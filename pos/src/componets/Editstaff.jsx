import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Editstaff.css';

const Editstaff = ({ isOpen, onClose, staff }) => {
  const [updatedStaff, setUpdatedStaff] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    age: "",
    salary: "",
    position: "",
    timings: "",
  });

  // Populate form fields with selected staff data when modal opens
  useEffect(() => {
    if (staff) {
      setUpdatedStaff(staff);
    }
  }, [staff]);

  const handleChange = (e) => {
    setUpdatedStaff({ ...updatedStaff, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Ensure the ID is present and make API request
      if (!updatedStaff.id) {
        alert("Error: Staff ID is missing.");
        return;
      }

      const response = await axios.put(
        `http://localhost:5000/employees/update/${updatedStaff.id}`,updatedStaff
      );

      console.log("Staff Updated:", response.data);
      alert("Staff member updated successfully!");
      onClose(); // Close the form after a successful update
    } catch (error) {
      console.error('Error updating staff member:', error);
      alert('Failed to update staff member. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`edit-staff-menu ${isOpen ? "open" : ""}`}>
      <div className="menu-header2">
        <h3>Edit Staff</h3>
        <i className="fa-solid fa-arrow-left icon6" 
           style={{ fontSize: "11px", color: "#00163B" }} 
           onClick={onClose}>
        </i>
      </div>
      <hr className="divider3" />

      <form className="staff-form" onSubmit={handleSubmit}>
        <label>ID:</label>
        <input type="text" name="id" value={updatedStaff.id} disabled />

        <label>Name:</label>
        <input type="text" name="name" value={updatedStaff.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={updatedStaff.email} onChange={handleChange} required />

        <label>Phone:</label>
        <input type="tel" name="phone" value={updatedStaff.phone} onChange={handleChange} required />

        <div className="form-row3">
          <div className="input-group">
            <label>Age:</label>
            <input type="text" name="age" value={updatedStaff.age} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Salary:</label>
            <input type="number" name="salary" value={updatedStaff.salary} onChange={handleChange} required />
          </div>
        </div>

        <label>Position:</label>
        <input type="text" name="position" value={updatedStaff.position} onChange={handleChange} required />

        <label>Timings:</label>
        <input type="text" name="timings" value={updatedStaff.timings} onChange={handleChange} required />

        <div className="btn2">
          <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
          <button type="submit" className="submit-button">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Editstaff;
