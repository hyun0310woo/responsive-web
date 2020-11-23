import React from 'react'
import { FiChevronsDown } from "react-icons/fi";
import "../App.css"
import "./Home.css"


function Home() {
    return (
          <section className="home-container">
            <img className="backgrund-img" src="images/background-img.jpg" alt="backgrund"/>
            <h1>FRONT-END DEVELOPER</h1>
            <hr />
            <p>
                프론트엔드 개발자의 포트폴리오 사이트입니다.
            </p>
            <FiChevronsDown className="down-arrow" size="40" color="#fff"/>
          </section>
        
    )
}

export default Home





