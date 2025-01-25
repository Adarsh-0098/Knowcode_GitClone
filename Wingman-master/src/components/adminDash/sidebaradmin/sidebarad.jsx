import React from 'react';
import './sidebarad.css';
import dlogo from '../../dashboard/dashasset/logo.png'; 
import { IoMdSpeedometer } from "react-icons/io";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlineAppstore, AiOutlineProduct } from "react-icons/ai";
import { FiPieChart } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { BsCreditCard2Back } from "react-icons/bs";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { LuLogOut } from 'react-icons/lu';

const Sidebarad = () => {
  return (
    <div className='sidebar grid'>
    <div className='logoDiv flex'>
      <img src={dlogo} alt="Wingman" />
    </div>

    <div className='MenuDiv'>
      <ul className="menuList grid">
        <li className="listItem">
          <Link to="#" className='menuLink flex'>
            <IoMdSpeedometer className='icon1' />
            <span className='smallText'>Dashboard</span>
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
            <AiOutlineAppstore className='icon1' />
            <span className='smallText'>Products</span>
          </Link>
        </li>

        <li className="listItem">
          <Link to="/stats" className='menuLink flex'>
            <FiPieChart className='icon1' />
            <span className='smallText'>Charts</span>
          </Link>
        </li>
        <li className="listItem">
          <Link to="#" className='menuLink flex'>
            <BsPersonCircle className='icon1' />
            <span className='smallText'>Customers</span>
          </Link>
        </li>

        <li className="listItem">
          <Link to="#" className='menuLink flex'>
            <BsCreditCard2Back className='icon1' />
            <span className='smallText'>Sales</span>
          </Link>
        </li>
      </ul>
    </div>

    <div className="sideBarCard">
      <LuLogOut className='icon1' />
      <div className='cardContent'>
        <Link to='/hero'>
        <button className='Logout'>Logout</button>
        </Link>
      </div>
    </div>
  </div>
);
};
export default Sidebarad;
 