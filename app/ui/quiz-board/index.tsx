"use client";

import { FormEvent, HTMLAttributes, useEffect, useRef, useState } from "react";
import Container from "@/app/ui/container";
import { QuizType } from "@/app/types/quiz";
import { Button } from "@/app/ui/button";
import { ProgressBar } from "@/app/ui/progress-bar";
import useTimer from "@/app/hooks/useTimer";
import { EXPIRE_TIME, NOT_PICKED, OPTION_SIZE } from "@/app/constants";
import clsx from "clsx";
import styles from "./quiz-board.module.css";
import { Icon } from "../icon";
import { useRouter } from "next/navigation";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  type: 'html' | 'css' | 'js' | 'accessibility'
  quiz: QuizType;
}

export function QuizBoard({
  type,
  quiz,
  className
}: IProps) {
  const { isRunning, time, start, stop, reset } = useTimer(EXPIRE_TIME);
  const [currentPage, setCurrentPage] = useState(0);
  /** 
   * null => init
   * -1 => not picked
   * 0 1 2 3 => prior check
   * 4 5 6 7 => after check
   */
  const [pickedNumber, setPickedNumber] = useState<number | null>(null);
  const answer = useRef<number | null>(null);
  const correctedCnt = useRef(0);
  const router = useRouter();

  useEffect(() => {
    const quizInfo = quiz.questions[currentPage];
    answer.current = quizInfo?.options?.indexOf(quizInfo.answer);
  }, [currentPage]);

  useEffect(() => {
    start();
  }, [currentPage]);

  useEffect(() => {
    if (isRunning && time === 0) {
      stop();
      checkAnswer();
    }
  }, [isRunning, time]);

  useEffect(() => {
    if (isAfterCheckingAnswer())
      stop();
  }, [pickedNumber]);

  const pickNumber = (number: number) => {
    setPickedNumber(number);
  }

  const checkAnswer = () => {
    if (time === 0 && pickedNumber === null)
      return;
    if (pickedNumber === null) {
      setPickedNumber(NOT_PICKED);
      return;
    }
    if (pickedNumber === NOT_PICKED)
      return;
    if (quiz.questions[currentPage].options[pickedNumber] === quiz.questions[currentPage].answer)
      correctedCnt.current = correctedCnt.current + 1;
    setPickedNumber(pickedNumber + OPTION_SIZE);
  }

  const nextQuestion = () => {
    setCurrentPage(prev => prev + 1);
    initTotal();
  }

  const totalPageSize = () => quiz.questions.length;

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextQuestion();
  }

  const isAfterCheckingAnswer = () => {
    if (pickedNumber === null) return false;
    return pickedNumber >= OPTION_SIZE;
  }

  const initTotal = () => {
    setPickedNumber(null);
    reset();
  }

  const findEachButtonState = (idx: number) => {
    if (time === 0 && !isAfterCheckingAnswer())
      if (answer.current === idx) return 'show-answer';
    if (pickedNumber === NOT_PICKED || pickedNumber === null)
      return 'inactive';
    const finalPickedNumber = pickedNumber % OPTION_SIZE;
    if (isAfterCheckingAnswer()) {
      if (finalPickedNumber === answer.current && finalPickedNumber === idx) return 'correct';
      if (finalPickedNumber !== answer.current && finalPickedNumber === idx) return 'incorrect';
      else if (answer.current === idx) return 'correct';
    }
    if (finalPickedNumber === idx) return 'active';
    return 'inactive';
  }

  const isDisabled = () => {
    if (time === 0 && !isAfterCheckingAnswer())
      return true;
    if (isAfterCheckingAnswer())
      return true;
    return false;
  }

  return (
    <Container as='form' className={clsx(styles['quiz-board'], className)} onSubmit={handleOnSubmit}>
      <section className={styles['question-panel']}>{
        currentPage < totalPageSize() ?
          <>
            <p className={styles['quiz-count']}>{`Question ${currentPage + 1} of ${totalPageSize()}`}</p>
            <h2 className={styles['quiz-question']}>{quiz.questions[currentPage].question}</h2>
            <ProgressBar
              time={time}
              expireTime={EXPIRE_TIME}
              className={styles['progress-bar']}
            />
          </>
          :
          <>
            <h1 className={styles.h1}>
              Quiz Completed<span>You Scored...</span>
            </h1>
          </>
      }
      </section>
      <section className={styles['selection-panel']}>{
        currentPage < totalPageSize() ?
          <>
            {
              quiz.questions[currentPage].options.map((option, idx) => (
                <Button
                  type='button'
                  className={styles['quiz-option']}
                  key={option}
                  variant="selection"
                  iconName={`${String.fromCharCode('a'.charCodeAt(0) + idx)}` as 'a' | 'b' | 'c' | 'd'}
                  textContent={option}
                  state={findEachButtonState(idx)}
                  onClick={() => pickNumber(idx)}
                  disabled={isDisabled()}
                />
              ))
            }
            {currentPage < totalPageSize() - 1
              ?
              <Button
                state={'inactive'}
                type='button'
                className={styles['quiz-submit']}
                variant="primary"
                textContent={isDisabled() ? 'Next Question' : 'Submit Answer'}
                inValid={pickedNumber === NOT_PICKED}
                onClick={isDisabled() ? nextQuestion : checkAnswer}
              />
              :
              <Button
                state={'inactive'}
                type='submit'
                className={styles['quiz-submit']}
                variant="primary"
                textContent={'End Question'}
              />
            }
          </>
          :
          <>
            <div className={styles['result-board']}>
              <div className={styles['up-wrapper']}>
                <Icon type='img' iconName={type} />
                <h2 className={styles.heading2}>
                  {type === 'html' && 'HTML'}
                  {type === 'css' && 'CSS'}
                  {type === 'js' && 'JavaScript'}
                  {type === 'accessibility' && 'Accessibility'}
                </h2>
              </div>
              <span className={styles['result-score']}>
                {correctedCnt.current}
              </span>
              <span className={styles['result-total']}>
                {`out of ${totalPageSize()}`}
              </span>
            </div>
            <Button
              state={'inactive'}
              type='button'
              className={styles['quiz-submit']}
              variant="primary"
              textContent={'Play Again'}
              onClick={() => router.replace('/')}
            />
          </>
      }
      </section>
    </Container >
  );
}
