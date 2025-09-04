import { Link } from 'react-router-dom'
import styles from './navbar-item.module.scss'
import type { NavbarItem } from '../types'

export interface NavbarItemProps {
  item: NavbarItem
}

export const NavbarButton = ({ item }: NavbarItemProps) => {
  const { title, href } = item
  if (href) {
    return (
      <Link className={styles.wrapper} to={href}>
        {title}
      </Link>
    )
  }
  return <div className={styles.wrapper}>{title}</div>
}
