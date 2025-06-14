
import React, { useEffect, useState } from "react";

export const CountdownTimer: React.FC<{ endTime: string }> = ({ endTime }) => {
  const getTimeLeft = () => {
    const total = Date.parse(endTime) - Date.now();
    const seconds = Math.max(Math.floor((total / 1000) % 60), 0);
    const minutes = Math.max(Math.floor((total / 1000 / 60) % 60), 0);
    const hours = Math.max(Math.floor((total / (1000 * 60 * 60)) % 24), 0);
    return { total, hours, minutes, seconds };
  };

  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  if (time.total <= 0) {
    return <span className="text-red-500 animate-pulse">Auction Ended</span>;
  }

  return (
    <span className="font-semibold">
      {time.hours}h {time.minutes}m {time.seconds}s left
    </span>
  );
};
