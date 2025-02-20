import React, { useState } from "react";
import "../styles/AddInventory.css";

const AddInventory = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: "",
    stock: "",
    status: "Active",
    price: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inventory Saved! ✅");
    console.log("Form Data: ", formData);
  };

  return (
    <div className={`add-inventory-menu ${isOpen ? "open" : ""}`}>
       <div className="menu-header2">
        <h3>Add New Inventory</h3>
        <i className="fa-solid fa-arrow-left icon6" style={{ fontSize: "11px", color: "#00163B" }} onClick={onClose}></i>
      </div>
      <hr className="divider" />

      {/* Image Upload */}
      <div className="image-upload">
        <label htmlFor="imageInput">
          {imagePreview ? (
            <img src={imagePreview} alt="Preview" className="preview-image" />
          ) : (
            <div className="image-placeholder">Upload Image</div>
          )}
        </label>
        <input type="file" id="imageInput" onChange={handleImageUpload} />
      </div>

      {/* Form Fields */}
      <form className="inventory-table" onSubmit={handleSubmit}>
        {/* Name & Category in Same Row */}
        <div className="form-row">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter inventory name"
              required
            />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <select name="category" value={formData.category} onChange={handleChange} required>
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Clothing">Clothing</option>
            </select>
          </div>
        </div>

        {/* Quantity & Stock in Same Row */}
        <div className="form-row">
          <div className="form-group">
            <label>Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              required
            />
          </div>
          <div className="form-group">
            <label>Stock:</label>
            <select name="stock" value={formData.stock} onChange={handleChange} required>
              <option value="">Select Stock Status</option>
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>

        <label>Status:</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter inventory price"
          required
        />

        {/* Buttons */}
        <div className="form-buttons">
          <button type="button" className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="save-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInventory;
