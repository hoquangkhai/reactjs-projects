import React from 'react';
import useClock from '../../customHook/useClock';

import './style.scss'

function Clock() {
 const {timeString} = useClock()

  return (
    <p className="clock">
      {timeString}
    </p>
  );
}

export default Clock;