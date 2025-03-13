import { JobData, JobType } from "../api";
import JobCard from "./JobCard";

interface Props {
  data: JobData;
  filters: string[];
}

export default function JobsList({ data, filters }: Props) {
  const filteredJobs = data.jobs.filter((job) => {
    // If no filters are selected, show all jobs
    if (filters.length === 0) return true;

    // Check if the job matches any of the selected filters
    const isFulltime = filters.includes("full-time")
      ? job.jobType.includes(JobType.fullTime)
      : false;
    const isInternship = filters.includes("internship")
      ? job.jobType.includes(JobType.internship)
      : false;
    const isContract = filters.includes("contract")
      ? job.jobType.includes(JobType.contract)
      : false;

    // Use the OR (||) operator to show jobs that match any filter
    return isFulltime || isInternship || isContract;
  });

  return (
    <ul>
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <li key={job.id}>
            <JobCard data={job} />
          </li>
        ))
      ) : (
        <p>No jobs match your filters.</p>
      )}
    </ul>
  );
}
