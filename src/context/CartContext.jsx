import { createContext } from "react";

const initialCart = []

const CartContext = createContext({
  cart: initialCart,
  dispatch : () => {}
})