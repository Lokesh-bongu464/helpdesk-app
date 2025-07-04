import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <div className="main-body">
        <Sidebar />
        <div className="content-wrapper">
          <main className="main-content">
            <Outlet /> {/* This renders nested route components */}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
