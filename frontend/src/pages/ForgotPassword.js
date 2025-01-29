import React from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h1>Forgot your password?</h1>
        <p>Please enter your username or email to recover your password</p>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>
          <button type="submit" className="submit-button">
            Submit Now
          </button>
        </form>
        <a href="/login" className="back-to-login">
          Back to Login
        </a>
      </div>
    </div>
  );
};

export default ForgotPassword;
