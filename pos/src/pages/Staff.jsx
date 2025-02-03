import React, { useState } from 'react';
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

  const [attendanceData, setAttendanceData] = useState([
    { id: 101, name: 'Watson Joyce', date: '16-Apr-2024', timings: '9am to 6pm', status: '' },
    { id: 102, name: 'Sarah Lee', date: '16-Apr-2024', timings: '10am to 7pm', status: '' },
    { id: 103, name: 'Watson Joyce', date: '16-Apr-2024', timings: '9am to 6pm', status: '' },
    { id: 104, name: 'Sarah Lee', date: '16-Apr-2024', timings: '10am to 7pm', status: '' },
    { id: 105, name: 'Watson Joyce', date: '16-Apr-2024', timings: '9am to 6pm', status: '' },
    { id: 106, name: 'Sarah Leee', date: '16-Apr-2024', timings: '10am to 7pm', status: '' },
    { id: 107, name: 'Watson Joyce', date: '16-Apr-2024', timings: '9am to 6pm', status: '' },
    { id: 108, name: 'Sarah Lee', date: '16-Apr-2024', timings: '10am to 7pm', status: '' },
  ]); 

  const deleteStaff = (id) => {
    const updatedStaff = staffData.filter((member) => member.id !== id);
    setStaff(updatedStaff);
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
