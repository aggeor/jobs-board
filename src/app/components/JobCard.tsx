
import { Job } from "../api";

interface Props{
    data: Job
}

export default function JobCard({data}:Props){
    return (
        <div className="flex items-center m-2 bg-linear-to-r from-gray-900 via-gray-800 to-gray-500 rounded-2xl">
            <img className=" w-16 h-16 m-2 max-w-full rounded-2xl " src={data.companyLogo} alt="jobImg" />
            <a href={data.url} target="_blank" rel="noopener noreferrer">
                
                <div className="font-normal text-base">
                    {data.companyName}
                </div>

                <div className="font-bold text-lg">
                    {data.jobTitle}
                </div>
                
                
                <div className="font-light text-xs">
                    {data.jobGeo} {data.jobType.map((type)=> type.toUpperCase())}
                </div>
            </a>
        </div>
    );
}