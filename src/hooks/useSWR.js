/*

SWR is a popular library of data fetching.

Let's try to implement the basic usage by ourselves.

```
import React from 'react'

function App() {
  const { data, error } = useSWR('/api', fetcher)
  if (error) return <div>failed</div>
  if (!data) return <div>loading</div>

  return <div>succeeded</div>
}
```

1. This is not to replicate the true implementation of useSWR()
2. The first argument key is for deduplication, we can safely ignore it for now

*/

import { useEffect, useState } from "react";

export const useSWR = (fetcher) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const result = fetcher();
  const fetcherReturnedPromise = result instanceof Promise;

  const fetchData = async () => {
    try {
      const response = await fetcher();
      setData(response);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (fetcherReturnedPromise) {
      fetchData();
    }
  }, []);

  return { data: fetcherReturnedPromise ? data : result, error };
};
