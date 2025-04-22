import React from 'react'
import { formatCurrency } from '../util/currencyFormatter'
import { Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { X } from 'lucide-react'

const CartItem = ({id, name, qty, price, onIncrement, onDecrement, onRemove}) => {

  return (
    <li className='cart-item'>
      <p>
        {name} - {qty} <X size={16} /> {formatCurrency.format(price)}
      </p>

      <p className='cart-item-actions'>
        <button onClick={onDecrement}>-</button>
        <span>{qty}</span>
        <button onClick={onIncrement}>+</button>
        <button onClick={onRemove}><Trash2 /></button>
      </p>
    </li>
  )
}

export default CartItem
