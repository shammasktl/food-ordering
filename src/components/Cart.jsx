import React from 'react'
import Modal from './Modal'
import { useCart } from '../context/CartContext'

const Cart = () => {
    const { cart } = useCart()

  return (
    <Modal className="cart">
        <h2>Your Cart</h2>

        <ul>
            
        </ul>
    </Modal>
  )
}

export default Cart
