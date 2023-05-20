import { useContext } from 'react'
import { TasksContext } from '../contexts/tasks'

import './Footer.css'

export function Footer () {
  // const { tasks } = useContext(TasksContext)
  return (
    <footer className="footer">
      {/* { JSON.stringify(tasks) } */}
      <h4>React ⚛️－ <span>pablopoder</span></h4>
      <h5>TODO List with useContext & useReducer</h5>
    </footer>
  )
}
