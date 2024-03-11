"use client";

import React, { ButtonHTMLAttributes } from 'react';
import { Icon } from '@/app/ui/icon';
import { IconName } from '@/app/types/iconName';
import clsx from 'clsx';
import styles from "./button.module.css";
import CorrectIcon from "/public/images/icon-correct.svg";
import IncorrectIcon from "/public/images/icon-incorrect.svg";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'selection';
  iconName?: IconName;
  textContent?: string;
  /**
   * variant 'selection'
   * iconName 'a', 'b', 'c', 'd'에서만 쓰이는 속성입니다.
   */
  state?: 'inactive' | 'active' | 'correct' | 'incorrect' | 'show-answer';
  /**
   * variant 'primary'에서만 쓰이는 속성입니다.
   */
  inValid?: boolean;
}

/**
 * button 컴포넌트
 */
export const Button = ({
  variant = 'primary',
  iconName = 'accessibility',
  textContent,
  state = 'inactive',
  inValid = false,
  className,
  children,
  ...props
}: IProps) => {
  const [backgroundColor, fontColor] = getStateColor(state);
  return (
    <>
      <button
        className={clsx(
          styles.button,
          styles[variant],
          styles[iconName],
          styles[state],
          className
        )}
        {...props}
      >
        {variant === 'primary' && textContent}
        {variant === 'selection' &&
          <>
            <Icon
              iconName={iconName}
              type={'abcd'.includes(iconName) ? 'text' : 'img'}
              backgroundColor={backgroundColor}
              fontColor={fontColor}
              className={styles.icon}
            />
            <span className={styles.text}>
              {iconName === 'html' && 'HTML'}
              {iconName === 'css' && 'CSS'}
              {iconName === 'accessibility' && 'Accessibility'}
              {iconName === 'js' && 'JavaScript'}
              {'abcd'.includes(iconName) && textContent}
            </span>
            {state === 'correct' && <CorrectIcon className={styles['icon-sub']} />}
            {state === 'show-answer' && <CorrectIcon className={styles['icon-sub']} />}
            {state === 'incorrect' && <IncorrectIcon className={styles['icon-sub']} />}
          </>
        }
      </button>
      {inValid &&
        <span className={clsx({ [styles.warning]: inValid })}>
          <IncorrectIcon />
          <p>Please select an answer</p>
        </span >
      }
    </>
  );
};

const getStateColor = (state: string) => {
  switch (state) {
    case 'active': {
      return ['var(--color-primary)', 'var(--color-white)'];
    }
    case 'inactive': {
      return [undefined, undefined];
    }
    case 'correct': {
      return ['var(--color-green)', 'var(--color-white)'];
    }
    case 'incorrect': {
      return ['var(--color-red)', 'var(--color-white)'];
    }
    case 'show-answer': {
      return [undefined, undefined];
    }
    default: {
      throw new Error('Not found color of: ' + state);
    }
  }
}
