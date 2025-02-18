import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { StarIcon } from '@heroicons/react/solid';


const BookDetail = () => {
  const { id } = useParams();

  const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 1299, image: "/assets/dimage.jpg", description: "A classic novel set in the Roaring Twenties.", rating: 1.2, votes: "3.7M", read: "9.8K", publisher: "Medikata", publishedDate: "1 July 2016", language: "English", genre: "Fiction", pages: 210 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", price: 1499, image: "/assets/dimage.jpg", description: "A powerful novel about racial injustice.", rating: 2.8, votes: "1.9M", read: "8.5K", publisher: "J.B. Lippincott & Co.", publishedDate: "11 July 1960", language: "English", genre: "Fiction", pages: 324 },
    { id: 3, title: "1984", author: "George Orwell", price: 1199, image: "/assets/dimage.jpg", description: "A dystopian novel about totalitarianism.", rating: 4.6, votes: "2.5M", read: "7.3K", publisher: "Secker & Warburg", publishedDate: "8 June 1949", language: "English", genre: "Dystopian", pages: 328 },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', price: 999, image: '/assets/wp.jpg', description: "A dystopian novel about totalitarianism.", rating: 4.6, votes: "2.5M", read: "7.3K", publisher: "Secker & Warburg", publishedDate: "8 June 1949", language: "English", genre: "Dystopian", pages: 328 },
    { id: 5, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 1299, image: "/assets/dimage.jpg", description: "A classic novel set in the Roaring Twenties.", rating: 4.5, votes: "3.7M", read: "9.8K", publisher: "Medikata", publishedDate: "1 July 2016", language: "English", genre: "Fiction", pages: 210 },
    { id: 6, title: "To Kill a Mockingbird", author: "Harper Lee", price: 1499, image: "/assets/dimage.jpg", description: "A powerful novel about racial injustice.", rating: 1.8, votes: "1.9M", read: "8.5K", publisher: "J.B. Lippincott & Co.", publishedDate: "11 July 1960", language: "English", genre: "Fiction", pages: 324 },
    { id: 7, title: "1984", author: "George Orwell", price: 1199, image: "/assets/dimage.jpg", description: "A dystopian novel about totalitarianism.A classic novel set in the Roaring Twenties.A classic novel set in the Roaring Twenties.A classic novel set in the Roaring Twenties.A classic novel set in the Roaring Twenties.A classic novel set in the Roaring Twenties.A classic novel set in the Roaring Twenties.A classic novel set in the Roaring Twenties.A classic novel set in the Roaring Twenties.", rating: 2.6, votes: "2.5M", read: "7.3K", publisher: "Secker & Warburg", publishedDate: "8 June 1949", language: "English", genre: "Dystopian", pages: 328 },
    { id: 8, title: 'Pride and Prejudice', author: 'Jane Austen', price: 999, image: '/assets/wp.jpg', description: "A dystopian novel about totalitarianism.", rating: 3.6, votes: "2.5M", read: "7.3K", publisher: "Secker & Warburg", publishedDate: "8 June 1949", language: "English", genre: "Dystopian", pages: 328 },
  ];

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <h2 className="text-center text-red-500 text-xl mt-10">Book not found</h2>;
  }

  return (
    <div className="pt-20 max-w-5xl mx-auto p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <img src={book.image} alt={book.title} className="w-full h-80 object-cover rounded-lg shadow-lg" />
        <div>
          <h1 className="text-4xl font-bold">{book.title}</h1>
          <h2 className="text-xl text-gray-600 mt-2">by {book.author}</h2>
          <div className="flex items-center mr-2 mt-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className={`h-5 w-5 ${i < Math.floor(book.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
            ))}
          </div>
          <p className="text-2xl font-bold mt-4">Price: Rs. {book.price.toFixed(2)}</p>
          <div className="mt-4 space-x-4">
            <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Buy Now</button>
            <button className="px-6 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold">Synopsis:</h3>
        <p className="text-gray-700 mt-2">{book.description}</p>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold">Additional Information:</h3>
        <div className="grid grid-cols-2  gap-y-4 mt-4 text-gray-600">
          <div>
            <strong>Publisher:</strong> <span className="ml-2">{book.publisher}</span>
          </div>
          <div>
            <strong>Published Date:</strong> <span className="ml-2">{book.publishedDate}</span>
          </div>
          <div>
            <strong>Language:</strong> <span className="ml-2">{book.language}</span>
          </div>
          <div>
            <strong>Genre:</strong> <span className="ml-2">{book.genre}</span>
          </div>
          <div>
            <strong>Pages:</strong> <span className="ml-2">{book.pages} Pages</span>
          </div>
          <div>
            <strong>Notes:</strong> <span className="ml-2">Completed</span>
          </div>
        </div>
      </div>


      {/* <div className="mt-10">
        <h3 className="text-2xl font-semibold">Similar Books:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {books.filter(b => b.id !== book.id).map(similarBook => (
            <Link to={`/book/${similarBook.id}`} key={similarBook.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:shadow-lg transition">
              <img src={similarBook.image} alt={similarBook.title} className="w-20 h-28 object-cover rounded" />
              <div>
                <h4 className="text-lg font-semibold">{similarBook.title}</h4>
                <p className="text-gray-500">by {similarBook.author}</p>
              </div>
            </Link>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default BookDetail;
