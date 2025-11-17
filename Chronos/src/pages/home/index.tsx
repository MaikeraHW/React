import { ClockTimer } from "../../components/ClockTimer"
import { Container } from "../../components/Container"
import { MainForm } from "../../components/MainForm"
import { MainTemplate } from "../../templates/MainTemplate/Index"

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <ClockTimer />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  )
}
