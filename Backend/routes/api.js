const express = require("express");
const router = express.Router();

// Test route
router.get("/test", (req, res) => {
  res.json({ message: "API is working!" });
});

// Simple tax record route (temporary)
router.get("/records", (req, res) => {
  res.json([{ id: 1, name: "Sample Tax Record", amount: 1000 }]);
});

module.exports = router;
