import { TimerIcon } from "lucide-react"
import styles from "./styles.module.css"

export function Logo() {
  return (
    <div className={styles.div}>
      <a href="#" className={styles.logo}>
        <TimerIcon />
        <p>Chronos</p>
      </a>
    </div>
  )
}
