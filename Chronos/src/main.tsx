import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Container } from "./components/Container"
import { Logo } from "./components/Logo"
import { Menu } from "./components/Menu"

import "./theme.css"
import "./global.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Container>
      <Logo />
    </Container>
    <Container>
      <Menu />
    </Container>
    <Container>Teste 03</Container>
  </StrictMode>
)
