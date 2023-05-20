export const tasksInitialState =
  JSON.parse(localStorage.getItem('tasks-initial-state')) || []

const TASKS_ACTION_TYPES = {
  ADD_TASK: 'ADD_TASK',
  REMOVE_TASK: 'REMOVE_TASK',
  UPDATE_TASK: 'UPDATE_TASK'
}

const updateLocalStorage = state => {
  window.localStorage.setItem('tasks-initial-state', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [TASKS_ACTION_TYPES.ADD_TASK]: (state, action) => {
    const { payload } = action
    const { description, category } = payload
    const newTask = {
      id: Math.random().toString(),
      description,
      category,
      completed: false
    }

    const newState = [...state, newTask]
    updateLocalStorage(newState)
    return newState
  },

  [TASKS_ACTION_TYPES.REMOVE_TASK]: (state, action) => {
    // payload es una task -> lo desestructuro en partes, solo me interesa el id
    const { id } = action.payload
    const newState = state.filter((item) => item.id !== id)
    updateLocalStorage(newState)
    return newState
  },

  [TASKS_ACTION_TYPES.UPDATE_TASK]: (state, action) => {
    // payload es una task -> lo desestructuro en partes, solo me interesa el id
    const { id } = action.payload
    const newState = state.map((prevTask) => {
      if (prevTask.id === id) {
        return { ...prevTask, completed: !prevTask.completed }
      }
      return prevTask
    })

    updateLocalStorage(newState)
    return newState
  }
}

export const tasksReducer = (state, action) => {
  const { type } = action

  // Guardo en 'updateState' la funcion que sea de ese 'type'
  const updateState = UPDATE_STATE_BY_ACTION[type]
  // Si existe esa funcion, la ejecuto pasandole el state y el action,
  // sino retorno el state anterior
  return updateState ? updateState(state, action) : state
}
