const express = require('express');
const mysql = require('mysql2');
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 3301;

const db = mysql.createPool({
  host: 'localhost',
  user: 'anastasis',
  password: 'pba2004ath',
  database: 'database1',
});

app.use(bodyParser.json());
app.use(cors());
app.post('/signup', async (req, res) => {
  const { discordName, email, password } = req.body;

  // Validate input (you can add more checks)
  if (!discordName || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Hash the password before storing it in the database
  const hashedPassword = await bcrypt.hash(password, 10);

  // Check if the user with the given email already exists
  db.query('SELECT * FROM crypto WHERE email = ?', [email], (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length > 0) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Insert user data into the database
    const sql = 'INSERT INTO crypto (discord, email, password) VALUES (?, ?, ?)';
    db.query(sql, [discordName, email, hashedPassword], (error, result) => {
      if (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ error: 'Error creating user' });
      }
      res.json({ message: 'User created successfully' });
    });
  });
});
//THIS IS THE LOGIN 
let loggedInUserEmail = ''; // Initialize an empty string
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Check if the user with the given email exists
  db.query('SELECT * FROM crypto WHERE email = ?', [email], async (error, results) => {
    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'User not found' });
    }

    const user = results[0];

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Incorrect password' });
    }
    loggedInUserEmail = email;

    // If authentication is successful, you can send a success message or user data
    res.json({ message: 'Login successful' });
  });
});



///BUTTONS 
app.post('/cart', async (req, res) => {
  const { buttons } = req.body;
  

  // Check if the buttons list is empty
  if (buttons.length === 0) {
    return res.status(400).json({ error: 'Button list is empty' });
  }

  try {
    // Check if the email already exists in the cryptocoins table
    const [existingEmails] = await db.promise().query('SELECT email FROM `cryptocoins` WHERE email = ?', [loggedInUserEmail]);
    const placeholders = Array(10).fill('?').join(', ');
    if (existingEmails.length > 0) {
      // Email already exists, update the button choices for that email
      
      const sql = `
        UPDATE cryptocoins
        SET coin1 = ?, coin2 = ?, coin3 = ?, coin4 = ?, coin5 = ?, coin6 = ?, coin7 = ?, coin8 = ?, coin9 = ?, coin10 = ?
        WHERE email = ?
      `;

      // Assuming you have a default value of NULL for unpressed buttons
      const values = [...buttons, ...Array(10 - buttons.length).fill(null), loggedInUserEmail];

      // Execute the SQL query to update the button choices
      await db.promise().query(sql, values);
      
      res.status(515).json({message:'Each email has 1 portofolio.Coins updated successfully'}) // Updated message
    } else {
      // Email doesn't exist, insert a new row with the email and button choices
      
      const sql = `
        INSERT INTO \`cryptocoins\` (email, coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10)
        VALUES (?, ${placeholders})
      `;

      // Assuming you have a default value of NULL for unpressed buttons
      const values = [loggedInUserEmail, ...buttons].concat(Array(10 - buttons.length).fill(null));

      // Execute the SQL query to insert the new row
      await db.promise().query(sql, values);

      res.json({ message: 'Coins added successfully' }); // Added message
    }
  } catch (error) {
    console.error('Error adding buttons:', error);
    res.status(500).json({ error: 'Error adding coins' });
  }
});



//THE PORTOFOLIO LOGIC
app.post('/portofolio', async (req, res) => {
  try {
    // Check if the user with the given email exists
    const results = await new Promise((resolve, reject) => {
      db.query('SELECT * FROM cryptocoins WHERE email = ?', [loggedInUserEmail], (error, results) => {
        if (error) {
          console.error('Database error:', error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    if (results.length === 0) {
      return res.status(401).json({ error: 'User not found' });
    }

    const user = results[0];
    console.log(user);
    return res.json(user); // Send the user data as JSON response
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});