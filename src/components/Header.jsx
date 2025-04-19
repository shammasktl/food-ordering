import React from 'react'
import logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logo} alt="The Ipsum Restaurant logo" />
        <h1>Ipsum</h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  )
}

export default Header
