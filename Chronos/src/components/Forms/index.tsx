import { CirclePlayIcon } from "lucide-react"
import styles from "./styles.module.css"

export function Forms() {
  return (
    <form action="#" className={styles.form}>
      <label htmlFor="task" className={styles.label}>
        Tafera:
      </label>
      <input type="text" id="task" placeholder="Ex.: Estudar para a Prova" className={styles.input} />
      <p className={styles.text}>
        Nesse ciclo <span className={styles.bold}>foque</span> por <span className={styles.bold}>25 min.</span>
      </p>
      <button className={styles.btn}>
        <CirclePlayIcon />
      </button>
    </form>
  )
}
