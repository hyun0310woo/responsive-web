import React from "react"
import "./Toy04.css"

const Toy04 = () => {
  const popupToggle = () => {
    const popup = document.getElementById("popup");
    popup.classList.toggle("active")
  }

  const popupCloseToggle = () => {
    
  }
  return(
    <div>
      <a className="btn" onClick={popupToggle}>Subscribe Us</a>
      <div id="popup">
        <div className="content">
          <img src=""></img>
          <h2>Join Our Newsletter</h2>
          <p>
            Lorem, ipsum....dolor..sit amet...
            show me the money
          </p>
          <div className="inputBox">
            <input type="email" placeholder="Enter Email"></input>
          </div>
          <div className="inputBox">
            <input type="submit" value="Sign Up" className="btn"></input>
          </div>
        </div>
        <a className="close"><span>X</span></a>
      </div>
    </div>
  )
}

export default Toy04