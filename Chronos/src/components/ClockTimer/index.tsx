import styles from "./styles.module.css"
import { useTaskContext } from "../../contexts/TaskContext"

export function ClockTimer() {
  const { state } = useTaskContext()
  return (
    <div className={styles.div}>
      <span>{state.formattedSecondsRemaining}</span>
    </div>
  )
}
