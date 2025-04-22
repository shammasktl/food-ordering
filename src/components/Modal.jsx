import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open }) => {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }
  }, [open]);
  return createPortal(
    <dialog ref={dialog}>{children}</dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
