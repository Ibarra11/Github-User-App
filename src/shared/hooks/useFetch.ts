import { useEffect, useRef, useState } from 'react';
import { Cache, Status } from '../types';
const useFetch = <TResponse>(url: string, config: RequestInit = {}) => {
  const cache = useRef<Cache<TResponse>>({});
  const [data, setData] = useState<TResponse>();
  const [status, setStatus] = useState<Status>(Status.idle);
  const [error, setError] = useState<Error>();
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
          throw new Error(response.statusText);
        }
        const data = (await response.json()) as TResponse;
        setData(data);
        setStatus(Status.resolved);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setStatus(Status.rejected);
        }
      }
    }

    fetchData();
  }, [url]);

  return [status, data, error] as const;
};

export default useFetch;
