import { useEffect, useState } from "react"


export const useFetch = <T>(fetchFn: () => Promise<T>, autoFetch: boolean, key: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);


    const fetchData = async () => {
        setLoading(true);
        try {
            const result = await fetchFn();
            setData(result)
        } catch (error) {
            setError(error instanceof Error ? error : new Error(`Failed to fetch data for: ${key}`));
        }finally{
            setLoading(false);
        }
    };


    const reset = ()=>{
        setLoading(false);
        setError(null);
        setData(null);
    }


    useEffect(() => {
      if(autoFetch){
        fetchData();
      }
    }, [])
    
    return {data, loading, error, refetch: fetchData, reset}
}