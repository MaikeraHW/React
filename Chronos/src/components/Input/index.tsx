type InputProps = {
  id: string
} & React.ComponentProps<"input">

import styles from "./styles.module.css"

export function Input({ id, type }: InputProps) {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        Tafera:
      </label>
      <input type={type} id={id} placeholder="Ex.: Estudar para a Prova" className={styles.input} />
    </>
  )
}
