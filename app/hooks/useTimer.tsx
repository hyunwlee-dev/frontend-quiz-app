import { useCallback, useEffect, useRef, useState } from 'react';

const useTimer = (initialTime: number) => {
  const isRunningRef = useRef(false);
  const [time, setTime] = useState(initialTime);

  const start = useCallback(() => {
    isRunningRef.current = true;
  }, []);

  const stop = useCallback(() => {
    isRunningRef.current = false;
  }, []);

  const reset = useCallback(() => {
    setTime(initialTime);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isRunningRef.current)
        return;
      setTime(time => time > 0 ? time - 100 : 0);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return {
    isRunning: isRunningRef.current,
    time,
    start,
    stop,
    reset,
  };
};

export default useTimer;
