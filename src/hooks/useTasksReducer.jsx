import { useReducer } from 'react'
import { tasksReducer, tasksInitialState } from '../reducers/tasks'

export const useTasksReducer = () => {
  const [state, dispatch] = useReducer(tasksReducer, tasksInitialState)

  const addTask = ({ description, category }) =>
    dispatch({
      type: 'ADD_TASK',
      payload: { description, category }
    })

  const removeTask = (task) =>
    dispatch({
      type: 'REMOVE_TASK',
      payload: task
    })

  const updateTask = (task) => {
    dispatch({
      type: 'UPDATE_TASK',
      payload: task
    })
  }

  return { state, addTask, removeTask, updateTask }
}
