import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import "./Navbar.css"

const Navbar = () => {
    const upScroll = () => {
        scroll.scrollToTop()
    }
    
      onscroll = () => {
        if(window.pageYOffset === 0) {
            document.querySelector(".navbar-container").style.top = "0px"
            document.querySelector(".navbar-container").style.borderBottom = "thin solid white"
        } else {
            document.querySelector(".navbar-container").style.top = "-70px"
            document.querySelector(".navbar-container").style.borderBottom = "thin solid lightgray"
        }
      }
    return(
        <nav className="navbar-container">
            <h1 className="nav-top-logo">Hello I'm WEB DEVELOPER.</h1>
            <ul className="nav-menu">
                    <li>
                        <Link className="nav-item logo" onClick={upScroll} smooth={true}>HW</Link>
                    </li>
                    <li>
                        <Link className="nav-item" to="about" smooth={true}>ABOUT</Link>
                    </li>
                    <li>
                        <Link className="nav-item" to="skills" smooth={true}>SKILLS</Link>
                    </li>
                    <li>
                        <Link className="nav-item">CONTACT</Link>
                    </li>
                </ul>
        </nav>
        )
}

export default Navbar