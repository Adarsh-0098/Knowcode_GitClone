import express from 'express';
import mysql from 'mysql'; // Ensure you're using mysql2 if that's what you're configured with
import bcrypt from 'bcryptjs';

router.post('/register', async (req, res) => {
  const { email, username, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (email, username, password, role) VALUES (?, ?, ?, ?)';

    db.query(query, [email, username, hashedPassword, role], (err) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).send('Error registering user');
      }
      res.status(200).send('User registered');
    });
  } catch (error) {
    console.error('Error processing registration:', error);
    res.status(500).send('Error processing registration');
  }
});


// Export the router
export default router;