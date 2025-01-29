// import React from 'react';
// import { Link } from "react-router-dom";
// import './Home.css';

// function Home() {
//   return (
//     <div className="hero-container">

//       {/* Hero Section */}
//       <div className="hero-text">
//         <h1>Your Educational Journey Starts Here</h1>
//         <p>"Books for Bright Young Minds"</p>
//         <button className="btn-primary">Start Shopping ➜</button>
//       </div>
//       <div className="hero-image">
//         <img src="https://via.placeholder.com/400" alt="Books and Students" />
//       </div>

//       <div className="cards-container">
//         <div className="card">
//           <div className="card-icon">📚</div>
//           <h3>Extensive Collection</h3>
//           <p>From textbooks to notebooks, find everything you need.</p>
//         </div>

//         <div className="card">
//           <div className="card-icon">🎓</div>
//           <h3>All Boards Covered</h3>
//           <p>CBSE, ICSE, and state board materials available.</p>
//         </div>

//         <div className="card">
//           <div className="card-icon">✏️</div>
//           <h3>Quality Stationery</h3>
//           <p>Premium stationery for all your academic needs.</p>
//         </div>
//       </div>   

//     </div>
//   );
// }

// export default Home;

import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="background-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Your Educational Journey Starts Here</h1>
            <p>"Books for Bright Young Minds"</p>
            <button className="btn-primary">Start Shopping ➜</button>
          </div>
          <div className="hero-image">
            <img src="https://via.placeholder.com/400" alt="Books and Students" />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section id="cards" className="cards-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="cards-container">
          <div className="card">
            <div className="card-icon">📚</div>
            <h3>Extensive Collection</h3>
            <p>From textbooks to notebooks, find everything you need.</p>
          </div>

          <div className="card">
            <div className="card-icon">🎓</div>
            <h3>All Boards Covered</h3>
            <p>CBSE, ICSE, and state board materials available.</p>
          </div>

          <div className="card">
            <div className="card-icon">✏️</div>
            <h3>Quality Stationery</h3>
            <p>Premium stationery for all your academic needs.</p>
          </div>
        </div>
      </section>

      {/* Premium Stationery Section */}
      <section className="premium-stationery">
  <h2 className="section-title">Premium Stationery</h2>
  <div className="items-container">
    {[
      { title: "Color Box-24 shades", tag: "Colors", price: "Rs.299", img: "https://via.placeholder.com/300" },
      { title: "Pencil Box", tag: "Pencil", price: "Rs.299", img: "https://via.placeholder.com/300" },
      { title: "Transparent Roll", tag: "Rolls", price: "Rs.299", img: "https://via.placeholder.com/300" },
    ].map((item, index) => (
      <div key={index} className="item-card">
        <img src={item.img} alt={item.title} className="item-image" />
        <div className="item-details">
          <div className="item-details-1">
            <p className="item-title">{item.title}</p>
            <span className="item-tag">{item.tag}</span>
          </div>
          <p className="item-title1">{item.title}</p>
          <div className="item-price-button">
            <p className="item-price">{item.price}</p>
            <button className="btn-add">Add to Cart +</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Featured Books Section */}
      <section className="featured-books">
        <h2 className="section-title">Featured-books</h2>
        <p className="section-description">
          Discover our collection of high-quality stationary items perfect for
          our academic needs
        </p>
        <div className="items-container">
          <div className="item-card">
            <img
              src="https://via.placeholder.com/300"
              alt="Mathematics Excellence"
              className="item-image"
            />
           <div className="item-details">
              <div className="item-details-1">
                <p className="item-title">Color Box-24 shades</p>
                <span className="item-tag">Colors</span>
              </div>

              <p className="item-title1">Color Box-24 shades</p>

              <div class="item-price-button">
                <p class="item-price">Rs.299</p>
                <button class="btn-add">Add to Cart +</button>
              </div>
            </div>
          </div>

          <div className="item-card">
            <img
              src="https://via.placeholder.com/300"
              alt="Science Excellence"
              className="item-image"
            />
            <div className="item-details">
              <div className="item-details-1">
                <p className="item-title">Color Box-24 shades</p>
                <span className="item-tag">Colors</span>
              </div>

              <p className="item-title1">Color Box-24 shades</p>

              <div class="item-price-button">
                <p class="item-price">Rs.299</p>
                <button class="btn-add">Add to Cart +</button>
              </div>
            </div>
          </div>

          <div className="item-card">
            <img
              src="https://via.placeholder.com/300"
              alt="Literature Excellence"
              className="item-image"
            />
           <div className="item-details">
              <div className="item-details-1">
                <p className="item-title">Color Box-24 shades</p>
                <span className="item-tag">Colors</span>
              </div>

              <p className="item-title1">Color Box-24 shades</p>

              <div class="item-price-button">
                <p class="item-price">Rs.299</p>
                <button class="btn-add">Add to Cart +</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <p className="testimonial-text">"The quality of books and stationery is unmatched."</p>
            <p className="testimonial-author">Sarah Johnson</p>
            <p className="testimonial-role">Parent</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"The quality of books and stationery is unmatched."</p>
            <p className="testimonial-author">Sarah Johnson</p>
            <p className="testimonial-role">Parent</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"The quality of books and stationery is unmatched."</p>
            <p className="testimonial-author">Sarah Johnson</p>
            <p className="testimonial-role">Parent</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;



