import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Inventory.css';
import AddInventory from '../componets/AddInventory';

const Inventory = () => {
  const navigate = useNavigate(); 
  const [isAddInventory, setIsAddInventory] = useState(false);
  const [showProductList, setShowProductList] = useState(false);
  const couponCode = "YOUR-BIRTHDAY-1234";

  const handleProfileClick = () => {
    navigate('/Profile');  
  };

  const handleNotificationClick = () => {
    navigate('/notification');  
  };

  const handleFilterClick = () => {
    setShowProductList(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(couponCode);
    alert("Coupon code copied!");
  };

  const handleAddInventoryToggle = () => {
    setIsAddInventory(true); 
    // setIsEditBookOpen(false); 
  };

  
  return (
    <div className="report-container">
      <div className="report-header">
        <div className="report-title">
          {/* <i className="fa-solid fa-arrow-left back" style={{ fontSize: "14px", color: '#133E87',backgroundColor:"#D2F7FF" }}></i> */}
          <h1>Inventory</h1>
        </div>

        {isAddInventory && <AddInventory isOpen={isAddInventory} onClose={() => setIsAddInventory(false)} />}

        <div className="report-two-icon">
          <div className="bell">
            <i className="fa-solid fa-bell note-bell" style={{color:"#00163B"}} onClick={handleNotificationClick}></i>
          </div>
          <div className="profile">
            <img src="https://placehold.co/40x40" alt="User profile" className='profile-img' onClick={handleProfileClick} />
          </div>
        </div>
      </div>

      <div className="sub-header">
        <span className="text2">150 total products</span>
        <div className="btn">
          <button className="category2"  onClick={handleAddInventoryToggle}>Add New Inventory</button>
        </div>
      </div>

      <div className="dashboard1"> 
        <div className="sidebar1">
          <div className="filters">
            <div className="filter-group">
              <h2 className="filter-title">Product Status</h2>
              <div className="filter-buttons">
                <div className="filter-buttons-1">
                  <button className="filter-button">All <span className="count">150</span></button>
                  <button className="filter-button">Active <span className="count">120</span></button>
                </div>
                <div className="filter-button-2">
                  <button className="filter-button">Inactive <span className="count">10</span></button>
                  <button className="filter-button">Draft <span className="count">10</span></button>
                </div>
              </div>
            </div>

            <div className="filter-group">
              <h2 className="filter-title">Category</h2>
              <select className="filter-select">
                <option>All</option>
                <option>Books</option>
                <option>Stationery</option>
              </select>
            </div>

            <div className="filter-group">
              <h2 className="filter-title">Stock</h2>
              <select className="filter-select">
                <option>InStock</option>
                <option>OutOfStock</option>
              </select>
            </div>

            <div className="filter-group">
              <h2 className="filter-title">Value</h2>
              <input type="number" placeholder="Number" className="filter-input" />
            </div>

            <button className="reset-button">Reset Filters</button>
          </div>
        </div>

        <div className="product-list">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="product-card">
              <div className="product-info">
                <img src="https://via.placeholder.com/50" alt="Product" className="product-image" />
                <div>
                  <h2 className="product-name">Pride and Prejudice</h2>
                  <div className='a2'>
                    <p className="product-stock">Stocked Product: </p>
                    <p className='product-stock-no'>10 In Stock</p>
                  </div>
                </div>
              </div>
              <div className="product-details">
                <div>
                  <p className="detail-title">Status</p>
                  <p className="detail-value">Active</p>
                </div>
                <div>
                  <p className="detail-title">Category</p>
                  <p className="detail-value">Exams</p>
                </div>
                <div>
                  <p className="detail-title">Retail Price</p>
                  <p className="detail-value">Rs. 55.00</p>
                </div>
                <i className="fa-solid fa-pencil edit-button"></i>
                <i className="fa-solid fa-trash delete-button"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Discount Coupon Section */}
      <div className="discount-container">
        <h3 className="discount-title">Rs10.00 OFF</h3>
        <p className="discount-subtitle">FOR ORDERS ABOVE Rs50.00</p>
        <div className="coupon-box">
          <span className="coupon-code">Code: {couponCode}</span>
          <button className="copy-btn" onClick={copyToClipboard}>Copy</button>
          <button className="apply-btn">Apply</button>
        </div>
        <ul className="terms-list">
          <li>05/08/2021 04:00 – 12/08/2021 12:00</li>
          <li>valid once per customer for 7 days from the date of issuing (7 days before the birthday)</li>
          <li>Cannot be combined with other promotions</li>
        </ul>
      </div>

    </div>
  );
};

export default Inventory;
