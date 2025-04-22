import { createContext } from "react";

const initialCart = []

const CartContext = createContext({
  cart: initialCart,
  dispatch : () => {}
})

const cartReducer = () => {
  
}

const CartProvider = ({children}) => {
  return (
    <CartContext.Provider>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;