import { ClockTimer } from "../../components/ClockTimer"
import { Container } from "../../components/Container"
import { MainForm } from "../../components/MainForm"
import type { TaskStateModel } from "../../models/TaskDateModel"
import { MainTemplate } from "../../templates/MainTemplate/Index"

type HomeProps = {
  state: TaskStateModel
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

export function Home(props: HomeProps) {
  console.log(props)
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
