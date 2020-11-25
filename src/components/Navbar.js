import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
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

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    HW
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="Introduce" className="nav-links" onClick={closeMobileMenu}>
                          INTRODUCE
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="Skills" className="nav-links" onClick={closeMobileMenu}>
                            SKILLS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="Education" className="nav-links" onClick={closeMobileMenu}>
                        EDUCATION
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar