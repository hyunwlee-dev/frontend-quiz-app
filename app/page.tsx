"use client";
import { useTheme, useThemeDispatch } from "@/app/contexts/theme.context";
import styles from "./page.module.css";
import { Theme } from "./types/theme";

export default function Home() {
  const theme = useTheme();
  const dispatch = useThemeDispatch();
  return (
    <main className={styles.main}>
      {/*
      <ThemeButton
        theme={Theme[theme]}
        onChange={() => dispatch({ type: 'toggle' })}
      />
      */}
    </main>
  );
}
