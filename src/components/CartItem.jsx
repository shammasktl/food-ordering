import React from 'react'
import { formatCurrency } from '../util/currencyFormatter'
import { Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'

const CartItem = ({id, name, qty, price}) => {

    const { dispatch } = useCart();

    const handleIncrement = () => {
        dispatch({ type: "INCREASE_QUANTITY", payload: {id} })
    }

    const handleDecrement = () => {
        dispatch({ type: "DECREASE_QUANTITY", payload: {id} })
    }

    const handleRemove = () => {
        dispatch({ type: "REMOVE_MEAL", payload: {id} })
    }
    
  return (
    <li className='cart-item'>
      <p>
        {name} - {qty} x {formatCurrency.format(price)}
      </p>

      <p className='cart-item-actions'>
        <button onClick={handleDecrement}>-</button>
        <span>{qty}</span>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleRemove}><Trash2 /></button>
      </p>
    </li>
  )
}

export default CartItem
