import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./theme.css"
import "./global.css"
import { Container } from "./components/Container"
// import { Heading } from "./components/Heading"
// import { TimerIcon } from "lucide-react"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Container>Teste 01</Container>
    <Container>Teste 02</Container>
    <Container>Teste 03</Container>
  </StrictMode>
)
