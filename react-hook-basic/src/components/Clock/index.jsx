import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
Clock.propTypes = {};

//function khong phu thuoc
const formatTime = (date) => {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`
}

function Clock() {
  const [timeString, setTimeString] = useState('')
  useEffect( () => {

   const clockInterval = setInterval(() => {
      const now = new Date()
      const newTimeString = formatTime(now);
      setTimeString(newTimeString)
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    }
  },[])
  return (
    <p className="clock">
      {timeString}
    </p>
  );
}

export default Clock;