"use client";
import { Header } from "@/app/ui/header";
import { Button } from "@/app/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header type='html' />
      <main className={styles.main}>
        <Button
          textContent='Submit Answer'
        />
        <Button
          variant='selection'
          iconName='html'
        />
        <Button
          variant='selection'
          iconName='css'
        />
        <Button
          variant='selection'
          iconName='js'
        />
        <Button
          variant='selection'
          iconName='accessibility'
        />
        <Button
          variant='selection'
          iconName='a'
          textContent='4.5 : 1'
        />
        <Button
          variant='selection'
          iconName='b'
          textContent='3 : 1'
        />
        <Button
          variant='selection'
          iconName='c'
          textContent='2.5 : 1'
        />
        <Button
          variant='selection'
          iconName='d'
          textContent='5 : 1'
        />
      </main>
    </>
  );
}
