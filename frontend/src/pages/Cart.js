import React, { useState } from "react";
import "./Cart.css";

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const [isItemInCart, setIsItemInCart] = useState(true);
  const price = 299;

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleRemoveItem = () => {
    setIsItemInCart(false); // Remove the item from the cart
  };


  return (
    <div className="cart">
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Cart</h2>
        {/* <button className="close-btn">&times;</button> */}
      </div>

      <div className="cart-item">
        <img src="https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3N8ZW58MHx8MHx8fDA%3D" alt="Transparent Cover" />
        <div className="cart-item-details">
          <div className="cart-item-title">Transparent Cover</div>
          <div className="cart-item-subtitle">Rolls</div>
        </div>
        <div className="cart-item-controls">
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
          {/* <button className="remove">&times;</button> */}
          <button className="remove" onClick={handleRemoveItem}>
              &times;
            </button>
        </div>
      </div>
      {/* : (
        <p>Your cart is empty.</p> // Show message if the cart is empty
      ) */}
      

      <div className="cart-summary">
        <div className="cart-summary-row">
          <span>Subtotal</span>
          <span>Rs.{quantity * price}</span>
        </div>
        <div className="cart-summary-row">
          <span>Discount</span>
          <span>Rs.0</span>
        </div>
        <div className="cart-summary-row cart-summary-total">
          <span>Total</span>
          <span>Rs.{quantity * price}</span>
        </div>
      </div>

      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
    </div>
  );
}

export default Cart;
