import React, {useState} from 'react'
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import {animateScroll as scroll, Link} from "react-scroll";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "./Navbar.css"

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    const upScroll = () => {
        scroll.scrollToTop()
    }

    return (
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={upScroll}>
                        HW
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="Introduce" className="nav-links" smooth={true} duration={1000} onClick={closeMobileMenu}>
                            INTRODUCE
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="Skills" className="nav-links" smooth={true} duration={1000} onClick={closeMobileMenu}>
                                SKILLS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="Education" className="nav-links" smooth={true} duration={1000} onClick={closeMobileMenu}>
                            EDUCATION
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar