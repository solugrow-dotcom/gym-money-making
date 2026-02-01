/**
 * SoluGrow Engine - Backend Server
 * This file starts the backend engine.
 */

const express = require("express");
const app = express();

app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("SoluGrow Engine Backend is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SoluGrow Engine running on port ${PORT}`);
});
