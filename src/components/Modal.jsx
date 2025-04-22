import React, { useRef } from 'react'
import { createPortal } from "react-dom"

const Modal = ({children, open}) => {
    const dialog = useRef()

  return createPortal(
    <dialog>
      {children}
    </dialog>,
    document.getElementById("modal")
  )
}

export default Modal
