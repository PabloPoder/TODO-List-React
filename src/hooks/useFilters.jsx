import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter((product) => {
      const category =
        filters.category === 'all' || product.category === filters.category
      const price = product.price >= filters.minPrice

      return category && price
    })
  }

  return { filterProducts, filters, setFilters }
}
