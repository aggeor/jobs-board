"use client";
import { useState } from "react";
import { Job, JobType } from "../api";
import { replaceAmp } from "../helper";
import Tag, { TagType } from "./Tag";
import { FaLocationDot } from "react-icons/fa6";
import JobDetails from "./JobDetails";


interface Props {
    data: Job;
    setDetailsOpened: (detailsOpened:boolean)=>void
    hasBlackBackground: boolean;
}


export default function JobCard({ data, setDetailsOpened, hasBlackBackground }: Props) {
    const date = data.pubDate.toLocaleString();
    const [showDetails, setShowDetails] = useState(false);
    const toggleDrawer = () =>
    {
        setShowDetails(!showDetails);
        setDetailsOpened(!showDetails);
    };
    return (
        <div className="flex items-center m-2 bg-linear-to-r from-gray-900 via-gray-800 to-gray-500 rounded-2xl p-4">
            <img className="w-16 h-16 max-w-full rounded-2xl" src={data.companyLogo} alt="jobImg" />
            
            <div className={`ml-3 flex flex-col w-full ${!showDetails && hasBlackBackground ? 'opacity-50':''}`}>
                <button onClick={toggleDrawer}>
                    
                    <div className="font-normal text-base flex items-center">
                        <div className="mr-2">{data.companyName}</div>
                        {data.jobIndustry.map((jobIndustry) => (
                            <Tag key={jobIndustry} type={TagType.jobIndustry} text={jobIndustry} />
                        ))}
                    </div>

                    <div className="font-bold text-lg flex items-center">
                        {replaceAmp(data.jobTitle)}
                    </div>

                    <div className="font-light text-xs flex items-center justify-between mt-1">
                        <div className="flex items-center">
                            <FaLocationDot className="mr-1" />
                            <div className="mr-2">{data.jobGeo}</div>
                            <div>{data.jobType.map((type) => (
                                <Tag key={type} type={TagType.jobType} text={type} />
                            ))}</div>
                        </div>
                        <div className="font-light text-xs whitespace-nowrap">
                            {date}
                        </div>
                    </div>
                </button>
            </div>
            {showDetails && 
                <div className="absolute top-0 left-0 w-full h-screen z-50 opacity-100">
                    <JobDetails 
                        jobDescription={data.jobDescription} 
                        jobTitle={data.jobTitle} 
                        companyName={data.companyName} 
                        url={data.url} 
                        companyLogo={data.companyLogo} 
                        toggleDrawer={ toggleDrawer} 
                    />
                </div>
            }
        </div>
    );
}
