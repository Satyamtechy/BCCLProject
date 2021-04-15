import React from 'react'
import './index.css'
import './Navbar.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import bccl from './Images/bccllogo.png'
import { NavLink} from 'react-router-dom'
import {Link} from 'react-scroll'
const Navbar = () => {
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" width="100vw">
            <img src={bccl} width="390" height="90" alt="BCCL"  />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" exact to="about" smooth={true} duration={1000}>About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" exact to="service" smooth={true} duration={1000}>Services</Link>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="about">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/logout">Logout</NavLink>
                </li>
                </ul>
            </div>
            </nav>
        </>
    )
}

export default Navbar
