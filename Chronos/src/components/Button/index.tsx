import { CirclePlayIcon } from "lucide-react"
import styles from "./styles.module.css"

export function Button() {
  return (
    <button className={styles.btn}>
      <CirclePlayIcon />
    </button>
  )
}
