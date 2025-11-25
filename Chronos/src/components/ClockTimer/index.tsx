import styles from "./styles.module.css"
import { useTaskContext } from "../../contexts/TaskContext"

export function ClockTimer() {
  const taskContext = useTaskContext()
  console.log(taskContext)
  return (
    <div className={styles.div}>
      <span>23:99</span>
    </div>
  )
}
