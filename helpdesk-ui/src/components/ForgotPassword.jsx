import React from "react";
import "./ForgotPassword.css";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <p className="forgot-text">
          Don’t worry, Enter your email below and we will
          <br />
          send you a link to change password.
        </p>

        <form>
          <input type="email" placeholder="Email" className="input-field" />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>

        <button className="signin-button">
          <Link to="/" className="signin-link">
            Sign In
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
