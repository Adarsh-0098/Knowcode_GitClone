import React from 'react'
import './Activity.css'
import { IoIosArrowRoundForward } from "react-icons/io"
import img1 from '../../dashasset/farmer6.jpg'
import img2 from '../../dashasset/farmer5.jpg'; 
import img4 from '../../dashasset/farmer7.jpg'; 
import img3 from '../../dashasset/famer8.jpg'; 
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
          <span className="name">Jhon Phoghat</span>
          <small>Sold 10kg rice </small>  
          </div>
          <div className="duration">
          2 min ago
          </div>        
        </div>
        <div className="singleCustomer flex">
          <img src={img4} alt='Customer Image'/> 
          <div className="customerDetails">
          <span className="name">Kareena Rai</span>
          <small>Sold 30kg pea </small>  
          </div>
          <div className="duration">
          30 min ago
          </div>        
        </div>
        <div className="singleCustomer flex">
          <img src={img2} alt='Customer Image'/> 
          <div className="customerDetails">
          <span className="name">Sydney Patil</span>
          <small>Sold 90kg wheat </small>  
          </div>
          <div className="duration">
          52 min ago
          </div>        
        </div>
        <div className="singleCustomer flex">
          <img src={img3} alt='Customer Image'/> 
          <div className="customerDetails">
          <span className="name">Ryan Gupta</span>
          <small>Sold 60kg corn </small>  
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