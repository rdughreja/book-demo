import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";

// Initial Cart Data
const initialCart = [
  {
    id: 1,
    name: "Science Workbook",
    price: 433.0,
    originalPrice: 1238.0,
    quantity: 1,
    image: "/assets/dimage.jpg",
  },
  {
    id: 2,
    name: "Science Textbook",
    price: 63.26,
    originalPrice: 185.09,
    quantity: 1,
    image: "/assets/dimage.jpg",
  },
  {
    id: 3,
    name: "Maths Textbook",
    price: 23.26,
    originalPrice: 128.0,
    quantity: 1,
    image: "/assets/dimage.jpg",
  },
];

// Progress Indicator Component
const ProgressIndicator = ({ step }) => {
  const steps = ["Cart", "Checkout", "Payment"];
  return (
    <div className="flex justify-center items-center gap-8 mb-8">
      {steps.map((label, index) => (
        <React.Fragment key={label}>
          <div className="flex flex-col items-center">
            <div
              className={`w-12 q    ah-12 flex justify-center items-center rounded-full ${
                index === step
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-500"
              }`}
            >
              {index === 0 && "🛒"}
              {index === 1 && "📦"}
              {index === 2 && "💳"}
            </div>        
            <span
              className={`mt-2 ${
                index === step ? "text-blue-500" : "text-gray-500"
              }`}
            >
              {label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className="w-16 h-1 bg-gray-300"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

// Cart Page Component
function Carts() {
  const [cart, setCart] = useState(initialCart);
  const navigate = useNavigate();

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 111.87;
  const shipping = 22.5;
  const total = subtotal - discount + shipping;

  return (
    <div className="p-8 pt-20">
      <ProgressIndicator step={0} />
      <div className="flex gap-8">
        <div className="w-2/3">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center border p-4 mb-4 rounded-lg shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600 line-through">
                  Rs {item.originalPrice}
                </p>
                <p className="text-blue-500 font-semibold">Rs {item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="border px-3 py-1 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="border px-3 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <button onClick={() => removeItem(item.id)} className="text-red-500">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
        <div className="w-1/3 border p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Payment Details</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>Rs {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount:</span>
            <span className="text-green-500">-Rs {discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Rs {shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold border-t pt-2 mt-2">
            <span>Grand Total:</span>
            <span>Rs {total.toFixed(2)}</span>
          </div>
          <button
            className="bg-blue-600 text-white p-3 rounded-md w-full mt-4"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carts;

