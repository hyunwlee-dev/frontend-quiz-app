"use client";

import React, { ButtonHTMLAttributes } from 'react';
import { Icon } from '@/app/ui/icon';
import clsx from 'clsx';
import styles from "./button.module.css";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'selection';
  iconName?: 'accessibility' | 'css' | 'html' | 'js' | 'a' | 'b' | 'c' | 'd';
  textContent?: string;
}

/**
 * button 컴포넌트
 */
export const Button = ({
  variant = 'primary',
  iconName = 'accessibility',
  textContent,
  children,
  ...props
}: IProps) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[iconName]
      )}
      type="button"
      {...props}
    >
      {variant === 'primary' && textContent}
      {variant === 'selection' &&
        <>
          <Icon
            iconName={iconName}
            type={'abcd'.includes(iconName) ? 'text' : 'img'}
            className={styles.icon}
          />
          {iconName === 'html' && 'HTML'}
          {iconName === 'css' && 'CSS'}
          {iconName === 'accessibility' && 'Accessibility'}
          {iconName === 'js' && 'JavaScript'}
          {'abcd'.includes(iconName) && textContent}
        </>
      }
    </button>
  );
};
