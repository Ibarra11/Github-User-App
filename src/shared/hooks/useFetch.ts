import { useEffect, useState } from 'react';
import { Status } from '../types';
const useFetch = <TResponse>(url: string, config: RequestInit = {}) => {
  const [data, setData] = useState<TResponse>();
  const [status, setStatus] = useState<Status>(Status.idle);
  const [error, setError] = useState('');
  useEffect(() => {
    /* 
            When the consumer hooks into this hook, useEffect will run once by default. We don't want to 
            fetch any information on the intial render when the url is empty.
        */
    if (!url) return;
    setStatus(Status.pending);
    async function fetchData() {
      try {
        const response = await fetch(url, config);
        if (!response.ok) {
          throw new Error('No results');
        }
        const data = (await response.json()) as TResponse;
        console.log(data);
        setData(data);
        setStatus(Status.resolved);
        setStatus(Status.idle);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
          setStatus(Status.rejected);
          setStatus(Status.idle);
        }
      }
    }

    fetchData();
  }, [url, config]);

  return [status, data, error] as const;
};

export default useFetch;
