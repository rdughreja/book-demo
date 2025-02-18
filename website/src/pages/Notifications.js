import React, { useState } from "react";
import { Link } from "react-router-dom";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "📚 New books have been added!", date: "2025-02-09" },
    { id: 2, message: "🛍️ Your order has been shipped.", date: "2025-02-08" },
    { id: 3, message: "🎉 Special discount on stationery items!", date: "2025-02-07" },
  ]);

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 px-6">
      <h2 className="text-3xl font-bold text-gray-800">Notifications</h2>
      <ul className="mt-4 space-y-4">
        {notifications.map((notification) => (
          <li key={notification.id} className="bg-white p-4 shadow rounded-lg flex justify-between items-center">
            <div>
              <p>{notification.message}</p>
            </div>
            <div className="flex items-center space-x-4">
              <small className="text-gray-500">{notification.date}</small>
              <button
                onClick={() => deleteNotification(notification.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/" className="mt-6 inline-block text-blue-600 hover:underline">Go back</Link>
    </div>
  );
};

export default Notifications;