const connection = require('../database/connection')

// Get Users
const index = (req, res) => {
  const sql = `SELECT * FROM users`

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Error DB connection' })
    res.json(results)
  })
};

// Get Users by ID
const show = (req, res) => {

  const id = req.params.id

  const sql = `SELECT * FROM users WHERE id = ?`

  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error DB connection' })
    if (results.length === 0) return res.status(404).json({ message: 'not found' })
    res.json(results[0])
  });
};

// Set new User
const store = (req, res) => {
  res.status(500).json({ message: 'Da prototipare' });
};

// Update User
const update = (req, res) => {
  res.status(500).json({ message: 'Da prototipare' });
};

// Modify User
const modify = (req, res) => {
  res.status(500).json({ message: 'Da prototipare' });
};

// Destroy User
const destroy = (req, res) => {
  res.status(500).json({ message: 'Da prototipare' });
};

module.exports = { index, show, store, update, modify, destroy }