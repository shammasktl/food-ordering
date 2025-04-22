import { createContext } from "react";

const UserProgressContext = createContext({
    progress: "",
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
})

const UserProgressProvider = ({children}) => {
    return (
        <UserProgressContext.Provider>
            {children}
        </UserProgressContext.Provider>
    )
}

export default UserProgressProvider