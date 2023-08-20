const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 8081; // Set your desired port

// Create a MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pba2004ath',
  database: 'cient',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to the database');
});

// Middleware to parse JSON
app.use(express.json());

// Create a route to handle user signup
app.post('/signup', (req, res) => {
  const { discordName, email, password } = req.body;

  // Add your validation logic here (e.g., check if the user already exists)

  // Insert user data into the database
  const sql = 'INSERT INTO users (discord, email, password) VALUES (?, ?, ?)';
  db.query(sql, [discordName, email, password], (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Error creating user' });
      throw err;
    }
    res.json({ message: 'User created successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
