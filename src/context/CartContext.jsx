import { createContext, useReducer } from "react";

const initialCart = []

const CartContext = createContext({
  cart: initialCart,
  dispatch : () => {}
})

const cartReducer = () => {

}

const CartProvider = ({children}) => {
  const [ cart, dispatch] = useReducer(cartReducer, initialCart)

  return (
    <CartContext.Provider>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;