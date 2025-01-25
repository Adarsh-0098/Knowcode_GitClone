import React from 'react'
import Updates from '../updates/Updates'
import Customer from '../customer/customer'
const Rightside = () => {
  return (
    <div className=" rightside">
        <div>
            <h3>Updates</h3>
            <Updates/>
        </div>
        <div>
            <h3>Customer Review</h3>
            <Customer/>
        </div>
    </div>
  )
}

export default Rightside