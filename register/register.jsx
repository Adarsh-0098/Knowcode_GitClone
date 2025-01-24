import React, { useState } from 'react';
import './register.css';  
import video from '../../assets/login-video.mp4';  
import logo from '../../assets/logo.png';  
import { Link, useNavigate } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';
import { MdOutlinePassword } from "react-icons/md";
import { RiLoginBoxLine } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillBuildingFill } from "react-icons/bs";


const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');  // Added state for role selection
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate(); 

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !username || !password || !role) {
      setErrorMessage('All fields are required, including role selection!');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address!');
      return;
    }

    setErrorMessage(''); 

    if (role === 'farmer') {
      navigate('/farmerdash');  // Redirect to farmer dashboard
    } else if (role === 'retailer') {
      navigate('/dashboard');  // Redirect to retailer dashboard
    }
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className='registerPage1 flex'>
      <div className="container2 flex">

        <div className="videodiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className='title'>Join a global upcycling movement.</h2>
            <p>Let’s create something extraordinary together!</p>
          </div>

          <div className="footerDiv flex">
            <span className='text'>Have an account?</span>
            <Link to='/login'>
              <button className='btn'>Login</button>
            </Link>
          </div>
        </div>
 
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt='Logo' className='large-logo' />
            <h3>Let the journey Begin.</h3>
          </div>

          <form className='form grid' onSubmit={handleRegister}>
            
            {errorMessage && <p className='errorMessage'>{errorMessage}</p>}

            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <BiLogoGmail className='icon' />
                <input
                  type='email'
                  id='email'
                  placeholder='Enter Your Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className='icon' />
                <input
                  type='text'
                  id='username'
                  placeholder='Enter Your Username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <MdOutlinePassword className='icon' />
                <input
                  type='password'
                  id='password'
                  placeholder='Enter Your Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Role Selection Dropdown */}
            <div className="inputDiv">
              <label htmlFor="role">Register As</label>
              <div className='input flex'>
              <BsFillBuildingFill className = 'icon' />
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="">Select Role</option>
                <option value="farmer">Farmer</option>
                <option value="retailer">Retailer</option>
              </select>
              </div>
            </div>

            <button type='submit' className='btn flex personalized-btn'>
              Register
              <RiLoginBoxLine className='icon' />
            </button>

            <span className='forgotPassword'>
              Forgot your password? <Link to='/forgot-password'>Click Here</Link>
            </span>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Register;