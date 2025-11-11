import { CirclePlayIcon } from "lucide-react"
import styles from "./styles.module.css"

export function Forms() {
  return (
    <form action="#" className={styles.form}>
      <p className={styles.text}>
        Nesse ciclo <span className={styles.bold}>foque</span> por <span className={styles.bold}>25 min.</span>
      </p>
      <p>Ciclos:</p>
      <p>0 0 0 0 0 0 0 0</p>
      <button className={styles.btn}>
        <CirclePlayIcon />
      </button>
    </form>
  )
}
