import { useState, useEffect, useRef, useMemo} from "react"

export default function App(){
  

  const inputRef = useRef<HTMLInputElement>(null)
  const firstRender = useRef(true)

  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState<string[]>([])

  useEffect(() => {
    const listaDeTarefas = localStorage.getItem("tarefinhas")
  
    if(listaDeTarefas){
      setTasks(JSON.parse(listaDeTarefas));
    }
  
  }, [])


  useEffect(() => {
    if(firstRender.current){
      firstRender.current = false;
    return;
  }
    localStorage.setItem("tarefinhas", JSON.stringify(tasks))
  }, [tasks])


  const [editSwitch, setEditSwitch] = useState ({
    enabled: false,
    task: ''

  })


  function saveEdited(){
    const findIndexTask = tasks.findIndex(task => task === editSwitch.task)
    const allTasks = [...tasks]

    allTasks[findIndexTask] = newTask
    setTasks(allTasks)
    setEditSwitch({
      enabled: false,
      task: ''
    })
    setNewTask('')
  }

  function deleteTask (item: string){
      const removeTask = tasks.filter(task => task !== item)
      setTasks(removeTask)

    }

  function editTask (item: string){

    inputRef.current?.focus()

    setNewTask(item)
    setEditSwitch({
      enabled: true,
      task: (item)
    })

  }

  const totalTarefas = useMemo(() => {
    return tasks.length
  }, [tasks])

  
  function insert () {
    if(!newTask){
      alert("Digite uma nova tarefa para prosseguir")
      return
    }

    if(editSwitch.enabled){
      saveEdited()
      return
    }

      
      setTasks(tarefas => [...tarefas, newTask])
      setNewTask("")
  }
  




  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input type="text" name="" id="newTask" placeholder="Digite uma nova tarefa" value={newTask} onChange={ (e) => setNewTask(e.target.value)} ref={inputRef}/>
      <button type="button" onClick={insert}>Adicionar</button>
      <br /><br />

      <strong>Você tem {totalTarefas} tarefas na sua lista de tarefas</strong>

       <br /><br />

      {tasks.map((item, index) => (
        <section key={item}>
          <span>{item}</span>
          <button onClick={() => deleteTask(item)}> Excluir </button>
          <button onClick={() => editTask(item)}> Editar </button>
          <hr />
        </section>
      ))}
    </div>
  )

}