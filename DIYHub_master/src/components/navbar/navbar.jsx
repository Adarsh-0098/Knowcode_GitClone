import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Add background when scrolled past 50px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${isScrolled ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />
      <ul>
        {/* Use ScrollLink for in-page scrolling */}
        <li><ScrollLink to='hero' smooth={true} offset={0} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to='service' smooth={true} offset={-260} duration={500}>Services</ScrollLink></li>
        <li><ScrollLink to='about' smooth={true} offset={-150} duration={500}>About Us</ScrollLink></li>
        
        {/* Use RouterLink for route navigation */}
        <li>
          <RouterLink to="/CommunityForum">
            <span className='smallText'>Forum</span>
          </RouterLink>
        </li>

        <li>
          <ScrollLink to='contact' smooth={true} offset={-260} duration={500} className='btn'>
            Contact Us
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
