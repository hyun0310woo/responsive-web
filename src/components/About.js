import React from 'react'
import "./About.css"

const About = () => {
    return(
        <section className="about-container">
            <div className="about-info">
                <img src="images/ImgTest.jpg" width="250px" height="250px" />
                <div className="user-info">
                    <div>
                        Kim Hyun Woo
                    </div>
                    <div>
                        <ul>
                            <li>
                                깃헙
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



            <div>
                <div>
                    I'm Web Developer
                </div>
                <div>
                    ㅇㅁㄴㅇㅁㄴ이ㅏㅁ너ㅣㅏ엄니ㅏ어
                </div>
                <div>
                    ㅋ튜ㅡㅟㅏㅓㄻ니ㅏㅣㅏㄴ
                </div>
            </div>
        </section>
        )
}

export default About