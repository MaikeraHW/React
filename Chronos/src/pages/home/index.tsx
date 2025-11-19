import { ClockTimer } from "../../components/ClockTimer"
import { Container } from "../../components/Container"
import { MainForm } from "../../components/MainForm"
import type { TaskStateModel } from "../../models/TaskDateModel"
import { MainTemplate } from "../../templates/MainTemplate/Index"

export type HomeProps = {
  state: TaskStateModel
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

export function Home(props: HomeProps) {
  return (
    <MainTemplate>
      <Container>
        <ClockTimer {...props} />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  )
}
