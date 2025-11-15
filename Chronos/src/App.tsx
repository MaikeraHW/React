import { CirclePlayIcon } from "lucide-react"
import { CircleStopIcon } from "lucide-react"

import { StrictMode } from "react"
import { Container } from "./components/Container"
import { Logo } from "./components/Logo"
import { Menu } from "./components/Menu"
import { ClockTimer } from "./components/ClockTimer"
import { Footer } from "./components/Footer"
import { MainForm } from "./components/MainForm"

import "./theme.css"
import "./global.css"

export function App() {
  return (
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
        <MainForm />
      </Container>
      <Container>
        <Footer />
      </Container>
    </StrictMode>
  )
}
