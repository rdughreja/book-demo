import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Staff.css'
import Addstaff from '../componets/Addstaff';

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

  const deleteStaff = (id) => {
    const updatedStaff = staffData.filter((member) => member.id !== id);
    setStaffData(updatedStaff);
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
                <th>Timings</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {staffData.map((member) => (
                <tr key={member.ID}>
                  <td>{member.ID}</td>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>{member.phone}</td>
                  <td>{member.age} yr</td>
                  <td>{member.salary}</td>
                  <td>{member.timings}</td>
                  <td>
                    <i className="fa-solid fa-eye view"></i> 
                    <i className="fa-solid fa-pencil edit1" onClick={() => handleToggle('attendance')}></i>
                    <i className="fa-solid fa-trash delete1" onClick={() => deleteStaff(member.id)}></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === 'attendance' && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Timings</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((record) => (
                <tr key={record.id}>
                  <td>{record.id}</td>
                  <td>{record.name}</td>
                  <td>{record.date}</td>
                  <td>{record.timings}</td>
                  <td>
                    {record.status ? (
                      <button className={`status ${record.status.toLowerCase()}`}>
                        {record.status}
                      </button>
                    ) : (
                      <>
                        <button className="status present" onClick={() => updateAttendanceStatus(record.id, 'Present')}>
                          Present
                        </button>
                        <button className="status absent" onClick={() => updateAttendanceStatus(record.id, 'Absent')}>
                          Absent
                        </button>
                      </>
                    )}
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
