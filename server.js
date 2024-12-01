const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const contactRoutes = require("./features/contectUs/routes.js");
const connectDB = require("./config/db.js");
const cors = require("cors");

dotenv.config();
const app = express();

// Specify the allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://shreevarniexport.com",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      // Allow requests with no origin (like mobile apps or curl requests)
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Enable CORS with the specified options
app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/contact", contactRoutes);

// DB connection
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
