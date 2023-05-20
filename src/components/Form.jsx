
import { useState, useRef, useContext } from 'react'
import './Form.css'
import { CATEGORIES } from '../constants/categories'
import { TasksContext } from '../contexts/tasks'

export function Form ({ onSubmitClose }) {
  const { addTask } = useContext(TasksContext)

  const [taskInput, setTaskInput] = useState('')
  const categoryRef = useRef()

  const handleInputChange = (event) => {
    if (event.target.value === ' ') return

    const inputText = event.target.value
    const capitalizedText =
          inputText.charAt(0).toUpperCase() + inputText.slice(1)

    if (capitalizedText.length > 30) return
    setTaskInput(capitalizedText)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (taskInput === '') return

    const category = categoryRef.current.value
    // agrego la nueva tarea
    addTask({ description: taskInput, category })
    // llamo al close del modal
    onSubmitClose()
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buy milk"
        value={taskInput}
        onChange={handleInputChange}
      />
      <select ref={categoryRef} name="category" id="category">
        {CATEGORIES.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Add</button>
    </form>
  )
}
