import { CircleIcon } from "lucide-react"
import styles from "./styles.module.css"

export function Cicles() {
  return (
    <>
      <p className={styles.p}>Ciclos:</p>
      <div className={styles.circles}>
        <span className={`${styles.circle} ${styles.yellow}`}>
          <CircleIcon />
        </span>
        <span className={`${styles.circle} ${styles.green}`}>
          <CircleIcon />
        </span>
        <span className={`${styles.circle} ${styles.yellow}`}>
          <CircleIcon />
        </span>
        <span className={`${styles.circle} ${styles.green}`}>
          <CircleIcon />
        </span>
        <span className={`${styles.circle} ${styles.yellow}`}>
          <CircleIcon />
        </span>
        <span className={`${styles.circle} ${styles.green}`}>
          <CircleIcon />
        </span>
        <span className={`${styles.circle} ${styles.yellow}`}>
          <CircleIcon />
        </span>
        <span className={`${styles.circle} ${styles.blue}`}>
          <CircleIcon />
        </span>
      </div>
    </>
  )
}
