import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { motion } from 'framer-motion';
import './CommunityForum.css';

const socket = io('http://localhost:4000'); // Connect to the backend

const CommunityForum = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [userName, setUserName] = useState('');
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const chatBoxRef = useRef();

  useEffect(() => {
    // Scroll chat box to bottom when a new message is added
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chat]);

  // Listen for messages from the server
  useEffect(() => {
    socket.on('receiveMessage', (messageData) => {
      console.log('Message received:', messageData); // Debugging line
      setChat((prevChat) => [...prevChat, messageData]);
    });

    return () => {
      socket.off('receiveMessage'); // Cleanup listener on component unmount
    };
  }, []);

  // Handle sending a message
  const sendMessage = () => {
    if (message.trim() || selectedImage) {
      const messageData = {
        sender: userName || 'Anonymous',
        text: message,
        image: selectedImage,
        timestamp: new Date().toLocaleTimeString(),
      };

      socket.emit('sendMessage', messageData); // Send the message to the server
      console.log('Sent message:', messageData); // Debugging line

      setMessage(''); // Clear input
      setSelectedImage(null); // Clear image after sending
    }
  };

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image')) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="forum-container">
      {!isNameEntered ? (
        <motion.div
          className="name-input-modal"
          initial={{ opacity: 0, transform: 'translateY(50px)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ duration: 0.5 }}
        >
          <h2>Enter Your Name</h2>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <button onClick={() => setIsNameEntered(true)}>Enter</button>
        </motion.div>
      ) : (
        <>
          <h2>Community Forum</h2>
          <div className="chat-box" ref={chatBoxRef}>
            {chat.map((msg, index) => (
              <motion.div
                key={index}
                className={`chat-message ${msg.sender === userName ? 'self' : 'other'}`}
                initial={{ opacity: 0, transform: 'translateY(20px)' }}
                animate={{ opacity: 1, transform: 'translateY(0)' }}
                transition={{ duration: 0.5 }}
              >
                <span className="chat-sender">{msg.sender}:</span>
                <span className="chat-text">{msg.text}</span>
                {msg.image && <img src={msg.image} alt="uploaded" className="chat-image" />}
                <span className="chat-time">{msg.timestamp}</span>
              </motion.div>
            ))}
          </div>

          <div className="chat-input">
            <motion.input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <input type="file" onChange={handleImageUpload} accept="image/*" className="image-upload" />
            <motion.button
              onClick={sendMessage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Send
            </motion.button>
          </div>
        </>
      )}
    </div>
  );
};

export default CommunityForum;
