import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./windowdiy.css";

const Windowdiy = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("DIY window");
  const [steps, setSteps] = useState([]);
  
  const navigate = useNavigate(); // Initialize useNavigate
  
  const API_KEY = "AIzaSyA01dO9dyMpzwabhGIlTPYxiwNWXepC9as"; // Replace with your YouTube API key
  
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              part: "snippet",
              q: searchQuery,
              type: "video",
              maxResults: 10,
              key: API_KEY,
            },
          }
        );
        const fetchedVideos = response.data.items;
        setVideos(fetchedVideos);
        
        if (fetchedVideos.length > 0) {
          setSelectedVideoId(fetchedVideos[0].id.videoId);
          setSteps([
            `Step 1: Watch the video to understand how to build a DIY window.`,
            `Step 2: Gather all the required materials.`,
            `Step 3: Follow the steps demonstrated in the video.`,
            `Step 4: Complete your window project and personalize it!`,
          ]);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [searchQuery]);

  const handleVideoClick = (videoId) => {
    setSelectedVideoId(videoId);
    setSteps([
      `Step 1: Watch the video to understand how to build a DIY window.`,
      `Step 2: Gather all the required materials.`,
      `Step 3: Follow the steps demonstrated in the video.`,
      `Step 4: Complete your window project and personalize it!`,
    ]);
  };

  const handleBackButtonClick = () => {
    navigate("/farmerdash"); // Navigate to farmerdash
  };

  return (
    <div className="video-container">
      {/* Header */}
      <header className="header">
        <h1>Welcome to DIYHub!</h1>
        {/* Back Button */}
        <button onClick={handleBackButtonClick} className="back-button">Back to  Dashboard</button>
      </header>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for DIY window videos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button">🔍</button>
      </div>

      {/* Video Content Section */}
      <div className="video-content">
        {/* Main Video Player */}
        <div className="main-video-player">
          {selectedVideoId ? (
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${selectedVideoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p>Loading video...</p>
          )}
          <div className="steps">
            <h3>Steps:</h3>
            <ul>
              {steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Suggested Videos Section */}
        <div className="suggested-videos">
          <h2>Suggested Videos</h2>
          {videos.map((video) => (
            <div
              key={video.id.videoId}
              className="suggested-video-card"
              onClick={() => handleVideoClick(video.id.videoId)}
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="suggested-thumbnail"
              />
              <h3>{video.snippet.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Windowdiy;
