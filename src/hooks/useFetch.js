import { useState } from "react";

export const sendHttpRequest = async (url, config) => {
    const response = await fetch(url, config)

    const resData = await response.json()

    if(!response.ok) {
        throw new Error(resData.message || "Oops, Failed to fetch data")
    }

    return resData;
}

const useFetch = () => {

    const [error, setError] = useState()

    const sendRequest = async () => {
        try {
            const resData = await sendHttpRequest()
            
        } catch (error) {
            setError(error.message || "Something went wrong!")
        }
    }
}

export default useFetch;