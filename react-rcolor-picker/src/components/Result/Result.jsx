import React from 'react';
import './style.scss'

function Result(props) {
  const {colorInitial} = props;

  const setStyle = (colorInitial) => {
    return {
      fontSize: colorInitial.fontSize
    }
  }

  return (
    <div className='result'>
      <div className="result-top">
        <p className="result-text">
          Color: <span>{colorInitial.color}</span> - Fontsize: <span>{colorInitial.fontSize}px</span>
        </p>
      </div>
      <div className="result-bot">
        <input
          type="text"
          placeholder='noi dung can setting'  className={`result-input ${colorInitial.color}`}
          style ={setStyle(colorInitial)}
          />
      </div>
    </div>
  );
}

export default Result;