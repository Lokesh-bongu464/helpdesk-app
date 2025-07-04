import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import NewTicket from "./components/NewTicket";
import MyTicket from "./components/MyTicket";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Dashboard Layout with nested routes */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="new-ticket" element={<NewTicket />} />
          <Route path="my-ticket" element={<MyTicket />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
