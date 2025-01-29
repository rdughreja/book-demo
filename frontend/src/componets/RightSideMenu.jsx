import React, { useState } from "react";
import '../styles/RightSideMenu.css'

const RightSideMenu = ({ isOpen, onClose }) => {
  
  const [icon, setIcon] = useState(null);
  const handleIconChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIcon(URL.createObjectURL(file)); // Display selected icon
    }
  };
    return (
      <div className={`right-side-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-header2">
            <h3>Add New Category</h3>
           <i className="fa-solid fa-arrow-left icon6" style={{fontSize:"11px",color:'white'}} onClick={onClose}></i>
        </div>
        <hr className="divider" />

        <form className="category-form">
          <div className="icon-upload-section">
            <label htmlFor="icon-input">
              {icon ? (
                <img src={icon} alt="Selected Icon" className="icon-preview" />
              ) : (
                <div className="select-icon-placeholder">Select icon here</div>
              )}
            </label>
              <input type="file" id="icon-input" accept="image/*" onChange={handleIconChange}style={{ display: "none" }}/>
              <button type="button"  className="change-icon-btn"onClick={() => document.getElementById("icon-input").click()}>Change Icon</button>
          </div>

          <label htmlFor="category-name">Category Name</label>
          <input type="text" id="category-name" placeholder="Enter category name" required/>
          
          <label htmlFor="category-menu">Select Menu</label>
          <input type="text" id="category-menu" placeholder="Select menu" required/>
  
          <label htmlFor="category-description">Description</label>
          {/* <input type="textarea" id="category-description" placeholder="write your category description here" /> */}
          <textarea id="category-description" name="category-description" rows="5" cols="40" placeholder="write your category description here" required></textarea>
  
        <div className="btn2">
            <button type="text" className="cancel-button">Cancel</button>
            <button type="submit" className="submit-button">Save</button>
        </div>
         
        </form>
      </div>
    );
  };

export default RightSideMenu
