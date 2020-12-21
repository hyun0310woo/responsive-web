import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    let prevScrollpos = window.pageYOffset;
    
    window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".nav-top-logo").style.top = "0";
          } else {
            document.querySelector(".nav-top-logo").style.top = "-30px";
         }
        prevScrollpos = currentScrollPos;
    }
    return(
        <nav className="navbar-container">
            <div className="nav-top-logo">WEB DEVELOPER</div>
            {/* <ul className="navbar-items"> */}
                {/* <li className="item logo">HW</li> */}
                {/* <li className="item">Contact</li> */}
            {/* </ul> */}
        </nav>
        )
}

export default Navbar