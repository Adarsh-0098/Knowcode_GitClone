import React from 'react'
import './maindash.css'
import Card from '../card/card'
import Table from '../table/table'
const Maindash = () => {
  return (
    <div className="mainDash">
        <h1>Dashboard</h1>
            <Card/>
        <h2>Recent Transactions</h2>
        <Table/>
    </div>
  )
}

export default Maindash