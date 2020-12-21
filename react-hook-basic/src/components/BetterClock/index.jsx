import React from 'react';
import useClock from '../../customHook/useClock';
import './BetterClock.scss'

function BetterClock() {
  const {timeString} = useClock();
  return (
    <div className='better__clock'>
      <p className="better__clock-timeString">
        {timeString}
      </p>
    </div>
  );
}

export default BetterClock;