import React from 'react';
import './Listing.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import img1 from '../../dashasset/corn.jpg'; 
import img2 from '../../dashasset/pea.jpg'; 
import img3 from '../../dashasset/rice.jpg'; 
import img4 from '../../dashasset/farmer1.jpg'; 
import img5 from '../../dashasset/farmer2.jpg'; 
import img6 from '../../dashasset/farmer3.jpg'; 
import img7 from '../../dashasset/farmer4.jpg'; 
import img8 from '../../dashasset/farmer5.jpg'; 
import img9 from '../../dashasset/farmer6.jpg'; 
import img10 from '../../dashasset/farmer7.jpg'; 
import img11 from '../../dashasset/famer8.jpg'; 
import { FaRegHeart } from "react-icons/fa6";

const Listing = () => {
  return (
    <div className='listingSection'>
      <div className='heading flex'>
        <h1>My Listings</h1>
        <button className='btn flex'>
          See all <IoIosArrowRoundForward className='icon' />
        </button>
      </div>

      {/* Listings Section */}
      <div className="secContainer flex">
        <div className="singleItem">
          <FaHeart className='icon' />
          <img src={img1} alt='crop' />
          <h3>Corn</h3>
        </div>
        <div className="singleItem">
          <FaRegHeart className='icon' />
          <img src={img2} alt='crop' />
          <h3>Pea</h3>
        </div>
        <div className="singleItem">
          <FaHeart className='icon' />
          <img src={img3} alt='crop' />
          <h3>Rice</h3>
        </div>
      </div>

      {/* Sellers Section */}
      <div className="sellers flex">

        {/* Top Sellers Section */}
        <div className='topSellers'>
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className='btn flex'>
              See all <IoIosArrowRoundForward className='icon' />
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={img4} alt="user1" />
              <img src={img5} alt="user2" />
              <img src={img6} alt="user3" />
              <img src={img7} alt="user4" />
            </div>
            <div className="cardText">
              <span>
                69kg of crops sold <br />
                <small>
                  29 retailers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        {/* Featured Sellers Section */}
        <div className='featuredSellers'>
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className='btn flex'>
              See all <IoIosArrowRoundForward className='icon' />
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={img8} alt="user1" />
              <img src={img9} alt="user2" />
              <img src={img10} alt="user3" />
              <img src={img11} alt="user4" />
            </div>
            <div className="cardText">
              <span>
                150kg of crops sold <br />
                <small>
                  50 retailers <span className="date">14 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Listing;
