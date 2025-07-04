import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // ✅ Added
import "./SignIn.css";

const SignIn = () => {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // ✅ Added

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
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`,
        {
          name: formData.name,
          password: formData.password,
        }
      );

      setMessage("✅ Login successful!");
      setFormData({ name: "", password: "" });
      localStorage.setItem("token", res.data.token);

      navigate("/dashboard"); // ✅ Redirect after login
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed";
      setMessage(`❌ ${msg}`);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h1 className="signin-title">Helpdesk System</h1>
        {message && <p className="signin-message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Username"
            className="input-field"
            value={formData.name}
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
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>

        <div className="signin-footer">
          <Link to="/forgot-password" className="forgot-password">
            Forgot password
          </Link>
          <Link to="/signup" className="signup">
            Sign Up
          </Link>{" "}
          {/* ✅ */}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
