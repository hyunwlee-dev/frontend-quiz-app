"use client";
import React, { Dispatch, ReactNode, createContext, useContext, useEffect, useReducer } from "react";
import { Theme } from "@/app/types/theme";

const ThemeContext = createContext<Theme>(Theme.LIGHT);
const ThemeDispatchContext = createContext<Dispatch<Action> | null>(null);

type Action = { type: 'toggle' };

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, dispatch] = useReducer(
    themeReducer,
    Theme.LIGHT
  );

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const localTheme = localStorage.getItem('theme');
    if (localTheme === 'dark') {
      dispatch({ type: 'toggle' });
    } else if (!localTheme && isDark) {
      dispatch({ type: 'toggle' });
    }
  }, []);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (htmlElement) {
      if (theme === Theme.LIGHT) {
        htmlElement.classList.remove('dark');
        htmlElement.classList.add('light');
      } else {
        htmlElement.classList.remove('light');
        htmlElement.classList.add('dark');
      }
    }
    localStorage.setItem('theme', theme === Theme.LIGHT ? 'light' : 'dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeDispatch() {
  const dispatch = useContext(ThemeDispatchContext);
  if (!dispatch) throw Error('ThemeDispatchContext not found');
  return dispatch;
}

function themeReducer(theme: Theme, action: Action): Theme {
  switch (action.type) {
    case 'toggle':
      return theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

