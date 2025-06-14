
import React, { useEffect, useState } from "react";

type Props = {
  endTime: string; // ISO string
};

const getTimeLeft = (end: string) => {
  const total = Date.parse(end) - Date.now();
  const seconds = Math.max(Math.floor((total / 1000) % 60), 0);
  const minutes = Math.max(Math.floor((total / 1000 / 60) % 60), 0);
  const hours = Math.max(Math.floor((total / (1000 * 60 * 60)) % 24), 0);
  const days = Math.max(Math.floor(total / (1000 * 60 * 60 * 24)), 0);
  return { total, days, hours, minutes, seconds };
};

export const CountdownTimer: React.FC<Props> = ({ endTime }) => {
  const [time, setTime] = useState(() => getTimeLeft(endTime));

  useEffect(() => {
    const tick = () => setTime(getTimeLeft(endTime));
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  if (time.total <= 0) {
    return <span className="text-red-500 animate-pulse">Ended</span>;
  }

  let parts: string[] = [];
  if (time.days > 0) parts.push(`${time.days}d`);
  if (time.hours > 0 || time.days > 0) parts.push(`${time.hours}h`);
  if (time.minutes > 0 || time.hours > 0 || time.days > 0) parts.push(`${time.minutes}m`);
  parts.push(`${time.seconds}s`);

  return (
    <span className="font-medium">{parts.join(" ")} left</span>
  );
};
