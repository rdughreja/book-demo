import React from "react";
import "./Book1.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const products = [
  {
    subject: "Mathematics",
    type: "Workbook",
    title: "Mathematics Excellence",
    price: "Rs.299",
    image: "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3N8ZW58MHx8MHx8fDA%3D", 
  },
  {
    subject: "Science",                                                                                
    type: "TextBook",
    title: "Science Excellence",
    price: "Rs.299",
    image: "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3N8ZW58MHx8MHx8fDA%3D", 
  },
  {
    subject: "Literature",
    type: "ExtraBook",
    title: "Literature Excellence",
    price: "Rs.299",
    image: "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3N8ZW58MHx8MHx8fDA%3D", 
  },
];

function Book1() {
    const navigate=useNavigate();

    const handleAddToCart=()=>{
        navigate("/Cart")
    }
  return (
    <div className="app">
      <header className="header">
        <h1>Available Products for ICSE - 6th Standard</h1>
        <div className="categories">
        {/* <Link to="/" className="category category-books">
                    Books
                  </Link>
                  <Link to="/stationary" className="category category-stationary">
                    Stationary
                  </Link> */}
        </div>
      </header>
      <section className="premium-stationery">
 
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

    </div>
  );
}

export default Book1;
