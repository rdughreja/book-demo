import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Staff.css'
import Addstaff from '../componets/Addstaff';
import Editstaff from '../componets/Editstaff';

const Staff = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('staff');

  const handleToggle = (tab) => {
    setActiveTab(tab);
  };

 
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate(); 

  const handleProfileClick = () => {
    navigate('/Profile');  
  };

  const handleNotificationClick = () => {
    navigate('/notification');  
  };  

  const [staffData, setStaffData] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    // Fetch staff data from the API
    const fetchStaffData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/employees/fetch');
        setStaffData(response.data);
      } catch (error) {
        console.error('Error fetching staff data:', error);
      }
    };

    fetchStaffData();
  }, []);


  // const editStaff = async (id, updatedData) => {
  //   try {
  //     const response = await axios.put(`http://localhost:5000/employees/update/${id}`, updatedData);
      
  //     // Update local state with the modified staff member
  //     setStaffData(staffData.map((member) => 
  //       member.id === id ? { ...member, ...updatedData } : member
  //     ));
  
  //     alert('Staff member updated successfully!');
  //   } catch (error) {
  //     console.error('Error updating staff member:', error);
  //     alert('Failed to update staff member. Please try again.');
  //   }
  // };
  

  const deleteStaff = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/employees/delete`, { data: { id } });
      setStaffData(staffData.filter((member) => member.id !== id));
      alert('Staff member deleted successfully!');
    } catch (error) {
      console.error('Error deleting staff member:', error);
      alert('Failed to delete staff member. Please try again.');
    }
  };

  const updateAttendanceStatus = (id, newStatus) => {
    setAttendanceData((prevData) =>
      prevData.map((record) =>
        record.id === id ? { ...record, status: newStatus } : record
      )
    );
  };

  return (
    <div className="staff-container">
      {/* Header */}
      <div className="staff-header">
        <div className="staff-title">
          <i className="fa-solid fa-arrow-left back" style={{ fontSize: '13px' }}></i>
          <h1>Staff Management</h1>
        </div>

        <div className="staff-two-icon">
          <div className="bell">
            <i className="fa-solid fa-bell note-bell" onClick={handleNotificationClick}></i>
          </div>
          <div className="profile">
            <img src="https://placehold.co/40x40" alt="User profile" className="profile-img"  onClick={handleProfileClick} />
          </div>
        </div>
      </div>

      {/* Actions and Staff Table */}
      <div className="header-actions">
        <div className="actions1">
          <div className="attendance-h2">
            <h2>{activeTab === 'staff' ? `Staff (${staffData.length})` : `Attendance (${attendanceData.length})`}</h2>
          </div>
          <div className="action-btn">
            <button className="add-staff"  onClick={handleMenuToggle}>Add Staff</button>
            {/* <button className="sort-by">Sort by</button> */}
          </div>
        </div>
             
        {isMenuOpen && <Addstaff isOpen={isMenuOpen} onClose={handleMenuToggle} />}

        {/* Tabs Row */}
        <div className="tabs-row">
          <button
            className={activeTab === 'staff' ? 'active-tab' : ''}
            onClick={() => handleToggle('staff')}
          >Staff Management</button>
          <button
            className={activeTab === 'attendance' ? 'active-tab' : ''}
            onClick={() => handleToggle('attendance')}
          >Attendance</button>
        </div>

        {activeTab === 'staff' && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Position</th>
                <th>Timings</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {staffData.map((member) => (
                <tr key={member.id}>
                  <td>{member.id}</td>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>{member.phone}</td>
                  <td>{member.age} yr</td>
                  <td>{member.salary}</td>
                  <td>{member.position}</td>
                  <td>{member.timings}</td>
                  <td>
                    <i className="fa-solid fa-pencil edit1"  onClick={() => handleEditClick(member.id)}></i>
                    <i className="fa-solid fa-trash delete1" onClick={() => deleteStaff(member.id)}></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

      </div> 
    </div> /*staff-container*/
  );
};

export default Staff;
