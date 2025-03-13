import { JobData, JobType } from "../api";
import JobCard from "./JobCard";

interface Props {
  data: JobData;
  filters: string[];
  setDetailsOpened: (detailsOpened:boolean)=>void;
  hasBlackBackground:boolean;
}

export default function JobsList({ data, filters, setDetailsOpened, hasBlackBackground }: Props) {
  const filteredJobs = data.jobs.filter((job) => {
    if (filters.length === 0) return true;
    const matchesIndustry = filters.some((filter)=>{
      return job.jobIndustry.includes(filter)
    })
    const matchesLocation = filters.some((filter)=>{
      return job.jobGeo.toLowerCase().includes(filter.toLowerCase())
    })
    const isFulltime = filters.includes("full-time")
      ? job.jobType.includes(JobType.fullTime)
      : false;
    const isInternship = filters.includes("internship")
      ? job.jobType.includes(JobType.internship)
      : false;
    const isContract = filters.includes("contract")
      ? job.jobType.includes(JobType.contract)
      : false;
      const matchesJobType = (isFulltime || isInternship || isContract);
    return ( matchesLocation || matchesJobType || matchesIndustry );
  });

  return (
    <ul>
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <li key={job.id}>
            <JobCard data={job} setDetailsOpened={setDetailsOpened} hasBlackBackground={hasBlackBackground} />
          </li>
        ))
      ) : (
        <p>No jobs match your filters.</p>
      )}
    </ul>
  );
}
