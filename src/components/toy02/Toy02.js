import React, {useState} from 'react'
import "./Toy02.css" 

const Toy02 = () => {
  const [onClick, setOnClick] = useState(false);

  const handleClick = () => {
    setOnClick(!onClick);
  }

    return (
      <div id="container">
        <label>
          <input onClick={handleClick} type="radio" name="btn" checked={onClick}></input>
        </label>

      </div>
    )
}

export default Toy02