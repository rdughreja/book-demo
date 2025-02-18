import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Order.css';

const Order = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("A-Z");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const showDetails = (order) => navigate('/OrderDetails', { state: { order } });

  const orderData = [
    { title: 'Processing', count: 1202, percentage: '10%', change: '+120 today', color: 'orange', icon: 'fa-box' },
    { title: 'Shipped', count: 1202, percentage: '10%', change: '+120 today', color: '#3250FF', icon: 'fa-truck-fast' },
    { title: 'Delivered', count: 1202, percentage: '10%', change: '+120 today', color: '#2BB2FE', icon: 'fa-cart-arrow-down' },
    { title: 'Canceled', count: 1202, percentage: '10%', change: '+120 today', color: '#EB3D4D', icon: 'fa-circle-xmark' }
  ];

  const staticOrders = [
    { id: '001', ProductName: 'Laptop', image: 'https://via.placeholder.com/50', date: '2024-02-15', customer: 'John Doe', price: 1200, paymentStatus: 'Paid', status: 'Shipped' },
    { id: '002', ProductName: 'Headphones', image: 'https://via.placeholder.com/50', date: '2024-02-16', customer: 'Jane Smith', price: 150, paymentStatus: 'Pending', status: 'Processing' },
    { id: '003', ProductName: 'Smartphone', image: 'https://via.placeholder.com/50', date: '2024-02-14', customer: 'Alice Brown', price: 800, paymentStatus: 'Paid', status: 'Delivered' },
    { id: '004', ProductName: 'Camera', image: 'https://via.placeholder.com/50', date: '2024-02-13', customer: 'Bob Wilson', price: 500, paymentStatus: 'Paid', status: 'Canceled' }
  ];

  const sortedOrders = staticOrders.sort((a, b) => {
    if (sortOrder === "A-Z") {
      return a.customer.localeCompare(b.customer);
    } else {
      return b.customer.localeCompare(a.customer);
    }
  });

  return (
    <div className="order-container">
      <div className="order-header">
        <h1>Order</h1>
        <div className="order-icons">
          <i className="fa-solid fa-bell" onClick={() => navigate('/notification')}></i>
          <img src="https://placehold.co/40x40" alt="User profile" className='profile-img' onClick={() => navigate('/Profile')} />
        </div>
      </div>

      <div className="four-card">
        {orderData.map((order, index) => (
          <div className="crd" key={index}>
            <div className="crd-left">
              <p>{order.title}</p>
              <h2>{order.count}</h2>
              <p className='progress'><span>{order.percentage}</span> <i className="fa-solid fa-caret-up" style={{ color: 'green' }}></i> {order.change}</p>
            </div>
            <div className="crd-right">
              <div className="icon-box" style={{ backgroundColor: order.color }}>
                <i className={`fa-solid ${order.icon}`} style={{ color: '#FFF' }}></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="order-list">
        <div className="search-section">
          <div className="sort-section">
            <label htmlFor="sort-select"></label>
            <select id="sort-select" value={sortOrder} onChange={handleSortChange}>Sort by:
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
          </div>

          <div className="search-box">
            <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearch} />
          </div>
          <i className="fa-solid fa-pencil order-edit"></i>
          <i className="fa-solid fa-trash order-delete"></i>
        </div>

        <table className='orders-table'>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
              {sortedOrders.map((order, index) => (
              <tr key={index}>
                <td className='order-id' onClick={() => showDetails(order)}>#{order.id}</td>
                <td className='customer-name' onClick={() => showDetails(order)}>{order.customer}</td>
                <td>{order.date}</td>
                <td>${order.price}</td>
                <td><button className='payment-status'>{order.paymentStatus}</button></td>
                <td>
                  <button className={`order-status ${order.status === 'Shipped' ? 'shipped' : ''}`}>
                    {order.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
