// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// // Import routes FIRST
// const apiRoutes = require("./routes/api");
// const authRoutes = require("./routes/auth");
// const progressRoutes = require("./routes/progress");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use("/api", apiRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api", progressRoutes);

// // MongoDB Connection
// const MONGODB_URI =
//   process.env.MONGODB_URI || "mongodb://localhost:27017/Tax_Trail";

// mongoose
//   .connect(MONGODB_URI)
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Basic route
// app.get("/", (req, res) => {
//   res.json({ message: "Tax Trail Backend is running!" });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const apiRoutes = require("./routes/api");
const authRoutes = require("./routes/auth");
const progressRoutes = require("./routes/progress");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount routes
app.use("/api/auth", authRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api", apiRoutes);

// MongoDB
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/tax_trail";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.json({ message: "Tax Trail Backend is running!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
