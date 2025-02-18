import React from 'react';

// Mock data for stationery items
const stationeryItems = [
  { id: 1, name: 'Notebook', price: 3.99, image: '/placeholder.svg' },
  { id: 2, name: 'Pen Set', price: 5.99, image: '/placeholder.svg' },
  { id: 3, name: 'Pencil Case', price: 4.99, image: '/placeholder.svg' },
  { id: 4, name: 'Highlighters', price: 6.99, image: '/placeholder.svg' },
];

function Stationery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Stationery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stationeryItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{item.name}</h2>
              <div className="flex justify-between items-center">
                <span className="font-bold">${item.price.toFixed(2)}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stationery;

