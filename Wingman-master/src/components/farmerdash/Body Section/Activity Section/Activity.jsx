import React from 'react'
import './Activity.css'
import { IoIosArrowRoundForward } from "react-icons/io"
import img1 from '../../dashasset/r2.jpg'
import img2 from '../../dashasset/r3.jpg'; 
import img4 from '../../dashasset/r4.jpg'; 
import img3 from '../../dashasset/r5.jpg'; 
const Activity = () => {
  return (
    <div className='activitySection'>
      <div className='heading flex'>
        <h1>Recent Activity</h1>
        <button className='btn flex'>
          See All
          <IoIosArrowRoundForward className='icon'/>
        </button>
      </div>
      <div className="secContainer1 grid">
        <div className="singleCustomer flex">
          <img src={img1} alt='Customer Image'/> 
          <div className="customerDetails">
          <span className="name">Ansh Goshling</span>
          <small>Added a Chair DIY </small>  
          </div>
          <div className="duration">
          2 min ago
          </div>        
        </div>
        <div className="singleCustomer flex">
          <img src={img4} alt='Customer Image'/> 
          <div className="customerDetails">
          <span className="name">Ryan Kapoor</span>
          <small>Added a Shelf DIY</small>  
          </div>
          <div className="duration">
          30 min ago
          </div>        
        </div>
        <div className="singleCustomer flex">
          <img src={img2} alt='Customer Image'/> 
          <div className="customerDetails">
          <span className="name">Elizabeth Olsen</span>
          <small>Added a Window DIY </small>  
          </div>
          <div className="duration">
          52 min ago
          </div>        
        </div>
        <div className="singleCustomer flex">
          <img src={img3} alt='Customer Image'/> 
          <div className="customerDetails">
          <span className="name">Olivia</span>
          <small>Added a Closet DIY </small>  
          </div>
          <div className="duration">
          42 min ago
          </div>        
        </div>
      </div>
    </div>
  )
}

export default Activity