const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../db"); // MySQL connection file

const router = express.Router();

router.post("/student/login", (req, res) => {
  const { enrollment_number, password } = req.body;

  if (!enrollment_number || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query = "SELECT * FROM students WHERE enrollment_number = ?";

  db.query(query, [enrollment_number], async (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }

    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid enrollment number" });
    }

    const student = result[0];
    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({
      message: "Student login successful"
    });
  });
});

router.post("/warden/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query = "SELECT * FROM wardens WHERE username = ?";

  db.query(query, [username], async (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }

    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid username" });
    }

    const warden = result[0];
    const isMatch = await bcrypt.compare(password, warden.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({
      message: "Warden login successful"
    });
  });
});

module.exports = router;