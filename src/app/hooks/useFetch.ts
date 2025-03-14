import { useEffect, useState } from "react";
import { JobData } from "../api";

export default function useFetch(url: string | null) {
  const [data, setData] = useState<JobData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        return response.json();
      })
      .then(setData)
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}