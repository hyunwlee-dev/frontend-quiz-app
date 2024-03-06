"use client";
import { useTheme, useThemeDispatch } from "@/app/contexts/theme.context";
import styles from "./page.module.css";
import ThemeButton from "@/app/ui/theme-button";

export default function Home() {
  const theme = useTheme();
  const dispatch = useThemeDispatch();
  return (
    <main className={styles.main}>
      <ThemeButton
        theme={theme}
        onChange={() => dispatch({ type: 'toggle' })}
      />
    </main>
  );
}
