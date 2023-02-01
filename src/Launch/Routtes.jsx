import React from 'react'
import Launches from '../Launch/Launches';
import Upcoming from '../Launch/Upcoming';
import Past from '../Launch/Past';
import Home from '../components/Home';
import { BrowserRouter , Route ,Routes } from 'react-router-dom'

export default function 
() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
    <Routes>
        <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="launches" element={<Launches/>}/>
            <Route path="upcoming" element={<Upcoming/>}/>
            <Route path="past" element={<Past/>}/>
        </Route>
    </Routes>
    </BrowserRouter >
  )
}
