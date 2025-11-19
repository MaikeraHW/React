import { CirclePlayIcon } from "lucide-react"
import { Button } from "../Button"
import { Cicles } from "../Cicles"
import { Input } from "../Input"
import { Message } from "../Message"

export function MainForm() {
  return (
    <form className="form">
      <Input type="text" id="task" labelText="Tarefa:" placeholder="Ex. Estudar para a prova" />
      <p>Teste de objeto react: 000</p>
      <Message />
      <Cicles />
      <Button icon={<CirclePlayIcon />} />
    </form>
  )
}
