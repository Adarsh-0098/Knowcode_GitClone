// src/components/dashboard/dashboard.jsx

import React from 'react';
import Sidebar from './sidebar section/sidebar';
import Body from './Body Section/Body';
import './farmerdash.css'; // Optional: CSS for styling

const Farmerdash = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="body-container">
        <Body />
      </div>
    </div>
  );
};

export default Farmerdash;
