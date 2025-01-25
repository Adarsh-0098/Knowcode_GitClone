import React from 'react';
import './Listing.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import img1 from '../../dashasset/chair.jpeg'; 
import img2 from '../../dashasset/window.jpg'; 
import img3 from '../../dashasset/bed.jpg'; 
import img4 from '../../dashasset/chair-diy.jpeg'
import img5 from '../../dashasset/bed-diy.jpeg'
import img6 from '../../dashasset/window-diy.jpg'
import img7 from '../../dashasset/table.jpg'
import img8 from '../../dashasset/drawer.jpeg'
import img9 from '../../dashasset/closet.jpg'
import img10 from '../../dashasset/shelf.jpeg'
import img11 from '../../dashasset/pal.jpeg'
import { FaRegHeart } from "react-icons/fa6";

const Listing = () => {
  return (
    <div className='listingSection'>
      <div className='heading flex'>
        <h1>Trending Courses</h1>
        <button className='btn flex'>
          See all <IoIosArrowRoundForward className='icon' />
        </button>
      </div>

      {/* Listings Section */}
      <div className="secContainer flex">
        <div className="singleItem">
          <FaHeart className='icon' />
          <img src={img1} alt='chair' />
          <h3>Chair's </h3>
        </div>
        <div className="singleItem">
          <FaRegHeart className='icon' />
          <img src={img2} alt='window' />
          <h3>Window </h3>
        </div>
        <div className="singleItem">
          <FaHeart className='icon' />
          <img src={img3} alt='bed' />
          <h3>Bed </h3>
        </div>
      </div>

      {/* Sellers Section */}
      <div className="sellers flex">

        {/* Top Sellers Section */}
        <div className='topSellers'>
          <div className="heading flex">
            <h3>Top Courses</h3>
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
                10+ Diy sreaches performed <br />
                <small>
                  9 Searches <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        {/* Featured Sellers Section */}
        <div className='featuredSellers'>
          <div className="heading flex">
            <h3>Feautered Courses</h3>
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
                15+ new courses added <br />
                <small>
                  5 new course <span className="date">14 Days</span>
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
