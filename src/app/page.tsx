"use client"
import { useState, useEffect } from "react";

import { fetchJobs, JobData } from "./api";
import JobsList from "./components/JobsList";

export default function App() {

  const [data, setData] = useState<JobData | null>(null);

  useEffect(() => {
    fetchJobs()
      .then(json => setData(json))
  }, []);

  return (
    <div>
      <h1 className="flex items-center justify-center mt-6 align-middle text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Remote Jobs</h1>
      <h2 className="flex items-center justify-center m-6 font-light text-1xl md:text-2xl lg:text-3xl dark:text-white">Find remote job listings below and accelerate your career!</h2>

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
