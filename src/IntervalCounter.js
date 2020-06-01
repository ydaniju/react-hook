import React, { useState, useEffect } from "react";

const IntervalCounter = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return <div>Interval counter is at {count}</div>;
};

export default IntervalCounter;
