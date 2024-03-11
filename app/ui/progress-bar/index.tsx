import { useEffect } from "react";
import useTimer from "@/app/hooks/useTimer";
import styles from "./progress-bar.module.css";

interface IProps {
  /**
   * millisecond
   */
  expireTime?: number;
}

/**
 * progress-bar 컴포넌트
 */
export function ProgressBar({
  expireTime = 1000,
}: IProps) {
  const { isRunning, time, start, stop } = useTimer(expireTime);

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    if (isRunning && time === 0)
      stop();
  }, [isRunning, time]);

  return (
    <div className={styles['progress-bar']}>
      <div className={styles['gauge-wrapper']}>
        <span className={styles.gauge} style={{ width: `${time / 3000 * 100}%` }} />
      </div>
    </div>
  );
}
