import { useState } from 'react'

export const useModal = () => {
  const [modal, setModal] = useState(false)

  const changeModalVisibility = () => {
    setModal(!modal)
  }

  return { modal, changeModalVisibility }
}
