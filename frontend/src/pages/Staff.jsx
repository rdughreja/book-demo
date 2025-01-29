import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Staff.css'

const Staff = () => {

  const [activeTab, setActiveTab] = useState('staff');

  const handleToggle = (tab) => {
    setActiveTab(tab);
  };

  const navigate = useNavigate(); 

    const handleProfileClick = () => {
      navigate('/Profile');  
    };

    const handleNotificationClick = () => {
      navigate('/notification');  
    };  
  
  const [staffData, setStaff] = useState([
    { id: 101, name: 'Watson Joyce', email: 'watsonjoyce112@gmail.com', phone: '+1 (123) 123 4654', age: 45, salary: 2200.0, timings: '9am to 6pm' },
    { id: 102, name: 'Sarah Lee', email: 'sarahlee@gmail.com', phone: '+1 (555) 987 6543', age: 30, salary: 2500.0, timings: '10am to 7pm' },
    { id: 103, name: 'abcd', email: 'watsonjoyce112@gmail.com', phone: '+1 (123) 123 4654', age: 45, salary: 2200.0, timings: '9am to 6pm' },
    { id: 104, name: 'aaaaaa', email: 'sarahlee@gmail.com', phone: '+1 (555) 987 6543', age: 30, salary: 2500.0, timings: '10am to 7pm' },
    { id: 105, name: 'bbbbbbb', email: 'watsonjoyce112@gmail.com', phone: '+1 (123) 123 4654', age: 45, salary: 2200.0, timings: '9am to 6pm' },
    { id: 106, name: 'ccccc', email: 'sarahlee@gmail.com', phone: '+1 (555) 987 6543', age: 30, salary: 2500.0, timings: '10am to 7pm' },
    { id: 107, name: 'ddddddd', email: 'watsonjoyce112@gmail.com', phone: '+1 (123) 123 4654', age: 45, salary: 2200.0, timings: '9am to 6pm' },
    { id: 108, name: 'eeeeee', email: 'sarahlee@gmail.com', phone: '+1 (555) 987 6543', age: 30, salary: 2500.0, timings: '10am to 7pm' },{ id: 101, name: 'Watson Joyce', email: 'watsonjoyce112@gmail.com', phone: '+1 (123) 123 4654', age: 45, salary: 2200.0, timings: '9am to 6pm' },
    { id: 109, name: 'ffffffffff', email: 'sarahlee@gmail.com', phone: '+1 (555) 987 6543', age: 30, salary: 2500.0, timings: '10am to 7pm' },{ id: 101, name: 'Watson Joyce', email: 'watsonjoyce112@gmail.com', phone: '+1 (123) 123 4654', age: 45, salary: 2200.0, timings: '9am to 6pm' },
    { id: 110, name: 'ggggggg', email: 'sarahlee@gmail.com', phone: '+1 (555) 987 6543', age: 30, salary: 2500.0, timings: '10am to 7pm' },
    { id: 111, name: 'hhhhhhhh', email: 'watsonjoyce112@gmail.com', phone: '+1 (123) 123 4654', age: 45, salary: 2200.0, timings: '9am to 6pm' },
  ]);

  const attendanceData = [
    { id: 101, name: 'Watson Joyce', date: '16-Apr-2024', timings: '9am to 6pm', status: 'Present' },
    { id: 102, name: 'Sarah Lee', date: '16-Apr-2024', timings: '10am to 7pm', status: 'Absent' },
    { id: 103, name: 'Watson Joyce', date: '16-Apr-2024', timings: '9am to 6pm', status: 'Present' },
    { id: 104, name: 'Sarah Lee', date: '16-Apr-2024', timings: '10am to 7pm', status: 'Absent' },
    { id: 105, name: 'Watson Joyce', date: '16-Apr-2024', timings: '9am to 6pm', status: 'Present' },
    { id: 106, name: 'Sarah Lee', date: '16-Apr-2024', timings: '10am to 7pm', status: 'Absent' },
    { id: 107, name: 'Watson Joyce', date: '16-Apr-2024', timings: '9am to 6pm', status: 'Present' },
    { id: 108, name: 'Sarah Lee', date: '16-Apr-2024', timings: '10am to 7pm', status: 'Absent' },
  ];

  const deleteStaff = (id) => {
    const updatedStaff = staffData.filter((member) => member.id !== id);
    setStaff(updatedStaff);
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
                    <button className="add-staff">Add Staff</button>
                    <button className="sort-by">Sort by</button>
                  </div>
                </div>
             

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
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>{member.age} yr</td>
              <td>${member.salary.toFixed(2)}</td>
              <td>{member.timings}</td>
              <td>
                <i className="fa-solid fa-eye view"></i> 
                <i className="fa-solid fa-pencil edit1" onClick={() => handleToggle('attendance')}></i>
                <i className="fa-solid fa-trash delete1"  onClick={() => deleteStaff(member.id)}></i>
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
                  <button className="status present">Present</button>
                  <button className="status absent">Absent</button>
                  {/* <button className="status half-shift">Half Shift</button>
                  <button className="status leave">Leave</button> */}
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
