import { Form } from './Form'

import './Modal.css'

export function Modal ({ isOpen, onClose }) {
  if (!isOpen) return null

  // estamos verificando si el elemento en el que se hizo clic (event.target)
  // es el mismo elemento en el que se definió el manejador
  // de eventos(event.currentTarget).
  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <div className="modal-content">
          <Form onSubmitClose={onClose} />
        </div>
      </div>
    </div>
  )
}
