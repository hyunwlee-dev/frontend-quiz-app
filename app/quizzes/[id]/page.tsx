import { Header } from "@/app/ui/header";
import { QuizBoard } from "@/app/ui/quiz-board";
import data from "@/app/lib/placeholder-data.json";
import { QuizType } from "@/app/types/quiz";

/*
 * if - asynchronous fetch
 * need {cache: 'force-cache'} for ssg
 */
const fetchQuizData = (id: string) => {
  return data.quizzes.filter((quiz) => (quiz.title.toLowerCase() === id))[0];
}

export default async function Page({ params }: { params: { id: 'html' | 'css' | 'javascript' | 'accessibility' } }) {
  const id = params.id;
  const quiz = fetchQuizData(id) as QuizType;
  return (
    <>
      <Header type={id === 'javascript' ? 'js' : id} />
      <main>
        <QuizBoard quiz={quiz} type={id === 'javascript' ? 'js' : id} />
      </main>
    </>
  );
}

export const dynamicParams = false;

export const generateStaticParams = async () => {
  return data.quizzes.map(({ title }) => ({
    id: title.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: params.id,
  };
}
