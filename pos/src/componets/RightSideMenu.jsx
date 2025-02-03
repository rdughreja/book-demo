// import React, { useState } from "react";
 import '../styles/RightSideMenu.css'

// const RightSideMenu = ({ isOpen, onClose }) => {
  
//   const [icon, setIcon] = useState(null);
//   const handleIconChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setIcon(URL.createObjectURL(file)); // Display selected icon
//     }
//   };
//     return (
//       <div className={`right-side-menu ${isOpen ? "open" : ""}`}>
//         <div className="menu-header2">
//             <h3>Add New Book</h3>
//            <i className="fa-solid fa-arrow-left icon6" style={{fontSize:"11px",color:'white'}} onClick={onClose}></i>
//         </div>
//         <hr className="divider" />

//         <form className="category-form">
//           <div className="icon-upload-section">
//             <label htmlFor="icon-input">
//               {icon ? (
//                 <img src={icon} alt="Selected Icon" className="icon-preview" />
//               ) : (
//                 <div className="select-icon-placeholder">Select icon here</div>
//               )}
//             </label>
//               <input type="file" id="icon-input" accept="image/*" onChange={handleIconChange}style={{ display: "none" }}/>
//               <button type="button"  className="change-icon-btn"onClick={() => document.getElementById("icon-input").click()}>Change Icon</button>
//           </div>

//           <label htmlFor="category-name">Category Name</label>
//           <input type="text" id="category-name" placeholder="Enter category name" required/>
          
//           <label htmlFor="category-menu">Select Menu</label>
//           <input type="text" id="category-menu" placeholder="Select menu" required/>
  
//           <label htmlFor="category-description">Description</label>
//           {/* <input type="textarea" id="category-description" placeholder="write your category description here" /> */}
//           <textarea id="category-description" name="category-description" rows="5" cols="40" placeholder="write your category description here" required></textarea>
  
//         <div className="btn2">
//             <button type="text" className="cancel-button">Cancel</button>
//             <button type="submit" className="submit-button">Save</button>
//         </div>
         
//         </form>
//       </div>
//     );
//   };

// export default RightSideMenu


import React, { useState } from "react";
// import '../styles/RightSideMenu.css';

const RightSideMenu = ({ isOpen, onClose }) => {
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

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book added:", book);
    alert("Book added successfully!");
  };

  return (
    <div className={`right-side-menu ${isOpen ? "open" : ""}`}>
      <div className="menu-header2">
        <h3>Add New Book</h3>
        <i className="fa-solid fa-arrow-left icon6" style={{ fontSize: "11px", color: 'white' }} onClick={onClose}></i>
      </div>
      <hr className="divider" />
      
      <form className="category-form" onSubmit={handleSubmit}>
        <label>Image URL:</label>
        <input type="text" name="image" value={book.image} onChange={handleChange} required />
        
        <div className="form-row">
          <div className="form-group">
            <label>Grade:</label>
            <select name="grade" value={book.grade} onChange={handleChange} required>
              <option value="">Select Grade</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Subject:</label>
            <select name="subject" value={book.subject} onChange={handleChange} required>
              <option value="">Select Subject</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
              <option value="History">History</option>
            </select>
          </div>
        </div>

        <label>Name:</label>
        <input type="text" name="name" value={book.name} onChange={handleChange} required />
        
        <div className="price-stock-row">
          <div className="price-stock-group">
            <label>Price:</label>
            <input type="number" name="price" value={book.price} onChange={handleChange} required />
          </div>
          
          <div className="price-stock-group">
            <label>Stock Quantity:</label>
            <input type="number" name="stock_quantity" value={book.stock_quantity} onChange={handleChange} required />
          </div>
        </div>
        
        <label>Publisher:</label>
        <input type="text" name="publisher" value={book.publisher} onChange={handleChange} required />

        <label>Author:</label>
        <input type="text" name="author" value={book.author} onChange={handleChange} required />

        <label>Category:</label>
        <input type="text" name="category" value={book.category} onChange={handleChange} required />

        <div className="btn2">
          <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
          <button type="submit" className="submit-button">Save</button>
        </div>
      </form>
    </div>
  );
};

export default RightSideMenu;