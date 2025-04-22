import React from 'react'

const Modal = ({children, open}) => {
  return (
    <dialog open={open}>
      {children}
    </dialog>
  )
}

export default Modal
