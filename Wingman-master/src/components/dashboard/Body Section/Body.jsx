import React from 'react'
import './Body.css'
import Top from './top section/top'
import Listing from './Listing Section/Listing'
import Activity from './Activity Section/Activity'
const Body = () => {
  return (
    <div className='mainContent'>
    <Top/>
    <div className="bottomflex">
      <Listing/>
      <Activity/>
    </div>
    </div>
  )
}

export default Body