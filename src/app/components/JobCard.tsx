"use client";
import { Job, JobType } from "../api";
import Tag, { TagType } from "./Tag";
import { FaLocationDot } from "react-icons/fa6";

interface Props{
    data: Job
}

export default function JobCard({data}:Props){
    return (
        <div className="flex items-center m-2 bg-linear-to-r from-gray-900 via-gray-800 to-gray-500 rounded-2xl">
            <img className=" w-16 h-16 m-2 max-w-full rounded-2xl " src={data.companyLogo} alt="jobImg" />
            <a href={data.url} target="_blank" rel="noopener noreferrer">
                
                <div className="font-normal text-base mt-3">
                    {data.companyName} {data.jobIndustry.map((jobIndustry)=> <Tag key={data.id} type = { TagType.jobIndustry } text = { jobIndustry } />)}
                </div>

                <div className="font-bold text-lg">
                    {data.jobTitle}
                </div>
                
                <div className="font-light text-xs flex items-start mb-3 mt-1">
                    <FaLocationDot className="mr-1" /> 
                    <div className="mr-1">{data.jobGeo}</div>
                    <div>{data.jobType.map((type)=> <Tag key={data.id} type = { TagType.jobType } text = { type } />)}</div>
                </div>
            </a>
        </div>
    );
}