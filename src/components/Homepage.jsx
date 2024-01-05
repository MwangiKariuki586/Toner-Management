import React from 'react'
import printer from "../assets/kyocera.png"
const Homepage = () => {
  return (
    <div className='container'>
      <h1>Kenindia Toner Management</h1>
      <img className='home_img' src={printer} alt="" />
      <h3>Click on proceed to request for a toner</h3>
      <button>Proceed</button>
    </div>
  )
}

export default Homepage