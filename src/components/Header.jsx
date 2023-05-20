import PropTypes from 'prop-types'
import { Filters } from './Filters'

export function Header ({ tasksQty }) {
  return (
    <header>
      <h1>TODO List 📝</h1>
      <Filters />
      {tasksQty > 0
        ? (
        <h3>You have {tasksQty} task/s.</h3>
          )
        : (
        <h3>{'You don\'t have any task.'}</h3>
          )}
    </header>
  )
}

Header.propTypes = {
  tasksQty: PropTypes.number
}
