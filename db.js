const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",          // ✅ NO PASSWORD (very important)
  database: "hostel_db"  // ⚠️ make sure this DB exists
});

db.connect(err => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
    return;
  }
  console.log("✅ MySQL connected successfully");
});

module.exports = db;

