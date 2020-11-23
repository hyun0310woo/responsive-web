import React from 'react'
import "../App.css"
import "./Home.css"

function Home() {
    return (
        <section className="home-container">
            <img className="backgrund-img" src="images/background-img.jpg" />
            <h1>FRONT-END DEVELOPER</h1>
            <hr />
            <p>
                프론트엔드 개발자의 포트폴리오 사이트
            </p>
        </section>
    )
}

export default Home
