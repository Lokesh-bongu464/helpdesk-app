const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./configFiles/db");

dotenv.config({ path: "./config.env" });
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes")); // added ticket routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
