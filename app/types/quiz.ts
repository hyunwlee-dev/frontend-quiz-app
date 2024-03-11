export type QuizType = {
  title: 'HTML' | 'CSS' | 'JavaScript' | 'Accessibility';
  icon: string;
  questions: QuestionType[];
}

export type QuestionType = {
  question: string,
  options: string[],
  answer: string,
}
