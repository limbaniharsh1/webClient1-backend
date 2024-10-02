const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const contactRoutes = require("./features/contectUs/routes.js")
const connectDB  = require("./config/db.js");

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/contact", contactRoutes);

// DB connection
connectDB();

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
