import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Books.css';
import RightSideMenu from '../componets/RightSideMenu';

const Books = () => {
  const [activeCard, setActiveCard] = useState(null); // Track the active card
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track the menu state

  const categories = [
    { id: 1, icon: "fa-solid fa-search", title: 'All', count: '200k items' },
    { id: 2, icon: "fa-solid fa-search", title: 'School Books', count: '120k Books' },
    { id: 3, icon: "fa-solid fa-search", title: 'University', count: '20k Books' },
    { id: 4, icon: "fa-solid fa-search", title: 'Exam', count: '20 Books' },
    { id: 5, icon: "fa-solid fa-search", title: 'Extra', count: '20 Books' },
    { id: 6, icon: "fa-solid fa-search", title: 'Extra', count: '20 Books' },
    { id: 7, icon: "fa-solid fa-search", title: 'Extra', count: '20 Books' },
  ];

  const books = [
    { id: 1, productName: "Pride and Prejudice", description: "Lorem ipsum dolor sit amet.", itemId: "#22314644", stock: "119 items", category: "School Books", price: "Rs. 55.00", availability: "In Stock" },
    { id: 1, productName: "Pride and Prejudice", description: "Lorem ipsum dolor sit amet.", itemId: "#22314644", stock: "119 items", category: "School Books", price: "Rs. 55.00", availability: "In Stock" },
    { id: 1, productName: "Pride and Prejudice", description: "Lorem ipsum dolor sit amet.", itemId: "#22314644", stock: "119 items", category: "School Books", price: "Rs. 55.00", availability: "In Stock" },
    { id: 1, productName: "Pride and Prejudice", description: "Lorem ipsum dolor sit amet.", itemId: "#22314644", stock: "119 items", category: "School Books", price: "Rs. 55.00", availability: "In Stock" },
    { id: 1, productName: "Pride and Prejudice", description: "Lorem ipsum dolor sit amet.", itemId: "#22314644", stock: "119 items", category: "School Books", price: "Rs. 55.00", availability: "In Stock" },
    { id: 1, productName: "Pride and Prejudice", description: "Lorem ipsum dolor sit amet.", itemId: "#22314644", stock: "119 items", category: "School Books", price: "Rs. 55.00", availability: "In Stock" },
    { id: 1, productName: "Pride and Prejudice", description: "Lorem ipsum dolor sit amet.", itemId: "#22314644", stock: "119 items", category: "School Books", price: "Rs. 55.00", availability: "In Stock" },
  ];

  const handleCardClick = (id) => {
    setActiveCard(id); // Set the active card ID
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  const navigate = useNavigate(); 

  const handleProfileClick = () => {
    navigate('/Profile');  
  };

  const handleNotificationClick = () => {
    navigate('/notification');  
  };


  return (
    <div className="book-container">
      <div className="book-header">
        <div className="book-title">
          <i className="fa-solid fa-arrow-left back" style={{ fontSize: "13px" }}></i>
          <h1>Menu</h1>
        </div>
        <div className="book-two-icon">
          <div className="bell">
            <i className="fa-solid fa-bell note-bell" onClick={handleNotificationClick}></i>
          </div>
          <div className="profile">
            <img src="https://placehold.co/40x40" alt="User profile" className="profile-img"  onClick={handleProfileClick}/>
          </div>
        </div>
      </div>

      <div className="sub-header">
        <span className="text">Categories</span>
        <div className="btn">
          <button className="category" onClick={handleMenuToggle}>Add New Category</button>
        </div>
      </div>

      {/* Add New Category Menu */}
      {isMenuOpen && <RightSideMenu isOpen={isMenuOpen} onClose={handleMenuToggle} />}

      <div className="categories-container">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-card ${activeCard === category.id ? 'active' : ''}`} // Add 'active' class if the card is selected
            onClick={() => handleCardClick(category.id)} // Handle click event
          >
            <div className="icon-container">
              <i className={`${category.icon} c-icon`}></i>
            </div>
            <div className="category-title">{category.title}</div>
            <div className="category-count">{category.count}</div>
          </div>
        ))}          
      </div>

      <div className="special-menu-container">
        <h1 className="title">Special menu all Books</h1>
        <div className="tabs">
          <button className="tab active">Normal Books</button>
          <button className="tab">In Demand</button>
          <button className="tab">On Discount</button>
          <button className="tab">Selling Fast</button>
          <button className="add-button">Add Books</button>
        </div>
        <table className="book-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Product Name</th>
              <th>Item ID</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Price</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index} className={index % 2 === 0 ? "row even" : "row odd"}>
                <td>
                  <img src="/path-to-image.jpg" alt="Book" className="book-image" />
                </td>
                <td>
                  <strong>{book.productName}</strong>
                  <p className="description">{book.description}</p>
                </td>
                <td>{book.itemId}</td>
                <td>{book.stock}</td>
                <td>{book.category}</td>
                <td>{book.price}</td>
                <td className="availability">{book.availability}</td>
                <td className="actions">
                  <i className="fa-solid fa-pencil edit"></i>
                  <i className="fa-solid fa-trash delete"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Books;
