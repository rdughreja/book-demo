import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Inventory.css'

const Inventory = () => {

  const navigate = useNavigate(); 
  
  const handleProfileClick = () => {
    navigate('/Profile');  
  };

  const handleNotificationClick = () => {
    navigate('/notification');  
  };


  return (
    <div className="report-container">
      <div className="report-header">
        <div className="report-title">
          <i className="fa-solid fa-arrow-left back" style={{ fontSize: "14px", color: 'white' }}></i>
          <h1>Inventory</h1>
        </div>

        <div className="report-two-icon">
          <div className="bell">
            <i className="fa-solid fa-bell note-bell" onClick={handleNotificationClick}></i>
          </div>
          <div className="profile">
            <img src="https://placehold.co/40x40" alt="User profile" className='profile-img' onClick={handleProfileClick} />
          </div>
        </div>
      </div>

      <div className="sub-header">
        <span className="text2">150 totals products</span>
        <div className="btn">
          <button className="category" >Add New Inventory</button>
        </div>
      </div>

    <div className="dashboard1"> 
      <div className="sidebar1">
        <div className="filters">
          {/* Product Status */}
          <div className="filter-group">
              <h2 className="filter-title">Product Status</h2>
              <div className="filter-buttons">
                <div className="filter-buttons-1">
                    <button className="filter-button">
                      All <span className="count">150</span>
                    </button>
                    <button className="filter-button">
                      Active <span className="count">120</span>
                    </button>
                </div>
               <div className="filter-button-2">
                  <button className="filter-button">
                      Inactive <span className="count">10</span>
                    </button>
                    <button className="filter-button">
                      Draft <span className="count">10</span>
                    </button>
               </div>
               
              </div>
          </div>

          {/* Category */}
          <div className="filter-group">
            <h2 className="filter-title">Category</h2>
            <select className="filter-select">
              <option>All</option>
              <option>Exams</option>
              <option>Books</option>
              <option>Stationery</option>
            </select>
          </div>

          {/* Stock */}
          <div className="filter-group">
            <h2 className="filter-title">Stock</h2>
            <select className="filter-select">
              <option>InStock</option>
              <option>OutOfStock</option>
            </select>
          </div>

          {/* Value */}
          <div className="filter-group">
            <h2 className="filter-title">Value</h2>
            <input
              type="number"
              placeholder="Number"
              className="filter-input"
            />
          </div>

          {/* Quantity */}
          <div className="filter-group">
            <h2 className="filter-title">Piece / Item / Quantity</h2>
            <input
              type="number"
              placeholder="50"
              className="filter-input"
            />
          </div>

          {/* Price */}
          <div className="filter-group">
            <h2 className="filter-title">Price</h2>
            <div className="price-inputs">
              <input
                type="number"
                placeholder="50"
                className="filter-input"
              />
              <input
                type="number"
                placeholder="120"
                className="filter-input"
              />
            </div>
          </div>

          {/* Reset Filters */}
          <button className="reset-button">Reset Filters</button>
        </div>
      </div>

      {/* Main Content */}
        {/* Product List */}
        <div className="product-list">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="product-card">
              <div className="product-info">
                  <img src="https://via.placeholder.com/50" alt="Product" className="product-image"
                  />
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
                  <i className="fa-solid fa-pencil edit" style={{ fontSize: "11px" }}></i>
                  <i className="fa-solid fa-trash delete" style={{ fontSize: "11px" }}></i>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </div>

  )
}

export default Inventory
