import React from 'react'
import { GoMarkGithub } from "react-icons/go";
import { RiSmartphoneLine } from "react-icons/ri";
import { FaBloggerB } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import "./About.css"

const About = () => {
    return(
        <section className="about-container" id="about">
            <div className="about-info">
                <img src="images/ImgTest.jpg" width="200px" height="200px" />
                <div className="user-info">
                    <div>
                        <div className="user-name">김 현우 - Kim Hyun Woo</div>
                        <div><RiSmartphoneLine className="icon"/> 010-3877-5174</div>
                        <div><AiOutlineMail className="icon" /> hyun0310woo@gmail.com</div>
                    </div>
                    <div className="icons">
                        <a href="https://github.com/hyun0310woo" target="blank"><GoMarkGithub className="icon2"/></a>
                        <a href="https://hyun0310woo.tistory.com/" target="blank"><FaBloggerB className="icon2"/></a>
                    </div>
                </div>
            </div>
        </section>
        )
}

export default About