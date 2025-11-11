import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Container } from "./components/Container"
import { Logo } from "./components/Logo"
import { Menu } from "./components/Menu"
import { ClockTimer } from "./components/ClockTimer"
import { Forms } from "./components/Forms"

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
    <Container>
      <ClockTimer />
    </Container>
    <Container>
      <Forms />
    </Container>
  </StrictMode>
)
