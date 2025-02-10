'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu, X, Search } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Modern Bookstore
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/books" className="text-gray-600 hover:text-blue-600">Books</Link>
          <Link href="/stationery" className="text-gray-600 hover:text-blue-600">Stationery</Link>
          <Link href="/orders" className="text-gray-600 hover:text-blue-600">Orders</Link>
        </div>
        <div className="flex items-center space-x-4">
          <form className="hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </form>
          <Link href="/cart" className="text-gray-600 hover:text-blue-600">
            <ShoppingCart className="h-6 w-6" />
          </Link>
          <button
            className="md:hidden text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <Link href="/books" className="text-gray-600 hover:text-blue-600">Books</Link>
            <Link href="/stationery" className="text-gray-600 hover:text-blue-600">Stationery</Link>
            <Link href="/orders" className="text-gray-600 hover:text-blue-600">Orders</Link>
            <form>
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </form>
          </div>
        </div>
      )}
    </header>
  )
}

