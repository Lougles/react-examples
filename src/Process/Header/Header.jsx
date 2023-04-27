import styles from './Header.module.css'
import logo from '../../Shared/pictures/chaplain.jpg'
export const Header = () => {
  return (
    <header className={`${styles.container}`}>
      <div className={styles.LeftContainer}>
        <a href="/">
          <img className={styles.logo} src={logo}/>
        </a>
      </div>
      <nav className={styles.Nav}>
        <ul className={styles.NavList}>
          <li className={styles.NavItem}><a href="/task/quizTask">Quiz</a></li>
          <li className={styles.NavItem}><a href="/task/modalTask">Modal</a></li>
          <li className={styles.NavItem}><a href="/task/inviteList">Invite</a></li>
        </ul>
      </nav>
    </header>
  )
}