import React from 'react'
import './admindash.css'
import Sidebarad from './sidebaradmin/sidebarad'
import Maindash from './maindash/maindash'
import Rightside from './rightside/rightside'
const Admindash = () => {
  return (
    <div className='adminGlass'>
        <div className="mainGlass">
            <div className="sideGlass">
                <Sidebarad/>
            </div>
            <div className="midGlass">
                <Maindash/>
            </div>
            <div className="rightGlass">
               <Rightside/>
            </div>
        </div>
    </div>
  )
}

export default Admindash