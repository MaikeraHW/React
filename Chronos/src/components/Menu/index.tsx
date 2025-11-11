import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon } from "lucide-react"
import styles from "./styles.module.css"

export function Menu() {
  return (
    <div className={styles.div}>
      <a href="#" className={styles.icon}>
        <HouseIcon />
      </a>
      <a href="#" className={styles.icon}>
        <HistoryIcon />
      </a>
      <a href="#" className={styles.icon}>
        <SettingsIcon />
      </a>
      <a href="#" className={styles.icon}>
        <SunIcon />
      </a>
    </div>
  )
}
