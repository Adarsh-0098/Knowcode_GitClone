import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'; 
import dark_arrow from '../../assets/dark_arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h3>Welcome to the DIY Furniture Design hub</h3>
        <h2>Your Creativity, Our Guidance</h2>
        <h1>We will be always there for you</h1>
        <p>
        Transform your old furniture into creative, functional pieces and contribute to a sustainable future. Explore DIY guides, get inspired, or upload your own furniture to get started.
        </p>
        <Link to="/login">  
          <button className='getbtn'><span>Get Started</span> <img src={dark_arrow} alt=""/></button>
        </Link>
      </div>
    </div>
  )
}

export default Hero