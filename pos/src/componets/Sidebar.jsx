import React,{ useState, useEffect } from 'react'
import '../styles/Sidebar.css';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Sidebar = () => {

  const menuItems = [
    {id:1, icon: "fa-solid fa-search", text: "Dashboard", link: "/"},
    {id:2, icon: "fa-solid fa-search", text: "Books", link: "/books"},
    {id:3, icon: "fa-solid fa-search", text: "Staff", link: "/staff"},
    {id:4, icon: "fa-solid fa-search", text: "Inventory", link: "/inventory" },
    {id:5, icon: "fa-solid fa-search", text: "Reports", link: "/reports"},
    {id:6, icon: "fa-solid fa-search", text: "Order", link: "/order"},
  ];

  return (
    <>
     <div className="sidebar-container">

       <div className="sidebar">  
          <div className='logo'>
            <span className='logo-text'>BOOKSTORE</span>
          </div>

       <nav className="sidebar-menu">
              {menuItems.map((item) => (
                <NavLink to={item.link} key={item.id} className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`} // Use isActive to apply active class 
                >
                  <i className={`${item.icon} icon-style`}></i>
                  <span className="menu-text">{item.text}</span>
                </NavLink>
              ))}
        </nav>
             
                  {/* <Link to="/"> <span className="menu-text">Dashboard</span> </Link>
                   <Link to="/inventory">  <span className="menu-text">Inventory</span> </Link> */}
          <div className="sidebar-footer">
            <div className="logout">
              <i className="fa-solid fa-power-off icon"></i>
              <span className="logout-text">Logout</span>
            </div>
          </div>
          
     </div>
       <Outlet/>
</div>
   </>
  )
}

export default Sidebar



// import React from "react";
// // import "./Sidebar.css";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="sidebar-header">
//         <h2>BOOKSTORE</h2>
//       </div>
//       <div className="sidebar-menu">
//         <div className="menu-item active">
//           <i className="fa-solid fa-search icon"></i>
//           <span>Dashboard</span>
//         </div>
//         <div className="menu-item">
//           <i className="fa-solid fa-search icon"></i>
//           <span>Books</span>
//         </div>
//         <div className="menu-item">
//           <i className="fa-solid fa-search icon"></i>
//           <span>Staff</span>
//         </div>
//         <div className="menu-item">
//           <i className="fa-solid fa-search icon"></i>
//           <span>Inventory</span>
//         </div>
//         <div className="menu-item">
//           <i className="fa-solid fa-search icon"></i>
//           <span>Reports</span>
//         </div>
//         <div className="menu-item">
//           <i className="fa-solid fa-search icon"></i>
//           <span>Order</span>
//         </div>
//       </div>
//       <div className="sidebar-footer">
//         <div className="logout">
//           <i className="fa-solid fa-search icon"></i>
//           <span>Logout</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



// import React from "react";
// import { Link } from "react-router-dom"; // Import Link from React Router
// // import "./Sidebar.css";

// const Sidebar = () => {
//   // Array of menu items with links
//   const menuItems = [
//     { id: 1, icon: "fa-solid fa-search", text: "Dashboard", link: "/dashboard", active: true },
//     { id: 2, icon: "fa-solid fa-book", text: "Books", link: "/books" },
//     { id: 3, icon: "fa-solid fa-user", text: "Staff", link: "/staff" },
//     { id: 4, icon: "fa-solid fa-clipboard", text: "Inventory", link: "/inventory" },
//     { id: 5, icon: "fa-solid fa-chart-line", text: "Reports", link: "/reports" },
//     { id: 6, icon: "fa-solid fa-shopping-cart", text: "Order", link: "/order" },
//   ];

//   return (
//     <div className="sidebar">
//       <div className="sidebar-header">
//         <h2>BOOKSTORE</h2>
//       </div>
//       <div className="sidebar-menu">
//         {menuItems.map((item) => (
//           <Link to={item.link} key={item.id} className={`menu-item ${item.active ? 'active' : ''}`}>
//             <i className={`${item.icon} icon-style`}></i>
//             <span className="menu-text">{item.text}</span>
//           </Link>
//         ))}
//       </div>
//       <div className="sidebar-footer">
//         <div className="logout">
//           <i className="fa-solid fa-sign-out-alt icon-style"></i>
//           <span className="logout-text">Logout</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



/* {`sidebar ${isSidebarOpen ? "open" : "closed"}`} */
// {`logo ${isSidebarOpen ? "large" : "small"}`}
// {isSidebarOpen && <span className="menu-text">Dashboard</span>}

// <div className="toggle-btn" onClick={toggleSidebar}>
// <button className='btn'> <i class="fa-solid fa-bars icon2"> </i></button>
// </div>

// const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // const toggleSidebar = () => {
    //   setIsSidebarOpen(!isSidebarOpen);
    // };

//     <div className='logo-container'>
//     <img src='/images/logo.png' alt='logo' className="logo"/>
//  </div>