import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import SideDashboard from './SideDashboard'
const Home = () => {
  return (
    <div className="container">
  <div className="Navbar"><Navbar/></div>
  <div className="Dashboard"><SideDashboard/></div>
  <div className="Stock-Details"></div>
  <div className="Stock-Chart"></div>
  <div className="List-of-LOT-"></div>
  <div className="StockDetails"></div>
  <div className="Techcnical-analysis"></div>
</div>
  )
}

export default Home
