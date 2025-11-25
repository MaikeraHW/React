import { useState } from "react"
import { Home } from "./pages/home"
import type { TaskStateModel } from "./models/TaskDateModel"
import { TaskContextProvider } from "./contexts/TaskContext"

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "23:99",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
}

export function App() {
  const [state, setState] = useState(initialState)

  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  )
}
