import PropTypes from 'prop-types'
import { Task } from './Task'

import './TaskList.css'

export function TaskList ({ tasks, onClickOpenModal }) {
  return (
    <>
      <main className="task-list">
        {tasks.length > 0
          ? (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <Task task={task} />
              </li>
            ))}
          </ul>
            )
          : null}
      </main>

      <button className="new-task-button" onClick={onClickOpenModal}>
        Add Task
      </button>
    </>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  onClickOpenModal: PropTypes.func
}
