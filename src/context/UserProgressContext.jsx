import { createContext, useReducer, useContext } from "react";

const initialProgress = ""


const UserProgressContext = createContext({
    progress: initialProgress,
    progressDispatch: () => {}
})

const progressReducer = (state, action) => {
    switch(action.type) {
        case "SHOW_CART":
            return "cart"

        case "SHOW_CHECKOUT":
            return "checkout"

        case "HIDE":
            return initialProgress

        default:
            return state
    }
}

const UserProgressProvider = ({children}) => {

    const [progress, progressDispatch] = useReducer(progressReducer, initialProgress)

    const progressContextValue = {
        progress,
        progressDispatch
    }
    return (
        <UserProgressContext.Provider value={progressContextValue}>
            {children}
        </UserProgressContext.Provider>
    )
}

export const useProgress = () => useContext(UserProgressContext)

export default UserProgressProvider