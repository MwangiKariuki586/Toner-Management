import { useState } from 'react'

import './App.css'
import Homepage from './components/Homepage'
import { BrowserRouter } from 'react-router-dom'
import Requisitionform from './components/Requisitionform'

function App() {

  return (
    <>
    <BrowserRouter>
      <Homepage/>
      <Routes>
       <Route path= "/toner_request" element = {<Requisitionform/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
