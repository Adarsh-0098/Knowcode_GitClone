import React, { useState, useEffect } from "react";
import axios from "axios";
import "./diyvideo.css";

const Diyvideo = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("DIY chair");
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraStream, setCameraStream] = useState(null);

  const API_KEY = "AIzaSyCvq74E51TfH_1Mv-CvqMCKMuIzfNFa2cA"; // Replace with your YouTube API key

  const fetchVideos = async (query) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            part: "snippet",
            q: query,
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
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos(searchQuery);
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      fetchVideos(searchQuery);
    }
  };

  const handleVideoClick = (videoId) => {
    setSelectedVideoId(videoId);
  };

  const handleLensClick = async () => {
    try {
      setCameraActive(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStream(stream);
      const videoElement = document.getElementById("camera-feed");
      videoElement.srcObject = stream;
      videoElement.play();
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const handleImageSearch = () => {
    setSearchQuery("DIY woodwork");
    fetchVideos("DIY woodwork");

    if (cameraStream) {
      cameraStream.getTracks().forEach((track) => track.stop());
      setCameraActive(false);
    }
  };

  return (
    <div className="video-container">
      <header className="header">
        <h1>Discover DIY Ideas</h1>
      </header>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search DIY videos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>🔍</button>
        <button className="lens-button" onClick={handleLensClick}>📷</button>
      </div>

      {cameraActive && (
        <div className="camera-feed-container">
          <video id="camera-feed" width="400" height="300" />
          <button className="image-search-button" onClick={handleImageSearch}>
            Search with Image
          </button>
        </div>
      )}

      <div className="video-content">
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
        </div>

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

export default Diyvideo;
