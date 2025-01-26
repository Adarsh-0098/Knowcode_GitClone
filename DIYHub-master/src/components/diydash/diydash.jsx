// src/components/dashboard/dashboard.jsx

import React from 'react';
import Diysidebar from './diy-sidebar/diysidebar';
import './diydash.css'; // Optional: CSS for styling
import Bodydiy from './bodydiy/bodydiy';

const Diydash = () => {
  return (
    <div className="diydashboard-container">
      <div className="diysidebar-container">
        <Diysidebar/>
      </div>
      <div className="diybody-container">
        <Bodydiy/>
      </div>
    </div>
  );
};

export default Diydash;
