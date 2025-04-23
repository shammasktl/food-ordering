import { useEffect, useState, useCallback } from "react";

export const sendHttpRequest = async (url, config) => {
  let response, resData;
  try {
    response = await fetch(url, config);
    resData = await response.json();

    if (!response.ok) {
      throw new Error(resData?.message || "Oops, Failed to fetch data");
    }

    return resData;
  } catch (error) {
    throw new Error(error.message || "Something went wrong while fetching");
  }
};

const useFetch = (url, config, initialData) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(initialData);
  const [error, setError] = useState();

  const sendRequest = useCallback(async () => {
    setLoading(true);
    try {
      const resData = await sendHttpRequest(url, config);
      setData(resData);
      setError(null);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  }, [url, config]);

  useEffect(() => {
    if (!config?.method || config.method === "GET") {
      sendRequest();
    }
  }, [sendRequest]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
  };
};

export default useFetch;
