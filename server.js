const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const contactRoutes = require("./features/contectUs/routes.js");
const connectDB = require("./config/db.js");
const cors = require("cors");

dotenv.config();
const app = express();

const allowedOrigins = [
  "https://shreedemo.netlify.app",
  "http://localhost:5173",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Enable CORS with the specified options
app.use(cors(corsOptions));

app.use(
  cors({
    origin: ["https://shreedemo.netlify.app", "http://localhost:5173/"], // or your React app's URL
  })
);

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
