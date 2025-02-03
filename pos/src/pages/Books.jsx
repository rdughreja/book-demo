import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Books.css';
import RightSideMenu from '../componets/RightSideMenu';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all books from the API
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/fetch/allBooks');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleCardClick = async (category) => {
    if (category === 'All') {
      setActiveCategory(null); // Show all books
      try {
        const response = await axios.get('http://localhost:5000/api/fetch/allBooks');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    } else {
      setActiveCategory(category);
      // Fetch books for the specific category
      try {
        const response = await axios.get(`http://localhost:5000/api/fetch/books?category=${category}`);
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories = [
    { category: 'All', icon: "fa-solid fa-search", title: "All", count: "200k Books" },
    { category: 'cbseEnglishMedium', icon: "fa-solid fa-search", title: "cbseEnglishMedium", count: "50k Books" },
    { category: 'cbseEnglishMediumWorkbook', icon: "fa-solid fa-search", title: "cbseEnglishMediumWorkbook", count: "30k Books" },
    { category: 'cbseHindiMedium', icon: "fa-solid fa-search", title: "cbseHindiMedium", count: "40k Books" },
    { category: 'cbseHindiMediumWorkbook', icon: "fa-solid fa-search", title: "cbseHindiMediumWorkbook", count: "25k Books" },
    { category: 'gsebEnglishMedium', icon: "fa-solid fa-search", title: "gsebEnglishMedium", count: "35k Books" },
    { category: 'gsebEnglishMediumWorkbook', icon: "fa-solid fa-search", title: "gsebEnglishMediumWorkbook", count: "20k Books" },
    { category: 'gsebGujaratiMedium', icon: "fa-solid fa-search", title: "gsebGujaratiMedium", count: "45k Books" },
    { category: 'gsebGujaratiMediumWorkbook', icon: "fa-solid fa-search", title: "gsebGujaratiMediumWorkbook", count: "15k Books" },
    { category: 'icseEnglishMedium', icon: "fa-solid fa-search", title: "icseEnglishMedium", count: "55k Books" },
    { category: 'icseEnglishMediumWorkbook', icon: "fa-solid fa-search", title: "icseEnglishMediumWorkbook", count: "35k Books" },
  ];

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
            key={category.category}
            className={`category-card ${activeCategory === category.category ? "active" : ""}`}
            onClick={() => handleCardClick(category.category)}
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
        <h1 className="title">Books in {categories.find((c) => c.category === activeCategory)?.title || "All Categories"}</h1>
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
                  <img src={book.image} alt="Book" className="book-image" />
                </td>
                <td>
                  <strong>{book.name}</strong>
                  <p className="description">{book.description}</p>
                </td>
                <td>{book.sku}</td>
                <td>{book.stock_quantity} items</td>
                <td>{book.category}</td>
                <td>Rs. {book.price}</td>
                <td className="availability">{book.status === 'active' ? 'In Stock' : 'Out of Stock'}</td>
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
