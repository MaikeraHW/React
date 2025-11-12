import styles from "./styles.module.css"
import type React from "react"

type ButtonProps = {
  icon: React.ReactNode
  color?: "green" | "red"
} & React.ComponentProps<"button">

export function Button({ icon, color = "green", ...props }: ButtonProps) {
  return (
    <button className={`${styles.btn} ${styles[color]}`} {...props}>
      {icon}
    </button>
  )
}
