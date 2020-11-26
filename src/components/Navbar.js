import React, {useState, useEffect} from 'react'
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

    const [scrollPosition, setSrollPosition] = useState(0);

    const handleScroll = () => {
      const position = window.pageYOffset;
      setSrollPosition(position);
    };
  
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className={scrollPosition <= 700 ? "navbar-logo" : "navbar-logo down"} onClick={upScroll}>
                        HW
                    </Link>
                    <div className={scrollPosition <= 700 ? "menu-icon" : "menu-icon down"} onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className={scrollPosition <= 700 ? "nav-item" : "nav-item down"}>
                            <Link to="About" className="nav-links" smooth={true} duration={500} onClick={closeMobileMenu}>
                            ABOUT
                            </Link>
                        </li>
                        <li className={scrollPosition <= 700 ? "nav-item" : "nav-item down"}>
                            <Link to="Skills" className="nav-links" smooth={true} duration={500} onClick={closeMobileMenu}>
                                SKILLS
                            </Link>
                        </li>
                        <li className={scrollPosition <= 700 ? "nav-item" : "nav-item down"}>
                            <Link to="Contact" className="nav-links" smooth={true} duration={500} onClick={closeMobileMenu}>
                            CONTACT
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar