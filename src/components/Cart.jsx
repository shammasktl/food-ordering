import React from 'react'
import Modal from './Modal'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../util/currencyFormatter'
import Button from './UI/Button'
import { useProgress } from '../context/UserProgressContext'
import CartItem from './CartItem'

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
                <CartItem key={cartedMeal.id} id={cartedMeal.id} name={cartedMeal.name} price={cartedMeal} qty={cartedMeal.quantity}/>
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
