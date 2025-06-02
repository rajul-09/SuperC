import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = target - now;

      const days = Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)));
      setDaysRemaining(days);
    };

    updateCountdown(); // Run initially
    const interval = setInterval(updateCountdown, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(interval); // Cleanup
  }, [targetDate]);

  return (
   
      
     <span>{daysRemaining} </span>
  ); 
};

export default Countdown;
