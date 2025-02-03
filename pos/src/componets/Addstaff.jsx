import React,{useState} from 'react'
import '../styles/Addstaff.css'
    

const Addstaff = ({isOpen,onClose}) => {

    const [staff, setStaff] = useState({
        name: "",
        email: "",
        phone: "",
        salary: "",
      });
    
      const handleChange = (e) => {
        setStaff({ ...staff, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("New Staff Added:", staff);
        alert("Staff member added successfully!");
      };
    

  return (
    <div className={`right-side-menu ${isOpen ? "open" : ""}`}>
      <div className="menu-header2">
        <h3>Add New Staff</h3>
        <i className="fa-solid fa-arrow-left icon6" style={{ fontSize: "11px", color: "white" }} onClick={onClose}></i>
      </div>
      <hr className="divider2" />

      <form className="staff-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={staff.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={staff.email} onChange={handleChange} required />

        <label>Phone:</label>
        <input type="tel" name="phone" value={staff.phone} onChange={handleChange} required />

        <label>Salary:</label>
        <input type="number" name="salary" value={staff.salary} onChange={handleChange} required />

        <div className="btn2">
          <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
          <button type="submit" className="submit-button">Save</button>
        </div>
      </form>
    </div>
  )
}

export default Addstaff
