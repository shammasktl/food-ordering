import React from 'react'

const Input = ({id, label, type, required, ...props}) => {
  return (
    <p className='control'>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={id} id={id} {...props} required />
    </p>
  )
}

export default Input
