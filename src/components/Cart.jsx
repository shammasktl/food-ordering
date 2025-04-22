import React from 'react'
import Modal from './Modal'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../util/currencyFormatter'
import Button from './UI/Button'
import { useProgress } from '../context/UserProgressContext'

const Cart = () => {
    const { cart } = useCart()
    const { progress, progressDispatch } = useProgress()

    const total = cart.reduce((totalPrice, cartedMeal) => (
        totalPrice + (cartedMeal.price * cartedMeal.quantity)
    ),0)

    const handleCloseCart = () => {
        progressDispatch({type: "HIDE"})
    }
  return (
    <Modal className="cart" open={progress === "cart"}>
        <h2>Your Cart</h2>

        <ul>
            {cart.map(cartedMeal => (
                <li key={cartedMeal.id}>
                    {cartedMeal.name} - {cartedMeal.quantity}
                </li>
            ))}
        </ul>

        <p className='cart-total'>{formatCurrency.format(total)}</p>
        <p className='modal-actions'>
            <Button textOnly onClick={handleCloseCart}>Close</Button>
            <Button onClick={handleCloseCart}>Wrap up your order</Button>
        </p>
    </Modal>
  )
}

export default Cart
