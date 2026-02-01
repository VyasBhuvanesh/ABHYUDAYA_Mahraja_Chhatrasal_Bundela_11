const db = require("../config/db");

exports.createComplaint = (data, callback) => {
  const { student_id, title, description, priority } = data;
  db.query(
    "INSERT INTO complaints (student_id, title, description, priority) VALUES (?,?,?,?)",
    [student_id, title, description, priority],
    callback
  );
};

exports.getByStudent = (student_id, callback) => {
  db.query(
    "SELECT * FROM complaints WHERE student_id = ?",
    [student_id],
    callback
  );
};

exports.getAll = callback => {
  db.query("SELECT * FROM complaints", callback);
};

exports.updateStatus = (id, status, callback) => {
  db.query(
    "UPDATE complaints SET status = ? WHERE id = ?",
    [status, id],
    callback
  );
};

exports.addFeedback = (id, feedback, callback) => {
  db.query(
    "UPDATE complaints SET feedback = ?, status = 'Resolved' WHERE id = ?",
    [feedback, id],
    callback
  );
};
