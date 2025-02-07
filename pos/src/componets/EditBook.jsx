import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/EditBook.css";

const EditBook = ({ isOpen, onClose, book, onUpdate }) => {
  const [updatedBook, setUpdatedBook] = useState(book);

  useEffect(() => {
    setUpdatedBook(book); // Update form state when book changes
  }, [book]);

  const handleChange = (e) => {
    setUpdatedBook({ ...updatedBook, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUpdatedBook({ ...updatedBook, image: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = async (e) => {  // Add "async" here
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:5000/allBooks/update', {}); // Add request body if required
      console.log("New Staff Added:", response.data);
      alert("Staff member added successfully!");
      onClose(); // Close the form after successful submission
    } catch (error) {
      console.error('Error adding staff member:', error);
      alert('Failed to add staff member. Please try again.');
    }
};


  return (
    <div className={`edit-book-menu ${isOpen ? "open" : ""}`}>
      <div className="menu-header2">
        <h3>Edit Book</h3>
        <i className="fa-solid fa-arrow-left icon6" style={{ fontSize: "11px", color: "#00163B" }} onClick={onClose}></i>
      </div>
      <hr className="divider" />
      <form className="category-form" onSubmit={handleSubmit}>
        {/* Image Upload Section */}
        <label>Book Image:</label>
        <div className="image-upload-box">
          {updatedBook.image ? (
            <img src={updatedBook.image} alt="Book Preview" className="preview-image" />
          ) : (
            <label className="upload-area">
              <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
              <span>Add File</span>
              <p>Or drag and drop files</p>
            </label>
          )}
        </div>

        <label>Book Name:</label>
        <input type="text" name="name" value={updatedBook.name} onChange={handleChange} required />

        <div className="price-stock-row">
          <div className="price-stock-group">
            <label>Price:</label>
            <input type="number" name="price" value={updatedBook.price} onChange={handleChange} required />
          </div>

          <div className="price-stock-group">
            <label>Stock Quantity:</label>
            <input
              type="number"
              name="stock_quantity"
              value={updatedBook.stock_quantity}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Availability Column */}
        <label>Availability:</label>
        <select name="availability" value={updatedBook.availability} onChange={handleChange} required>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>

        <label>Category:</label>
        <input type="text" name="category" value={updatedBook.category} onChange={handleChange} required />

        <div className="btn2">
          <button type="button" className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="submit-button">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
