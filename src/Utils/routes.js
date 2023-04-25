import { Home ,modalTask, quizTask} from './consts'
import HomePage from "../Pages/Home";
import ModalPage from "../Pages/Modal";
import QuizPage from "../Pages/Quiz";

export const publicRoutes = [
  {
    path: Home,
    Component: HomePage
  },
  {
    path: modalTask,
    Component: ModalPage
  },
  {
    path: quizTask,
    Component: QuizPage
  },
]