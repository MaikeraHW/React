import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon } from "lucide-react"
import styles from "./styles.module.css"
import { useState } from "react"

export function Menu() {
  type AvailableThemes = "dark" | "light"
  const [theme, setTheme] = useState<AvailableThemes>("light")

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault()

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark"
      return nextTheme
    })
  }

  return (
    <div className={styles.div}>
      <h1>{theme}</h1>
      <a href="#" className={styles.icon} aria-label="Ir para a Home" title="Ir para a Home">
        <HouseIcon />
      </a>
      <a href="#" className={styles.icon} aria-label="Ver histórico" title="Ver histórico">
        <HistoryIcon />
      </a>
      <a href="#" className={styles.icon} aria-label="Configurações do Sistema" title="Configurações do Sistema">
        <SettingsIcon />
      </a>
      <a href="#" className={styles.icon} aria-label="Trocar cor do tema" title="Trocar cor do tema" onClick={handleThemeChange}>
        <SunIcon />
      </a>
    </div>
  )
}
