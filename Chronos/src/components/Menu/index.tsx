import { House } from "lucide-react"
import { History } from "lucide-react"
import { Settings } from "lucide-react"
import { Sun } from "lucide-react"
import styles from "./styles.module.css"

export function Menu() {
  return (
    <div className={styles.div}>
      <a href="#" className={styles.icon}>
        <House />
      </a>
      <a href="#" className={styles.icon}>
        <History />
      </a>
      <a href="#" className={styles.icon}>
        <Settings />
      </a>
      <a href="#" className={styles.icon}>
        <Sun />
      </a>
    </div>
  )
}
