import { useState } from "react"

export default function App(){
  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState([
    'Estudar react com typescript',
    'Comprar um joystick de PS5',
    'Estudar inglês a noite'
  ])

  function insert () {
    if(!newTask){
      alert("Digite uma nova tarefa para prosseguir")
      return
    } else {
      setTasks(tarefas => [...tarefas, newTask])
      setNewTask("")
    }
  }

  function deleteTask (item: string){
      const removeTask = tasks.filter(task => task !== item)
      setTasks(removeTask)

    }

  function editTask (item: string){
    const editTask = item
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input type="text" name="" id="newTask" placeholder="Digite uma nova tarefa" value={newTask} onChange={ (e) => setNewTask(e.target.value)}/>
      <button type="button" onClick={insert}>Adicionar</button>
      <br /><br />



      {tasks.map((item, index) => (
        <section key={item}>
          <span>{item}</span>
          <button onClick={() => deleteTask(item)}> Excluir </button>
          <button onClick={() => editTask(item)}> Excluir </button>
          <hr />
        </section>
      ))}
    </div>
  )

}