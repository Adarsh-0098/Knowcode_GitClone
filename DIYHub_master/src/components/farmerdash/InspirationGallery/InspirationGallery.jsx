import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InspirationGallery.css';

const InspirationGallery = () => {
  const [furnitureImages, setFurnitureImages] = useState([]);
  const [likedImages, setLikedImages] = useState({});
  const [searchQuery, setSearchQuery] = useState('furniture');
  
  const API_KEY = 'RRm5Yoak8byFcyDpo1GIo9FO38QRhFK9GRSKAX5qCq576qoJ83ebHrub'; // Replace with your Pexels API key

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.pexels.com/v1/search', {
          headers: {
            Authorization: API_KEY,
          },
          params: {
            query: searchQuery,
            per_page: 12,
          },
        });
        setFurnitureImages(response.data.photos);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    
    fetchImages();
  }, [searchQuery]);

  const handleLike = (imageId) => {
    setLikedImages((prevLikes) => ({
      ...prevLikes,
      [imageId]: !prevLikes[imageId],
    }));
  };

  return (
    <div className="gallery-container">
      <div className="header">
        <button className="back-btn" onClick={() => window.history.back()}>←</button>
        <h1 className="gallery-heading">Inspiration Gallery</h1>
        <h2 className="gallery-subheading">DIY's Idea</h2>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for furniture..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-btn">🔍</button>
      </div>

      <div className="image-grid">
        {furnitureImages.map((image) => (
          <div key={image.id} className="image-card">
            <img
              src={image.src.small}
              alt={image.alt}
              className="image"
            />
            <div className="overlay">
              <button
                className={`like-btn ${likedImages[image.id] ? 'liked' : ''}`}
                onClick={() => handleLike(image.id)}
              >
                ❤️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InspirationGallery;
