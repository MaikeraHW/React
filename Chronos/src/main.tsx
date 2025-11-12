import { CirclePlayIcon } from "lucide-react"
import { CircleStopIcon } from "lucide-react"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Container } from "./components/Container"
import { Logo } from "./components/Logo"
import { Menu } from "./components/Menu"
import { ClockTimer } from "./components/ClockTimer"
import { Message } from "./components/Message"
import { Input } from "./components/Input"
import { Cicles } from "./components/Cicles"
import { Button } from "./components/Button"

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
      <form className="form">
        <Input type="text" id="task" labelText="Tarefa:" placeholder="Ex. Estudar para a prova" />
      </form>
    </Container>
    <Container>
      <Message />
    </Container>
    <Container>
      <Cicles />
    </Container>
    <Container>
      <Button icon={<CirclePlayIcon />} />
    </Container>
  </StrictMode>
)
