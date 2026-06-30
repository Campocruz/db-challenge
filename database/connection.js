// Import MYSQL2 module
const mysql = require('mysql2');

// Set envirmant credential whit .env file
const credetial = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

// Create Connection to DB
const connection = mysql.createConnection(credetial)

// Check connection error 
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database', err);
    return;
  }
  console.log('Connection to database');
})

// Export connection module
module.exports = connection;