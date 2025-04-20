import React from 'react'

const Button = ({children, textOnly, className}) => {
    let cssClasses = textOnly ? "text-button" : "button"
  return (
    <button>
      {children}
    </button>
  )
}

export default Button
