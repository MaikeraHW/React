import styles from "./styles.module.css"

export function Forms() {
  return (
    <form action="#" className={styles.form}>
      <p className={styles.text}>
        Nesse ciclo <span className={styles.bold}>foque</span> por <span className={styles.bold}>25 min.</span>
      </p>
    </form>
  )
}
