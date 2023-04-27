import {Home, inviteList, modalTask, quizTask} from './consts'
import HomePage from "../Pages/Home";
import ModalPage from "../Pages/Modal";
import QuizPage from "../Pages/Quiz";
import InvitesList from "../Pages/Invites";

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
  {
    path: inviteList,
    Component: InvitesList
  }
]