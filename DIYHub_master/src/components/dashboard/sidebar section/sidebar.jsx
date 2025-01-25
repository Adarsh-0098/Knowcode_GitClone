import React from 'react';
import './sidebar.css';
import dlogo from '../dashasset/logo.png'; 
import { IoMdSpeedometer } from "react-icons/io";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { FiPieChart } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
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
        <h3 className='divTitle'>Quick Menu</h3>
        <ul className="menuList grid">
          <li className="listItem">
            <Link to="#" className='menuLink flex'> {/* Use Link here */}
              <IoMdSpeedometer className='icon1' />
              <span className='smallText'>Dashboard</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="#" className='menuLink flex'>
              <MdOutlineDeliveryDining className='icon1' />
              <span className='smallText'>My Orders</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="#" className='menuLink flex'>
              <MdOutlineExplore className='icon1' />
              <span className='smallText'>Explore</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="#" className='menuLink flex'>
              <AiOutlineProduct className='icon1' />
              <span className='smallText'>Products</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='settingsDiv'>
        <h3 className='divTitle'>Settings</h3>
        <ul className="settingList grid">
          <li className="listItem">
            <Link to="/stats" className='settingLink flex'>
              <FiPieChart className='icon1' />
              <span className='smallText'>Charts</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="#" className='settingLink flex'>
              <FaArrowTrendUp className='icon1' />
              <span className='smallText'>Trending</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="#" className='settingLink flex'>
              <BsPersonCircle className='icon1' />
              <span className='smallText'>Farmers</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="#" className='settingLink flex'>
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
