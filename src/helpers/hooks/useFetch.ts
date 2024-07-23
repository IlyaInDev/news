import { useEffect, useState } from "react"

interface FetchFunction<P, T> {
    (params?: P): Promise<T>;
}

interface UseFetchResult<T> {
    data: T | null | undefined;
    isLoading: boolean;
    error: Error | null;
}

export const useFetch = <T, P>(
        fetchFunction: FetchFunction<P, T>, 
        params?: P
    ): UseFetchResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const stringParams = params ? new URLSearchParams(params).toString() : '';

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const result = await fetchFunction(params);
          setData(result);
        } catch (error) {
          setError(error as Error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [fetchFunction, stringParams]);
  
    return { data, error, isLoading };
  };