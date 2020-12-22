import React, {useState} from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import "./Navbar.css"

const Navbar = () => {
    const [test, setTest] = useState(true);
    const upScroll = () => {
        scroll.scrollToTop()
    }
    
       onscroll = () => {
        if(!window.pageYOffset) {
            document.querySelector(".navbar-container").style.top = "0"
            setTest(true);
            // document.querySelector(".navbar-container").style.borderBottom = "thin solid #111111"
        } else {
            document.querySelector(".navbar-container").style.top = "-70px"
            setTest(false);
            // document.querySelector(".navbar-container").style.borderBottom = "thin solid gray"
        }
      }
      
      console.log("???: ",test)
    return(
        <nav className="navbar-container">
            <h1 className="nav-top-logo">Hello I'm WEB DEVELOPER.</h1>
            <ul className="nav-menu">
                    <li>
                        <Link className="nav-item" to="about"  onClick={upScroll}  smooth={true}>ABOUT</Link>
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