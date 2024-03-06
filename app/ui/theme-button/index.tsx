"use client";

import { Theme } from '../../types/theme';
import React, { InputHTMLAttributes, useId } from 'react';
import SunLightIcon from '/public/images/icon-sun-light.svg';
import SunDarkIcon from '/public/images/icon-sun-dark.svg';
import MoonLightIcon from '/public/images/icon-moon-light.svg';
import MoonDarkIcon from '/public/images/icon-moon-dark.svg';
import styles from './theme-button.module.css';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * LIGHT or DARK
   */
  theme: string
}

/**
 * 사용자의 상호작용에 따라 theme 변경
 */
export const ThemeButton = ({
  theme,
  ...props
}: IProps) => {
  const toggleId = useId();
  return (
    <div className={styles['theme-area']}>
      {theme === Theme[Theme.LIGHT] && <SunDarkIcon />}
      {theme === Theme[Theme.DARK] && <SunLightIcon />}
      <input type="checkbox"
        checked={theme === Theme[Theme.DARK]}
        className={styles.checkbox}
        id={toggleId}
        {...props}
      />
      <label className={styles.label} htmlFor={toggleId} role='button' aria-label='toggle button' />
      {theme === Theme[Theme.LIGHT] && <MoonDarkIcon />}
      {theme === Theme[Theme.DARK] && <MoonLightIcon />}
    </div >
  );
};
