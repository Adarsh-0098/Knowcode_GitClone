import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // Allow frontend connection
    methods: ['GET', 'POST'],
  },
});

// Middleware
app.use(cors());

// Simple API Endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Community Forum backend!' });
});

// Socket.IO connection
io.on('connection', (socket) => {
  console.log('a user connected');

  // Listen for messages from clients and emit to all clients
  socket.on('sendMessage', (messageData) => {
    console.log('Message received:', messageData);
    io.emit('receiveMessage', messageData); // Emit the message to all clients
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
