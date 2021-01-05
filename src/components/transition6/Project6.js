import React, {useState} from 'react'
import "./Project6.css"

const Project6 = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  const handleClickCheck1 = () => {
    setChecked1(true);
    setChecked2(false);
    setChecked3(false);
  }

  const handleClickCheck2 = () => {
    setChecked1(false);
    setChecked2(true);
    setChecked3(false);
  }

  const handleClickCheck3 = () => {
    setChecked1(false);
    setChecked2(false);
    setChecked3(true);
  }


    return (
      <div className="tab_content">
        <input type="radio" name="tabmenu" id="tab01" checked={checked1} onClick={handleClickCheck1}></input>
        <input type="radio" name="tabmenu" id="tab02" checked={checked2} onClick={handleClickCheck2}></input>
        <input type="radio" name="tabmenu" id="tab03" checked={checked3} onClick={handleClickCheck3}></input>

        <div className="conbox con1">1</div>
        <div className="conbox con2">2</div>
        <div className="conbox con3">3</div>

        <div className="btn">
          <label for="tab01"></label>
          <label for="tab02"></label>
          <label for="tab03"></label>
        </div>
      </div>
    )
}

export default Project6