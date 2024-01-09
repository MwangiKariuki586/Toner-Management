import React from 'react'
import logo from "../assets/logo.png"
import "./Navbar.css"
import { Link,useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
  return (
    <nav className='navbar'>
        <div className='logo_div'>
            <Link to="/">
                <img className='logo' src= {logo} alt="logo" />
            </Link>
        </div>
        <ul className='nav-links'>
            <Link to = "/">
                <li>
                    Home
                </li>
            </Link>
            {/* <Link to="/toner_request"> */}
                <li onClick={navigate("/")}>
                    Toner Request
                </li>
            {/* </Link> */}
            <li>
                <label htmlFor="select">Login </label>
                <select name="Login"id="">
                    <option value="">As staff</option>
                    <option value="">As Admin</option>
                </select>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar