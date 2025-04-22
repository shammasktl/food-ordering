import { createContext, useReducer, useContext } from "react";

const initialCart = [];

const CartContext = createContext({
  cart: initialCart,
  dispatch: () => {},
});

const cartReducer = (state, action) => {
  const existingMeal = state.find((meal) => meal.id === action.payload.id);
  switch (action.type) {
    case "ADD_MEAL":
      if (existingMeal) {
        return state.map((meal) =>
          meal.id === action.payload.id
            ? { ...meal, quantity: meal.quantity + 1 }
            : meal
        );
      }

      return [...state, {...action.payload, quantity: 1}]
    case "REMOVE_MEAL":
      return state.filter(meal => meal.id !== action.payload.id)


    case "INCREASE_QUANTITY":
      return state.map(meal => meal.id === action.payload.id ? {...meal, quantity: meal.quantity + 1} : meal)

    case "DECREASE_QUANTITY":
      return state.map(meal => meal.id === action.payload.id ? {...meal, quantity: meal.quantity - 1} : meal).filter(meal => meal.quantity > 0)

    case "CLEAR_CART":
    // logic to clear cart

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const cartValue = {
    cart,
    dispatch
  }

  console.log(cart);
  return <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext)

export default CartProvider;
