<<<<<<< HEAD
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Sidebar from './componets/Sidebar';
import Books from './pages/Books';
import Order from './pages/Order';
import Staff from './pages/Staff';
import Reports from './pages/Reports';
import Profile from './componets/Profile';
import Notification from './componets/Notification';

const App = () => {
  return (
    <Router>
            <Routes>
              <Route path="/" element={<Sidebar />} >
                 <Route path="/" element={<Dashboard />} />
                 <Route path="/inventory" element={<Inventory />} />
                 <Route path="/books" element={<Books />} />
                 <Route path="/order" element={<Order />} />
                 <Route path="/staff" element={<Staff />} />
                 <Route path="/reports" element={<Reports />} />
                 <Route path="/profile" element={<Profile />} />
                 <Route path="/notification" element={<Notification />} />
              </Route>
            </Routes>
    </Router>
  );
}

export default App

{/* <i class="fa-solid fa-search icon"></i> */}
=======
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import "./App.css";
import Book1 from "./pages/Book1";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Orders from "./pages/Orders";

function App() {
  return (
    <Router>
      <div className="App">  

        <Navbar />     

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Book1 />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/stationery" element={<h1>Stationery Page</h1>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/forgotpassword" element={<ForgotPassword/>} />
            <Route path="/order" element={<Orders/>} />
          </Routes>
        </div>

        <Footer />

      </div>      
    </Router>

  );

}

export default App;


// import React, { useState } from "react";
// import AddBook from "./pages/AddBook";
// import BookList from "./pages/BookList";

// const App = () => {
//   const [books, setBooks] = useState([]);

//   // Function to add a new book
//   const handleAddBook = (newBook) => {
//     setBooks([...books, newBook]);
//   };

//   return (
//     <div>
//       <h1>Bookstore</h1>
//       <AddBook onAddBook={handleAddBook} />
//       <BookList books={books} />
//     </div>
//   );
// };

// export default App;


>>>>>>> fc9fff0 (Add files via upload)
