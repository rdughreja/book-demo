import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Devine Bookstore Section */}
        <div className="footer-section">
          <h3>Devine Bookstore</h3>
          <p>
            Your one-step destination for all educational needs. Quality books
            & stationery for every student's journey.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Our Products</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </div>

        {/* Categories Section */}
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li><a href="/categories/textbooks">TextBooks</a></li>
            <li><a href="/categories/stationery">Stationery</a></li>
            <li><a href="/categories/school-supplies">School Supplies</a></li>
            <li><a href="/categories/art-materials">Art Materials</a></li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="footer-section">
          <h3>Subscribe</h3>
          <div className="subscribe-container">
            <input
              type="email"
              placeholder="Email address"
              className="subscribe-input"
            />
            <button className="subscribe-button">&rarr;</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Devine Bookstore. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
