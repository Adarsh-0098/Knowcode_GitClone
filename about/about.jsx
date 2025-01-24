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
        <h2>Empowering Sustainability Through Creativity</h2>
        <p>
        We aim to revolutionize the way people view discarded furniture by inspiring creativity and promoting sustainable practices. Our platform empowers individuals to reduce waste, conserve resources, and build a greener future by upcycling furniture into functional and aesthetic pieces.
        </p>
        <p>
        We envision a world where sustainability is a lifestyle, and upcycling becomes a cornerstone of conscious living. Our goal is to foster a global community passionate about transforming waste into opportunity, one piece of furniture at a time.
        </p>
      </div>
    </div>
  );
}

export default About;
