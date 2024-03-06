"use client";
import React, { InputHTMLAttributes, useId } from 'react';
import SunLightIcon from '/public/images/icon-sun-light.svg';
import SunDarkIcon from '/public/images/icon-sun-dark.svg';
import MoonLightIcon from '/public/images/icon-moon-light.svg';
import MoonDarkIcon from '/public/images/icon-moon-dark.svg';
import styles from "./theme-button.module.css";
import { Theme } from '../../types/theme';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: Theme
}

export default function ThemeButton({
  theme,
  ...props
}: IProps) {
  const toggleId = useId();
  return (
    <div className={styles['theme-area']}>
      {theme === Theme.LIGHT && <SunDarkIcon />}
      {theme === Theme.DARK && <SunLightIcon />}
      <input type="checkbox"
        checked={theme === Theme.DARK}
        className={styles.checkbox}
        id={toggleId}
        {...props}
      />
      <label className={styles.label} htmlFor={toggleId} role='button' aria-label='toggle button' />
      {theme === Theme.LIGHT && <MoonDarkIcon />}
      {theme === Theme.DARK && <MoonLightIcon />}
    </div >
  );
};
