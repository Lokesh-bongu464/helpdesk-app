const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  ticketNo: { type: String, required: true },
  date: { type: Date, required: true },
  name: { type: String, required: true },
  department: { type: String },
  subject: { type: String, required: true },
  category: { type: String },
  description: { type: String },
  type: { type: String },
  priority: { type: String },
});

module.exports = mongoose.model("Ticket", ticketSchema);
