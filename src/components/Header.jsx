import React from 'react'
import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import { useProgress } from '../context/UserProgressContext'
import { useCart } from '../context/CartContext'

const Header = () => {

  const { cart } = useCart()
  const { progressDispatch } = useProgress()

  const cartTotal = cart.length

  const handleShowCart = () => {
    progressDispatch({ type: "SHOW_CART"})
  }

  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logo} alt="The Ipsum Restaurant logo" />
        <h1>Ipsum</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>Cart {cartTotal !== 0 && `(${cartTotal})`}</Button>
      </nav>
    </header>
  )
}

export default Header
