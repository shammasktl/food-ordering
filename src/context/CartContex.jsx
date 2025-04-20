import { createContext } from "react";

const CartContext = createContext({
    items : [],
    addItem : (item) => {},
    removeItem : (id) => {},
});

const CartContextProvider = ({children}) => {
    return (
        <CartContext.Provider>{children}</CartContext.Provider>
    )
};

export default CartContextProvider;