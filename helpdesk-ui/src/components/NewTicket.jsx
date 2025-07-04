import React, { useState, useRef } from "react";
import "./NewTicket.css";
import ClipIcon from "../assets/clipicon.png";
import RobotIcon from "../assets/robot.png";
import "../index.css"; // Import global styles
import axios from "axios";

const NewTicket = () => {
  const [formData, setFormData] = useState({
    ticketNo: "",
    date: "",
    name: "",
    department: "",
    subject: "",
    category: "",
    description: "",
    type: "",
    priority: "",
    captchaChecked: false, // for checking robot image
  });

  const fileInputRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAttachClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    console.log("Selected file:", e.target.files[0]);
  };

  const handleCaptchaClick = () => {
    setFormData({
      ...formData,
      captchaChecked: !formData.captchaChecked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.captchaChecked) {
      alert("❌ Please verify captcha");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/tickets`,
        formData
      );

      console.log(res.data);
      alert("✅ Ticket created successfully");

      // Optionally reset form data here
      setFormData({
        ...formData,
        title: "",
        description: "",
        captchaChecked: false,
      });
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.message || "Failed to create ticket";
      alert(`❌ ${msg}`);
    }
  };

  return (
    <div className="new-ticket-container">
      <h1 className="new-ticket-title">Create New Ticket</h1>
      <form className="new-ticket-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-group">
            <label>Ticket No.</label>
            <input
              type="text"
              name="ticketNo"
              value={formData.ticketNo}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-group full-width">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <div className="input-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Description</label>
            <div className="textarea-container">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
              <button
                type="button"
                className="attach-button"
                onClick={handleAttachClick}
              >
                <img src={ClipIcon} alt="Attach" />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="input-group">
            <label>Type</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-group">
            <label>Priority</label>
            <input
              type="text"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="captcha-submit-container">
          <div className="captcha-container" onClick={handleCaptchaClick}>
            <img
              src={RobotIcon}
              alt="I’m not a robot"
              className={`robot-icon ${
                formData.captchaChecked ? "checked" : ""
              }`}
            />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTicket;
