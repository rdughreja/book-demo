import React, { useState } from "react";
import '../styles/Subject.css'

const books = [
  { id: 1, name: "Maths TextBook", category: "Books", price: 249 },
  { id: 2, name: "Science TextBook", category: "Books", price: 299 },
];

const stationery = [
  { id: 3, name: "Rolls", category: "Stationery", price: 99 },
  { id: 4, name: "Colours", category: "Stationery", price: 149 },
];

const Subjectpage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <div className="subject-container">
      <h1>Book Store</h1>

      <div className="shop">
        {/* Left Side - Product Listing */}
        <div className="product-list">
          <h2>Books</h2>
          {books.map((book) => (
            <div key={book.id} className="product">
              <p>{book.name}</p>
              <p>₹{book.price}</p>
              <button onClick={() => addToCart(book)}>Add to Cart</button>
            </div>
          ))}

          <h2>Stationery</h2>
          {stationery.map((item) => (
            <div key={item.id} className="product">
              <p>{item.name}</p>
              <p>₹{item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>

        {/* Right Side - Cart Details */}
        <div className="cart">
          <h2>Cart Details</h2>
          {cart.length === 0 ? <p>No items in cart</p> : null}

          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name}</p>
              <p>₹{item.price}</p>
              <button onClick={() => removeFromCart(index)}>❌</button>
            </div>
          ))}

          <hr />
          <h3>Total: ₹{getTotal()}</h3>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Subjectpage;
