import { Outlet } from 'react-router-dom'

import { Navbar } from '@/features/navbar'
import imagePng from '@/assets/png.png'
import imageJpeg from '@/assets/jpeg.jpeg'
import Svg from '@/assets/svg.svg'

import styles from './main.module.scss'


export const Main = () => {
  return (
    <div className={styles.container}>
        <Navbar/>
      <h1>Привет! Я базовое приложение</h1>
      <h2>Но во мне есть все, что может тебе понадобиться</h2>
      <div className={styles.images}>
        <img width={100} src={imagePng} alt='imagePng'/>
        <img width={100} src={imageJpeg} alt='imageJpeg'/>
        <Svg width={100} height={100}/>
      </div>


      <Outlet/>
    </div>
  )
}
