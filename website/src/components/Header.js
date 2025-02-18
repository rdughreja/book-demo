// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { MagnifyingGlassIcon, ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// const navItems = [
//   { name: 'Home', href: '/' },
//   { name: 'Books', href: '/books' },
//   { name: 'Stationery', href: '/stationery' },
//   { name: 'Orders', href: '/orders' },
// ];

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   return (
//     <header className="bg-white shadow-md">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
//             ModernBooks
//           </Link>
//           <nav className="hidden md:flex space-x-6">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className={`text-sm font-medium hover:text-blue-600 transition-colors ${
//                   location.pathname === item.href ? 'text-blue-600' : 'text-gray-600'
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>
//           <div className="flex items-center space-x-4">
//             <form className="hidden md:block">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search books..."
//                   className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
//                 />
//                 <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//               </div>
//             </form>
//             <Link to="/cart" className="text-gray-600 hover:text-blue-600 transition-colors">
//               <ShoppingCartIcon className="h-6 w-6" />
//             </Link>
//             <button
//               className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>
//       {isMenuOpen && (
//         <div className="md:hidden bg-white py-2 px-4">
//           <nav className="flex flex-col space-y-2">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className={`text-sm font-medium hover:text-blue-600 transition-colors ${
//                   location.pathname === item.href ? 'text-blue-600' : 'text-gray-600'
//                 }`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>
//           <form className="mt-4">
//             <input
//               type="text"
//               placeholder="Search books..."
//               className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
//             />
//           </form>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;






// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from 'react-router-dom';

// import { FaSearch, FaBell, FaShoppingCart, FaHeart, FaUser,FaChevronDown,FaChevronRight } from "react-icons/fa";
// const Header = () => {

//   const [isBooksDropdownOpen, setIsBooksDropdownOpen] = useState(false);
//   const [hoveredCategory, setHoveredCategory] = useState(null);
//   const navigate = useNavigate();

//   // Language options for each category
//   const categories = {
//     ICSE: ["English"],
//     CBSE: ["English", "Gujarati"],
//     GSEB: ["English", "Gujarati"],
//   };

//   // Navigate when clicking a language
//   const handleLanguageClick = (category, language) => {
//     navigate(`/books/${category.toLowerCase()}/${language.toLowerCase()}`);
//     setIsBooksDropdownOpen(false);
//     setHoveredCategory(null);
//   };



//   return (
//     <nav className="bg-white shadow p-3 flex justify-between fixed  w-full items-center">
//     <div className="flex items-center space-x-4">
//         <img src="\assets\logo.jpg" alt="DivineTech Solutions" className="h-8" />
      
//       </div>
//       <div className="flex items-center bg-gray-100 p-2 rounded-md w-1/3">
//         <input
//           type="text"
//           placeholder="Type any book here"
//           className="bg-transparent outline-none w-full px-2"
//         />
//         <FaSearch className="text-gray-500" />
//       </div>
//       <ul className="flex space-x-6 text-gray-700">
//         <li><a href="/" className="hover:text-blue-600" >Home</a></li>

//         {/* Books Dropdown */}
//         <li className="relative books-dropdown">
//           <button
//             className="flex items-center hover:text-blue-600 focus:outline-none"
//             onClick={() => setIsBooksDropdownOpen(!isBooksDropdownOpen)}
//           >
//             Books <FaChevronDown className="ml-2 text-xs" />
//           </button>

//           {/* Books Main Dropdown */}
//           {isBooksDropdownOpen && (
//             <ul className="absolute bg-white shadow-md mt-2 rounded-md w-44 text-left">
//               {Object.keys(categories).map((category) => (
//                 <li
//                   key={category}
//                   className="relative"
//                   onMouseEnter={() => setHoveredCategory(category)}
//                   onMouseLeave={() => setHoveredCategory(null)}
//                 >
//                   <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between items-center">
//                     {category} <FaChevronRight className="text-xs" />
//                   </button>

//                   {/* Sub-menu for Languages (Hover on Category) */}
//                   {hoveredCategory === category && (
//                     <ul className="absolute left-full top-0 bg-white shadow-md rounded-md w-36 text-left ml-1">
//                       {categories[category].map((language) => (
//                         <li key={language}>
//                           <button
//                             className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                             onClick={() => handleLanguageClick(category, language)}
//                           >
//                             {language} Medium
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>


//         <li><a href="/stationary" className="hover:text-blue-600">Stationery</a></li>
//         <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
//         <li><a href="/about" className="hover:text-blue-600">About</a></li>
//       </ul>
//       <div className="flex space-x-4 text-blue-900">
//         <Link to="/notification"><FaBell className="cursor-pointer text-xl hover:text-blue-600" /></Link>
//         <Link to="/cart"><FaShoppingCart className="cursor-pointer text-xl hover:text-blue-600" /></Link>
//         <Link to="/wishlist"><FaHeart className="cursor-pointer text-xl hover:text-blue-600" /></Link>
//         <Link to="/profile"><FaUser className="cursor-pointer text-xl hover:text-blue-600" /></Link>
//       </div>
//     </nav>
//   );
// };

// export default Header;


// import React, { useState } from 'react';
// import { FaSearch, FaBell, FaShoppingCart, FaHeart, FaUser, FaBars } from "react-icons/fa";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow p-3 flex justify-between fixed w-full items-center md:px-6 z-50">
//       <div className="flex items-center space-x-4">
//         <img src="/assets/logo.jpg" alt="" className="h-10" />
//       </div>
      
//       <div className="hidden md:flex items-center bg-gray-100 p-2 rounded-md w-1/3">
//         <input
//           type="text"
//           placeholder="Type any book here"
//           className="bg-transparent outline-none w-full px-2"
//         />
//         <FaSearch className="text-gray-500" />
//       </div>
      
//       <ul className={`absolute top-16 left-0 w-full bg-white shadow-md md:shadow-none md:static md:flex space-x-6 text-gray-700 ${menuOpen ? 'block' : 'hidden'} md:block`}>
//         <li><a href="#" className="block py-2 px-4 md:inline hover:text-blue-600">Home</a></li>
//         <li><a href="#" className="block py-2 px-4 md:inline hover:text-blue-600">Books</a></li>
//         <li><a href="#" className="block py-2 px-4 md:inline hover:text-blue-600">Stationery</a></li>
//         <li><a href="#" className="block py-2 px-4 md:inline hover:text-blue-600">Contact</a></li>
//         <li><a href="#" className="block py-2 px-4 md:inline hover:text-blue-600">About</a></li>
//       </ul>
      
//       <div className="flex space-x-4 text-blue-900">
//         <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//           <FaBars className="cursor-pointer" />
//         </button>
//         <FaSearch className="cursor-pointer md:hidden" />
//         <FaBell className="cursor-pointer" />
//         <FaShoppingCart className="cursor-pointer" />
//         <FaHeart className="cursor-pointer" />
//         <FaUser className="cursor-pointer" />
//       </div>
//     </nav>
//   );
// };

// export default Header;




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaBell, FaShoppingCart, FaHeart, FaUser, FaChevronDown, FaChevronRight } from "react-icons/fa";

const Header = () => {
  const [isBooksDropdownOpen, setIsBooksDropdownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const navigate = useNavigate();

  // Language options for each category
  const categories = {
    ICSE: ["English"],
    CBSE: ["English","Hindi"],
    GSEB: ["English", "Gujarati"],
  };

  // Function to handle clicks outside Books dropdown
  const handleCloseDropdown = () => {
    setIsBooksDropdownOpen(false);
    setHoveredCategory(null);
  };

  // Navigate when clicking a language
  const handleLanguageClick = (category, language) => {
    navigate(`/books/${category.toLowerCase()}/${language.toLowerCase()}`);
    handleCloseDropdown();
  };

  return (
    <nav className="bg-white shadow p-3 flex justify-between fixed w-full items-center">
      <div className="flex items-center space-x-4">
        <img src="/assets/logo.jpg" alt="Divine Bookstore" className="h-8" />
      </div>
      <div className="flex items-center bg-gray-100 p-2 rounded-md w-1/3">
        <input type="text" placeholder="Type any book here" className="bg-transparent outline-none w-full px-2" />
        <FaSearch className="text-gray-500" />
      </div>
      <ul className="flex space-x-6 text-gray-700">
        <li><Link to="/" className="hover:text-blue-600" onClick={handleCloseDropdown}>Home</Link></li>

        {/* Books Dropdown (Click to Open) */}
        <li className="relative books-dropdown">
          <button
            className="hover:text-blue-600 flex items-center focus:outline-none"
            onClick={(e) => {
              e.stopPropagation(); // Prevent closing when clicking inside the button
              setIsBooksDropdownOpen(!isBooksDropdownOpen);
            }}
          >
            Books <FaChevronDown className="ml-2 text-xs" />
          </button>

          {/* Books Main Dropdown */}
          {isBooksDropdownOpen && (
            <ul className="absolute bg-white shadow-md mt-2  w-44 text-left">
              {Object.keys(categories).map((category) => (
                <li
                  key={category}
                  className="relative"
                  onMouseEnter={() => setHoveredCategory(category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-200 flex justify-between items-center">
                    {category} <FaChevronRight className="text-xs" />
                  </button>

                  {/* Sub-menu for Languages (Hover on Category) */}
                  {hoveredCategory === category && (
                    <ul className="absolute left-full top-0 bg-white shadow-md w-36 text-left ml-1">
                      {categories[category].map((language) => (
                        <li key={language}>
                          <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                            onClick={() => handleLanguageClick(category, language)}
                          >
                            {language} Medium
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li><Link to="/stationery" className="hover:text-blue-600" onClick={handleCloseDropdown}>Stationery</Link></li>
        <li><Link to="/contact" className="hover:text-blue-600" onClick={handleCloseDropdown}>Contact</Link></li>
        <li><Link to="/about" className="hover:text-blue-600" onClick={handleCloseDropdown}>About</Link></li>
      </ul>

      <div className="flex space-x-4 text-blue-900">
        <Link to="/notification" onClick={handleCloseDropdown}><FaBell className="cursor-pointer text-xl hover:text-blue-600" /></Link>
        <Link to="/cart" onClick={handleCloseDropdown}><FaShoppingCart className="cursor-pointer text-xl hover:text-blue-600" /></Link>
        <Link to="/wishlist" onClick={handleCloseDropdown}><FaHeart className="cursor-pointer text-xl hover:text-blue-600" /></Link>
        <Link to="/profile" onClick={handleCloseDropdown}><FaUser className="cursor-pointer text-xl hover:text-blue-600" /></Link>
      </div>
    </nav>
  );
};

export default Header;
