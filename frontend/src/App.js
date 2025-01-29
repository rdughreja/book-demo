import './App.css';
import React from 'react'
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

const App = () => {
  return (
    <Router>
            <Routes>
              <Route path="/" element={<Sidebar />} >
                 <Route path="/" element={<Dashboard />} />
                 <Route path="/inventory" element={<Inventory />} />
                 <Route path="/books" element={<Books />} />
                 <Route path="/order" element={<Order />} />
                 <Route path="/staff" element={<Staff />} />
                 <Route path="/reports" element={<Reports />} />
                 <Route path="/profile" element={<Profile />} />
                 <Route path="/notification" element={<Notification />} />
              </Route>
            </Routes>
    </Router>
  );
}

export default App

{/* <i class="fa-solid fa-search icon"></i> */}