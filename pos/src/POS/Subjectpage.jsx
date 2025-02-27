import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../POS/Subject.css'

const books = [
  { id: 1, name: "Maths TextBook", category: "Books", price: 249, image: "/assets/clg.png" },
  { id: 2, name: "Science TextBook", category: "Books", price: 299, image: "/assets/clg.png" },
];

const notebook = [
  { id: 5, name: "Notebook", category: "Stationery", price: 99, image: "/assets/clg.png" },
  { id: 6, name: "Pen Set", category: "Stationery", price: 149, image: "/assets/clg.png" },
];

const stationery = [
  { id: 3, name: "Notebook", category: "Stationery", price: 99, image: "/assets/clg.png" },
  { id: 4, name: "Pen Set", category: "Stationery", price: 149, image: "/assets/clg.png" },
];

const Subjectpage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedBoard, selectedMedium, selectedStandard } = location.state || {};

  const [cartItems, setCartItems] = useState([]);

  // ✅ Updated Add to Cart logic
  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, amount) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const applyCoupon = () => {
    if (coupon === "SAVE10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems, total } }); // Pass cart data if needed
  };

  return (
    <div className="subject-container">
      <div className="subject-title">
         <i className="fa-solid fa-arrow-left icon6" onClick={() => navigate(-1)} style={{fontSize:"13px"}}></i>

        <h1>Books for {selectedBoard} - {selectedMedium} Medium - Class {selectedStandard}</h1>
      </div>
      
      <hr className="divider4" />

      <div className="shop">
        <div className="product-section">
          {/* Books Section */}
          <div className="product-list">
            <h2>Books</h2>
            <div className="product-grid">
              {books.map((book) => (
                <div key={book.id} className="product-card2">
                  <img src={book.image} alt={book.name} className="product-image" />
                  <div className="addtocart-book">
                    <h3>{book.name}</h3>
                    <p className="price">₹{book.price}</p>
                  </div>
                  <button className="addtocart" onClick={() => addToCart(book)}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>

          {/* Stationery Section */}
          <div className="product-list">
            <h2>Stationery</h2>
            <div className="product-grid">
              {stationery.map((item) => (
                <div key={item.id} className="product-card2">
                  <img src={item.image} alt={item.name} className="product-image" />
                  <div className="addtocart-book">
                    <h3>{item.name}</h3>
                    <p className="price">₹{item.price}</p>
                  </div>
                  <button className="addtocart" onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
  
          <div className="product-list">
            <h2>Notebook</h2>
            <div className="product-grid">
              {notebook.map((item) => (
                <div key={item.id} className="product-card2">
                  <img src={item.image} alt={item.name} className="product-image" />
                  <div className="addtocart-book">
                    <h3>{item.name}</h3>
                    <p className="price">₹{item.price}</p>
                  </div>
                  <button className="addtocart" onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Cart Details */}
        <div className="cart-container">
          <h2>Cart Details</h2>
          <div className="cart-items">
            {cartItems.length === 0 ? <p>Cart is empty</p> : cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-image" />
                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                </div>
                <div className="cart-controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>❌</button>
              </div>
            ))}
          </div>

          {/* Coupon Section */}
          <div className="coupon-section">
            <label>Coupon Code</label>
            <div className="couponcode">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)} />
                <button onClick={applyCoupon}>Apply</button>
            </div>
          
          </div>

          <hr className="divider4" />

          {/* Summary Section */}
          <div className="summary">
            <p><span>Subtotal</span> ₹{subtotal.toFixed(2)}</p>
            <p><span>Discount</span> ₹{discountAmount.toFixed(2)}</p>
            <p><span>Total(tax incl.)</span> ₹{total.toFixed(2)}</p>
              <div className="checkoutbox">
                 <h6>₹{total.toFixed(2)}</h6>
                 <button className="checkout-btn" onClick={handleCheckout}> Checkout</button>
              </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjectpage;
