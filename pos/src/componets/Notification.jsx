import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'
import '../styles/Notification.css'

const notifications = [
    {
      id: 1,
      title: "Low Inventory Alert",
      message: "This is to notify you that the following items are running low in stock:",
      date: "07/04/25",
      imageUrl: "https://media.istockphoto.com/id/1437224778/vector/triangular-caution-sign-warning-symbol-danger-vector.jpg?s=612x612&w=0&k=20&c=PRuKXlcAf2zWnQChZkk118RprdRq3o6UoPZxMtVceuU=",
    },
    {
      id: 2,
      title: "Low Inventory Alert",
      message: "This is to notify you that the following items are running low in stock:",
      date: "07/04/25",
      imageUrl: "https://media.istockphoto.com/id/1437224778/vector/triangular-caution-sign-warning-symbol-danger-vector.jpg?s=612x612&w=0&k=20&c=PRuKXlcAf2zWnQChZkk118RprdRq3o6UoPZxMtVceuU=",
    },
    {
      id: 2,
      title: "Low Inventory Alert",
      message: "This is to notify you that the following items are running low in stock:",
      date: "07/04/25",
      imageUrl: "https://media.istockphoto.com/id/1437224778/vector/triangular-caution-sign-warning-symbol-danger-vector.jpg?s=612x612&w=0&k=20&c=PRuKXlcAf2zWnQChZkk118RprdRq3o6UoPZxMtVceuU=",
    },
    // Add more notifications as needed
  ];


const Notification = () => {

    const navigate = useNavigate(); 
    
    const [activeTab, setActiveTab] = useState("staff");
  
    const handleToggle = (tab) => {
      setActiveTab(tab);
    };
  
    const handleDelete = (id) => {
      console.log(`Notification ${id} deleted`);
      // Logic to delete notification goes here
    };
  
    const handleProfileClick = () => {
      navigate('/Profile');  
    };
  

  return (
    <div className="report-container">
      {/* Header Section */}
      <div className="report-header">
        <div className="report-title">
          <i
            className="fa-solid fa-arrow-left back"
            style={{fontSize:"14px",color:'#608BC1',backgroundColor:"#D9D9D9"}}
          ></i>
          <h1>Notification</h1>
        </div>

        <div className="report-two-icon">
          <div className="bell">
            <i className="fa-solid fa-bell note-bell"></i>
          </div>
          <div className="profile">
            <img
              src="https://placehold.co/40x40"
              alt="User profile"
              className="profile-img"  onClick={handleProfileClick}
            />
          </div>
        </div>
      </div>

      {/* Sub-header Section */}
      <div className="tabs-row">
        <button
          className={activeTab === "staff" ? "active-tab" : "inactive-tab"}
          onClick={() => handleToggle("staff")}
        >
          All
        </button>
        <button
          className={activeTab === "attendance" ? "active-tab" : "inactive-tab"}
          onClick={() => handleToggle("attendance")}
        >
          Unread
        </button>
      </div>


      {/* Notifications List */}
      {notifications.map((notification) => (
        <div className="notification-row" key={notification.id}>
          {/* Image */}
          <div className="notification-image">
            <img src={notification.imageUrl} alt="Notification" />
          </div>

          {/* Notification Content */}
          <div className="notification-content">
            <h3>{notification.title}</h3>
            <p>{notification.message}</p>
          </div>

          {/* Date */}
          <div className="notification-date">
            <p>{notification.date}</p>
          </div>

          {/* Delete Button */}
          <div className="notification-actions">
            <button onClick={() => handleDelete(notification.id)} className="delete-btn">
              <i className="fa-solid fa-trash"></i> Delete
            </button>
          </div>
        </div>
      ))}

    </div>

  )
}

export default Notification
