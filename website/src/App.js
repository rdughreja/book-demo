import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


import Dashboard from './pages/Dashboard';
import Notifications from './pages/Notifications';
import Wishlist from './pages/Wishlist';
import Carts from './pages/Carts';
import BookPage from "./pages/BookPage";
import About from './pages/About';
import BookDetail from './pages/BookDetail';
import Contact from './pages/Contact';

const App = () => {
 

  return (
    
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
        <Route path="/" element={<Dashboard />} />     
         
         
          <Route path="/notification" element={<Notifications />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Carts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/books/:category/:language" element={<BookPage/>} />
          <Route path="/books/:id" element={<BookDetail />} />
         
        </Routes>
      </main>
      <Footer />
    </div>
   
  );
}

export default App;

