import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";

const booksData = {
  1: {
    textbook: [
      { title: "English Reader - Class 1", price: 150 },
      { title: "Basic Math - Class 1", price: 180 },
    ],
    workbook: [
      { title: "English Workbook - Class 1", price: 120 },
      { title: "Math Workbook - Class 1", price: 140 },
    ],
  },
  2: {
    textbook: [
      { title: "Hindi Workbook - Class 2", price: 160 },
      { title: "Environmental Science - Class 2", price: 190 },
    ],
    workbook: [
      { title: "Hindi Workbook - Class 2", price: 130 },
      { title: "Math Workbook - Class 2", price: 150 },
    ],
  },
  3: {
    textbook: [
      { title: "Mathematics - Class 3", price: 170 },
      { title: "General Knowledge - Class 3", price: 180 },
    ],
    workbook: [
      { title: "Mathematics Workbook - Class 3", price: 140 },
      { title: "General Knowledge Workbook - Class 3", price: 150 },
    ],
  },
};



const BookPage = () => {
  const { category, language } = useParams();
  const [selectedStd, setSelectedStd] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("textbook");
  const [wishlist, setWishlist] = useState({})


  const toggleWishlist = (bookTitle) => {
    setWishlist((prev) => ({
      ...prev,
      [bookTitle]: !prev[bookTitle],
    }));
  };

  return (
    <div className="p-10 pt-20">
      <h1 className="text-2xl font-bold">
        Books for {category.toUpperCase()} - {language} Medium
      </h1>
      <p className="text-gray-600 mt-2">
        Browse books available for {category.toUpperCase()} board in {language} medium.
      </p>

      {/* Standards (1-12) Buttons */}
      <div className="mt-5 flex flex-wrap gap-4">
        {[...Array(12).keys()].map((num) => (
          <button
            key={num + 1}
            className={`px-4 py-2 border rounded-md shadow-md ${
              selectedStd === num + 1 ? "bg-blue-500 text-white" : "bg-white hover:bg-gray-100"
            }`}
            onClick={() => setSelectedStd(num + 1)}
          >
            Class {num + 1}
          </button>
        ))}
      </div>

      {/* Categories for Selected Standard (Textbook/Workbook) */}
      {selectedStd && (
        <div className="mt-5 flex gap-6 justify-center">
          <button
            className={`px-5 py-2 border rounded-full text-sm font-semibold transition-all duration-300 ${
              selectedCategory === "textbook" ? "bg-gradient-to-r from-green-400 to-green-600 text-white" : "bg-white text-green-600 hover:bg-green-50"
            }`}
            onClick={() => setSelectedCategory("textbook")}
          >
            Textbook
          </button>
          <button
            className={`px-5 py-2 border rounded-full text-sm font-semibold transition-all duration-300 ${
              selectedCategory === "workbook" ? "bg-gradient-to-r from-orange-400 to-orange-600 text-white" : "bg-white text-orange-600 hover:bg-orange-50"
            }`}
            onClick={() => setSelectedCategory("workbook")}
          >
            Workbook
          </button>
        </div>
      )}

      {/* Books for Selected Standard and Category */}
      {selectedStd && selectedCategory && (
        <section className="py-10 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
            {selectedCategory === "textbook" ? "Textbooks" : "Workbooks"} for Class {selectedStd}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {booksData[selectedStd]?.[selectedCategory]?.length > 0 ? (
              booksData[selectedStd][selectedCategory].map((book, index) => (
                <div key={index} className="p-4 w-full flex flex-col border rounded-lg shadow-md bg-white ">
                

                  {/* Wishlist Button */}
                 

                  {/* Book Image Placeholder */}
                  <div className="w-full h-80 bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src={`https://via.placeholder.com/200x300?text=${encodeURIComponent(book.title)}`}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Book Title */}
                  <h3 className="font-semibold text-lg mb-2 mt-2 text-center">{book.title}</h3>

                  {/* Book Price */}
                  <p className="text-gray-700 text-center font-bold">₹{book.price}</p>

                  <button
                    
                    onClick={() => toggleWishlist(book.title)}
                  >
                    <Heart
                      size={20}
                      className={`transition-all ${wishlist[book.title] ? "text-red-500 fill-red-500" : "text-gray-400"}`}
                    />
                  </button>

                  {/* Add to Cart Button */}
                  <button className="mt-2 bg-blue-600 text-white py-2 px-4 flex items-center justify-center gap-2 w-full">
                    <ShoppingCart size={16} /> Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 mt-2 col-span-full text-center">No books available for this selection.</p>
            )}
          </div>
        </section>
      )}

    </div>
  );
};

export default BookPage;






//   1: {
//     textbook: ["📖 English Reader - Class 1", "📖 Basic Math - Class 1"],
//     workbook: ["📖 English Workbook - Class 1", "📖 Math Workbook - Class 1"],
//   },
//   2: {
//     textbook: ["📖 Hindi Workbook - Class 2", "📖 Environmental Science - Class 2"],
//     workbook: ["📖 Hindi Workbook - Class 2", "📖 Math Workbook - Class 2"],
//   },
//   // Add similar data for other classes
//   3: {
//     textbook: ["📖 Mathematics - Class 3", "📖 General Knowledge - Class 3"],
//     workbook: ["📖 Mathematics Workbook - Class 3", "📖 General Knowledge Workbook - Class 3"],
//   },
//   // And so on for other classes
// };