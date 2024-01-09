import React from 'react'
import "./Requisitionform.css"
import { Navigate } from 'react-router-dom'
const Requisitionform = () => {

  return (
    <div className='request_page'>
        <h1>Request Form</h1>
        <form className="request_form">
            <input className='text_input' type="text" placeholder='staff id' name="" id="" />
            <input className='text_input' type="text" placeholder='Department' name="" id="" />
            <input className='text_input' type="text" placeholder='Branch' name="" id="" />
            <input className='text_input' type="text" placeholder='Toner name' name="" id="" />
            <input className='text_input' type="text" placeholder='Printer name' name="" id="" />
            <button className='btn' >Submit</button>
        </form>
    </div>
  )
}

export default Requisitionform