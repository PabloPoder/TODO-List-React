import { TaskList } from './components/TaskList'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Modal } from './components/Modal'

import { useFilters } from './hooks/useFilters'
import { useModal } from './hooks/useModal'

import './App.css'
import { useContext } from 'react'
import { TasksContext } from './contexts/tasks'

function App () {
  const { filterTask } = useFilters()
  const { modal, changeModalVisibility } = useModal()

  const { tasks } = useContext(TasksContext)

  const filteredTasks = filterTask(tasks)
  const tasksQuantity = filteredTasks.length

  return (
    <>
      <Header tasksQty={tasksQuantity} />
      <TaskList
        tasks={filteredTasks}
        onClickOpenModal={changeModalVisibility}
      />
      <Modal isOpen={modal} onClose={changeModalVisibility} />
      <Footer />
    </>
  )
}

export default App
