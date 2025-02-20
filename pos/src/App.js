import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Sidebar from './componets/Sidebar';
import Books from './pages/Books';
import Order from './pages/Order';
import Staff from './pages/Staff';
import Reports from './pages/Reports';
import Profile from './componets/Profile';
import Notification from './componets/Notification';
import POSbook from './POS/POSbook';
import SubjectsPage from './POS/Subjectpage';
import CheckOut from './POS/CheckOut';
import Stationary from './pages/Stationary';
import Coupons from './pages/Coupons';
import OrderDetails from './pages/OrderDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes that include Sidebar */}
        <Route path="/" element={<Sidebar />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/books" element={<Books />} />
          <Route path="/stationary" element={<Stationary />} />
          <Route path="/Coupons" element={<Coupons />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/order" element={<Order />} />
          <Route path="/OrderDetails" element={<OrderDetails />} /> 
          <Route path="/reports" element={<Reports />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notification" element={<Notification />} />
        </Route>

        {/* Route without Sidebar */}
        <Route path="/posbook" element={<POSbook />} />
        <Route path="/subjects/:standard" element={<SubjectsPage />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </Router>
  );
}

export default App;
