import React from 'react';
import './sidebar.css';
import dlogo from '../dashasset/logo.png'; 
import { FaChair } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { GiWindow } from "react-icons/gi";
import { GiTable } from "react-icons/gi";
import { FiPieChart } from "react-icons/fi";
import { RiGalleryFill } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";
import { BsCreditCard2Back } from "react-icons/bs";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Sidebar = () => {
  return (
    <div className='sidebar grid'>
      <div className='logoDiv flex'>
        <img src={dlogo} alt="Wingman" />
      </div>
      <div className='MenuDiv'>
        <h3 className='divTitle'>Furniters</h3>
        <ul className="menuList grid">
          <li className="listItem">
            <Link to="/diydash" className='menuLink flex'> {/* Use Link here */}
              <FaChair className='icon1' />
              <span className='smallText'>Chair</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/diydash" className='menuLink flex'>
              <GiWindow className='icon1' />
              <span className='smallText'>Window</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/diydash" className='menuLink flex'>
              <IoBedOutline className='icon1' />
              <span className='smallText'>Bed</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/diydash" className='menuLink flex'>
              <GiTable className='icon1' />
              <span className='smallText'>Table</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='settingsDiv'>
        <h3 className='divTitle'>Settings</h3>
        <ul className="settingList grid">
          <li className="listItem">
            <Link to="/statsfarmer" className='settingLink flex'>
              <FiPieChart className='icon1' />
              <span className='smallText'>Charts</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/InspirationGallery" className='settingLink flex'>
              <RiGalleryFill  className='icon1' />
              <span className='smallText'>Gallery</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="#" className='settingLink flex'>
              <BsPersonCircle className='icon1' />
              <span className='smallText'>Retailers</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/marketplace" className='settingLink flex'>
              <BsCreditCard2Back className='icon1' />
              <span className='smallText'>Billing</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <RxQuestionMarkCircled className='icon' />
        <h3>Help Center</h3>
      </div>
    </div>
  );
};

export default Sidebar;
