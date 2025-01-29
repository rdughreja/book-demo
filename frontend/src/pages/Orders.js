// import React, { useState } from "react";
// import "./Orders.css";

// function Orders() {
//   const [cartItems, setCartItems] = useState([
//     {
//       name: "Science Workbook",
//       price: 55.00,
//       quantity: 0,
//     },
//     {
//       name: "Maths Workbook",
//       price: 60.00,
//       quantity: 0,
//     },
//   ]);

//   const [paymentMethods, setPaymentMethods] = useState([
//     {
//       name: "Cash",
//       icon: "cash",
//     },
//     {
//       name: "Debit Card",
//       icon: "credit-card",
//     },
//     {
//       name: "E-Wallet",
//       icon: "wallet",
//     },
//   ]);

//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

//   const handleQuantityChange = (index, newQuantity) => {
//     const updatedCartItems = [...cartItems];
//     updatedCartItems[index].quantity = newQuantity;
//     setCartItems(updatedCartItems);
//   };

//   const calculateSubtotal = () => {
//     return cartItems.reduce((total, item) => {
//       return total + item.price * item.quantity;
//     }, 0);
//   };

//   const calculateTax = () => {
//     return calculateSubtotal() * 0.05;
//   };

//   const calculateTotal = () => {
//     return calculateSubtotal() + calculateTax();
//   };

//   const handlePaymentMethodSelect = (paymentMethod) => {
//     setSelectedPaymentMethod(paymentMethod);
//   };

//   return (
//     <div className="orders-container">
//       <h1>Orders</h1>
//       <div className="order-list">
//         {/* Order Items */}
//         {cartItems.map((item, index) => (
//           <div className="order-item" key={index}>
//             <div className="order-item-name">{item.name}</div>
//             <div className="order-item-quantity">
//               <button
//                 onClick={() =>
//                   handleQuantityChange(index, item.quantity - 1)
//                 }
//                 disabled={item.quantity === 0}
//               >
//                 -
//               </button>
//               <span>{item.quantity}</span> <button
//                 onClick={() =>
//                   handleQuantityChange(index, item.quantity + 1)
//                 }
//               >
//                 +
//               </button>
//             </div>
//             <div className="order-item-price">
//               ${item.price.toFixed(2)}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="subtotal">
//         <h2>Subtotal: ${calculateSubtotal().toFixed(2)}</h2>
//       </div>
//       <div className="tax">
//         <h2>Tax: ${calculateTax().toFixed(2)}</h2>
//       </div>
//       <div className="total">
//         <h2>Total: ${calculateTotal().toFixed(2)}</h2>
//       </div>
//       <div className="payment-methods">
//         <h2>Select Payment Method</h2>
//         {paymentMethods.map((method) => (
//           <div
//             key={method.name}
//             className={`payment-method ${selectedPaymentMethod === method.name ? 'selected' : ''}`}
//             onClick={() => handlePaymentMethodSelect(method.name)}
//           >
//             <i className={`icon-${method.icon}`}></i>
//             {method.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Orders;



import React, { useState } from 'react';
import './Orders.css';

const Orders = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Science Workbook', price: 55, quantity: 2 },
    { id: 2, name: 'Maths Workbook', price: 55, quantity: 2 },
  ]);

  const calculateTotal = () => {
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const tax = (subtotal * 6) / 100;
    return { subtotal, tax, total: subtotal + tax };
  };

  const { subtotal, tax, total } = calculateTotal();

  return (
    <div className="app">
      <main className="content">
        <section className="products">
          <h2>Orders</h2>
          <div className="product-grid">
            {Array(12).fill(null).map((_, index) => (
              <div className="product-card" key={index}>
                <h3>Science Workbook</h3>
                <p>₹55.00</p>
              </div>
            ))}
          </div>
        </section>

        <section className="order-summary">
          <h2>Customer 67</h2>
          <p>Watson Joyce</p>
          <div className="order-items">
            {cart.map((item) => (
              <div className="order-item" key={item.id}>
                <p>{item.name} x {item.quantity}</p>
                <p>₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>
          <hr />
          <div className="totals">
            <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
            <p>Tax (6%): ₹{tax.toFixed(2)}</p>
            <p>Total: ₹{total.toFixed(2)}</p>
          </div>

          <div className="payment-methods">
            <h3>Payment Method</h3>
            <div className="methods">
              <div className="method">Scan QR Code</div>
              <div className="method">Cash</div>
              <div className="method">Debit Card</div>
              <div className="method">E-Wallet</div>
            </div>
          </div>

          <button className="complete-order">Order Completed</button>
        </section>
      </main>
    </div>
  );
};

export default Orders;
