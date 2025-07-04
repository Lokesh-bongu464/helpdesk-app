const Ticket = require("../models/Ticket");

// Create new ticket
exports.createTicket = async (req, res) => {
  const {
    ticketNo,
    date,
    name,
    department,
    subject,
    category,
    description,
    type,
    priority,
  } = req.body;

  try {
    const ticket = new Ticket({
      ticketNo,
      date,
      name,
      department,
      subject,
      category,
      description,
      type,
      priority,
    });

    await ticket.save();

    res.status(201).json({ message: "Ticket created successfully", ticket });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all tickets
exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
