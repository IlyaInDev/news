import { useEffect, useState } from "react"

export const useFetch = (fetchFunction, params) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const stringParams = params ? new URLSearchParams(params).toString() : '';

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const result = await fetchFunction(params);
          setData(result);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [fetchFunction, stringParams]);
  
    return { data, error, loading };
  };