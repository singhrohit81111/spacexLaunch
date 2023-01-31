import React, { useState } from 'react'
import NotFound from '../assets/NotFound.png'
import spaceXlogo from '../assets/spaceXlogo.png'
import './style.scss'
import Switch from '@mui/material/Switch';
import news from '../assets/news.png'
import youtube from '../assets/youtube.png'
import wikipedia from '../assets/wikipedia.png'
import { useNavigate } from 'react-router-dom';
import Home from '../assets/home.png'

export default function Launches() {
    const [dataa,setDataa]=useState([]);
    const[launch,setLaunch]=useState([]);
    const [open,setOpen]=useState(false);
    const navigate=useNavigate();
    const getSpaceData=fetch('https://api.spacexdata.com/v5/launches')
    .then((response)=>response.json())
    .then((data)=>setDataa(data));
    const handleClick1=()=>{
         navigate('/upcoming')
    }
    const handleClick2=()=>{
      navigate('/past')
    }
    const handleClick3=()=>{
      navigate('/')
    }

  return (
    <div className='launches'>
      <header className='hd'><img src={spaceXlogo} style={{height:"40px"}} alt="" /></header>
      <div className="appBar">
        <div className="ins">
          <div className="left">
           <button style={{backgroundColor:'#55525e'}}>All</button>
           <button className='launchHovers' onClick={handleClick2}>Past</button>
           <button className='launchHovers' onClick={handleClick1}>Upcoming</button>
          </div>
          <div className="right">
           <button id="bt" label="bt" style={{display:"none"}} onClick={handleClick3}>
             Heloo
           </button>
           <label htmlFor="bt">
            <img src={Home} alt="Home" />
           </label>
          </div>
        </div>
      </div>
      <div className="bdy">
      {dataa.map((d)=>(
      <div className="cd">
        
        <div className="logoInfo">
         <div className="img">{d.links.patch.small?
         <img src={d.links.patch.small} alt="mission_patch"/>:
         <img src={NotFound} alt="notFound"/>}</div>
      
         <div className="icons">
               <span className="ic">
               <a href={d.links.article} target="_blank" rel="noopener noreferrer">
                  <img src={wikipedia} alt="no" />
                </a>
               </span>
               <span className="ic">
               <a href={d.links.article} target="_blank" rel="noopener noreferrer">
                  <img src={youtube}  alt="no" />
                </a>
               </span>
               <span className="ic">
               <a href={d.links.article} target="_blank" rel="noopener noreferrer">
                  <img src={news} alt="no" />
                </a>
               </span>
              </div>
        </div>
        <div className="infoLeft">
          <div className="info" id='a'>
            <div className="dt1"> Mission Name:</div>
            <div className="dt2">{d.name}</div></div>
          <div className="info" id='b'>
            <div className="dt1">Launch Year:</div>
            <div className="dt2">{d.date_utc}</div></div>
          <div className="info" id='c'>
            <div className="dt1"> Flight No.:</div>
            <div className="dt2">{d.flight_number}</div></div>
          <div className="info" id='d'>
            <div className="dt1">Successfull:</div>
            <div className="dt2">{d.success?"Yes" : "No"}</div>
        </div>
        <div className="info" id="e">
          <div className="details">
            <div className="barr">
              <div className="title">Description</div>
              
              <div className="entity">:</div>
            </div>
            <div className="des">
              {d.details?d.details:"No content to show"}
            </div>
          </div>
        </div>
        
       </div>
     </div>))}
     </div>
    </div>
  )
}








