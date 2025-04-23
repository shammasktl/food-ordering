import { useEffect, useState, useCallback } from "react";

export const sendHttpRequest = async (url, config) => {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || "Oops, Failed to fetch data");
  }

  return resData;
};

const useFetch = (url, config) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  const sendRequest = useCallback( async () => {
    setLoading(true);
    try {
      const resData = await sendHttpRequest(url, config);
      setData(resData);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
    setLoading(false);
  }, [url, config])

  useEffect(() => {
    if(config && config.method === "GET") {
        sendr
    }

    sendRequest();
  }, [sendRequest])

  return {
    data,
    isLoading,
    error,
    sendRequest,
  }
};

export default useFetch;
