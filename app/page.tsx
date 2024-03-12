"use client";

import { useRouter } from "next/navigation";
import { Header } from "@/app/ui/header";
import { Button } from "@/app/ui/button";
import { IconName } from "@/app/types/iconName";
import Container from "@/app/ui/container";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Header type='none' />
      <Container as='main' className={styles.main}>
        <section>
          <h1 className={styles.h1}>
            Welcome to the<span>Frontend Quiz!</span>
          </h1>
          <p className={styles.bodyS}>
            Pick a subject to get started.
          </p>
        </section>
        <section className={styles.selection}>
          {['html', 'css', 'javascript', 'accessibility'].map((quiz) => {
            const pickedQuiz = (quiz === 'javascript') ? 'js' : quiz as IconName;
            return (
              <Button
                key={quiz}
                className={styles.button}
                variant='selection'
                iconName={pickedQuiz}
                onClick={() => router.push(`/quizzes/${quiz}`)}
              />
            );
          })}
        </section>
      </Container >
    </>
  );
}

