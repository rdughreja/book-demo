import React, {useState,useEffect} from 'react';
import '../styles/stationary.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import EditBook from '../componets/EditBook';
import AddStationaryCategory from '../componets/AddStationaryCategory';


const Stationary = () => {

    const [books, setBooks] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [isAddStationaryCategoryOpen, setIsAddStationaryCategoryOpen] = useState(false);
    const [isEditBookOpen, setIsEditBookOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
  
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchBooks = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/fetch/Adhesives_and_Tapes/GlueSticks');
          setBooks(response.data);
        } catch (error) {
          console.error('Error fetching books:', error);
        }
      };
      fetchBooks();
    }, []);
  
    const handleCardClick = async (category) => {
      setActiveCategory(category);
      try {
        const response = await axios.get(
          category === 'All'
            ? 'http://localhost:5000/api/fetch/allBooks'
            : `http://localhost:5000/api/fetch/books?category=${category}`
        );
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
  
    const handleAddStationaryCategoryToggle = () => {
      setIsAddStationaryCategoryOpen(true); 
      setIsEditBookOpen(false); 
    };
  
    const handleEditBookToggle = (book) => {
      setSelectedBook(book); 
      setIsEditBookOpen(true); 
      setIsAddStationaryCategoryOpen(false); 
    };
  
    const handleUpdateBook = (updatedBook) => {
      setBooks((prevBooks) => 
        prevBooks.map((book) => (book.sku === updatedBook.sku ? updatedBook : book))
      );
      setIsEditBookOpen(false); 
    };
  

  return (
    <div className="stationary-container">
      {/* Header */}
      <div className="stationary-header">
        <div className="stationary-title">
          {/* <i className="fa-solid fa-arrow-left back" style={{fontSize:"14px",color:'#608BC1',backgroundColor:"#D9D9D9"}}></i> */}
          <h1>Stationary</h1>
        </div>
        <div className="stationary-two-icon">
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
          <button className="stationary-category" onClick={handleAddStationaryCategoryToggle}>Add new Category</button>
        </div>
      </div>

      {/* Right Side Menu */}
      {/* {isRightSideMenuOpen && <RightSideMenu isOpen={isRightMenuOpen} onClose={() => setIsRightMenuOpen(false)} />} */}
      {isAddStationaryCategoryOpen && <AddStationaryCategory isOpen={isAddStationaryCategoryOpen} onClose={() => setIsAddStationaryCategoryOpen(false)} />}
      {isEditBookOpen && <EditBook isOpen={isEditBookOpen} onClose={() => setIsEditBookOpen(false)} book={selectedBook} onUpdate={handleUpdateBook} />} 

      {/* Categories */}
      <div className="stationary-categories-container">
        {[
          { category: 'All', title: "All", count: "200k Books" },
          { category: 'Rolls', title: "Rolls", count: "50k Books" },
          { category: 'Colours', title: "Colours", count: "30k Books" },
        ].map((category) => (
          <div
            key={category.category}
            className={`stationary-category-card ${activeCategory === category.category ? "active" : ""}`}
            onClick={() => handleCardClick(category.category)}
          >
            <div className="category-title">{category.title}</div>
            <div className="category-count">{category.count}</div>
          </div>
        ))}
      </div>

      {/* Books Table */}
      <div className="special-menu-container">
        <h1 className="title">Stationary in {activeCategory || "All Categories"}</h1>
        <table className="book-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Product Name</th>
              <th>Company</th>
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
                <td>{book.company}</td>
                <td>{book.sku}</td>
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
  )
}

export default Stationary
