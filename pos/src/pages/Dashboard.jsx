import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css'
import { useState } from 'react';

const Dashboard = () => {

  const dailySalesData = [3, 6, 4, 7, 5, 8, 9];
  const monthlyRevenueData = [2, 5, 6, 8, 4, 9, 7];
  const booksOccupancyData = [4, 7, 5, 6, 8, 3, 9];

   const books1 = [
       { title: 'Pride and Prejudice', author: 'Jane Austen', price: 'Rs. 400', status: 'In Stock', image: 'https://via.placeholder.com/50' },
       { title: 'David Copperfield', author: 'Charles Dickens', price: 'Rs. 500', status: 'In Stock', image: 'https://via.placeholder.com/50' },
       { title: 'Pride and Prejudice', author: 'Jane Austen', price: 'Rs. 400', status: 'In Stock', image: 'https://via.placeholder.com/50' },
       { title: 'David Copperfield', author: 'Charles Dickens', price: 'Rs. 500', status: 'In Stock', image: 'https://via.placeholder.com/50' },
       { title: 'Pride and Prejudice', author: 'Jane Austen', price: 'Rs. 400', status: 'In Stock', image: 'https://via.placeholder.com/50' },
       { title: 'David Copperfield', author: 'Charles Dickens', price: 'Rs. 500', status: 'In Stock', image: 'https://via.placeholder.com/50' },
     ];
   
     const stationery1 = [
      { name: 'Notebook', brand: 'Classmate', price: 'Rs. 100', status: 'In Stock', image: 'https://via.placeholder.com/50' },
      { name: 'Gel Pen', brand: 'Parker', price: 'Rs. 50', status: 'Out of Stock', image: 'https://via.placeholder.com/50' },
      { name: 'Notebook', brand: 'Classmate', price: 'Rs. 100', status: 'In Stock', image: 'https://via.placeholder.com/50' },
      { name: 'Gel Pen', brand: 'Parker', price: 'Rs. 50', status: 'Out of Stock', image: 'https://via.placeholder.com/50' },
      { name: 'Notebook', brand: 'Classmate', price: 'Rs. 100', status: 'In Stock', image: 'https://via.placeholder.com/50' },
      { name: 'Gel Pen', brand: 'Parker', price: 'Rs. 50', status: 'Out of Stock', image: 'https://via.placeholder.com/50' },
  ];

     
     const navigate = useNavigate(); 

     const handleProfileClick = () => {
      navigate('/Profile');  
    };

    const handleNotificationClick = () => {
      navigate('/notification');  
    };
   
 return (
     <div className="dashboard-container">
        <div className="dashboard-header">
              <div className="dashboard-title"> 
                 <i className="fa-solid fa-arrow-left back" style={{fontSize:"14px",color:'#608BC1',backgroundColor:"#D9D9D9"}}></i>
                 <h1>Dashboard</h1>
              </div>
         
               <div className="two-icon">
                  <div className="bell">
                      <i className="fa-solid fa-bell note-bell" style={{color: "#00163B"}}  onClick={handleNotificationClick}></i>
                  </div>
                  <div className="profile">
                  <img src="https://placehold.co/40x40" alt="User profile" className='profile-img ' onClick={handleProfileClick}/>
                 </div>
               </div>
         </div> 

       <div className="grid">
           <div className="card">
               <div className="card-header">
                   <h2>Daily Sales</h2>
                   <i className="fa-solid fa-arrow-left" style={{fontSize:"13px"}}></i>
               </div>

                   <p className="card-value">Rs.2k</p>

                   <div className="last-contant">
                       <p className="card-date">8 February 2024</p>
                          <div className="bar-chart">
                              {dailySalesData.map((height, index) => (
                                <div key={index} style={{ height: `${height * 10}px` }}></div>
                              ))}
                          </div>
                   </div>  
           </div>

           <div className="card">
               <div className="card-header">
                   <h2>Monthly Revenue</h2>
                   <i className="fa-solid fa-arrow-left" style={{fontSize:"13px"}}></i>
               </div>

                   <p className="card-value">Rs.55k</p>
                   
                   <div className="last-contant"> 
                       <p className="card-date">1 Jan - 1 Feb</p>
                       <div className="bar-chart">
                          {monthlyRevenueData.map((height, index) => (
                            <div key={index} style={{ height: `${height * 10}px` }}></div>
                          ))}
                      </div>
                   </div >
           </div>

           <div className="card">
               <div className="card-header">
                   <h2>Books Occupancy</h2>
                   <i className="fa-solid fa-arrow-left" style={{fontSize:"13px"}}></i>
               </div>

                 <p className="card-value">290k Books</p>
                 <div className="last">
                  <div className="bar-chart">
                      {booksOccupancyData.map((height, index) => (
                        <div key={index} style={{ height: `${height * 10}px` }}></div>
                      ))}
                  </div>
                 </div>
               
           </div>
       </div>

       <div className="popular-books-row">
          <div className="popular-books">
            <div className="header">
              <h2>Popular Books</h2>
              <a href="/" className="see-all">See All</a>
            </div>
            <div className="books-list">
              {books1.map((book, index) => (
                <div className="book-card" key={index}>
                  <img src={book.image} alt={book.title} className="book-image" />
                  <div className="book-details">
                    <div className="info">
                        <h3 className="book-title">{book.title}</h3>
                        <p className="book-author">{book.author}</p>
                    </div>
                    <div className="meta">
                        <p className={`book-status ${book.status === 'In Stock' ? 'in-stock' : 'out-of-stock'}`}>
                        {book.status}
                        </p>
                        <p className="book-price">{book.price}</p>             
                    </div>
                  
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="popular-books">
            <div className="header">
              <h2>Popular Stationery</h2>
              <a href="/" className="see-all">See All</a>
            </div>
            <div className="books-list">
              {stationery1.map((item, index) => (
                <div className="book-card" key={index}>
                  <img src={item.image} alt={item.name} className="book-image" />
                  <div className="book-details">
                  <div className="info">
                    <h3 className="book-title">{item.name}</h3>
                    <p className="book-author">{item.brand}</p>
                    </div>
                    <div className="meta">
                        <p className={`book-status ${item.status === 'In Stock' ? 'in-stock' : 'out-of-stock'}`}>
                        {item.status}
                        </p>
                        <p className="book-price">{item.price}</p>             
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
   </div>


     </div>
 );
}

export default Dashboard

