import { useState } from 'react'

import './App.css'
import Homepage from './components/Homepage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Requisitionform from './components/Requisitionform'
import Admin_login from './components/auth/Admin_login'
import Staff_login from './components/auth/Staff_login'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='main'>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path= "/" element = {<Homepage/>}/>
        <Route path= "/toner_request" element = {<Requisitionform/>}/>
        <Route path= "/admin_login" element = {<Admin_login/>}/>
        <Route path= "/staff_login" element = {<Staff_login/>}/>
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
