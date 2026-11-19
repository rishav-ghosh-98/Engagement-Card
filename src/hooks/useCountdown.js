import { useEffect, useMemo, useState } from 'react';

function getTimeRemaining(targetDate) {
  const total = targetDate.getTime() - Date.now();
  const clamped = Math.max(total, 0);

  return {
    total: clamped,
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

// Live countdown to a target wedding date/time, gracefully handles the past.
export function useCountdown(dateString, timeString = '00:00') {
  const targetDate = useMemo(() => new Date(`${dateString}T${timeString}:00`), [dateString, timeString]);
  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(targetDate));

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeRemaining(targetDate));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return { ...timeLeft, isPast: timeLeft.total <= 0 };
}
