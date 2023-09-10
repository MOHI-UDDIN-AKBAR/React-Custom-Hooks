import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState<any>();
  const [data, setData] = useState<any>({});

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (response.ok) {
        const value = await response.json();
        setData(value);
        setIsLoading(false);
      }
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, isError, isLoading };
};

export default useFetch;
