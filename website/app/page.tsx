import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

// Mock data for featured books
const featuredBooks = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 12.99, image: '/placeholder.svg' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 14.99, image: '/placeholder.svg' },
  { id: 3, title: '1984', author: 'George Orwell', price: 11.99, image: '/placeholder.svg' },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', price: 9.99, image: '/placeholder.svg' },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">Welcome to ModernBooks</h1>
          <p className="text-xl mb-6 animate-fade-in-up animation-delay-200">Discover your next favorite book or find the perfect stationery for your needs.</p>
          <Button asChild className="animate-fade-in-up animation-delay-400">
            <Link href="/books">Explore Books</Link>
          </Button>
        </div>
      </section>

      {/* Featured Books */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image src={book.image} alt={book.title} width={300} height={400} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-2">{book.author}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">${book.price.toFixed(2)}</span>
                  <Button asChild variant="outline">
                    <Link href={`/books/${book.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-yellow-100 rounded-lg p-6 transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">Summer Reading Sale!</h3>
            <p className="mb-4">Get 20% off on all fiction books. Use code: SUMMER20</p>
            <Button variant="secondary">Shop Now</Button>
          </div>
          <div className="bg-green-100 rounded-lg p-6 transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">Back to School Deals</h3>
            <p className="mb-4">Save big on textbooks and stationery. Starting from $4.99</p>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Class-wise Book Categories */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Browse by Class</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((classNum) => (
            <Link
              key={classNum}
              href={`/books/class/${classNum}`}
              className="bg-gray-100 hover:bg-blue-100 text-center py-4 rounded-lg transition-colors"
            >
              Class {classNum}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

