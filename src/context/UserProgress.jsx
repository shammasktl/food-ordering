import { createContext,useReducer } from "react";

const initialProgress = ""


const UserProgressContext = createContext({
    progress: initialProgress,
    progressDispatch: () => {}
})

const progressReducer = () => {

}

const UserProgressProvider = ({children}) => {

    const [progress, progressDispatch] = useReducer(progressReducer, initialProgress)

    const progressContextValue = {
        progress,
        progressDispatch
    }
    return (
        <UserProgressContext.Provider>
            {children}
        </UserProgressContext.Provider>
    )
}

export default UserProgressProvider