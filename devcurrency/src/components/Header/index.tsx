import logoimg from '../../assets/logo.svg'
import styles from './styles.module.css'

import { Link } from 'react-router-dom'

export function Header() {

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logoimg} alt="" />
      </Link>
    </header>
  )
}