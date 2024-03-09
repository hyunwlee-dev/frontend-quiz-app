"use client";

import AccessibilityIcon from '/public/images/icon-accessibility.svg';
import CorrectIcon from '/public/images/icon-correct.svg';
import CssIcon from '/public/images/icon-css.svg';
import ErrorIcon from '/public/images/icon-error.svg';
import HtmlIcon from '/public/images/icon-html.svg';
import IncorrectIcon from '/public/images/icon-incorrect.svg';
import JsIcon from '/public/images/icon-js.svg';
import clsx from "clsx";
import { HTMLAttributes } from 'react';
import styles from "./icon.module.css";

interface IProps extends HTMLAttributes<HTMLInputElement> {
  type: 'img' | 'text';
  iconName: 'accessibility' | 'css' | 'html' | 'js' | 'a' | 'b' | 'c' | 'd';
  backgroundColor?: string;
  fontColor?: string;
}

/**
 * Icon 컴포넌트
 */
export function Icon({
  type = 'img',
  iconName,
  backgroundColor,
  fontColor
}: IProps) {
  return (
    <div className={clsx(
      styles.icon,
      styles.state,
      styles[iconName])}>
      {type === 'img' && getIcon(iconName)}
      {type === 'text' && iconName}
      <style jsx>{`
        div {
          background-color: ${backgroundColor};
          color: ${fontColor};
        }
      `}</style>
    </div>
  );
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'accessibility': {
      return <AccessibilityIcon />
    }
    case 'correct': {
      return <CorrectIcon />
    }
    case 'css': {
      return <CssIcon />
    }
    case 'error': {
      return <ErrorIcon />
    }
    case 'html': {
      return <HtmlIcon />
    }
    case 'incorrect': {
      return <IncorrectIcon />
    }
    case 'js': {
      return <JsIcon />
    }
    default: {
      throw Error('Not found Icons: ' + iconName);
    }
  }
}
