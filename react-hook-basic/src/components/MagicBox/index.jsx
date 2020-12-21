import React from 'react';
import PropTypes from 'prop-types';
import useMagicColor from '../../customHook/useMagicColor';
import './MagicBox.scss'
MagicBox.propTypes = {

};

function MagicBox() {
  const color = useMagicColor();
  return (
    <div
     className='magic-box'
      style = {{backgroundColor: color.color}}
    >
      hello
    </div>
  );
}

export default MagicBox;