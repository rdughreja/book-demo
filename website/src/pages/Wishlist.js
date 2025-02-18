import { useState } from "react";
import { Trash2 } from "lucide-react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Science Workbook",
      image: "/assets/dimage.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      name: "maths Workbook",
      image: "/assets/dimage.jpg", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Science Workbook",
      image: "/assets/dimage.jpg", // Replace with actual image URL
    },
  ]);

  const removeItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="p-20">
      <h2 className="text-2xl font-semibold">Wish list</h2>
      <p className="text-gray-500 mb-4">See your favorites list here</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {wishlist.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg shadow-md flex flex-col items-center">
            <img src={item.image} alt={item.name} className="h-40 w-auto object-cover" />
            <p className="mt-2 font-medium">{item.name}</p>
            <div className="flex justify-between w-full mt-4">
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded w-40 hover:bg-blue-600 transition">Add to cart</button>
            <button className="px-4 py-2" onClick={() => removeItem(item.id)}>
                <Trash2 className="w-5 h-5 text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;



