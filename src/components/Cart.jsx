import React from 'react'
import Modal from './Modal'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../util/currencyFormatter'

const Cart = () => {
    const { cart } = useCart()

    const total = cart.reduce((totalPrice, cartedMeal) => (
        totalPrice + (cartedMeal.price * cartedMeal.quantity)
    ),0)
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

        <p className='cart-total'>{formatCurrency.format(total)}</p>
    </Modal>
  )
}

export default Cart
