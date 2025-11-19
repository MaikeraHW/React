import styles from "./styles.module.css"
import type { HomeProps } from "../../pages/home"

export function ClockTimer({ state }: HomeProps) {
  return (
    <div className={styles.div}>
      <span>{state.formattedSecondsRemaining}</span>
    </div>
  )
}
