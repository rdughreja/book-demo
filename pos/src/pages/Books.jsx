import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Books.css';
import RightSideMenu from '../componets/RightSideMenu';

const Books = () => {
  const [activeCategory, setActiveCategory] = useState(1); // Default to "All" category
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  // Book categories
  const categories = [
    { id: 1, icon: "fa-solid fa-search", title: "All", count: "200k items" },
    { id: 2, icon: "fa-solid fa-search", title: "School Books", count: "120k Books" },
    { id: 3, icon: "fa-solid fa-search", title: "University", count: "20k Books" },
    { id: 4, icon: "fa-solid fa-search", title: "Exam", count: "20 Books" },
    { id: 5, icon: "fa-solid fa-search", title: "Extra", count: "20 Books" },
    { id: 6, icon: "fa-solid fa-search", title: "Extra", count: "20 Books" },
    { id: 7, icon: "fa-solid fa-search", title: "Extra", count: "20 Books" },
    { id: 8, icon: "fa-solid fa-search", title: "All", count: "200k items" },
    { id: 9, icon: "fa-solid fa-search", title: "School Books", count: "120k Books" },
    { id: 10, icon: "fa-solid fa-search", title: "University", count: "20k Books" },
    { id: 11, icon: "fa-solid fa-search", title: "Exam", count: "20 Books" },
  ];

  // Book inventory
  const books = [
    { id: 1, productName: "Pride and Prejudice", description: "Classic novel.", itemId: "#22314644", stock: "119 items", categoryId: 2, price: "Rs. 55.00", availability: "In Stock" },
    { id: 2, productName: "1984", description: "Dystopian novel.", itemId: "#22314645", stock: "85 items", categoryId: 3, price: "Rs. 60.00", availability: "In Stock" },
    { id: 3, productName: "Data Structures", description: "Computer Science book.", itemId: "#22314646", stock: "45 items", categoryId: 3, price: "Rs. 150.00", availability: "Out of Stock" },
    { id: 4, productName: "Mathematics for Exams", description: "Exam preparation book.", itemId: "#22314647", stock: "30 items", categoryId: 4, price: "Rs. 90.00", availability: "In Stock" },
  ];

  const handleCardClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="book-container">
      {/* Header */}
      <div className="book-header">
        <div className="book-title">
          <i className="fa-solid fa-arrow-left back"></i>
          <h1>Menu</h1>
        </div>
        <div className="book-two-icon">
          <div className="bell">
            <i className="fa-solid fa-bell note-bell" onClick={() => navigate("/notification")}></i>
          </div>
          <div className="profile">
            <img src="https://placehold.co/40x40" alt="User profile" className="profile-img" onClick={() => navigate("/Profile")} />
          </div>
        </div>
      </div>

      {/* Sub Header */}
      <div className="sub-header">
        <span className="text">Categories</span>
        <div className="btn">
          <button className="category" onClick={handleMenuToggle}>Add Books</button>
        </div>
      </div>

      {/* Right Side Menu */}
      {isMenuOpen && <RightSideMenu isOpen={isMenuOpen} onClose={handleMenuToggle} />}

      {/* Categories */}
      <div className="categories-container">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-card ${activeCategory === category.id ? "active" : ""}`}
            onClick={() => handleCardClick(category.id)}
          >
            <div className="icon-container">
              <i className={`${category.icon} c-icon`}></i>
            </div>
            <div className="category-title">{category.title}</div>
            <div className="category-count">{category.count}</div>
          </div>
        ))}
      </div>

      {/* Books Table (Always Visible) */}
      <div className="special-menu-container">
        <h1 className="title">Books in {categories.find((c) => c.id === activeCategory)?.title}</h1>
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
            {books
              .filter((book) => activeCategory === 1 || book.categoryId === activeCategory) // Show all books if "All" is selected
              .map((book, index) => (
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
                  <td>{categories.find((c) => c.id === book.categoryId)?.title || "Unknown"}</td>
                  <td>{book.price}</td>
                  <td className="availability">{book.availability}</td>
                  <td className="actions">
                    <i className="fa-solid fa-pencil edit" onClick={handleMenuToggle}></i>
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
