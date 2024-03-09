"use client";

import { Theme } from '@/app/types/theme';
import React, { InputHTMLAttributes, useId } from 'react';
import SunLightIcon from '/public/images/icon-sun-light.svg';
import SunDarkIcon from '/public/images/icon-sun-dark.svg';
import MoonLightIcon from '/public/images/icon-moon-light.svg';
import MoonDarkIcon from '/public/images/icon-moon-dark.svg';
import styles from './theme-button.module.css';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   *  `0` === `light` <br>
   *  `1` === `dark`
   */
  theme: Theme;
}

/**
 * 사용자의 상호작용에 따라 theme 변경
 */
export function ThemeButton({
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
