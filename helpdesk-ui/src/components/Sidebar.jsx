import React from "react";
import { NavLink } from "react-router-dom";
import dashboardIcon from "../assets/dashboardIcon.png";
import newTicketIcon from "../assets/newTicket.png";
import myTicketIcon from "../assets/myTicket.png";
import pointer from "../assets/pointer.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <NavLink
        to="/dashboard"
        end // 🔑 This ensures exact match for /dashboard only
        className={({ isActive }) =>
          "sidebar-item" + (isActive ? " active" : "")
        }
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <img src={pointer} alt="Pointer" className="pointer-icon" />
            )}
            <img src={dashboardIcon} alt="Dashboard" />
            <span>Dashboard</span>
          </>
        )}
      </NavLink>

      <NavLink
        to="/dashboard/new-ticket"
        className={({ isActive }) =>
          "sidebar-item" + (isActive ? " active" : "")
        }
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <img src={pointer} alt="Pointer" className="pointer-icon" />
            )}
            <img src={newTicketIcon} alt="New Ticket" />
            <span>New Ticket</span>
          </>
        )}
      </NavLink>

      <NavLink
        to="/dashboard/my-ticket"
        className={({ isActive }) =>
          "sidebar-item" + (isActive ? " active" : "")
        }
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <img src={pointer} alt="Pointer" className="pointer-icon" />
            )}
            <img src={myTicketIcon} alt="My Ticket" />
            <span>My Ticket</span>
          </>
        )}
      </NavLink>
    </aside>
  );
};

export default Sidebar;
