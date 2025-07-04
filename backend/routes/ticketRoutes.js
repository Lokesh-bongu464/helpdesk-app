const express = require("express");
const router = express.Router();
const {
  createTicket,
  getAllTickets,
} = require("../controllers/ticketController");

// POST /api/tickets -> create ticket
router.post("/", createTicket);

// GET /api/tickets -> get all tickets
router.get("/", getAllTickets);

module.exports = router;
