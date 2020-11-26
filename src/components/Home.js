import React, {useState, useEffect} from 'react'
import { FiChevronsDown } from "react-icons/fi";
import {Link} from "react-scroll";
import "../App.css"
import "./Home.css"

function Home() {
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
          <section className="home-container" id="Home">
            <img className={scrollPosition <= 700 ? "backgrund-img" : "backgrund-img down"} src="images/background-img.jpg" alt="backgrund"/>
            <h1>FRONT-END DEVELOPER</h1>
            <hr />
            <p>
                프론트엔드 개발자의 포트폴리오 사이트입니다.
            </p>
            <Link to="About" smooth={true} duration={500}>
                <FiChevronsDown className="down-arrow" />
            </Link>
          </section>
        
    )
}

export default Home





