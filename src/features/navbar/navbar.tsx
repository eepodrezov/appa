import styles from './navbar.module.scss'
import { NavbarItem } from './types'
import { NavbarButton } from './navbar-item/navbar-item'

const navbarItems = [
  { title: 'Main', href: '/' },
  { title: 'About us', href: '/about' },
  {
    title: 'Contacts',
    href: '/contacts',
  },
] as NavbarItem[]

export const Navbar = () => {
  return (
    <div className={styles.container}>
      {navbarItems.map(item => (
        <NavbarButton item={item} />
      ))}
    </div>
  )
}
