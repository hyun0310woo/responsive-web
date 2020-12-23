import React, {useState} from 'react'
import "./Project5.css"

const Project5 = () => {
    const [click1, setClick1] = useState(true);
    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);

    const handleClick1 = () => {
        setClick1(true);
        setClick2(false);
        setClick3(false);
    }    

    const handleClick2 = () => {
        setClick1(false);
        setClick2(true);
        setClick3(false);
    }   

    const handleClick3 = () => {
        setClick1(false);
        setClick2(false);
        setClick3(true);
    }   

    return (
        <div className="tab_content">
            <input type="radio" name="tabmenu" id="tab01" onClick={handleClick1} checked={click1}></input>
            <label for="tab01">HTML CSS</label>
            <input type="radio" name="tabmenu" id="tab02" onClick={handleClick2} checked={click2}></input>
            <label for="tab02">JavaScript</label>
            <input type="radio" name="tabmenu" id="tab03" onClick={handleClick3} checked={click3}></input>
            <label for="tab03">React</label>

            <div className="conbox con1">HTML CSS</div>
            <div className="conbox con2">JavaScript</div>
            <div className="conbox con3">React</div>
        </div>
    )
}

export default Project5 