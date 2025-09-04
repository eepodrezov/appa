import { PropsWithChildren, JSX } from 'react'

import styles from './header.module.scss'

export interface HeaderProps {
  logo?: JSX.Element
  panel?: JSX.Element
}

const LogoDefaultComponent = <div className={styles.defaultLogo}>appa*</div>

export const Header = ({ logo, panel }: PropsWithChildren<HeaderProps>) => {
  return (
    <div className={styles.wrapper}>
      {<div className="logo"> {logo || LogoDefaultComponent}</div>}
      {panel ?? <div className="panel"> {panel}</div>}
    </div>
  )
}
