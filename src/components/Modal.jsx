import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, className }) => {
  const dialog = useRef();

  useEffect(() => {
    if(open) {
      if(!dialog.current.open) {
        dialog.current.showModal();
      }
    } else {
      if(dialog.current.open) {
        dialog.current.close();
      }
    }
  }, [open]);
  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>{children}</dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
