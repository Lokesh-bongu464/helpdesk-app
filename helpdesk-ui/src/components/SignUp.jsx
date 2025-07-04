import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [message, setMessage] = useState("");

  // Auto-hide message after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/signup`,
        {
          name: formData.username,
          email: formData.email,
          password: formData.password,
        }
      );

      setMessage("✅ Signup successful!");
      // Clear form
      setFormData({ username: "", email: "", password: "" });
    } catch (err) {
      const msg = err.response?.data?.message || "Signup failed";
      setMessage(`❌ ${msg}`);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="signup-title">Helpdesk System</h1>
        <p className="signup-subtitle">Sign up here</p>

        {message && <p className="signup-message">{message}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input-field"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>

        <div className="signup-footer">
          <Link to="/forgot-password" className="forgot-password">
            Forgot password
          </Link>
          <Link to="/" className="signin-link">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
