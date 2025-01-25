import React from 'react';
import './top.css';
import { IoMdSearch } from "react-icons/io";
import { TiMessageTyping } from "react-icons/ti";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import img from '../../dashasset/user_img.jpg'; 
import video1 from '../../dashasset/furniter.mp4'; 
import img1 from '../../dashasset/stat.png'; 

const Top = () => { 
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className='title2'>
          <h1>Welcome to DIYHub!</h1>
        </div>
        <div className='searchBar1 flex'>
          <input type='text' placeholder='Search Dashboard'/>
          <IoMdSearch className='icon'/>
        </div>
        <div className="adminDiv flex">
          <TiMessageTyping className='icon' />
          <MdOutlineNotificationsActive className='icon' />
          <div className="adminImage">
            <button className="ImageButton">
              <img src={img} alt='AdminImage'/>
            </button>
          </div>
        </div>
      </div>

      {/* Video and Right Container Section */}
      <div className="contentContainer flex">
        <div className="videoContainer">
          <video className="video" src={video1} autoPlay loop muted></video>
          <div className="videoOverlay">
            <h2>Style Meets Affordability</h2>
            <p>Reuse! Recycle! Recreate!</p>
            <div className="button flex">
              <button className='btn1'>Explore More</button>
              <button className='btn1 transparent'>Top Retailers</button>
            </div>
          </div>
        </div>
        
        {/* New Container on the Right */}
        <div className="rightContainer">
  <div className="statCard">
    <h1>My Stat</h1>
    <div className="statDetails">
      <span>
        Today <br/> <small>4 DIY</small>
      </span>
      <span>
        This Month <br/> <small>175 DIY</small>
      </span>
    </div>
    <div className="goToOrders flex link">
      Go to my Products 
      <IoIosArrowRoundForward className='icon'/>
    </div>
  </div>
  <div className="plantImage">
    <img src={img1} alt="Plant Decoration"/>
  </div>
</div>

      </div>
    </div> 
  ); 
}
 
export default Top;
