import React from 'react';
import "./style.scss"

function SizeSetting(props) {
  const {colorInitial, onChangeSize} = props;

  const changeSize = (number) => {
    if(onChangeSize){
      onChangeSize(number)
    }
  }

  return (
    <div className='sizeSetting'>
      <div className="sizeSetting-top">
        <p>Size: <span>{colorInitial.fontSize}</span>px</p>
      </div>
      <div className="sizeSetting-bot">
        <button className="btn btn-up"
                onClick = {() => changeSize(2)}
        >
          Tăng
        </button>

        <button
        className="btn btn-down"
        onClick = {() => changeSize(-2)}
        >
          Giảm
        </button>
      </div>
    </div>
  );
}

export default SizeSetting;