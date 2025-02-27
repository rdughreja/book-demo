import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Books.css';
import RightSideMenu from '../componets/RightSideMenu';
import AddStationaryCategory from '../componets/AddStationaryCategory';
import EditBook from '../componets/EditBook';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);
  const [isAddStationaryCategoryOpen, setIsAddStationaryCategoryOpen] = useState(false);
  const [isEditBookOpen, setIsEditBookOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
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

  // const handleCardClick = async (category) => {
  //   setActiveCategory(category);
  //   try {
  //     const response = await axios.get(
  //       category === 'All'
  //         ? 'http://localhost:5000/api/fetch/allBooks'
  //         : `http://localhost:5000/api/fetch/books?category=${category}`
  //     );
  //     setBooks(response.data);
  //   } catch (error) {
  //     console.error('Error fetching books:', error);
  //   }
  // };

  const handleRightMenuToggle = () => {
    setIsRightMenuOpen(true); 
    setIsEditBookOpen(false); 
  };

  const handleAddStationaryCategoryToggle = () => {
    setIsAddStationaryCategoryOpen(true); 
    setIsEditBookOpen(false); 
  };

  const handleEditBookToggle = (book) => {
    setSelectedBook(book); 
    setIsEditBookOpen(true); 
    setIsRightMenuOpen(false); 
  };

  const handleUpdateBook = (updatedBook) => {
    setBooks((prevBooks) => 
      prevBooks.map((book) => (book.sku === updatedBook.sku ? updatedBook : book))
    );
    setIsEditBookOpen(false); 
  };

  return (
    <div className="book-container">
      {/* Header */}
      <div className="book-header">
        <div className="book-title">
          {/* <i className="fa-solid fa-arrow-left back" style={{fontSize:"14px",color:'#608BC1',backgroundColor:"#D9D9D9"}}></i> */}
          <h1>Books</h1>
        </div>
        <div className="book-two-icon">
          <div className="bell">
            <i className="fa-solid fa-bell note-bell" onClick={() => navigate("/notification")}  style={{color: "#00163B"}} ></i>
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
        <button className="category" onClick={handleAddStationaryCategoryToggle}>Add New Category</button>
          <button className="category" onClick={handleRightMenuToggle}>Add Books</button>
        </div>
      </div>

      {/* Right Side Menu */}
      {isRightMenuOpen && <RightSideMenu isOpen={isRightMenuOpen} onClose={() => setIsRightMenuOpen(false)} />}
      {isAddStationaryCategoryOpen && <AddStationaryCategory isOpen={isAddStationaryCategoryOpen} onClose={() => setIsAddStationaryCategoryOpen(false)} />}
      {isEditBookOpen && <EditBook isOpen={isEditBookOpen} onClose={() => setIsEditBookOpen(false)} book={selectedBook} onUpdate={handleUpdateBook} />} 

      {/* Categories */}
      <div className="categories-container">
        {[
          { category: 'All', title: "All", count: `${books.length}` },
          { category: 'cbseEnglishMedium', title: "CBSE English Medium", count: "50k Books" },
          { category: 'cbseEnglishMediumWorkbook', title: "CBSE English Medium Workbook", count: "30k Books" },
          { category: 'cbseHindiMedium', title: "CBSE Hindi Medium", count: "40k Books" },
          { category: 'cbseHindiMediumWorkbook', title: "CBSE Hindi Medium Workbook", count: "25k Books" },
          { category: 'gsebEnglishMedium', title: "GSEB English Medium", count: "40k Books" },
          { category: 'gsebEnglishMediumWorkbook', title: "GSEB English Medium Workbook", count: "40k Books" },
          { category: 'gsebGujaratiMedium', title: "GSEB Gujarati Medium", count: "40k Books" },
          { category: 'icseEnglishMedium', title: "ICSE English Medium", count: "40k Books" },
          { category: 'icseEnglishMediumWorkbook', title: "ICSE English Medium Workbook", count: "40k Books" },
        ].map((category) => (
          <div
            key={category.category}
            className={`category-card ${activeCategory === category.category ? "active" : ""}`}
            // onClick={() => handleCardClick(category.category)}
          >
            <div className="category-title">{category.title}</div>
            <div className="category-count">{category.count}</div>
          </div>
        ))}
      </div>

      {/* Books Table */}
      <div className="special-menu-container">
        <h1 className="title">Books in {activeCategory || "All Categories"}</h1>
        <table className="book-table2">
          <thead>
            <tr>
              <th>Product</th>
              <th>Product Name</th>
              <th>Grade</th>
              <th>Subject</th>
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
                  <img src={book.image_link} alt="Book" className="book-image" />
                </td>
                <td>
                  <strong>{book.product_name}</strong>
                  <p className="description">{book.description}</p>
                </td>
                <td>{book.grade}</td>
                <td>{book.subject}</td>
                <td>{book._id}</td>
                <td>{book.stock_quantity} items</td>
                <td>{book.category}</td>
                <td>Rs. {book.price}</td>
                <td className="availability">{book.status === 'active' ? 'In Stock' : 'Out of Stock'}</td>
                <td className="actions">
                  <i className="fa-solid fa-pencil edit" onClick={() => handleEditBookToggle(book)}></i>
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
