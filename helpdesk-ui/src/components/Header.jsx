import React from "react";
import { useNavigate } from "react-router-dom";
import bell from "../assets/Vector.png";
import profile from "../assets/Vector (1).png";
import logout from "../assets/Vector (2).png";
import initials from "../assets/Group 1.png";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      // Clear user session or token here if needed
      // localStorage.removeItem("token");
      navigate("/"); // Redirect to SignIn page
    }
  };

  return (
    <header className="header">
      <h1 className="logo">Helpdesk</h1>
      <div className="header-icons">
        <img
          src={initials}
          alt="User Initials Icon"
          id="user-initials-icon"
          className="header-icon"
          style={{ cursor: "pointer" }}
        />
        <img
          src={bell}
          alt="Notifications Icon"
          id="notifications-icon"
          className="header-icon"
          style={{ cursor: "pointer" }}
        />
        <img
          src={profile}
          alt="Profile Icon"
          id="profile-icon"
          className="header-icon"
          style={{ cursor: "pointer" }}
        />
        <img
          src={logout}
          alt="Logout Icon"
          id="logout-icon"
          className="header-icon"
          onClick={handleLogout}
          style={{ cursor: "pointer" }}
        />
      </div>
    </header>
  );
};

export default Header;
