import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Coupons.css";

const coupons = [
  { title: "5% OFF", subtitle: "FOR ORDERS ABOVE Rs25.00", code: "SAVE5" },
  { title: "10% OFF", subtitle: "FOR ORDERS ABOVE Rs50.00", code: "SAVE10", expiresIn: 3600 }, // 1-hour countdown
  { title: "15% OFF", subtitle: "FOR ORDERS ABOVE Rs75.00", code: "SAVE15" },
  { title: "20% OFF", subtitle: "FOR ORDERS ABOVE Rs100.00", code: "SAVE20" },
  { title: "30% OFF", subtitle: "FOR ALL ORDERS", code: "BIG30" },
  { title: "Flat Rs50 OFF", subtitle: "FOR ORDERS ABOVE Rs200.00", code: "FLAT50" },
];

const Coupons = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(coupons[1].expiresIn); // Timer for second coupon

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleProfileClick = () => navigate("/Profile");
  const handleNotificationClick = () => navigate("/notification");

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Coupon code ${code} copied!`);
  };

  return (
    <div className="report-container">
      {/* Header Section */}
      <div className="report-header">
        <div className="report-title">
          {/* <i className="fa-solid fa-arrow-left back" style={{ fontSize: "14px", color: "#133E87", backgroundColor: "#D2F7FF" }}></i> */}
          <h1>Coupons</h1>
        </div>

        <div className="report-two-icon">
          <div className="bell">
            <i className="fa-solid fa-bell note-bell" style={{color:"#00163B"}} onClick={handleNotificationClick}></i>
          </div>
          <div className="profile">
            <img src="https://placehold.co/40x40" alt="User profile" className="profile-img" onClick={handleProfileClick} />
          </div>
        </div>
      </div>

      {/* Coupons Section */}
      <div className="coupons-grid">
        {coupons.map((coupon, index) => (
          <div className="coupon-container" key={index}>
            <h3 className="coupon-title">{coupon.title}</h3>
            <p className="coupon-subtitle">{coupon.subtitle}</p>

            <div className="coupon-box">
              <span className="coupon-code">Code: {coupon.code}</span>
              <button className="copy-btn2" onClick={() => copyToClipboard(coupon.code)}>
                <i className="fa-solid fa-copy"></i> Copy
              </button>
              <button className="apply-btn2">
                <i className="fa-solid fa-arrow-right"></i> Apply
              </button>
            </div>

            {index === 1 && timeLeft > 0 && (
              <div className="countdown-timer">
                Offer expires in: <span className="timer-highlight">{formatTime(timeLeft)}</span>
              </div>
            )}

            {/* Hide terms-list for second coupon */}
            {index !== 1 && (
              <ul className="terms-list">
                <li>Valid for a limited time</li>
                <li>One-time use per customer</li>
                <li>Cannot be combined with other promotions</li>
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coupons;
