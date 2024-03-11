import { HTMLAttributes } from "react";
import styles from "./progress-bar.module.css";
import clsx from "clsx";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  time: number;
  /**
   * millisecond
   */
  expireTime?: number;
}

/**
 * progress-bar 컴포넌트
 */
export function ProgressBar({
  time,
  expireTime = 1000,
  className,
}: IProps) {

  return (
    <div className={clsx(styles['progress-bar'], className)}>
      <div className={styles['gauge-wrapper']}>
        <span className={styles.gauge} style={{ width: `${time / expireTime * 100}%` }} />
      </div>
    </div>
  );
}
