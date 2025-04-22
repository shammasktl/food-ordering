import React from 'react'
import Modal from './Modal'
import { useCart } from '../context/CartContext'

const Checkout = () => {
  const { cart } = useCart()
  return (
    <Modal>
      <form>
        <h2>Wrap up your order</h2>
        <p>Total Amount: </p>
      </form>
    </Modal>
  )
}

export default Checkout
