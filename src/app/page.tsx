"use client"
import { useState, useEffect, ChangeEvent, FormEvent, useRef } from "react";

import { fetchJobs, fetchJobsByTag, JobData } from "./api";
import JobsList from "./components/JobsList";
import Searchbar from "./components/Searchbar";

export default function App() {

  const [data, setData] = useState<JobData | null>(null);
  const initialData = useRef<JobData | null>(null)
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchJobs()
      .then(json => { 
        setData(json);
        initialData.current = json;
      })
  }, []);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
    if (input === ""){
      setData(initialData.current);
    }
  }

  const handleSearchClear = () => {
    setInput("");
    setData(() => initialData.current);
  }

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!input.trim()) {
      return;
    }
    fetchJobsByTag(input)
      .then(json => setData(json))
  }

  return (
    <div>
      <h1 className="flex items-center justify-center mt-6 align-middle text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Remote Jobs</h1>
      <h2 className="flex items-center justify-center m-6 font-light text-1xl md:text-2xl lg:text-3xl dark:text-white">Find remote job listings below and accelerate your career!</h2>

      <div className="flex justify-start">
        <Searchbar onSubmit={handleSearchSubmit} onChange={handleSearchChange} onClear={handleSearchClear} value={input} placeholder="Search for a job title or description" />
      </div>
      <div className="flex justify-end">

        {data ? (
          <JobsList data={data} />
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
}
