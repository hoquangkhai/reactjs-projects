import React from 'react';
import './style.scss'

function Reset(props) {
  const {onSettingDefault} = props;

  const onResetDefault = () => {
    onSettingDefault(true);
  }
  return (
    <div className='reset'>
      <button
      className='btn'
      onClick = {onResetDefault}
      >
        Reset
      </button>
    </div>
  );
}

export default Reset;