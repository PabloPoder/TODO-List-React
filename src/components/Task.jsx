import PropTypes from 'prop-types'
import './Task.css'
import { useContext } from 'react'
import { TasksContext } from '../contexts/tasks'

export function Task ({ task }) {
  const { updateTask, removeTask } = useContext(TasksContext)

  return (
    <div className="task">
      <button onClick={() => updateTask(task)}>
        {task.completed ? '✔️' : '➖'}
      </button>
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none'
        }}
      >
        {task.description}
      </span>
      <button onClick={() => removeTask(task)}>❌</button>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}
