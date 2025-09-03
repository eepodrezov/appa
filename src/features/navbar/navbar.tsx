import { Link } from 'react-router-dom'

import styles from './navbar.module.scss'

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О нас</Link>
      <Link to={'/contacts'}>Контакты</Link>
    </div>
  )
}
