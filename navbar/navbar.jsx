import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

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
        <li><Link to='hero' smooth={true}offset={0} duration={500}>Home</Link></li>
        <li><Link to='service' smooth={true}offset={-260} duration={500}>Services</Link></li>
        <li><Link to='about' smooth={true}offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='contact' smooth={true}offset={-260} duration={500} className='btn'>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
