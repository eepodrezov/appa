import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'
import { Navbar } from '@/features/navbar'
import logoIcon from '@/assets/logo-icon.jpeg'

import styles from './main.module.scss'

export const Main = () => {
  return (
    <div className={styles.container}>
      <Header panel={<Navbar />} />
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.header}>Привет! Я базовое приложение</h1>
          <h2 className={styles.subheader}>
            Но во мне есть все, что может тебе понадобиться
          </h2>
        </div>
        <div className={styles.media}>
          <img width={400} src={logoIcon} alt="logoIcon" />
        </div>
      </div>

      <Outlet />
    </div>
  )
}
