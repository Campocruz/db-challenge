/*
      IMPORT SECTION
*/

// Define Express
const express = require('express');

// Define App
const app = express();

// Define Port
const port = 3000;

// Define Path Static Resource 
app.use(express.static('public'));

// Import JSON format for read body request
app.use(express.json());

// Define connection
const connection = require('./database/connection')

/*
      END IMPORT SECTION
*/

// Get Home
app.get('/', (req, res) => {
  res.json({
    messaggio: "Server del mio Blog"
  })
})


app.get('/users', (req, res) => {
  const sql = `SELECT * FROM users`

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Error DB connection' })
    res.json(results)
  })
})


app.get('/users/:id', (req, res) => {

  const id = req.params.id

  const sql = `SELECT * FROM users WHERE id = ?`

  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error DB connection' })
    if (results.length === 0) return res.status(404).json({ message: 'not found' })
    res.json(results[0])
  });
});

app.get('/posts', (req, res) => {
  const sql = `SELECT * FROM posts`

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Error DB connection' })
    res.json(results)
  })
})


app.get('/posts/:id', (req, res) => {

  const id = req.params.id

  const sql = `SELECT * FROM posts WHERE id = ?`

  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error DB connection' })
    if (results.length === 0) return res.status(404).json({ message: 'not found' })
    res.json(results[0])
  });
});

// Listen Server
app.listen(port, () => {
  console.log(`Server listening http://localhost:${port}`);
})