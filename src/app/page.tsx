"use client";
import { useState, useEffect, ChangeEvent, FormEvent, useRef } from "react";

import { fetchJobs, fetchJobsByTag, JobData } from "./api";
import JobsList from "./components/JobsList";
import Searchbar from "./components/Searchbar";
import Filters from "./components/Filters";

export default function App() {
  const [data, setData] = useState<JobData | null>(null);
  const initialData = useRef<JobData | null>(null);
  const [input, setInput] = useState("");
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    fetchJobs().then((json) => {
      setData(json);
      initialData.current = json;
    });
  }, []);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setData(initialData.current);
    }
  };

  const handleSearchClear = () => {
    setInput("");
    setData(initialData.current);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input.trim()) {
      return;
    }
    fetchJobsByTag(input).then((json) => setData(json));
  };

  const handleFiltersChange = (updatedFilters: string[]) => {
    setFilters(updatedFilters); // Update the filters in the parent
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-md">
        <h1 className="text-center mt-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Remote Jobs
        </h1>
        <h2 className="text-center m-6 font-light text-xl md:text-2xl lg:text-3xl dark:text-white">
          Find remote job listings below and accelerate your career!
        </h2>

        <div className="flex justify-center p-4 bg-white dark:bg-gray-900 shadow-md">
          <Searchbar
            onSubmit={handleSearchSubmit}
            onChange={handleSearchChange}
            onClear={handleSearchClear}
            value={input}
            placeholder="Search for a job title or description"
          />
        </div>
      </div>

      <div className="flex flex-grow scrollbar-hidden">
        <div className="w-1/3 sticky top-0 bg-gray-100 dark:bg-gray-800 p-4">
          <Filters filters={filters} onFiltersChange={handleFiltersChange} />
        </div>

        <div className="w-2/3 overflow-auto max-h-screen p-4 scrollbar-hidden">
          {data ? <JobsList data={data} filters={filters} /> : <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
}
