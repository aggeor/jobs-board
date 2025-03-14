import { useState } from "react";
import useFetch from "./useFetch";
import { getJobsByTagURL, getJobsURL } from "../api";

export default function useFetchJobs() {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const url = searchQuery ? getJobsByTagURL(searchQuery) : getJobsURL();
  const { data, loading, error } = useFetch(url);

  return { data, loading, error, setSearchQuery };
}
