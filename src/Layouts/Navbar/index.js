import React from 'react'
import "./index.scss"
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className='start_bootstrap'><p><NavLink className="navlink" to="/">Start Bootstrap</NavLink></p></div>
            <div className="navbar_hamburger">
                <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i
                        className="fas fa-bars fa-1x"></i></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                    <ul className="navbar-nav mr-auto">
                        <li><NavLink className="navlink" to='/'>Home</NavLink></li>
                        <li><NavLink className="navlink" to='/about'>About</NavLink></li>
                        <li className="nav-item">
                            <i className="fa-brands fa-github"></i>
                        </li>
                    </ul>
                </div>
            </div>


            <div className='nav_item'>
                <ul>
                    <li><NavLink className="navlink" to='/'>Home</NavLink></li>
                    <li><NavLink className="navlink" to='/about'>About</NavLink></li>
                    <i className="fa-brands fa-github"></i>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar