import { useContext, useId } from 'react'
import { CATEGORIES } from '../constants/categories'

import './Filters.css'
import { FiltersContext } from '../contexts/filters'

export function Filters () {
  const { setFilters } = useContext(FiltersContext)

  const categoryFilterId = useId()
  const stateFilterId = useId()

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    })
    )
  }

  const handleChangeState = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      state: event.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={categoryFilterId}>Category: </label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={stateFilterId}>State: </label>
        <select id={stateFilterId} onChange={handleChangeState}>
          <option value="all">All</option>
          <option value="true">Completed</option>
          <option value="false">Pending</option>
        </select>
      </div>
    </section>
  )
}
