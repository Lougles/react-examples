import styles from './QuizPage.module.scss'
import {useState} from "react";

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];
function Result({correct}) {
  return (
    <div className={styles.result}>
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href={"/task/quizTask"}><button>Попробовать снова</button></a>
    </div>
  );
}

function Game({step, question, variant}) {
  const percentage = Math.round((step / questions.length) * 100)
  return (
    <>
      <div className={styles.progress}>
        <div style={{ width: `${percentage}%` }} className={styles.progress__inner}></div>
      </div>
      <h1>{question.title}</h1>
      <ul className={styles.Quiz__List}>
        {question?.variants?.map((item, index) => (
          <li key={index} className={styles.Quiz__List__Item} onClick={() => variant(index)}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export const QuizPage = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];
  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1 );
    }
  }
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Quiz}>
        {
          step !== questions.length ? (
            <Game step={step} question={question} variant={onClickVariant} />
          ) : (
            <Result correct={correct}/>
          )
        }
      </div>
    </div>
  )
}