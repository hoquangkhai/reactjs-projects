import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss';

ColorBox.propTypes = {};

const getRandomColor = () => {
  const COLOR_lIST = [
    'deeppink',
    'green',
    'yellow',
    'black',
    'blue',
    'red'
  ];
  const randomIndex = Math.trunc(Math.random()*6);
  return COLOR_lIST[randomIndex];
}

function ColorBox() {

  const [color, setColor] = useState( () => {
    const initColor = JSON.parse(localStorage.getItem('box-color')) || 'deeppink' ;
    return initColor;
  });

  const handleBoxClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem('box-color', JSON.stringify(newColor));
    //luu vao localStorage
    // if (localStorage.getItem('box-color') === null) {
    //   localStorage.setItem('box-color', JSON.stringify([]))
    //   localStorage.setItem('box-color', JSON.stringify(newColor))
    // } else {
    //   localStorage.setItem('box-color', JSON.stringify(newColor))
    // }
  }
  return (
    <div className='color-box' style={{backgroundColor: color}}
    onClick ={handleBoxClick}>
      COLOR-BOX
    </div>
  );
}

export default ColorBox;