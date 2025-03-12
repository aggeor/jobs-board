
import { Job } from "../api";

interface Props{
    data: Job
}

export default function JobCard({data}:Props){
    return (
        <div className="flex items-center m-2 bg-gray-600 rounded-2xl">
            <img className=" w-16 h-16 m-2 max-w-full rounded-2xl " src={data.companyLogo} alt="jobImg" />
            <a href={data.url} target="_blank" rel="noopener noreferrer">
                
                <div className="">
                    {data.jobTitle}
                </div>
                
                <div className="">
                    {data.companyName} 
                </div>
                
                <div className="">
                    ({data.jobGeo})
                </div>
            </a>
        </div>
    );
}