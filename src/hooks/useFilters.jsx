import { useContext } from 'react'
import { FiltersContext } from '../contexts/filters'

export const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterTask = (tasks) => {
    return tasks.filter((task) => {
      const category =
        filters.category === 'all' || task.category === filters.category

      const state =
        // cuidado con leer la propieda de un undefined. Usar operador de control '?'
        filters.state === 'all' || task.completed?.toString() === filters.state

      return category && state
    })
  }

  return { setFilters, filterTask }
}
