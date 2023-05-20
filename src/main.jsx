import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './contexts/filters.jsx'
import { TasksProvider } from './contexts/tasks.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <TasksProvider>
      <App />
    </TasksProvider>
  </FiltersProvider>
)
