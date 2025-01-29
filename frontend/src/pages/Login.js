// import React, { useState } from "react";
// import "./Login.css";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};
//     if (!username) {
//       newErrors.username = "Username is required";
//     } else if (username.length < 3) {
//       newErrors.username = "Username must be at least 3 characters";
//     }

//     if (!password) {
//       newErrors.password = "Password is required";
//     } else if (password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0; // Returns true if there are no errors
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       console.log("Form Submitted", { username, password });
//       // Perform the login action here
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Username"
//             className="input-field"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           {errors.username && <p className="error">{errors.username}</p>}

//           <input
//             type="password"
//             placeholder="Password"
//             className="input-field"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {errors.password && <p className="error">{errors.password}</p>}

//           <button type="submit" className="login-button">LOGIN</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React from "react";
// import { Link } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   return (
//     <div className="login-container">
//       <div className="login-box">
//         {/* <h1 className="title">BOOKSTORE</h1> */}
//         <div className="form-box">
//           <h2>Login!</h2>
//           <p>Please enter your credentials below to continue</p>
//           <form>
//             <div className="input-group">
//               <label htmlFor="username">Username</label>
//               <input type="text" id="username" placeholder="Enter your username" />
//             </div>
//             <div className="input-group">
//               <label htmlFor="password">Password</label>
//               <div className="password-container">
//                 <input
//                   type="password"
//                   id="password"
//                   placeholder="Enter your password"
//                 />
//                 {/* <button type="button" className="toggle-visibility">
//                   👁️
//                 </button> */}
//               </div>
//             </div>
//             <div className="actions">
//               <label>
//                 <input type="checkbox"/>Remember me
//               </label>
//               <Link to="/ForgotPassword">Forgot Password?</Link>
//             </div>
//             <button type="submit" className="login-button">
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};
//     if (!username.trim()) {
//       newErrors.username = "Username is required.";
//     } else if (username.length < 3) {
//       newErrors.username = "Username must be at least 3 characters long.";
//     }

//     if (!password.trim()) {
//       newErrors.password = "Password is required.";
//     } else if (password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters long.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // Returns true if no errors
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       // Proceed with form submission (e.g., send data to the server)
//       console.log("Form submitted", { username, password });
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <div className="form-box">
//           <h2>Login!</h2>
//           <p>Please enter your credentials below to continue</p>
//           <form onSubmit={handleSubmit}>
//             <div className="input-group">
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 placeholder="Enter your username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               {errors.username && <p className="error">{errors.username}</p>}
//             </div>
//             <div className="input-group">
//               <label htmlFor="password">Password</label>
//               <div className="password-container">
//                 <input
//                   type="password"
//                   id="password"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               {errors.password && <p className="error">{errors.password}</p>}
//             </div>
//             <div className="actions">
//               <label>
//                 <input type="checkbox" /> Remember me
//               </label>
//               <Link to="/ForgotPassword">Forgot Password?</Link>
//             </div>
//             <button type="submit" className="login-button">
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login!</h1>
        <p>Please enter your credentials below to continue</p>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="actions">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/ForgotPassword">Forgot Password?</Link>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

