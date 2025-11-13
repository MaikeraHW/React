import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon, MoonIcon } from "lucide-react"
import styles from "./styles.module.css"
import { useState, useEffect } from "react"

export function Menu() {
  type AvailableThemes = "dark" | "light"
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = (localStorage.getItem("theme") as AvailableThemes) || "dark"
    return storageTheme
  })

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault()

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark"
      return nextTheme
    })
  }
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const themeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  }

  return (
    <div className={styles.div}>
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
        {themeIcon[theme]}
      </a>
    </div>
  )
}
