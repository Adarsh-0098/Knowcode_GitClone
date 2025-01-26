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
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chat]);

  useEffect(() => {
    socket.on('receiveMessage', (messageData) => {
      setChat((prevChat) => [...prevChat, messageData]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() || selectedImage) {
      const messageData = {
        sender: userName || 'Anonymous',
        text: message,
        image: selectedImage,
        timestamp: new Date().toLocaleTimeString(),
      };

      socket.emit('sendMessage', messageData);
      setMessage('');
      setSelectedImage(null);
    }
  };

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
          <h2>Welcome to the Community Forum</h2>
          <p className="intro-text">Let’s get started by knowing your name!</p>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            className="name-input"
          />
          <motion.button
            onClick={() => setIsNameEntered(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="enter-button"
          >
            Join Chat
          </motion.button>
        </motion.div>
      ) : (
        <>
          <h2 className="forum-header">🌟 Community Forum 🌟</h2>
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
                {msg.image && (
                  <img
                    src={msg.image}
                    alt="uploaded"
                    className="chat-image"
                  />
                )}
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
              className="message-input"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <label htmlFor="image-upload" className="image-upload-label">
              📷
            </label>
            <input
              id="image-upload"
              type="file"
              onChange={handleImageUpload}
              accept="image/*"
              className="image-upload"
            />
            <motion.button
              onClick={sendMessage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="send-button"
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
