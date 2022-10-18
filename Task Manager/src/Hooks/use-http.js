import { useCallback, useState } from "react";

const useHttp = (requestConfig, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const sendRequest = useCallback(async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      // making more generalize
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data); // function
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  });

  return {
    isLoading,
    sendRequest,
    error,
  };
};

export default useHttp;
