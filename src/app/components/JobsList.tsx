import { JobData, JobType } from "../api";
import JobCard from "./JobCard";

interface Props{
    data:JobData
    filters:string[]
}

export default function JobsList({data,filters}:Props){
  const filteredJobs = data.jobs.filter((job) => {
    const isFulltime = filters.includes("full-time") ? job.jobType.includes(JobType.fullTime) : true;
    const isInternship = filters.includes("internship") ? job.jobType.includes(JobType.internship) : true;
    const isContract = filters.includes("contract") ? job.jobType.includes(JobType.contract) : true;
    return isFulltime && isInternship && isContract;
  });
    return (
        <ul>
          {filteredJobs.map((job) => (
            <li key={job.id}>
              <JobCard data={job} />
            </li>
          ))}
        </ul>
    );
}