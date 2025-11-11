type InputProps = {
  id: string
  labelText?: string
  placeholder: string
} & React.ComponentProps<"input">

import styles from "./styles.module.css"

export function Input({ id, type, labelText, placeholder, ...rest }: InputProps) {
  return (
    <>
      {labelText && (
        <label htmlFor={id} className={styles.label}>
          {labelText}
        </label>
      )}
      <input type={type} id={id} placeholder={placeholder} className={styles.input} {...rest} />
    </>
  )
}
