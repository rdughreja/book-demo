import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Heart, ShoppingCart } from "lucide-react";
import { FaBookOpen, FaGraduationCap, FaHeart, FaPenNib, FaChevronLeft, FaChevronRight } from "react-icons/fa";


const Dashboard = () => {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };



  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };




  const products = [
    { id: 1, title: "Color Box - 24 Shades", description: "High-quality plastic crayons", price: "Rs204", img: "/assets/dimage.jpg" },
    { id: 2, title: "Color Box - 24 Shades", description: "High-quality plastic crayons", price: "Rs204", img: "/assets/dimage.jpg" },
    { id: 3, title: "Color Box - 24 Shades", description: "High-quality plastic crayons", price: "Rs204", img: "/assets/dimage.jpg" },
    { id: 4, title: "Color Box - 24 Shades", description: "High-quality plastic crayons", price: "Rs204", img: "/assets/book.jpeg" }
  ];

  const featuredBooks = [
    { id: 5, title: "Color Box - 24 Shades", description: "High-quality plastic crayons", price: "Rs204", img: "/assets/dimage.jpg" },
    { id: 6, title: "Color Box - 24 Shades", description: "High-quality plastic crayons", price: "Rs204", img: "/assets/dimage.jpg" },
    { id: 7, title: "Color Box - 24 Shades", description: "High-quality plastic crayons", price: "Rs204", img: "/assets/dimage.jpg" },
    { id: 8, title: "Color Box - 24 Shades", description: "High-quality plastic crayons", price: "Rs204", img: "/assets/book.jpeg" }
  ];

  const testimonials = [
    {
      name: "Alice Brown",
      text: "It was a very good experience. Highly recommend their service!It was a very good experience. Highly recommend their service!It was a very good experience. Highly recommend their service!",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "John Doe",
      text: "Amazing support and quick response. Would use again!",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      name: "Emma Wilson",
      text: "A seamless and delightful experience from start to finish.",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      name: "Mark Smith",
      text: "Top-notch service, very satisfied with the outcome!",
      image: "https://randomuser.me/api/portraits/men/4.jpg"
    }
  ];



  return (
    <div className="bg-white-100 min-h-screen">

      <header className="bg-cover bg-center py-20 px-6 text-center text-white mt-16" style={{ backgroundImage: "url('/assets/dimage.jpg')" }}>
        <div className=" inset-0 bg-black bg-opacity-50"></div>
        <div className=" max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-left md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-white-900">Your Educational Journey Starts Here</h1>
            <p className="mt-4 text-lg text-gray-700">"Books for Bright Young Minds"</p>
            <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md flex items-center gap-2 font-medium">
              Start Shopping →
            </button>
          </div>
          <div className="md:w-1/2">
            <img src="/assets/reading-illustration.png" alt="Reading Illustration" className="w-full h-auto" />
          </div>
        </div>
      </header>


      <section className="py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-9">
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
          <FaBookOpen className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold">Extensive Collection</h3>
          <p className="text-gray-700 mt-2">From textbooks to notebooks, find everything you need!</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
          <FaGraduationCap className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold">All Boards Covered</h3>
          <p className="text-gray-700 mt-2">CBSE, ICSE, and state board materials available.</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
          <FaPenNib className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold">Quality Stationery</h3>
          <p className="text-gray-700 mt-2">Premium stationery for all your academic needs.</p>
        </div>
      </section>


      {/* Books */}
      <section className="py-2  px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Premium Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {featuredBooks.map((book) => (
            <div key={book.id} className="p-4   w-full flex flex-col">
              <Link to={`/books/${book.id}`} className="w-full h-80 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img src={book.img} alt={book.title} className="w-full h-full object-cover cursor-pointer" />
              </Link>
              <h3 className="font-semibold text-lg mb-2 mt-2">{book.title}</h3>
              <p className="text-gray-700 mb-2">{book.description}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="font-bold">{book.price}</p>
                <button onClick={() => toggleWishlist(book.id)} className="text-gray-500">
                  <Heart
                    size={20}
                    className={`transition-all ${wishlist[book.id] ? "text-red-500 fill-red-500" : "text-gray-400"}`}
                  />
                </button>
              </div>
              <button className="mt-2 bg-blue-600 text-white py-1 px-4  flex items-center justify-center gap-2 w-full">
                <ShoppingCart size={16} /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>


      {/* Stationary */}
      <section className="py-10  px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Premium Stationery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {products.map((product) => (
            <div key={product.id} className="p-4   w-full flex flex-col">
              <div className="w-full h-80 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-lg mb-2  mt-2">{product.title}</h3>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="font-bold">{product.price}</p>
                <button onClick={() => toggleWishlist(product.id)} className="text-gray-500">
                  <Heart
                    size={20}
                    className={`transition-all ${wishlist[product.id] ? "text-red-500 fill-red-500" : "text-gray-400"}`}
                  />
                </button>
              </div>
              <button className="mt-2 bg-blue-600 text-white py-1 px-4  flex items-center justify-center gap-2 w-full">
                <ShoppingCart size={16} /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>


      <section className="flex flex-col items-center p-6">
        <h2 className="text-2xl font-semibold mb-4">What our customers say?</h2>
        <div className="relative bg-blue-100 p-6 rounded-lg shadow-md max-w-xl text-center w-100 h-690 flex flex-col justify-center">
          <p className="text-lg font-medium">{testimonials[currentIndex].text}</p>
          <p className="mt-2 text-gray-700 font-semibold">- {testimonials[currentIndex].name}</p>
          <div className="absolute top-1/2 -left-20 transform -translate-y-1/2">
            <button onClick={prevTestimonial} className="p-2 bg-blue-500 text-white rounded-full shadow">
              <FaChevronLeft />
            </button>
          </div>
          <div className="absolute top-1/2 -right-20 transform -translate-y-1/2">
            <button onClick={nextTestimonial} className="p-2 bg-blue-500 text-white rounded-full shadow">
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          {testimonials.map((testimonial, index) => (
            <img
              key={index}
              src={testimonial.image}
              alt={testimonial.name}
              className={`w-12 h-12 rounded-full cursor-pointer border-2 transition-all duration-300 ${currentIndex === index ? "border-blue-500" : "border-gray-300"
                }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Dashboard;