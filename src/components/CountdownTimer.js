import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateDaysLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    return Math.floor(difference / (1000 * 60 * 60 * 24));
  };

  const [daysLeft, setDaysLeft] = useState(calculateDaysLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysLeft(calculateDaysLeft());
    }, 86400000); // 1 day

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown">
      <span>⏳ {daysLeft} Days Left!</span>
    </div>
  );
};

export default CountdownTimer;