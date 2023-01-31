import React from 'react'
import spaceXlogo from '../assets/spaceXlogo.png'
import LaunchVideoSpaceX from "../assets/LaunchVideoSpaceX.ogg"
import './stylle.css'
import Routtes from "../Launch/Routtes"
import { Navigate, useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/launches")
  }
  return (
    <div className='container'>
      <header className='hd'><img src={spaceXlogo} style={{height:"40px"}} alt="" /></header>
        <div className="insideContainer">
          <video id="videoBG" src={LaunchVideoSpaceX}  autoPlay={true} loop muted/>
        </div>
        <div className="info">
          <div className="text">
              Space Exploration Technologies Corp., trading as SpaceX, is an American aerospace
              manufacturer and space transportation services company headquartered in Hawthorne,
              California. It was founded in 2002 by Elon Musk with the goal of reducing space
              transportation costs to enable the colonization of Mars.
          </div>
          <button className='bt' onClick={handleClick}>See Launches</button>
        </div>
    </div>
  )
}

export default Home