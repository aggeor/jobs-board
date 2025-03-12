import { JobData } from "../api";
import JobCard from "./JobCard";

interface Props{
    data:JobData
}

export default function JobsList({data}:Props){
    return (
        <ul>
          {data.jobs.map((job) => (
            <li key={job.id}>
              <JobCard data={job} />
            </li>
          ))}
        </ul>
    );
}