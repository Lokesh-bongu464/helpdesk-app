import React from "react";
import "./Dashboard.css"; // ensure CSS is in the same folder

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="cards-container">
        <div className="card total-tickets">
          <h2>Total Tickets</h2>
          <p>12</p>
        </div>
        <div className="card total-solved">
          <h2>Total Solved</h2>
          <p>8</p>
        </div>
        <div className="card total-awaiting">
          <h2>Total Awaiting Approval</h2>
          <p>2</p>
        </div>
        <div className="card total-progress">
          <h2>Total in Progress</h2>
          <p>2</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
