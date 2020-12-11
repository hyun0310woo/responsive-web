import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";


const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    }

    return(
    <Router>  
        <section className="navbar-container">
            <nav>
                {/* <h1>portfolio<span>.</span></h1> */}
                <ul>
                <div onClick={handleClick}>{click ?  <FaTimes /> : <FaBars/>}</div>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/Skills">Skills</Link>
                    </li>
                </ul>
            </nav>
        </section>
    </Router>  
    )
}

export default Navbar