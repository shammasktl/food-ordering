import React from 'react'
import Modal from './Modal'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../util/currencyFormatter'
import Input from './UI/Input'

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

        <Input id="full-name" label="Full Name" type="text" />
        <Input id="email" label="E-mail Address" type="email" />
        <Input id="street" label="Street" type="text" />
        <div className="control-row">
          <Input id="postal-code" label="Postal Code" type="text"  />
          <Input id="city" label="City" type="text"  />
        </div>
      </form>
    </Modal>
  )
}

export default Checkout
