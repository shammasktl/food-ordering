import React from 'react'
import Modal from './Modal'
import { useCart } from '../context/CartContext'

const Cart = () => {
    const { cart } = useCart()

  return (
    <Modal className="cart">
        <h2>Your Cart</h2>

        <ul>
            {cart.map(cartedMeal => (
                <li key={cartedMeal.id}>
                    {cartedMeal.name} - {cartedMeal.quantity}
                </li>
            ))}
        </ul>

        <p className='cart-total'></p>
    </Modal>
  )
}

export default Cart
