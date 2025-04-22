import React from 'react'
import Modal from './Modal'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../util/currencyFormatter'

const Checkout = () => {
  const { cart } = useCart()

  const total = cart.reduce(
    (totalPrice, cartedMeal) =>
      totalPrice + cartedMeal.price * cartedMeal.quantity,
    0
  );

  return (
    <Modal>
      <form>
        <h2>Wrap up your order</h2>
        <p>Total Amount: {formatCurrency.format(total)}</p>
      </form>
    </Modal>
  )
}

export default Checkout
