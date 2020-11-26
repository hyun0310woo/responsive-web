import React from 'react'
import "./About.css"

function About() {
    return (
        //    <section className="about-container" id="About">
        //        <div className="about-box">
        //            <div className="title-item">
        //                <h2>ABOUT</h2>
        //                <hr className="test"/>
        //            </div>
        //            <div className="text-box">
        //                <p>
        //                 asdasd  
        //                </p>
        //                <p>
        //                 dasdasda
        //                </p>
        //            </div>
        //        </div>
        //    </section>
        <section className="about" id="About">
            <h1>ABOUT</h1>
            <dlv className="about-container">
                <div className="wrapper">
                    <div className="about-text">
                        <p>
                          개인의 아이디어를 웹, 앱을 통해 사람들에게 알릴 수 있는
                          개발자라는 직업에 매력을 느껴 프론트앤드 개발자를 선택했습니다.
                        </p>
                        <p>
                          팀 프로젝트를 통해 협업의 힘과 중요성을 경험했기에 단순히
                          코드만 작성하는 개발자가 아닌 , 협업과 소통을 통해 더욱 좋은
                          서비스를 제공하고자 합니다.
                        </p>
                    </div>
                </div>
            </dlv>
        </section>
    )
}

export default About