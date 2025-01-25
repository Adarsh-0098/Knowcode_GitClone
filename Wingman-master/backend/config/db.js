// Import mysql2 (assuming mysql2 is installed)
import mysql from 'mysql2';

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // Your MySQL username
  password: 'ansh',   // Your MySQL password (replace with your actual password)
  database: 'user_db'
});

// Connect to MySQL and log a message
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL Database:', err);
    throw err;
  }
  console.log('Connected to MySQL Database');
});

// Export the db connection
export default db;
