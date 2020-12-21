import React from 'react'
import { GoMarkGithub } from "react-icons/go";
import { RiSmartphoneLine } from "react-icons/ri";
import { FaBloggerB } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import "./About.css"

const About = () => {
    return(
        <section className="about-container">
            <div className="about-info">
                <img src="images/ImgTest.jpg" width="200px" height="200px" />
                <div className="user-info">
                    <div>
                        <div className="user-name">Kim Hyun Woo</div>
                        <div><RiSmartphoneLine className="icon"/> 010 1234 1234</div>
                        <div><AiOutlineMail className="icon" /> hyun0301woo212@gmail.com</div>
                    </div>
                    <div className="icons">
                        <div><GoMarkGithub className="icon2"/></div>
                        <div><FaBloggerB className="icon2"/></div>
                    </div>
                </div>
            </div>
        </section>
        )
}

export default About