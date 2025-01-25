import React, { useRef, useState } from 'react';
import './about.css';
import aboutImg from '../../assets/about.jpg';   
import videoSrc from '../../assets/video.mp4';  
import play_icon from '../../assets/play_icon.png';  

const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);   

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);   
    } else {
      videoRef.current.pause();
      setIsPlaying(false);   
    }
  };

  return (
    <div className='about'>
      <div className="about-left">
        <video 
          ref={videoRef} 
          className='about-img' 
          src={videoSrc} 
          poster={aboutImg}   
          controls={isPlaying}   
        />
        {!isPlaying && (
          <img 
            src={play_icon} 
            alt='play button' 
            className='play_icon' 
            onClick={togglePlayPause} 
          />
        )}
      </div>
      <div className="about-right">
        <h3>About Us</h3>
        <h2>Leading Our Farmers to a Brighter Future</h2>
        <p>
          At Wingman, we believe in empowering farmers and retailers by cutting out the middleman.
          Our platform connects farmers directly with retailers, allowing for transparent, fair, and profitable transactions.
        </p>
        <p>
          Our mission is simple: to give farmers control over their sales while ensuring retailers receive fresh produce at competitive prices.
          With Wingman, we’re revolutionizing the way agriculture works, creating a future where farmers and retailers thrive together.
        </p>
      </div>
    </div>
  );
}

export default About;
