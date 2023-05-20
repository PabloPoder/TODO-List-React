import { createContext } from 'react'
import { useTasksReducer } from '../hooks/useTasksReducer'

export const TasksContext = createContext()

export const TasksProvider = ({ children }) => {
  const { state, addTask, removeTask, updateTask } = useTasksReducer()

  return (
    <TasksContext.Provider
      value={{
        tasks: state,
        addTask,
        removeTask,
        updateTask
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
