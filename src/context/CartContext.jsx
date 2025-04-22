import { createContext, useReducer } from "react";

const initialCart = []

const CartContext = createContext({
  cart: initialCart,
  dispatch : () => {}
})

const cartReducer = (state, action) => {
  switch(action.type) {
    case "ADD_MEAL":
      // logic to add meal to cart

    case "REMOVE_MEAL":
      // logic to remove meal from cart

    case "INCREASE_QUANTITY":
      // logic to increase quantity of meal in cart

    case "DECREASE_QUANTITY":
      // logic to decrease quantity of meal in cart

    case "CLEAR_CART":
      // logic to clear cart

    default:
      return state
  }
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