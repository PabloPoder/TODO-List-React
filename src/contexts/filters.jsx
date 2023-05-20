import { createContext, useState } from 'react'

// El que consumimos
export const FiltersContext = createContext()

// El que nos provee del contexto
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    state: 'all'
  })

  return (
      <FiltersContext.Provider value={{
        filters,
        setFilters
      }}>
        { children }
        </FiltersContext.Provider>
  )
}
