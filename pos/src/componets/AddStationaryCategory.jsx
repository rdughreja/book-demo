import React, { useState } from 'react';
import '../styles/AddStationaryCategory.css';

const AddStationaryCategory = ({ isOpen, onClose }) => {
  const [book, setBook] = useState({
    image: "",
    grade: "",
    subject: "",
    name: "",
    price: "",
    publisher: "",
    author: "",
    category: "",
    stock_quantity: ""
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book added:", book);
    alert("Book added successfully!");
  };

  return (
    <div className={`add-stationary-category-menu ${isOpen ? "open" : ""}`}>
      <div className="menu-header2">
        <h3>Add New Category</h3>
        <i className="fa-solid fa-arrow-left icon6" style={{ fontSize: "11px", color: '#00163B' }} onClick={onClose}></i>
      </div>
      <hr className="divider" />

      {/* Image Upload Section */}
      <div className="image-upload">
        {imagePreview ? (
          <img src={imagePreview} alt="Preview" className="uploaded-image" />
        ) : (
          <div className="image-placeholder">Select Icon Here</div>
        )}
        <label htmlFor="imageUpload" className="change-icon-link">Change Icon</label>
        <input type="file" id="imageUpload" accept="image/*" onChange={handleImageChange} hidden />
      </div>

      <form className="category-form" onSubmit={handleSubmit}>
        <label>Category Name:</label>
        <input type="text" name="name" value={book.name} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="category" value={book.category} onChange={handleChange} required></textarea>

        <div className="btn2">
          <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
          <button type="submit" className="submit-button">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddStationaryCategory;
