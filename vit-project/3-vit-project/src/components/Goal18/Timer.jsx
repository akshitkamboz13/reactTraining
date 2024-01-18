import React, { useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = React.useState(0);

  useEffect(() => {
    // Set up the interval and store the timerId in a variable
    const timerId = setInterval(() => {
      setSeconds((prevSec) => prevSec + 1);
    }, 1000);

    // Clean up the interval when the component unmounts or when the dependency array changes
    return () => {
      clearInterval(timerId);
    };
  }, []); // Empty dependency array means the effect runs only once when the component mounts

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  );
};

export default Timer;