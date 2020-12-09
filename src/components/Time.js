import React, { useState, useEffect } from 'react';

function Time() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <p>{currentTime}</p>
  );
}

export default Time;