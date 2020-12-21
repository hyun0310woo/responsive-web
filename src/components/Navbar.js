import React, {useState, useEffect} from 'react'
import "./Navbar.css"

const Navbar = () => {
      onscroll = () => {
        if(window.pageYOffset === 0) {
            document.querySelector(".navbar-container").style.top = "0px";
        } else {
            document.querySelector(".navbar-container").style.top = "-70px";
        }
      }
    return(
        <nav className="navbar-container">
            <div className="nav-top-logo">WEB DEVELOPER</div>
            <ul className="navbar-items">
                <li className="item">ABOUT</li>
                <li className="item logo">HW</li>
                <li className="item">SKILLS</li>
            </ul>
        </nav>
        )
}

export default Navbar