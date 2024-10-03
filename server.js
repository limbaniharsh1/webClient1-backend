const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const contactRoutes = require("./features/contectUs/routes.js");
const connectDB = require("./config/db.js");
const cors = require("cors")

dotenv.config();
const app = express();

app.use(cors());

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/contact", contactRoutes);

// DB connection
connectDB();

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  // https://webclient1-backend.onrender.com
  console.log(`Server running on port ${PORT}`);
});
