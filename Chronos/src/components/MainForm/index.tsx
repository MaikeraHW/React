import { CirclePlayIcon } from "lucide-react"
import { Button } from "../Button"
import { Cicles } from "../Cicles"
import { Input } from "../Input"
import { Message } from "../Message"
import type { HomeProps } from "../../pages/home"

export function MainForm({ state }: HomeProps) {
  return (
    <form className="form">
      <Input type="text" id="task" labelText="Tarefa:" placeholder="Ex. Estudar para a prova" />
      <p>Teste de objeto react: {state.config.workTime}</p>
      <Message />
      <Cicles />
      <Button icon={<CirclePlayIcon />} />
    </form>
  )
}
