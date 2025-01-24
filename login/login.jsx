import React, { useState } from 'react';
import './login.css'; // Assuming the above CSS is in this file
import video from '../../assets/login-video.mp4'; // Video source
import logo from '../../assets/logo.png'; // Logo source
import { Link, useNavigate } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';
import { MdOutlinePassword } from "react-icons/md";
import { RiLoginBoxLine } from "react-icons/ri";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded user roles
    if (username === 'ansh' && password === '1234') {
      alert('Welcome Ansh');
      navigate('/dashboard');
    } else if (username === 'siya' && password === 'pokemon') {
      alert('Welcome Siya');
      navigate('/dashboard');
    } else if (username === 'Ram' && password === 'omshanti') {
      alert('Welcome Ram');
      navigate('/farmerdash');
    } else if (username === 'Narendra' && password === '4567') {
      alert('Welcome Farmer 2');
      navigate('/farmerdash');
    } else if (username === 'admin' && password === 'adminpass') {
      alert('Welcome Admin');
      navigate('/admindash');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className='loginPage1 flex'>
      <div className="container1 flex">

        <div className="videodiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className='title'>Join a global upcycling movement.</h2>
            <p>Let’s create something extraordinary together!</p>
          </div>

          <div className="footerDiv flex">
            <span className='text'>Don't have an account?</span>
            <Link to='/register'>
              <button className='btn'>Sign Up</button>
            </Link>
          </div>
        </div>

        {/* Login form on the right */}
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt='Logo' className='large-logo'/>
            <h3>Welcome Back to Creativity.</h3>
          </div>

          <form className='form grid' onSubmit={handleLogin}>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className='icon'/>
                <input 
                  type='text' 
                  id='username' 
                  placeholder='Enter Your Username' 
                  required 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <MdOutlinePassword className='icon'/>
                <input 
                  type='password' 
                  id='password' 
                  placeholder='Enter Your Password' 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Personalized login button */}
            <button type='submit' className='btn flex personalized-btn'>
              Login
              <RiLoginBoxLine className='icon'/>
            </button>

            <span className='forgotPassword'>
              Forgot your password? <Link to='/forgot-password'><span className='greenText'>Click Here</span></Link>
            </span>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
