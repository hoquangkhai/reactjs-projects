import React from 'react';
import "./style.scss"

function ColorPicker(props) {
  const {colorInitial, onReciveColor} = props

  let colors = ['red', 'green', 'blue', 'purple'];

  const setActiveColor = (color) => {
    if(onReciveColor) {
      onReciveColor(color)
    }
  }

  const colorBox = (colors) => {
    let element = colors.map((color, index) => {
      return <span
                key = {index}
                className = {`boxColor ${color} ${color === colorInitial.color ? 'active' : ''} `}
                onClick = {() => setActiveColor(color)}
              >
              </span>
    })
    return element;
  }

  return (
    <div className='colorPicker'>
      <div className='colorPicker-text'>
        <p>Color Picker</p>
      </div>
      <div className="color-box">
        {colorBox(colors)}
      </div>
    </div>
  );
}

export default ColorPicker;